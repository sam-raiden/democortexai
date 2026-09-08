import { motion } from 'framer-motion';

export interface ScoreCardProps {
  score: number | string;
  label: string;
  sublabel?: string;
  rank?: string;
}

export function ScoreCard({ score, label, sublabel, rank }: ScoreCardProps) {
  return (
    <motion.div
      className="bento-card"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: '#c9a9a9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </span>
        {rank && <span className="rank-tag">{rank}</span>}
      </div>
      <div style={{ fontSize: '32px', fontWeight: 600, color: '#f8f1e7', letterSpacing: '-0.02em' }}>
        {score}
      </div>
      {sublabel && (
        <span style={{ fontSize: '13px', color: '#c9a9a9' }}>{sublabel}</span>
      )}
    </motion.div>
  );
}
