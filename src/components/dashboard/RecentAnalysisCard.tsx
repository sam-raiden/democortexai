import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HistoryItem } from '../../types/company';

export interface RecentAnalysisCardProps {
  item: HistoryItem;
  index: number;
  onClick: () => void;
}

export function RecentAnalysisCard({ item, index, onClick }: RecentAnalysisCardProps) {
  return (
    <motion.button
      className={`history-card card-${index}`}
      onClick={onClick}
      style={{
        background: item.bgGradient || item.color,
        borderColor: item.borderColor || 'rgba(255, 255, 255, 0.2)',
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <span className="card-ambient-light" />
      <span className="card-concentric-rings" />
      
      <div className="card-top">
        <span
          className="company-avatar"
          style={{
            backgroundColor: item.avatarBg || 'rgba(255, 255, 255, 0.22)',
            color: '#ffffff',
            borderColor: item.borderColor || 'rgba(255, 255, 255, 0.2)',
          }}
        >
          {item.monogram}
        </span>
        <span className="card-open">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="card-chat-label">
        <span className="chat-signal" /> 7thSense brief <span className="card-time">{item.time}</span>
      </div>

      <div className="card-body">
        <p className="card-industry">{item.industry}</p>
        <h3>{item.name}</h3>
        <div className="chat-snippet">
          <span className="chat-mark">
            <Sparkles size={12} />
          </span>
          <p>{item.preview}</p>
        </div>
      </div>

      <div className="card-bottom">
        <span className="card-question">View intelligence</span>
        <span className="card-status">
          Ready <span className="status-light" />
        </span>
      </div>
    </motion.button>
  );
}
