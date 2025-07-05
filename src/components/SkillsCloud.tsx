import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github' },
  { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel' },
];

const SkillsCloud: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="w-14 h-14 p-2">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              <span className="text-xs text-gray-900 dark:text-gray-300 bg-white/90 dark:bg-black/80 px-2 py-1 rounded-full border border-gray-200 dark:border-white/5 shadow-sm">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCloud;