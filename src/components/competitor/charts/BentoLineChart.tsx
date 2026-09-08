import { useState } from 'react';
import { motion } from 'framer-motion';
import { CompanyKey } from '../../../types/company';

function getBezierPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i];
    const next = points[i + 1];
    const mx = (current.x + next.x) / 2;
    d += ` C ${mx},${current.y} ${mx},${next.y} ${next.x},${next.y}`;
  }
  return d;
}

export interface BentoLineChartProps {
  seriesData?: Record<CompanyKey, number[]>;
  months?: string[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

const defaultSeriesData: Record<CompanyKey, number[]> = {
  target: [62, 68, 73, 79, 85, 89],
  compA: [70, 74, 80, 84, 88, 92],
  compB: [78, 75, 71, 68, 65, 62],
  compC: [45, 48, 50, 52, 51, 54],
};

const defaultMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export function BentoLineChart({
  seriesData = defaultSeriesData,
  months = defaultMonths,
  companyLabels,
  companyColors,
}: BentoLineChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const width = 640;
  const height = 220;
  const padL = 36;
  const padR = 20;
  const padT = 18;
  const padB = 30;

  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const getX = (index: number) => padL + index * (plotW / (months.length - 1));
  const getY = (val: number) => padT + plotH * (1 - val / 100);

  const companiesKeys = Object.keys(companyLabels) as CompanyKey[];

  const paths = companiesKeys.map((key) => {
    const points = (seriesData[key] ?? []).map((val, idx) => ({ x: getX(idx), y: getY(val) }));
    return { key, path: getBezierPath(points), points };
  });

  const targetPoints = (seriesData.target ?? []).map((val, idx) => ({ x: getX(idx), y: getY(val) }));
  const targetAreaPath = `${getBezierPath(targetPoints)} L ${getX(months.length - 1)},${padT + plotH} L ${getX(0)},${padT + plotH} Z`;

  return (
    <div className="bento-chart-container">
      <svg
        className="bento-svg-chart"
        viewBox={`0 0 ${width} ${height}`}
        onMouseLeave={() => setHoverIndex(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const svgX = (mouseX / rect.width) * width;
          let closestIdx = 0;
          let minDiff = Infinity;
          months.forEach((_, idx) => {
            const diff = Math.abs(svgX - getX(idx));
            if (diff < minDiff) {
              minDiff = diff;
              closestIdx = idx;
            }
          });
          setHoverIndex(closestIdx);
        }}
      >
        <defs>
          <linearGradient id="targetAreaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((val) => {
          const y = getY(val);
          return (
            <g key={val}>
              <line x1={padL} y1={y} x2={width - padR} y2={y} stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" strokeWidth="1" />
              <text x={padL - 8} y={y + 3} textAnchor="end" fontSize="9" fill="#9b8fd9" fontFamily="DM Mono, monospace">
                {val}
              </text>
            </g>
          );
        })}

        {/* X axis labels */}
        {months.map((m, idx) => (
          <text key={m} x={getX(idx)} y={height - 8} textAnchor="middle" fontSize="10" fill="#9b8fd9" fontFamily="DM Mono, monospace">
            {m}
          </text>
        ))}

        {/* Target Area Fill */}
        <motion.path
          d={targetAreaPath}
          fill="url(#targetAreaGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Company Lines */}
        {paths.map(({ key, path }) => (
          <motion.path
            key={key}
            d={path}
            fill="none"
            stroke={companyColors[key]}
            strokeWidth={key === 'target' ? 2.8 : 1.8}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        ))}

        {/* Data points */}
        {paths.map(({ key, points }) =>
          points.map((pt, idx) => (
            <circle
              key={`${key}-${idx}`}
              cx={pt.x}
              cy={pt.y}
              r={key === 'target' ? 3.5 : 2.5}
              fill={companyColors[key]}
              stroke="#fff"
              strokeWidth={1.5}
            />
          ))
        )}

        {/* Hover vertical marker */}
        {hoverIndex !== null && (
          <g>
            <line
              x1={getX(hoverIndex)}
              y1={padT}
              x2={getX(hoverIndex)}
              y2={padT + plotH}
              stroke="#7c5cff"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            {companiesKeys.map((key) => {
              const val = seriesData[key]?.[hoverIndex] ?? 0;
              const y = getY(val);
              return (
                <circle
                  key={key}
                  cx={getX(hoverIndex)}
                  cy={y}
                  r={key === 'target' ? 5 : 4}
                  fill={companyColors[key]}
                  stroke="#fff"
                  strokeWidth="2"
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* Dynamic Hover Tooltip readout */}
      {hoverIndex !== null && (
        <div className="bento-chart-tooltip">
          <span className="tooltip-month">{months[hoverIndex]} ranking score</span>
          <div className="tooltip-scores">
            {companiesKeys.map((key) => (
              <span key={key} style={{ color: companyColors[key] }}>
                {companyLabels[key]}: <strong>{seriesData[key]?.[hoverIndex]}</strong>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
