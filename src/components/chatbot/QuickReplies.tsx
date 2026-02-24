import { motion } from "framer-motion";
import type { ChatQA } from "../../constants/chatbotData";

interface QuickRepliesProps {
  questions: ChatQA[];
  onSelect: (qa: ChatQA) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const QuickReplies = ({ questions, onSelect }: QuickRepliesProps) => {
  if (questions.length === 0) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-1.5 mt-2"
    >
      {questions.map((qa) => (
        <motion.button
          key={qa.id}
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(qa)}
          className="rounded-full px-3 py-1.5 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 hover:border-purple-300 transition-colors cursor-pointer"
        >
          {qa.question}
        </motion.button>
      ))}
    </motion.div>
  );
};
