export interface Book {
  id: number;
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
  overview: string;
  summary: string;
  significance: string;
  keyThemes: string[];
  coverImageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  ebookUrl?: string;
  ebookFormat?: 'epub' | 'pdf' | 'txt';
  gutenbergUrl?: string;
  publicDomain: boolean;
  copyrightStatus: string;
  infographicData: InfographicData;
  rank: number;
}

export interface InfographicData {
  keyStats: KeyStat[];
  timeline: TimelineEvent[];
  themes: ThemeVisualization[];
  quotes: Quote[];
  impact: ImpactMetric[];
}

export interface KeyStat {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export interface TimelineEvent {
  year: number;
  event: string;
  importance: 'high' | 'medium' | 'low';
}

export interface ThemeVisualization {
  theme: string;
  weight: number;
  color: string;
  description: string;
}

export interface Quote {
  text: string;
  context: string;
  significance: string;
}

export interface ImpactMetric {
  category: string;
  score: number;
  description: string;
  maxScore: number;
}