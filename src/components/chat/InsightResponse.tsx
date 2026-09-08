import { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

export interface InsightResponseProps {
  title?: string;
  children: ReactNode;
}

export function InsightResponse({
  title = 'Interactive Intelligence',
  children,
}: InsightResponseProps) {
  return (
    <div className="reference-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
        <Sparkles size={14} style={{ color: '#d8a7a7' }} />
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}
