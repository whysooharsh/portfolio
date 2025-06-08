import * as React from "react";
import { useState, useEffect } from "react";
import { Spotlight } from "./components/spotlight-new.tsx";
import { DockDemo } from "./components/DockDemo";
import SkillsCloud from './components/SkillsCloud';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { Blogs } from './Blogs';

function MainPage() {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black text-white relative overflow-auto">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 md:px-8 py-10">
       
        <div className="w-full max-w-2xl flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          <div className="shrink-0 relative">
            <div className="relative">
              <img
                className="w-32 h-32 object-cover rounded-full shadow-lg border-[2px] border-neutral-800 grayscale contrast-200"
                src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
                loading="lazy"
                alt="Harsh"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl font-bold mb-2 flex items-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, I'm Harsh
            </div>
            <div className="text-lg text-gray-300 mb-4 flex items-center gap-2">
              <span className="px-2 py-1 bg-neutral-900/50 rounded-sm text-sm font-medium">CS</span>
              <span className="text-gray-500">•</span>
              <span className="px-3 py-1 bg-neutral-900/50 rounded-full text-sm font-medium">Engineer</span>
            </div>
            <div className="flex gap-4 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <a href="https://github.com/whysooharsh" target="_blank" rel="noopener noreferrer" 
                className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3 bg-gray-800/30 p-2 rounded-lg hover:bg-gray-800/50">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://x.com/whysooharsh" target="_blank" rel="noopener noreferrer" 
                className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3 bg-gray-800/30 p-2 rounded-lg hover:bg-gray-800/50">
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a href="https://linkedin.com/in/harsharma45" target="_blank" rel="noopener noreferrer" 
                className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3 bg-gray-800/30 p-2 rounded-lg hover:bg-gray-800/50">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://leetcode.com/whysooharsh" target="_blank" rel="noopener noreferrer" 
                className="relative text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-3 bg-gray-800/30 p-2 rounded-lg hover:bg-gray-800/50">
                <FontAwesomeIcon icon={faCode} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-full max-w-2xl mb-10">
          <h2 className="text-2xl font-bold pb-2 mb-6 border-b border-gray-700">About Me.</h2>
          <p className="text-base text-gray-300 leading-relaxed">
          Hey! I’m Harsh, a computer science undergrad and backend-focused developer with a strong grip on C++, data structures, and the MERN stack. I’m currently diving deeper into PostgreSQL and Next.js while building my understanding of Low-level design.

Outside tech, I read, write, sketch sometimes, and play a lot of chess. I’ve competed at the zonal level and currently rank in the top 1% on Chess[dot]com.


</p>
        </div>

      
        <div className="w-full max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-medium text-white">Projects</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              title="Sumrise - Medium Alt"
              description="A full-stack blog site with React, Node, Express.js, and JWT auth. Features role-based access with security and markdown support."
              image="https://res.cloudinary.com/dpwqggym0/image/upload/v1742397510/Screenshot_2025-02-22_012117_w7idcr.png"
              technologies={["React", "Node.js", "Express", "MongoDB", "JWT"]}
              link="https://github.com/whysooharsh/sumrise"
            />
            <ProjectCard
              title="Klaro (WIP)"
              description="E-commerce platform with ML recommendations and virtual try-ons. Optimized with React & Tailwind. Features real-time inventory management."
              image="https://res.cloudinary.com/dpwqggym0/image/upload/v1746252934/Screenshot_2025-04-24_070235_ocjxi7.png"
              technologies={["React", "TailwindCSS", "ML", "Node.js", "Redux", "Stripe"]}
              link="https://github.com/whysooharsh/klaro"
            />
            <ProjectCard
              title="TNP Cell (WIP)"
              description="Platform for college placements — resume tracking, drive management, and student-company interface. Includes analytics dashboard."
              image="https://res.cloudinary.com/dpwqggym0/image/upload/v1746253434/Screenshot_2025-03-19_014213_qz7jid.png"
              technologies={["React", "Node.js", "MongoDB", "Express"]}
              link="https://github.com/whysooharsh/TNP_ITM"
            />
            <ProjectCard
              title="Portfolio"
              description="This is my portfolio website that I built using React, TailwindCSS, and Framer Motion."
              image="https://res.cloudinary.com/dpwqggym0/image/upload/v1746253058/Screenshot_2025-05-03_114726_jfanvu.png"
              technologies={["React", "TailwindCSS", "Framer Motion", "TypeScript"]}
              link="https://github.com/whysooharsh/react-portfolio"
            />
          </div>
        </div>

       
        <div className="w-full max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-medium text-white">Skills</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
          <SkillsCloud />
        </div>

     
        <div className="w-full max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xl font-medium text-white">Contact Me</h2>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
          <ContactForm />
        </div>

        <DockDemo />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}

function AppComponent() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppWrapper />
    </Router>
  );
}

export default AppComponent;
