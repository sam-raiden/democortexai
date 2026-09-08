import { CompanyKey, HistoryItem } from '../types/company';

export const mockHistory: HistoryItem[] = [
  {
    name: 'OpenAI',
    monogram: 'O',
    industry: 'Artificial intelligence',
    time: 'Yesterday',
    preview: 'An accelerating platform story shaped by distribution and model capability.',
    color: '#1f9d63',
    bgGradient: 'linear-gradient(135deg, #4fd48c 0%, #1f9d63 50%, #0c5340 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Microsoft',
    monogram: 'M',
    industry: 'Enterprise software',
    time: '3 days ago',
    preview: 'Deep enterprise reach continues to turn intelligence into workflow advantage.',
    color: '#12908c',
    bgGradient: 'linear-gradient(135deg, #3fc9c2 0%, #12908c 50%, #0a4b52 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Salesforce',
    monogram: 'S',
    industry: 'Cloud software',
    time: '8 days ago',
    preview: 'A broad customer system repositioning around trusted AI and data.',
    color: '#2b6fd4',
    bgGradient: 'linear-gradient(135deg, #5ba3f5 0%, #2b6fd4 50%, #15376f 100%)',
    textColor: '#ffffff',
    accentColor: '#ffffff',
    avatarBg: 'rgba(255, 255, 255, 0.24)',
    avatarColor: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  {
    name: 'Zoho',
    monogram: 'Z',
    industry: 'Business software',
    time: '12 days ago',
    preview: 'A quietly expansive suite with an increasingly differentiated point of view.',
    color: '#8fe0c4',
    bgGradient: 'linear-gradient(135deg, #c7f2df 0%, #8fe0c4 50%, #55bfae 100%)',
    textColor: '#0b3b33',
    accentColor: '#0b3b33',
    avatarBg: 'rgba(11, 59, 51, 0.18)',
    avatarColor: '#0b3b33',
    borderColor: 'rgba(11, 59, 51, 0.25)',
  },
];

export const mockExampleCompanies = ['OpenAI', 'Microsoft', 'Salesforce', 'Zoho'];

export const mockCompanyColors: Record<CompanyKey, string> = {
  target: '#7c5cff',
  compA: '#3b82f6',
  compB: '#22a06b',
  compC: '#f0973e',
};

export const mockCompanyLabels: Record<CompanyKey, string> = {
  target: 'NVIDIA',
  compA: 'AMD',
  compB: 'Intel',
  compC: 'Qualcomm',
};
