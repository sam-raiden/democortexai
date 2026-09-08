import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { Company } from '../../types/company';
import { ChatMessage as ChatMessageType } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { SuggestedPrompts } from './SuggestedPrompts';

export interface ChatWindowProps {
  company: Company;
  messages: ChatMessageType[];
  input: string;
  setInput: (value: string) => void;
  onAsk: (overridePrompt?: string) => void;
}

export function ChatWindow({
  company,
  messages,
  input,
  setInput,
  onAsk,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <section className="chat-conversation-section">
      <div className="chat-section-header">
        <div className="reference-kicker">
          <Sparkles size={13} /> 10 / Interactive Intelligence
        </div>
        <h2>Ask 7thSense about {company}</h2>
        <p className="chat-section-subtitle">
          Query primary sources, business signals, and competitive insights in real-time.
        </p>
      </div>

      <div className="chat-box-card">
        <div className="chat-messages-container" tabIndex={0} aria-label="Conversation thread">
          {messages.length === 0 ? (
            <div className="chat-empty-thread">
              <div className="chat-empty-icon">
                <Sparkles size={18} />
              </div>
              <p className="chat-empty-title">Continuous Intelligence Thread</p>
              <p className="chat-empty-desc">
                Ask specific questions about {company}’s strategy, competitors, transformation signals, or business vulnerabilities.
              </p>
            </div>
          ) : (
            <div className="chat-messages-list">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="chat-bottom-bar">
          <ChatInput
            company={company}
            input={input}
            setInput={setInput}
            onSubmit={() => onAsk()}
          />
          <SuggestedPrompts onSelect={(q) => onAsk(q)} />
        </div>
      </div>
    </section>
  );
}

export const ChatSection = ChatWindow;
export type ChatSectionProps = ChatWindowProps;
