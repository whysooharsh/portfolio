import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, technologies }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageElement = imageRef.current;
    const content = contentRef.current;
    const techStack = techStackRef.current;

    if (card && imageElement && content && techStack) {
      // Initial state
      gsap.set(card, { opacity: 0, y: 100 });
      gsap.set(imageElement, { scale: 1.2 });
      gsap.set(content.children, { opacity: 0, y: 20 });
      gsap.set(techStack.children, { opacity: 0, x: -20 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1,
        }
      });

      // Animate card and image
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .to(imageElement, {
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      }, '-=0.5');

      // Animate content
      gsap.to(content.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: content,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate tech stack
      gsap.to(techStack.children, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: techStack,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60" />
        </div>

        <div ref={contentRef} className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-purple-300 mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
          
          <div ref={techStackRef} className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
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
              className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-300 hover:translate-x-1"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 