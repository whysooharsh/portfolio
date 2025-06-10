import { DockDemo } from "./components/DockDemo";
import SkillsCloud from './components/SkillsCloud';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { Blogs } from './Blogs';

function MainPage() {
  return (
    <div className="font-FiraSans min-h-screen bg-neutral-950 text-white relative overflow-auto m-0 p-0">

    <div className="fixed inset-0 z-0 pointer-events-none hidden "></div>
    
    <div className="relative z-10 flex flex-col w-full">
      <div className="w-full py-8 px-0 sm:px-4 md:px-8 md:py-12">
        <div className="w-full flex flex-col items-center gap-8 md:max-w-2xl md:mx-auto">
          <div className="shrink-0 relative">
            <img
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-[2px] border-neutral-800 grayscale contrast-200"
              src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
              loading="lazy"
              alt="Harsh"
            />
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="text-4xl md:text-5xl font-bold flex items-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hi, I'm Harsh
            </div>
            <div className="text-base md:text-lg text-gray-300 flex items-center gap-3">
              <span className="px-1 py-1.5 rounded-sm text-sm font-medium">CS</span>
              <span className="text-gray-500">•</span>
              <span className="px-1 py-1.5 rounded-full text-sm font-medium">Engineer</span>
              <span className="text-gray-500">•</span>
              <span className="px-1 py-1.5 rounded-full text-sm font-medium">Developer</span>
            </div>
          </div>
        </div>
      </div>

  

       
        <div className="py-6 px-4  md:py-4">
          <div className="md:max-w-2xl md:mx-auto">
            <h2 className="text-2xl font-bold pb-2 mb-6 border-b border-gray-700">About Me.</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Hey! I'm Harsh, a computer science undergrad and backend-focused developer with a strong grip on C++, data structures, and the MERN stack. I'm currently diving deeper into PostgreSQL and Next.js while building my understanding of Low-level design.

              Outside tech, I read, write, sketch sometimes, and play a lot of chess. I've competed at the zonal level and currently rank in the top 1% on Chess[dot]com.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
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

        {/* Skills Section */}
        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <SkillsCloud />
          </div>
        </div>

       
        <div className="w-full py-6 px-4 md:px-8 md:py-10">
          <div className="w-full md:max-w-2xl md:mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-2xl font-bold text-white">Contact Me</h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <ContactForm />
          </div>
        </div>
      <div className="pb-10 md:pb-20">

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
