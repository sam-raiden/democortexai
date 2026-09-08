import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Company } from '../../types/company';

export interface CompanyHeaderProps {
  company: Company;
  onBack: () => void;
  onCompetitors: () => void;
  sectionLabel?: string;
}

export function CompanyHeader({
  company,
  onBack,
  onCompetitors,
  sectionLabel = '/ intelligence',
}: CompanyHeaderProps) {
  return (
    <div className="workspace-bar">
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={16} /> 7thSense
      </button>
      <div className="workspace-company">
        <span className="status-pulse" /> {company}{' '}
        <span className="workspace-label">{sectionLabel}</span>
      </div>
      <button className="competitor-button" onClick={onCompetitors}>
        Competitive landscape <ArrowUpRight size={16} />
      </button>
    </div>
  );
}
