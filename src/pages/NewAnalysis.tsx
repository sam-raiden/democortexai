import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Feather, Search, Sparkles } from 'lucide-react';
import { mockExampleCompanies } from '../data/mockCompanies';

export interface NewAnalysisProps {
  onStartAnalysis: (company: string) => void;
}

export function NewAnalysis({ onStartAnalysis }: NewAnalysisProps) {
  const [query, setQuery] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = query.trim();
    const site = website.trim();
    const value = site ? (name ? `${name} (${site})` : site) : name;
    if (value) {
      onStartAnalysis(value);
    }
  };

  return (
    <motion.main
      className="intelligence-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="research-view">
        <div className="research-kicker">
          <Sparkles size={16} /> New company analysis
        </div>
        <h1>
          Tell us which company
          <br />
          <em>you want to understand.</em>
        </h1>

        <form className="company-search" onSubmit={handleSubmit} style={{ margin: '24px auto', maxWidth: '520px' }}>
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

        <div className="example-row" style={{ justifyContent: 'center' }}>
          <span>Suggestions</span>
          {mockExampleCompanies.map((name) => (
            <button key={name} type="button" onClick={() => onStartAnalysis(name)}>
              {name}
            </button>
          ))}
        </div>

        <div className="empty-company-prompt" style={{ marginTop: '32px' }}>
          <p>
            Start with a name, website, or short description. 7thSense will map
            the business, market, signals, and competitive context.
          </p>
          <div className="prompt-hint">
            <Feather size={15} /> The clearer the question, the sharper the brief.
          </div>
        </div>
      </section>
    </motion.main>
  );
}
