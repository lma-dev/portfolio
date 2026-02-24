import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { ChatMessage } from "./ChatMessage";
import { QuickReplies } from "./QuickReplies";
import type { ChatQA } from "../../constants/chatbotData";

export interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  availableQuestions: ChatQA[];
  onSelectQuestion: (qa: ChatQA) => void;
  onClose: () => void;
}

export const ChatWindow = ({
  messages,
  isTyping,
  availableQuestions,
  onSelectQuestion,
  onClose,
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isTyping]);

  const lastMessageIsBot =
    messages.length > 0 && messages[messages.length - 1].sender === "bot";

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white px-4 py-3 flex items-center justify-between rounded-t-2xl shrink-0">
        <h3 className="font-semibold text-sm">Chat with me</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close chat"
        >
          <FiX size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "none" }}>
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-1 px-2 py-2">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
              className="w-2 h-2 rounded-full bg-gray-400"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
              className="w-2 h-2 rounded-full bg-gray-400"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
              className="w-2 h-2 rounded-full bg-gray-400"
            />
          </div>
        )}

        {/* Quick replies */}
        {!isTyping && lastMessageIsBot && (
          <QuickReplies
            questions={availableQuestions}
            onSelect={onSelectQuestion}
          />
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};
