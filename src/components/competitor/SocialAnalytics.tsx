import { CompanyKey } from '../../types/company';
import { SeriesRow } from '../../types/competitor';
import { SectionBlock } from './SectionBlock';
import { PrimaryChart } from './charts/PrimaryChart';

export interface InstagramPresenceProps {
  data: SeriesRow[];
  insight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
  metricLabel?: string;
}

export function InstagramPresence({
  data,
  insight,
  companyLabels,
  companyColors,
  metricLabel = 'Followers',
}: InstagramPresenceProps) {
  return (
    <SectionBlock
      id="instagram-section"
      index="03"
      title="Instagram Presence"
      subtitle="Follower count and engagement rate, side by side."
      insight={insight}
    >
      <PrimaryChart
        rows={data}
        metricLabel={metricLabel}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />
    </SectionBlock>
  );
}

export interface SocialAnalyticsProps {
  instagramData: SeriesRow[];
  instagramInsight: string;
  companyLabels: Record<CompanyKey, string>;
  companyColors: Record<CompanyKey, string>;
}

export function SocialAnalytics({
  instagramData,
  instagramInsight,
  companyLabels,
  companyColors,
}: SocialAnalyticsProps) {
  return (
    <InstagramPresence
      data={instagramData}
      insight={instagramInsight}
      companyLabels={companyLabels}
      companyColors={companyColors}
    />
  );
}
