import { motion } from 'framer-motion';
import { Company } from '../types/company';
import { useCompetitors } from '../hooks/useCompetitors';
import { CompetitorHeader } from '../components/competitor/CompetitorHeader';
import { CompetitorSelector } from '../components/competitor/CompetitorSelector';
import { DigitalScore } from '../components/competitor/DigitalScore';
import { BenchmarkTable } from '../components/competitor/BenchmarkTable';
import { LinkedInPresence } from '../components/competitor/LinkedInPresence';
import { SocialAnalytics } from '../components/competitor/SocialAnalytics';
import { WebsiteAnalytics } from '../components/competitor/WebsiteAnalytics';
import { SEOAnalytics } from '../components/competitor/SEOAnalytics';
import { VideoAnalytics } from '../components/competitor/VideoAnalytics';
import { PaidAdsAnalytics } from '../components/competitor/PaidAdsAnalytics';
import { OpportunityCards } from '../components/competitor/OpportunityCards';
import { GapAnalysis } from '../components/competitor/GapAnalysis';
import { DataTransparency } from '../components/competitor/DataTransparency';

export interface CompetitorAnalyticsProps {
  company: Company;
  onBack: () => void;
}

export function CompetitorAnalytics({ company, onBack }: CompetitorAnalyticsProps) {
  const {
    snapshotData,
    instagramData,
    linkedInData,
    websiteData,
    seoData,
    videoData,
    paidMatrix,
    crossPlatformData,
    sectionInsights,
    gapInsights,
    companyLabels,
    companyColors,
  } = useCompetitors();

  return (
    <motion.main
      className="competitor-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CompetitorHeader company={company} onBack={onBack} />

      <CompetitorSelector
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <DigitalScore
        company={company}
        snapshotData={snapshotData}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <BenchmarkTable
        data={snapshotData}
        insight={sectionInsights.snapshot}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <LinkedInPresence
        data={linkedInData}
        insight={sectionInsights.linkedin}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <SocialAnalytics
        instagramData={instagramData}
        instagramInsight={sectionInsights.instagram}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <WebsiteAnalytics
        data={websiteData}
        insight={sectionInsights.website}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <SEOAnalytics
        data={seoData}
        insight={sectionInsights.seo}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <VideoAnalytics
        data={videoData}
        insight={sectionInsights.video}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <PaidAdsAnalytics
        matrix={paidMatrix}
        insight={sectionInsights.paid}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <OpportunityCards
        data={crossPlatformData}
        insight={sectionInsights.cross}
        companyLabels={companyLabels}
        companyColors={companyColors}
      />

      <GapAnalysis insights={gapInsights} />
      <DataTransparency />
    </motion.main>
  );
}

export const CompetitorPage = CompetitorAnalytics;
