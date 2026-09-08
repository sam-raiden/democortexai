import { Company } from '../types/company';

export const mockSuggestedPrompts: string[] = [
  'Why are they expanding?',
  'Who are the strongest competitors?',
  'What signals did you find?',
];

export function getMockAIResponse(company: Company, question: string): string {
  const q = question.toLowerCase();
  if (q.includes('expand') || q.includes('growth') || q.includes('strategy') || q.includes('why are they expanding')) {
    return `7thSense intelligence indicates that ${company} is expanding rapidly by turning its core technological depth into a comprehensive enterprise platform relationship. By bundling multi-product capabilities and establishing strong partner distribution channels, ${company} is scaling revenue per customer while locking in platform stickiness.`;
  }
  if (q.includes('competitor') || q.includes('rival') || q.includes('who are') || q.includes('strongest competitor')) {
    if (company === 'NVIDIA') {
      return `Primary direct competitors for NVIDIA include AMD (accelerating in AI inference and training accelerators), Intel (enterprise server and silicon), and Qualcomm (edge computing and mobile chips). In hyperscale silicon, custom chips like Google TPU, AWS Inferentia, and Meta MTIA also present long-term competitive dynamics.`;
    } else if (company === 'OpenAI') {
      return `Primary direct competitors for OpenAI include Google / DeepMind (Gemini ecosystem), Anthropic (Claude platform), and Microsoft / Azure AI (both a key partner and sovereign infrastructure provider), alongside open-weight initiatives like Meta Llama.`;
    } else if (company === 'Microsoft') {
      return `Primary competitors across business lines include Amazon AWS and Google Cloud in infrastructure, Salesforce in enterprise CRM, and Apple and Google in consumer platforms and developer ecosystems.`;
    } else if (company === 'Salesforce') {
      return `Primary direct competitors include Microsoft Dynamics 365, HubSpot, Oracle CX Cloud, and SAP CRM, competing aggressively on AI agent workflows and unified customer data platforms.`;
    } else {
      return `Primary direct competitors for ${company} include Freshworks, HubSpot, Salesforce, and Microsoft 365, focusing on cost-effective, all-in-one software suites for SMBs and mid-market enterprises.`;
    }
  }
  if (q.includes('signal') || q.includes('what signal') || q.includes('transformation') || q.includes('detected')) {
    return `Key transformation signals detected for ${company}: (1) Accelerated deployment of AI-powered workflows across the core product line; (2) Strategic expansion of ecosystem cloud marketplace distribution; (3) Increasing focus on zero-trust enterprise security and developer tooling to protect the core moat.`;
  }
  if (q.includes('challenge') || q.includes('risk') || q.includes('vulnerabilit') || q.includes('weakness')) {
    return `Identified vulnerabilities for ${company} include managing customer acquisition cost at scale, navigating evolving international compliance standards, and maintaining high engineering velocity amid aggressive competitor feature matching.`;
  }
  if (q.includes('founded') || q.includes('hq') || q.includes('employee') || q.includes('fact')) {
    return `${company} maintains a high confidence intelligence profile with verified presence across enterprise software, cloud services, and international hubs. Source aggregation confirms strong market positioning.`;
  }
  return `Based on accumulated primary source intelligence for ${company}, ${company} is leveraging sustained R&D investments and high user affinity to defend its core market position while driving systematic cross-sell adoption across enterprise buyers.`;
}
