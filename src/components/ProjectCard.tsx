import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, technologies }) => {
  return (
    <motion.div
      className="group relative bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-medium text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-0.5 bg-white/5 text-gray-300 rounded-full border border-white/5"
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
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            View Project
            <svg
              className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform"
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

export default ProjectCard; 