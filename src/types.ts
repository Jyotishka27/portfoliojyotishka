export type ProjectStatus = 'COMPLETED' | 'IN DEVELOPMENT' | 'PLANNED';

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  status: ProjectStatus;
  statusLabel?: string;
  category: 'AI Engineering' | 'Modern Automation' | 'Web Engineering';
  timeline?: string;
  problem: string;
  solution: string;
  architectureWorkflow: string[];
  technologies: string[];
  keyCapabilities: string[];
  engineeringDecisions: string[];
  challenges: string[];
  lessonsLearned: string[];
  futureRoadmap?: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  isFlagshipActive?: boolean;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  subtext: string;
  badge?: string;
}

export interface CapabilityArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface EnterpriseDomain {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
  metricHighlight?: string;
}

export interface PyramidLayer {
  level: number;
  name: string;
  subtitle: string;
  description: string;
  validationTarget: string;
  tools: string[];
  jyotishkaPerspective: string;
  color: string;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: {
    category: string;
    points: string[];
  }[];
  technologies: string[];
}

export interface KeyAchievement {
  id: string;
  title: string;
  metric: string;
  transformation: string;
  context: string;
  impact: string;
  category: 'Efficiency' | 'Scale' | 'Quality' | 'Revenue Growth';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  type: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  period: string;
  field: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  coreTakeaways: string[];
  contentMarkdown: string;
}
