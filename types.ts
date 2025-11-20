export type Language = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface Profile {
  name: LocalizedText;
  title: LocalizedText;
  affiliation: LocalizedText;
  email: string;
  location: LocalizedText;
  bio: LocalizedText;
  researchInterests: LocalizedText[];
  avatarUrl: string;
  linkedin?: string;
  researchgate?: string;
  googleScholar?: string;
  github?: string;
}

export interface Publication {
  id: string;
  title: string; // Usually titles are English in academia, but could be localized
  authors: string[];
  venue: string;
  year: number;
  abstract: LocalizedText;
  link?: string;
  tags: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: LocalizedText;
  description: LocalizedText;
  type: 'education' | 'career' | 'award';
}

export interface Comment {
  id: string;
  author: string;
  email?: string; // Private, usually
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: LocalizedText;
  date: string;
  summary: LocalizedText;
  content: LocalizedText; // Simple markdown/text
  tags: string[];
  likes: number;
  comments: Comment[];
}

export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

export interface ResourceCategory {
  id: string;
  name: LocalizedText;
  links: ResourceLink[];
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  tech?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: 'active' | 'archived' | 'in-progress';
}

export interface BookItem {
  title: string;
  author?: string;
  completed: boolean;
}

export interface MovieItem {
  title: string;
  year?: string;
  completed: boolean;
}

export interface SkillItem {
  name: string;
  progress?: number;
  completed: boolean;
}

export interface GoalItem {
  title: string;
  deadline?: string;
  completed: boolean;
}

export interface Lists {
  books: BookItem[];
  movies: MovieItem[];
  skills: SkillItem[];
  goals: GoalItem[];
}

export interface AppData {
  profile: Profile;
  publications: Publication[];
  timeline: TimelineEvent[];
  blog: BlogPost[];
  resources: ResourceCategory[];
  projects: Project[];
  lists: Lists;
}