import { Project, SocialLink } from '../types';
import { HomeIcon, BookIcon } from 'lucide-react';
import { Icons } from './icons';

export const NAVIGATION = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blogs", icon: BookIcon, label: "Resources" },
];


export const SOCIAL_LINKS: Record<string, SocialLink> = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/whysooharsh",
    icon: Icons.github,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harsharma45",
    icon: Icons.linkedin,
  },
  X: {
    name: "X",
    url: "https://twitter.com/harsh",
    icon: Icons.x,
  },
  LeetCode: {
    name: "LeetCode",
    url: "https://leetcode.com/whysooharsh/",
    icon: Icons.leetcode,
  },
};

export const PROJECTS: Project[] = [
  {
    title: "Sumrise - Medium Alt",
    description: "A full-stack blog site with React, Node, Express.js, and JWT auth. Features role-based access with security and markdown support.",
    image: "https://res.cloudinary.com/dpwqggym0/image/upload/v1742397510/Screenshot_2025-02-22_012117_w7idcr.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/whysooharsh/sumrise"
  },
  {
    title: "Klaro",
    description: "E-commerce platform with ML recommendations and virtual try-ons. Optimized with React & Tailwind. Features real-time inventory management.",
    image: "https://res.cloudinary.com/dpwqggym0/image/upload/v1746252934/Screenshot_2025-04-24_070235_ocjxi7.png",
    technologies: ["React", "TailwindCSS", "ML", "Node.js", "Redux", "Stripe"],
    link: "https://github.com/whysooharsh/klaro"
  },
  {
    title: "TNP Cell (WIP)",
    description: "Platform for college placements — resume tracking, drive management, and student-company interface. Includes analytics dashboard.",
    image: "https://res.cloudinary.com/dpwqggym0/image/upload/v1746253434/Screenshot_2025-03-19_014213_qz7jid.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/whysooharsh/TNP_ITM"
  },
  {
    title: "Portfolio",
    description: "This is my portfolio website that I built using React, TailwindCSS, and Framer Motion.",
    image: "https://res.cloudinary.com/dpwqggym0/image/upload/v1746253058/Screenshot_2025-05-03_114726_jfanvu.png",
    technologies: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
    link: "https://github.com/whysooharsh/react-portfolio"
  }
];

export interface Education {
  name: string;
  degree: string;
  time: string;
  details: string;
  icon: string;
}

export const EDUCATION_DATA: Education[] = [
  {
    name: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    degree: "B.Tech in Computer Science",
    time: "2022 - Present",
    details: "Focused on Programming and Data Structures.",
    icon: "graduation-cap"
  },
  {
    name: "Central Board of Secondary Education (CBSE)",
    degree: "Senior Secondary Education",
    time: "2021 - 2022",
    details: "Specialized in science and mathematics.",
    icon: "school"
  }
];
