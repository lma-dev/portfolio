import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDotsFill } from "react-icons/bs";
import { ChatWindow } from "./ChatWindow";
import { BOT_GREETING, CHAT_QA } from "../../constants/chatbotData";
import type { ChatQA } from "../../constants/chatbotData";
import type { Message } from "./ChatWindow";

const fabVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20, delay: 1.5 },
  },
};

const windowVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    transition: { duration: 0.15 },
  },
};

const initialMessages: Message[] = [
  { id: "greeting", text: BOT_GREETING, sender: "bot" },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [askedIds, setAskedIds] = useState<Set<string>>(new Set());
  const [isTyping, setIsTyping] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    window.addEventListener("open-chatbot", handleOpen);
    return () => window.removeEventListener("open-chatbot", handleOpen);
  }, [handleOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setMessages(initialMessages);
    setAskedIds(new Set());
    setIsTyping(false);
  };

  const handleSelectQuestion = useCallback((qa: ChatQA) => {
    setMessages((prev) => [
      ...prev,
      { id: `user-${qa.id}`, text: qa.question, sender: "user" },
    ]);
    setAskedIds((prev) => new Set(prev).add(qa.id));
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `bot-${qa.id}`, text: qa.answer, sender: "bot" },
      ]);
    }, 400);
  }, []);

  const availableQuestions = CHAT_QA.filter((qa) => !askedIds.has(qa.id));

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[28rem] sm:h-[32rem] rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden"
            style={{ transformOrigin: "bottom right" }}
          >
            <ChatWindow
              messages={messages}
              isTyping={isTyping}
              availableQuestions={availableQuestions}
              onSelectQuestion={handleSelectQuestion}
              onClose={handleClose}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        variants={fabVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={isOpen ? handleClose : handleOpen}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <BsChatDotsFill size={24} />
      </motion.button>
    </>
  );
};

export default ChatBot;
