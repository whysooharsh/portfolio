import { DockDemo } from "./components/DockDemo";
import SkillsCloud from './components/SkillsCloud';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { Blogs } from './Blogs';
import {
  GraduationCap,
  Linkedin,
  Twitter,
  Github,
  Mail,
  School
} from "lucide-react";

function MainPage() {
  return (
    <div className="font-FiraSans min-h-screen bg-neutral-950 text-white relative overflow-auto m-0 p-0">
      <div className="relative z-10 flex flex-col w-full">
        
        <div className="w-full py-10 md:py-20">
          <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:max-w-2xl md:mx-auto px-4 sm:px-0">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <img
                className="w-20 h-20 object-cover rounded-full shadow-lg border-[2px] border-neutral-800 grayscale contrast-200"
                src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
                loading="lazy"
                alt="Harsh"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-light text-white mb-2">Harsh Sharma</h1>
              <p className="text-gray-400 mb-1 text-sm">
                Full-stack developer with a strong foundation in <span className="text-white">C++</span>, data structures, and the <span className="text-white">MERN</span> stack.
              </p>
              <p className="text-gray-400 mb-3 text-sm">
                Outside tech, I read, write, sketch occasionally, and play chess.
              </p>

              <div className="flex justify-center sm:justify-start gap-4 mt-2">
                <a href="https://linkedin.com/in/harsharma45" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                </a>
                <a href="https://twitter.com/harsh" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                </a>
                <a href="https://github.com/whysooharsh" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                </a>
                <a href="mailto:imharsharma45@gmail.com">
                  <Mail className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <h2 className="text-xl font-light text-white mb-3">Projects</h2>
            <p className="text-sm text-gray-400 mb-6">A few things I’ve built recently.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
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
        </div>

        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <h2 className="text-xl font-light text-white mb-3">Skills</h2>
            <p className="text-sm text-gray-400 mb-6">Technologies & tools I’m good at.</p>
            <SkillsCloud />
          </div>
        </div>

        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto mb-16">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-gray-500" />
              <h2 className="text-lg font-light text-white">Education</h2>
            </div>
            <div className="flex flex-col gap-5">
              {[
                {
                  name: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
                  icon: <GraduationCap className="w-5 h-5 text-white" />,
                  degree: "B.Tech in Computer Science",
                  time: "2022 - Present",
                  details: "Focused on Programming and Data Structures."
                },
                {
                  name: "Central Board of Secondary Education (CBSE)",
                  icon: <School className="w-5 h-5 text-white" />,
                  degree: "Senior Secondary Education",
                  time: "2021 - 2022",
                  details: "Specialized in science and mathematics."
                }
              ].map((school, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 bg-black/40 border border-white/5 p-4 rounded-lg hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-md">
                    {school.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {school.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-1">
                      {school.degree} <span className="text-gray-500">· {school.time}</span>
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {school.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <h2 className="text-xl font-light text-white mb-3">Contact Me</h2>
            <p className="text-sm text-gray-400 mb-6">Want to collaborate or just say hi?</p>
            <ContactForm />
          </div>
        </div>

        <div className="pb-10 md:pb-20" />
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
