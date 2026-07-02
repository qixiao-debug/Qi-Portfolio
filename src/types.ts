export interface Project {
  id: string;
  title: string;
  client: string;
  period: string;
  category: string; // 'Market Growth' | 'Marketing Campaigns' | 'CRO' | 'SEO' | 'Data Visualization' | 'Business Analytics'
  summary: string;
  resultsSummary: string;
  challenge: {
    background: string;
    businessChallenge: string;
    objective: string;
  };
  strategy: {
    research: string;
    frameworks: string[];
    insights: string[];
  };
  execution: {
    actions: string[];
    tools: string[];
    workflow: string;
  };
  results: {
    metrics: {
      label: string;
      value: string;
      change: string;
      trend: 'up' | 'down';
      data: number[]; // Sparkline data points
    }[];
    chartType: 'line' | 'bar' | 'funnel' | 'mix';
    chartData: { name: string; value: number; benchmark?: number; label?: string }[];
  };
  gallery: {
    title: string;
    description: string;
    type: string;
  }[];
  learnings: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string; // 'Digital Marketing' | 'SEO' | 'CRO' | 'Analytics' | 'Data Visualization' | 'AI & Marketing' | 'Career Development'
  publishDate: string;
  lastUpdated?: string;
  readingTime: string;
  summary: string;
  tags: string[];
  author: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      subheading?: string;
      paragraphs: string[];
      codeBlock?: {
        language: string;
        code: string;
      };
      chartData?: {
        title: string;
        type: 'bar' | 'line' | 'pie';
        labels: string[];
        values: number[];
      };
      quote?: string;
    }[];
    conclusion: string;
  };
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor: string;
}

export interface ContactInquiry {
  name: string;
  email: string;
  company: string;
  serviceNeeded: string;
  message: string;
}
