import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CompanyOverviewInfo } from '../../types/company';

export interface CompanyCardProps {
  info: CompanyOverviewInfo;
  onClick?: () => void;
}

export function CompanyCard({ info, onClick }: CompanyCardProps) {
  return (
    <motion.div
      className="history-card"
      onClick={onClick}
      whileHover={{ y: -4 }}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="card-top">
        <span className="company-avatar" style={{ backgroundColor: '#d8a7a7', color: '#5b0f18' }}>
          {info.name.charAt(0)}
        </span>
        {onClick && (
          <span className="card-open">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
      <div className="card-body">
        <p className="card-industry">{info.industry}</p>
        <h3>{info.name}</h3>
        <p style={{ fontSize: '13px', color: '#c9a9a9', marginTop: '8px', lineHeight: 1.5 }}>
          {info.summary}
        </p>
      </div>
    </motion.div>
  );
}
