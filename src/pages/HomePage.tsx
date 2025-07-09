import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { GitHubSection } from '../components/sections/GitHubSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Navigation } from '../components/layout/Navigation';

export function HomePage() {
  return (
    <div className="relative z-10 flex flex-col w-full">
      <HeroSection />
      <div className="w-full flex justify-center py-2">
        <hr className="border-zinc-800 dark:border-zinc-700 border-t w-full max-w-2xl mx-4 opacity-30" />
      </div>
      
      <GitHubSection />
      <div className="w-full flex justify-center py-6">
        <hr className="border-zinc-800 dark:border-zinc-700 border-t w-full max-w-2xl mx-4 opacity-30" />
      </div>
      
      <ProjectsSection />
      <div className="w-full flex justify-center py-8">
        <hr className="border-zinc-800 dark:border-zinc-700 border-t w-full max-w-2xl mx-4 opacity-30" />
      </div>
      
      <SkillsSection />
      <div className="w-full flex justify-center py-8">
        <hr className="border-zinc-800 dark:border-zinc-700 border-t w-full max-w-2xl mx-4 opacity-30" />
      </div>
      
      <EducationSection />
      <div className="w-full flex justify-center py-2">
        <hr className="border-zinc-800 dark:border-zinc-700 border-t w-full max-w-2xl mx-4 opacity-30" />
      </div>
      
      <ContactSection />
      
      <div className="pb-10 md:pb-20" />
      
      <Navigation />
    </div>
  );
}
