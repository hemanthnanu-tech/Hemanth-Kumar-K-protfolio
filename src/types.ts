export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  type: 'automation' | 'hardware';
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  complexity: number; // 0 to 100%
  demoType: 'ai-assistant' | 'weather' | 'air-quality' | 'traffic' | 'wheelchair';
}

export interface CertificationItem {
  id: string;
  organization: string;
  title: string;
  period: string;
}
