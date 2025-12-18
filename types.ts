export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContentItem {
  type: 'Article' | 'Post';
  title: string;
  description: string;
  link: string;
  platform: 'Medium' | 'LinkedIn';
  date?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  telegram: string;
}