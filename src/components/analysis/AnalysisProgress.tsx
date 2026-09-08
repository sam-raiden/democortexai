import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Check, Circle, Feather, Search, Sparkles } from 'lucide-react';
import { Company } from '../../types/company';
import { mockResearchSteps } from '../../data/mockAnalysis';

export interface AnalysisProgressProps {
  company: Company;
  isResearching: boolean;
  researchStep: number;
  steps?: string[];
  onAnalyze: (value: string) => void;
}

export function AnalysisProgress({
  company,
  isResearching,
  researchStep,
  steps = mockResearchSteps,
  onAnalyze,
}: AnalysisProgressProps) {
  const [query, setQuery] = useState('');
  const [website, setWebsite] = useState('');
  const percentage = Math.round(((researchStep + 1) / steps.length) * 100);

  return (
    <section className="research-view">
      <div className="research-kicker">
        <Sparkles size={16} /> Live research
      </div>
      <h1>
        {isResearching ? (
          <>
            Building a point of view
            <br />
            <em>on {company}.</em>
          </>
        ) : (
          <>
            Tell us which company
            <br />
            <em>you want to understand.</em>
          </>
        )}
      </h1>
      {isResearching ? (
        <div className="research-panel">
          <div className="research-panel-top">
            <span>Researching {company}</span>
            <span>{percentage}%</span>
          </div>
          <div className="progress-track">
            <motion.div
              className="progress-value"
              animate={{ width: `${percentage}%` }}
              transition={{ ease: 'easeInOut' }}
            />
          </div>
          <div className="research-list">
            {steps.map((step, index) => (
              <div
                key={step}
                className={
                  index < researchStep
                    ? 'complete'
                    : index === researchStep
                      ? 'active'
                      : ''
                }
              >
                <span className="research-icon">
                  {index < researchStep ? (
                    <Check size={13} />
                  ) : index === researchStep ? (
                    <Circle size={9} fill="currentColor" />
                  ) : (
                    <span />
                  )}
                </span>
                {step}
                <span className="step-state">
                  {index < researchStep
                    ? 'Complete'
                    : index === researchStep
                      ? 'In progress'
                      : 'Queued'}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-company-prompt">
          <form
            className="company-search"
            style={{ margin: '0 auto 24px' }}
            onSubmit={(e) => {
              e.preventDefault();
              const name = query.trim();
              const site = website.trim();
              const value = site ? (name ? `${name} (${site})` : site) : name;
              if (value) onAnalyze(value);
            }}
          >
            <Search size={19} />
            <div className="lp-search-fields">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Company name..."
                aria-label="Company name"
              />
              <span className="lp-search-divider" aria-hidden="true" />
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Company website..."
                aria-label="Company website"
                type="text"
                inputMode="url"
              />
            </div>
            <button type="submit">
              <ArrowUpRight size={18} />
            </button>
          </form>
          <p>
            Start with a name, website, or short description. 7thSense will map
            the business, market, signals, and competitive context.
          </p>
          <div className="prompt-hint">
            <Feather size={15} /> The clearer the question, the sharper the
            brief.
          </div>
        </div>
      )}
    </section>
  );
}
