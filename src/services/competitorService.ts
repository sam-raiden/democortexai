import {
  mockCrossPlatformData,
  mockDefaultGapInsights,
  mockInstagramData,
  mockLinkedInData,
  mockPaidMatrix,
  mockSectionInsights,
  mockSeoData,
  mockSnapshotData,
  mockVideoData,
  mockWebsiteData,
} from '../data/mockCompetitors';
import { mockCompanyColors, mockCompanyLabels } from '../data/mockCompanies';
import { GapInsightItem, PaidMatrixRow, SeriesRow, SnapshotCategory } from '../types/competitor';
import { CompanyKey } from '../types/company';

export const competitorService = {
  getSnapshotData(): SnapshotCategory[] {
    return mockSnapshotData;
  },

  getInstagramData(): SeriesRow[] {
    return mockInstagramData;
  },

  getLinkedInData(): SeriesRow[] {
    return mockLinkedInData;
  },

  getWebsiteData(): SeriesRow[] {
    return mockWebsiteData;
  },

  getSeoData(): SeriesRow[] {
    return mockSeoData;
  },

  getVideoData(): SeriesRow[] {
    return mockVideoData;
  },

  getPaidMatrix(): PaidMatrixRow[] {
    return mockPaidMatrix;
  },

  getCrossPlatformData(): SnapshotCategory[] {
    return mockCrossPlatformData;
  },

  getSectionInsights(): Record<string, string> {
    return mockSectionInsights;
  },

  getGapInsights(): GapInsightItem[] {
    return mockDefaultGapInsights;
  },

  getCompanyLabels(): Record<CompanyKey, string> {
    return mockCompanyLabels;
  },

  getCompanyColors(): Record<CompanyKey, string> {
    return mockCompanyColors;
  },
};
