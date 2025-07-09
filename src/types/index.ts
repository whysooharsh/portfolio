
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Education {
  name: string;
  degree: string;
  time: string;
  details: string;
  icon: React.ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}
