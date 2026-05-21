export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: React.ReactNode;
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  links?: { label: string; url: string }[];
}