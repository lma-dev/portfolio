import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ChatMessageProps {
  text: string;
  sender: "bot" | "user";
}

const messageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const ChatMessage = ({ text, sender }: ChatMessageProps) => {
  const isBot = sender === "bot";

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      className={cn("flex", isBot ? "justify-start" : "justify-end")}
    >
      <div
        className={cn(
          "max-w-[85%] px-4 py-2.5 text-sm whitespace-pre-line",
          isBot
            ? "bg-gray-100 text-gray-700 rounded-2xl rounded-tl-sm"
            : "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl rounded-tr-sm"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
};
