import { GapInsightItem, PaidMatrixRow, SeriesRow, SnapshotCategory } from '../types/competitor';

export const mockSnapshotData: SnapshotCategory[] = [
  {
    category: 'Instagram',
    rows: [
      { key: 'target', raw: '1.2M', pct: 58 },
      { key: 'compA', raw: '890K', pct: 43 },
      { key: 'compB', raw: '2.1M', pct: 100 },
      { key: 'compC', raw: '650K', pct: 31 },
    ],
  },
  {
    category: 'LinkedIn',
    rows: [
      { key: 'target', raw: '620K', pct: 52 },
      { key: 'compA', raw: '1.2M', pct: 100 },
      { key: 'compB', raw: '980K', pct: 82 },
      { key: 'compC', raw: '410K', pct: 34 },
    ],
  },
  {
    category: 'Website',
    rows: [
      { key: 'target', raw: '12.4M', pct: 100 },
      { key: 'compA', raw: '8.2M', pct: 66 },
      { key: 'compB', raw: '7.4M', pct: 60 },
      { key: 'compC', raw: '5.1M', pct: 41 },
    ],
  },
  {
    category: 'SEO',
    rows: [
      { key: 'target', raw: '78', pct: 82 },
      { key: 'compA', raw: '72', pct: 76 },
      { key: 'compB', raw: '69', pct: 73 },
      { key: 'compC', raw: '61', pct: 64 },
    ],
  },
  {
    category: 'YouTube',
    rows: [
      { key: 'target', raw: '1.7M', pct: 100 },
      { key: 'compA', raw: '900K', pct: 53 },
      { key: 'compB', raw: '780K', pct: 46 },
      { key: 'compC', raw: '310K', pct: 18 },
    ],
  },
];

export const mockInstagramData: SeriesRow[] = [
  { key: 'target', raw: '42K', pct: 49, sub: [{ label: 'Engagement', value: '2.1%' }, { label: 'Posts', value: '184' }, { label: 'Frequency', value: '12/mo' }, { label: 'Reels', value: '38%' }] },
  { key: 'compA', raw: '86K', pct: 100, sub: [{ label: 'Engagement', value: '5.4%' }, { label: 'Posts', value: '412' }, { label: 'Frequency', value: '28/mo' }, { label: 'Reels', value: '61%' }] },
  { key: 'compB', raw: '33K', pct: 38, sub: [{ label: 'Engagement', value: '3.8%' }, { label: 'Posts', value: '97' }, { label: 'Frequency', value: '7/mo' }, { label: 'Reels', value: '24%' }] },
  { key: 'compC', raw: '71K', pct: 83, sub: [{ label: 'Engagement', value: '4.1%' }, { label: 'Posts', value: '286' }, { label: 'Frequency', value: '19/mo' }, { label: 'Reels', value: '47%' }] },
];

export const mockLinkedInData: SeriesRow[] = [
  { key: 'target', raw: '620K', pct: 52, sub: [{ label: 'Growth', value: '+8%' }, { label: 'Posts/mo', value: '6' }, { label: 'Engagement', value: '1.8%' }, { label: 'Employees', value: '29,000' }, { label: 'Openings', value: '412' }] },
  { key: 'compA', raw: '1.2M', pct: 100, sub: [{ label: 'Growth', value: '+15%' }, { label: 'Posts/mo', value: '11' }, { label: 'Engagement', value: '3.2%' }, { label: 'Employees', value: '26,500' }, { label: 'Openings', value: '380' }] },
  { key: 'compB', raw: '980K', pct: 82, sub: [{ label: 'Growth', value: '+4%' }, { label: 'Posts/mo', value: '5' }, { label: 'Engagement', value: '1.4%' }, { label: 'Employees', value: '124,800' }, { label: 'Openings', value: '890' }] },
  { key: 'compC', raw: '410K', pct: 34, sub: [{ label: 'Growth', value: '+9%' }, { label: 'Posts/mo', value: '7' }, { label: 'Engagement', value: '2.1%' }, { label: 'Employees', value: '34,000' }, { label: 'Openings', value: '215' }] },
];

export const mockWebsiteData: SeriesRow[] = [
  { key: 'target', raw: '95K', pct: 41, sub: [{ label: 'Range', value: '85K–110K' }, { label: 'Bounce', value: '42%' }, { label: 'Top region', value: 'US 38%' }, { label: 'Trend', value: '+12%' }] },
  { key: 'compA', raw: '230K', pct: 100, sub: [{ label: 'Range', value: '210K–260K' }, { label: 'Bounce', value: '38%' }, { label: 'Top region', value: 'US 51%' }, { label: 'Trend', value: '+24%' }] },
  { key: 'compB', raw: '72K', pct: 31, sub: [{ label: 'Range', value: '65K–82K' }, { label: 'Bounce', value: '51%' }, { label: 'Top region', value: 'US 29%' }, { label: 'Trend', value: '-3%' }] },
  { key: 'compC', raw: '160K', pct: 70, sub: [{ label: 'Range', value: '140K–185K' }, { label: 'Bounce', value: '45%' }, { label: 'Top region', value: 'IN 34%' }, { label: 'Trend', value: '+8%' }] },
];

