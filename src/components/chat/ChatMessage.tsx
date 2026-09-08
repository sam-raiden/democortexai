import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../../types/chat';

export interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <motion.div
      className={`chat-message-row ${isAssistant ? 'assistant-message' : 'user-message'}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isAssistant ? (
        <div className="chat-avatar">
          <Sparkles size={14} />
        </div>
      ) : (
        <div className="chat-user-avatar">
          <span>You</span>
        </div>
      )}
      <div className="chat-message-bubble">
        <div className="chat-message-meta">
          <span className="chat-author">{isAssistant ? '7thSense' : 'You'}</span>
          {message.timestamp && <span className="chat-timestamp">{message.timestamp}</span>}
        </div>
        <p className={isAssistant ? 'chat-answer' : 'chat-question-text'}>
          {message.content}
        </p>
      </div>
    </motion.div>
  );
}
