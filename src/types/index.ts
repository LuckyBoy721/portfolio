export interface ProjectItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  description: string;
  category: 'automation' | 'data-science' | 'ai-nlp' | 'web-dev';
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  status: string;
  details: string;
}
