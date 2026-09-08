import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { CompanyKey } from '../../types/company';
import { SnapshotCategory } from '../../types/competitor';
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './Icons';
import { BentoLineChart } from './charts/BentoLineChart';

export interface DigitalScoreProps {
  company: string;
  snapshotData: SnapshotCategory[];
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  seriesData?: Record<CompanyKey, number[]>;
  months?: string[];
}

export function DigitalScore({
  company,
  snapshotData,
  companyLabels,
  companyColors,
  seriesData,
  months,
}: DigitalScoreProps) {
  const linkedinRow = snapshotData.find((d) => d.category === 'LinkedIn');
  const instagramRow = snapshotData.find((d) => d.category === 'Instagram');
  const youtubeRow = snapshotData.find((d) => d.category === 'YouTube');

  const getTargetMetric = (group: SnapshotCategory | undefined) => {
    if (!group) return { val: '—', rankStr: '—' };
    const targetItem = group.rows.find((r) => r.key === 'target');
    const sorted = [...group.rows].sort((a, b) => b.pct - a.pct);
    const rank = sorted.findIndex((r) => r.key === 'target') + 1;
    return {
      val: targetItem?.raw ?? '—',
      rankStr: `Rank #${rank} / ${group.rows.length}`,
      rankNum: rank,
    };
  };

  const linkedinInfo = getTargetMetric(linkedinRow);
  const instagramInfo = getTargetMetric(instagramRow);
  const youtubeInfo = getTargetMetric(youtubeRow);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bento-overview-section">
      <div className="bento-grid">
        {/* Card 1: Large Graph Hero Card */}
        <motion.div
          className="bento-card bento-hero-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bento-hero-header">
            <div>
              <span className="bento-kicker">Digital Presence Trajectory</span>
              <h2>Competitive Ranking</h2>
              <p className="bento-hero-subtitle">Who is leading across digital channels</p>
            </div>
            <div className="bento-hero-badge">
              <span className="bento-badge-dot" />
              Relative competitive ranking
            </div>
          </div>

          <BentoLineChart
            seriesData={seriesData}
            months={months}
            companyLabels={companyLabels}
            companyColors={companyColors}
          />

          <div className="bento-chart-legend">
            {(Object.keys(companyLabels) as CompanyKey[]).map((key) => (
              <span key={key} className="bento-legend-item">
                <span className="bento-legend-dot" style={{ backgroundColor: companyColors[key] }} />
                <span className="bento-legend-name">{companyLabels[key]}</span>
                {key === 'target' && <span className="bento-target-tag">Target</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Platform Metric Cards */}
        <div className="bento-right-col">
          <div className="bento-right-top-row">
            {/* Card 2: LinkedIn */}
            <motion.button
              className="bento-card bento-metric-card linkedin-card"
              onClick={() => scrollToSection('linkedin-section')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="bento-card-top">
                <div className="platform-icon-badge linkedin-badge">
                  <LinkedInIcon />
                </div>
                <span className="rank-tag">{linkedinInfo.rankStr}</span>
              </div>
              <div className="bento-card-content">
                <span className="platform-name">LinkedIn</span>
                <div className="metric-value-row">
                  <span className="metric-value">{linkedinInfo.val}</span>
                  <span className="metric-unit">Followers</span>
                </div>
              </div>
              <div className="bento-card-footer">
                <span>View LinkedIn Presence</span>
                <ChevronRight size={13} />
              </div>
            </motion.button>

            {/* Card 3: Instagram */}
            <motion.button
              className="bento-card bento-metric-card instagram-card"
              onClick={() => scrollToSection('instagram-section')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              whileHover={{ y: -3 }}
            >
              <div className="bento-card-top">
                <div className="platform-icon-badge instagram-badge">
                  <InstagramIcon />
                </div>
                <span className="rank-tag">{instagramInfo.rankStr}</span>
              </div>
              <div className="bento-card-content">
                <span className="platform-name">Instagram</span>
                <div className="metric-value-row">
                  <span className="metric-value">{instagramInfo.val}</span>
                  <span className="metric-unit">Followers</span>
                </div>
              </div>
              <div className="bento-card-footer">
                <span>View Instagram Presence</span>
                <ChevronRight size={13} />
              </div>
            </motion.button>
          </div>

          {/* Card 4: YouTube Card */}
          <motion.button
            className="bento-card bento-metric-card youtube-card"
            onClick={() => scrollToSection('video-section')}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            <div className="bento-card-top">
              <div className="platform-icon-badge youtube-badge">
                <YouTubeIcon />
              </div>
              <span className="rank-tag">{youtubeInfo.rankStr}</span>
            </div>
            <div className="bento-card-content">
              <span className="platform-name">YouTube</span>
              <div className="metric-value-row">
                <span className="metric-value">{youtubeInfo.val}</span>
                <span className="metric-unit">Subscribers</span>
              </div>
            </div>
            <div className="bento-card-footer">
              <span>View Video Presence</span>
              <ChevronRight size={13} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export const CompetitiveRankingChart = DigitalScore;
export type CompetitiveRankingChartProps = DigitalScoreProps;
