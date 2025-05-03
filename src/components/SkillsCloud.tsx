import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Languages' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Languages' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'Languages' },

  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', category: 'Frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express', category: 'Backend' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },

  // Tools
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'Tools' },
  { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github', category: 'Tools' }
];

const categories = ['Languages', 'Frontend', 'Backend', 'Tools'];

const SkillsCloud: React.FC = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-lg font-medium text-purple-300">{category}</h3>
              <div className="flex-1 h-[1px] bg-purple-500/20"></div>
            </div>
            <div className="flex flex-wrap gap-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <motion.div
                        className="w-full h-full absolute"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain rounded-lg filter group-hover:brightness-125"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      <span className="text-xs text-purple-300 bg-neutral-900/90 px-2 py-1 rounded-full">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCloud; 