export const mockSeoData: SeriesRow[] = [
  { key: 'target', raw: '28', pct: 54, sub: [{ label: 'Backlinks', value: '4.2M' }, { label: 'Indexed', value: '1.1M' }, { label: 'Speed', value: '68' }, { label: 'Blog/mo', value: '14' }] },
  { key: 'compA', raw: '52', pct: 100, sub: [{ label: 'Backlinks', value: '8.7M' }, { label: 'Indexed', value: '2.3M' }, { label: 'Speed', value: '74' }, { label: 'Blog/mo', value: '22' }] },
  { key: 'compB', raw: '36', pct: 69, sub: [{ label: 'Backlinks', value: '5.1M' }, { label: 'Indexed', value: '1.8M' }, { label: 'Speed', value: '61' }, { label: 'Blog/mo', value: '9' }] },
  { key: 'compC', raw: '44', pct: 85, sub: [{ label: 'Backlinks', value: '6.3M' }, { label: 'Indexed', value: '1.5M' }, { label: 'Speed', value: '70' }, { label: 'Blog/mo', value: '17' }] },
];

export const mockVideoData: SeriesRow[] = [
  { key: 'target', raw: '1.2K', pct: 11, sub: [{ label: 'Total views', value: '180K' }, { label: 'Videos', value: '42' }, { label: 'Upload freq', value: '2/mo' }, { label: 'Avg views', value: '4.3K' }] },
  { key: 'compA', raw: '9.8K', pct: 89, sub: [{ label: 'Total views', value: '2.1M' }, { label: 'Videos', value: '287' }, { label: 'Upload freq', value: '8/mo' }, { label: 'Avg views', value: '7.3K' }] },
  { key: 'compB', raw: '2.9K', pct: 26, sub: [{ label: 'Total views', value: '540K' }, { label: 'Videos', value: '98' }, { label: 'Upload freq', value: '3/mo' }, { label: 'Avg views', value: '5.5K' }] },
  { key: 'compC', raw: '11K', pct: 100, sub: [{ label: 'Total views', value: '3.4M' }, { label: 'Videos', value: '412' }, { label: 'Upload freq', value: '11/mo' }, { label: 'Avg views', value: '8.2K' }] },
];

export const mockPaidMatrix: PaidMatrixRow[] = [
  { key: 'target', meta: 'detected', google: 'detected', linkedin: 'detected', video: 'none' },
  { key: 'compA', meta: 'detected', google: 'detected', linkedin: 'detected', video: 'detected' },
  { key: 'compB', meta: 'none', google: 'detected', linkedin: 'detected', video: 'none' },
  { key: 'compC', meta: 'detected', google: 'none', linkedin: 'none', video: 'detected' },
];

export const mockCrossPlatformData = mockSnapshotData;

export const mockSectionInsights: Record<string, string> = {
  snapshot: 'AMD leads across most digital channels, but NVIDIA dominates website reach by 51% over Intel.',
  linkedin: 'AMD leads the target by 94% in LinkedIn followers and posts nearly twice as often each month.',
  instagram: 'AMD\'s 5.4% engagement rate is 2.6x the target\'s 2.1% — the largest visible gap on the page.',
  website: 'AMD\'s estimated monthly traffic is 2.4x the target\'s, with a stronger US concentration.',
  seo: 'AMD\'s authority proxy of 52 is 86% higher than the target\'s 28.',
  video: 'Qualcomm leads with 11K subscribers — 9.2x the target\'s 1.2K, and uploads 5.5x more often.',
  paid: 'AMD is the only competitor detected across all four paid channels.',
  cross: 'NVIDIA leads in website reach and YouTube, but trails in Instagram, LinkedIn, and SEO.',
};

export const mockDefaultGapInsights: GapInsightItem[] = [
  {
    metric: 'Instagram engagement',
    text: "AMD's 5.4% engagement rate is 2.6x the target's 2.1% — the widest relative gap on the page.",
    tag: 'Largest gap',
  },
  {
    metric: 'YouTube subscribers',
    text: "Qualcomm leads with 11K subscribers vs the target's 1.2K — a 9.2x difference.",
    tag: 'Falling behind',
  },
  {
    metric: 'Website reach',
    text: 'The target leads with 12.4M monthly visits, 51% ahead of Intel.',
    tag: 'Ahead',
  },
  {
    metric: 'Paid presence',
    text: 'AMD is the only competitor detected across all four paid channels.',
    tag: 'Watch',
  },
];
