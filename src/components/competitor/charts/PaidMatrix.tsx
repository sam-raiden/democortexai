import { Fragment } from 'react';
import { CompanyKey } from '../../../types/company';
import { PaidMatrixRow } from '../../../types/competitor';

export interface PaidMatrixProps {
  matrix: PaidMatrixRow[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function PaidMatrix({ matrix, companyLabels, companyColors }: PaidMatrixProps) {
  const channels: { key: 'meta' | 'google' | 'linkedin' | 'video'; label: string }[] = [
    { key: 'meta', label: 'Meta' },
    { key: 'google', label: 'Google' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'video', label: 'Video' },
  ];

  return (
    <div className="paid-matrix">
      <div className="pm-corner" />
      {channels.map((ch) => (
        <div key={ch.key} className="pm-channel-header">
          {ch.label}
        </div>
      ))}
      {matrix.map((row) => (
        <Fragment key={row.key}>
          <div className="pm-company-label" style={{ color: companyColors[row.key] }}>
            <span className="pm-dot" style={{ backgroundColor: companyColors[row.key] }} />
            {companyLabels[row.key]}
            {row.key === 'target' ? ' (you)' : ''}
          </div>
          {channels.map((ch) => {
            const status = row[ch.key];
            return (
              <div key={ch.key} className="pm-cell">
                {status === 'detected' ? (
                  <span
                    className="pm-detected"
                    style={{ borderColor: companyColors[row.key], color: companyColors[row.key] }}
                  >
                    ✓
                  </span>
                ) : status === 'none' ? (
                  <span className="pm-none">○</span>
                ) : (
                  <span className="pm-unknown">—</span>
                )}
              </div>
            );
          })}
        </Fragment>
      ))}
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
