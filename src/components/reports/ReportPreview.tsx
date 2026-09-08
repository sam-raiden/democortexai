import { ExternalLink } from 'lucide-react';
import { Company } from '../../types/company';
import { ConfidenceBadge, ReportTag } from '../analysis/ConfidenceBadge';
import {
  ReferenceCard,
  ReferenceList,
  ReferenceNumberedList,
} from '../analysis/IntelligenceCard';
import { ReportSection } from './ReportSection';

export interface ReportPreviewProps {
  company: Company;
  onShare?: () => void;
}

export function ReportPreview({ company, onShare }: ReportPreviewProps) {
  const isOpenAI = company === 'OpenAI';
  const displayCompany = isOpenAI ? 'OpenAI' : company;

  return (
    <article className="report-view report-reference">
      <header className="reference-header">
        <div className="reference-brand">
          <span className="reference-logo">{displayCompany.charAt(0)}</span>
          <div>
            <strong>{displayCompany}</strong>
            <span>Enterprise Technology &amp; Cloud Services</span>
          </div>
        </div>
        <div className="reference-status">
          <span>Company intelligence</span>
          <span className="reference-confidence">High confidence</span>
          <span>18 sources</span>
        </div>
        <button
          className="reference-share"
          onClick={onShare}
          aria-label="Share report"
        >
          <ExternalLink size={13} />
        </button>
      </header>

      <section className="reference-intro">
        <div className="reference-title-row">
          <div>
            <p className="reference-kicker">Company intelligence</p>
            <h1>{displayCompany}</h1>
            <p className="reference-subtitle">
              Enterprise Technology &amp; Cloud Services
            </p>
          </div>
        </div>

        <div className="reference-facts">
          <span>
            <b>Founded</b> 2015
          </span>
          <span>
            <b>HQ</b> San Francisco, CA
          </span>
          <span>
            <b>Employees</b> 1,000–5,000
          </span>
        </div>

        <div className="reference-summary">
          <p>
            {displayCompany} is a leading technology company operating in the
            software and enterprise technology space, headquartered in San
            Francisco, California. The company develops and delivers AI-powered
            products and services for businesses and consumers.
          </p>
          <div className="reference-tags">
            <ReportTag>Artificial intelligence</ReportTag>
            <ReportTag>Cloud services</ReportTag>
            <ReportTag>Software</ReportTag>
          </div>
        </div>
      </section>

      <div className="reference-source-row">
        <span className="reference-kicker">Accumulated primary sources</span>
        <ConfidenceBadge label="Company website" />
        <ConfidenceBadge label="Press release" />
        <ConfidenceBadge label="Industry report" />
        <ConfidenceBadge label="News" />
        <ConfidenceBadge label="Company filings" />
      </div>

      <ReportSection number="01" title="Business Overview">
        <p>
          {displayCompany} operates with a defined market position built on
          continuous product investment, an established customer base, and a
          differentiated approach to how it serves that base compared to
          larger, more generalized competitors.
        </p>
      </ReportSection>

      <ReportSection number="02" title="SWOT Analysis">
        <p className="reference-subtitle">
          Cross-references verified company intelligence against market and
          competitor findings — every point below is traceable to a specific
          fact already collected, not an independent judgment.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Strengths">
            <ReferenceList
              items={[
                'Established track record and demonstrated domain credibility.',
                'Differentiated service or delivery model versus larger competitors.',
                'Strong direct engagement and loyalty within its core customer base.',
              ]}
            />
          </ReferenceCard>
          <ReferenceCard title="Weaknesses">
            <ReferenceList
              accent
              items={[
                'Smaller footprint or reach compared to scaled competitors.',
                'Digital presence and visibility trailing larger market players.',
                'Recurring friction points surfaced in customer feedback.',
              ]}
            />
          </ReferenceCard>
        </div>
        <div className="reference-columns">
          <ReferenceCard title="Opportunities">
            <ReferenceList
              items={[
                'Underdeveloped channels or partnerships with room to expand.',
                'Adjacent customer segments not yet fully served.',
                'Emerging technology or process shifts the company is positioned to adopt early.',
              ]}
            />
          </ReferenceCard>
          <ReferenceCard title="Threats">
            <ReferenceList
              accent
              items={[
                'Active consolidation or expansion by larger competitors into its market.',
                'Well-funded entrants targeting the same customer base.',
                'Structural shifts in the industry that favor scaled players.',
              ]}
            />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="03" title="Market Positioning Narrative">
        <p>
          {displayCompany} positions itself around a distinct value proposition
          rather than competing directly on scale — favoring depth of
          relationship and service quality within a defined market over
          broad, undifferentiated expansion.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Named competitors">
            <ConfidenceBadge label="Competitor A" />
            <ConfidenceBadge label="Competitor B" />
            <ConfidenceBadge label="Competitor C" />
          </ReferenceCard>
          <ReferenceCard title="Positioning pillars">
            <ReferenceList
              items={[
                'Value-based positioning versus premium competitor pricing.',
                'Personalized, relationship-led continuity of service.',
                'Focused, hyper-local or niche operating model.',
              ]}
            />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="04" title="Ideal Customer &amp; Segment Fit">
        <ReferenceNumberedList
          items={[
            'Core repeat segment — the primary customer base driving recurring volume today.',
            'Value-conscious segment — customers choosing the company specifically over premium alternatives.',
            'Emerging segment — a newer or underserved audience with growing relevance.',
            'Local or community segment — customers drawn by proximity, trust, or word-of-mouth.',
          ]}
        />
      </ReportSection>

      <ReportSection number="05" title="Industry &amp; Market Trajectory">
        <p>
          The broader industry {displayCompany} operates in is expanding at a
          steady pace, with focused or specialized players growing faster
          than larger, generalized competitors.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Key sector movements">
            <ReferenceList
              items={[
                'Consolidation activity among independent or regional players.',
                'Rising demand from a specific, identifiable customer segment.',
                'New technology becoming affordable for smaller or mid-tier players.',
              ]}
            />
          </ReferenceCard>
          <ReferenceCard title={`What this means for ${displayCompany}`}>
            <ReferenceList
              items={[
                'Consolidation trends raise urgency to differentiate visibly now.',
                'New technology adoption is a genuine chance to modernize without large capital.',
                'Core demand is structurally supported by underlying market trends.',
              ]}
            />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="06" title="Partnership &amp; Ecosystem Signals">
        <ReferenceNumberedList
          items={[
            'Existing partnerships or channel relationships that enable smoother customer acquisition.',
            'Leadership or credibility signals — affiliations, certifications, or recognitions competitors cannot easily match.',
            'Ongoing outreach or community activity that builds goodwill and pipeline over time.',
          ]}
        />
      </ReportSection>

      <ReportSection number="07" title="Customer Sentiment Snapshot">
        <p>
          Sentiment is broadly positive, anchored in trust toward specific
          people or aspects of the experience, alongside a smaller set of
          recurring concerns worth addressing directly rather than treating
          as noise.
        </p>
        <div className="reference-columns">
          <ReferenceCard title="Positive signals">
            <ReferenceList
              items={[
                'Specific individuals or touchpoints named repeatedly and favorably.',
                'Strong repeat or long-term customer relationships.',
                'A core offering consistently described in positive terms.',
              ]}
            />
          </ReferenceCard>
          <ReferenceCard title="Watch areas">
            <ReferenceList
              accent
              items={[
                'A recurring complaint pattern worth addressing directly.',
                'Isolated but notable negative experiences.',
              ]}
            />
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="08" title="Recommendations &amp; Service Fitment">
        <div className="reference-columns three">
          <ReferenceCard title="Visibility &amp; Local Reach">
            <p>
              Gaps in digital presence versus competitors are specific and
              time-sensitive to close — an easy place to show clear
              before/after progress.
            </p>
          </ReferenceCard>
          <ReferenceCard title="Trust &amp; Story Foundation">
            <p>
              Verified, distinctive facts about the company's history and
              track record are a natural content and brand foundation
              competitors can't easily replicate.
            </p>
          </ReferenceCard>
          <ReferenceCard title="Channel &amp; Partnership Marketing">
            <p>
              Existing partnerships and credibility signals are real, current
              assets that are likely underused as marketing today.
            </p>
          </ReferenceCard>
        </div>
      </ReportSection>

      <ReportSection number="09" title="Sales Talking Points">
        <ReferenceNumberedList
          items={[
            `"You have a track record and reputation your larger competitors can't easily tell — is it visible anywhere before a customer engages with you?"`,
            `"Competitors are actively expanding into your market right now — this isn't a future risk, it's happening today."`,
            `"You already have real partnerships and credibility signals most competitors can't claim — are you actively marketing them, or are they sitting quietly in the background?"`,
            `"Your customers are already telling your story for you through their loyalty and feedback — that's the kind of social proof most competitors would pay a lot to manufacture."`,
          ]}
        />
      </ReportSection>
    </article>
  );
}

export const ReportView = ReportPreview;
export type ReportViewProps = ReportPreviewProps;
