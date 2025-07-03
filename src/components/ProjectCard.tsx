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
      className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ y: -3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 grayscale group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
      </div>

      {/* Text */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-light text-white group-hover:text-white/90 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-200"
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
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mt-2 group/link"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
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
