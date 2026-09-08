import { Fragment } from 'react';
import { CompanyKey } from '../../../types/company';
import { LinkedInRow } from '../../../types/competitor';

export interface LinkedInChecklistProps {
  data: LinkedInRow[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function LinkedInChecklist({ data, companyLabels, companyColors }: LinkedInChecklistProps) {
  return (
    <div className="linkedin-checklist">
      <div className="linkedin-matrix">
        <div className="pm-corner" />
        <div className="pm-channel-header">LinkedIn profile</div>
        {data.map((row) => (
          <Fragment key={row.key}>
            <div className="pm-company-label" style={{ color: companyColors[row.key] }}>
              <span className="pm-dot" style={{ backgroundColor: companyColors[row.key] }} />
              {companyLabels[row.key]}
              {row.key === 'target' ? ' (you)' : ''}
            </div>
            <div className="pm-cell">
              {row.status === 'detected' ? (
                <span
                  className="pm-detected"
                  style={{ borderColor: companyColors[row.key], color: companyColors[row.key] }}
                >
                  ✓
                </span>
              ) : row.status === 'none' ? (
                <span className="pm-none">○</span>
              ) : (
                <span className="pm-unknown">—</span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
      <div className="pm-legend">
        <span>
          <span className="pm-detected" style={{ borderColor: '#d8a7a7', color: '#d8a7a7' }}>
            ✓
          </span>{' '}
          Detected
        </span>
        <span>
          <span className="pm-none">○</span> Not detected — no publicly observable evidence found
        </span>
        <span>
          <span className="pm-unknown">—</span> Unknown
        </span>
      </div>
    </div>
  );
}
