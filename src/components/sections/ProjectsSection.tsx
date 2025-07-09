import React from 'react';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '../../lib/constants';

export function ProjectsSection() {
  return (
    <div className="w-full py-6 px-4 md:px-8 md:py-10">
      <div className="w-full md:max-w-2xl md:mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold dark:font-light dark:text-white text-black mb-3">
          Projects
        </h2>
        <p className="text-sm dark:text-gray-400 mb-6">
          A few things I've built recently.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
