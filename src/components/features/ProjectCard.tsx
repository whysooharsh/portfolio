import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  technologies,
}) => {
  return (
    <motion.div
      className="group relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm rounded-lg overflow-hidden 
                border border-gray-400 dark:border-white/5 
                hover:border-gray-500 dark:hover:border-white/10 
                transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl"
      whileHover={{ y: -3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-base font-medium text-black dark:text-white group-hover:text-opacity-90 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-black dark:text-gray-400 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-black dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mt-1 group/link"
          >
            View Project
            <svg
              className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};
