import * as React from "react";
import { SpotlightNewDemo } from "./components/spotlight";
import { ScrollProgress } from "./components/scroll-progress";
import { Section } from "./components/Section";
import { List } from "./components/List";
import { SocialLink } from "./components/SocialLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Blogs";
import FloatingDockDemo from "./components/floating-dock-demo";

function MainPage() {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpotlightNewDemo />
      </div>
      <div className="relative z-10">
        <ScrollProgress />

  
        <div className="w-full flex justify-center items-center px-4 py-6 sm:px-8 sm:py-8 z-40 sticky top-0">
          <div className="flex gap-8 sm:gap-16 text-lg sm:text-2xl md:text-3xl">
            <a href="#home" className="text-white hover:text-purple-300 transition-colors font-semibold">
              Home
            </a>
            <Link to="/blogs" className="text-white hover:text-purple-300 transition-colors font-semibold">
              Blogs
            </Link>
          </div>
        </div>


        <div id="home" className="flex justify-center items-center px-4 py-12 sm:px-8 sm:py-16 md:px-24 md:py-32 pt-20">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="text-left flex flex-col items-start">
              <div className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate__animated animate__fadeIn leading-tight">
                Hi, I'm Harsh
              </div>
              <div className="mt-8 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
                third year undergrad here. I like to code, read, and play chess sometimes.
              </div>
              <div className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
                I love to build webapps and do CP for fun.
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                className="w-full max-w-xs sm:max-w-md md:max-w-lg object-cover rounded-3xl shadow-2xl border-4 border-purple-400/30"
                src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
                loading="lazy"
                alt="Harsh"
              />
            </div>
          </div>
        </div>

    
        <Section id="about" title="About Me">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium">
            I'm Harsh, a third year undergraduate passionate about coding, web development, and competitive programming. I enjoy building webapps, reading, and playing chess.I still pretend to understand programming memes.
          </p>
        </Section>

     
        <Section id="education" title="Education">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 bg-transparent rounded-2xl px-6 py-6 text-left">
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <span className="text-purple-300 text-5xl shrink-0">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white truncate">
                    Abdul Kalam Technical University
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-200 truncate">
                    Bachelor of Technology in CSE
                  </span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-semibold md:text-right w-full md:w-auto">
                2022 - 2026
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 bg-transparent rounded-2xl px-6 py-6 text-left">
              <div className="flex items-center gap-6 flex-1 min-w-0">
                <span className="text-purple-300 text-5xl shrink-0">
                  <FontAwesomeIcon icon={faSchool} />
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white truncate">
                    CBSE
                  </span>
                  <span className="text-xl sm:text-2xl md:text-3xl text-gray-200 truncate">
                    Senior Secondary (Class XII)
                  </span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-semibold md:text-right w-full md:w-auto">
                2021 - 2022
              </div>
            </div>
          </div>
        </Section>

    
        <Section id="skills" title="Skills">
          <List
            items={[
              "C++",
              "React",
              "Node.js",
              "Express",
              "JavaScript",
              "Tailwind CSS",
              "MongoDB",
            ]}
          />
        </Section>

        <section id="projects" className="max-w-4xl mx-auto mt-28 px-12 py-20 bg-transparent rounded-3xl shadow-2xl text-center mb-32">
  <h2 className="text-6xl font-extrabold text-white mb-10 tracking-tight">Projects</h2>
  <ul className="space-y-14">
    <li>
      <h3 className="text-4xl font-bold text-purple-300 mb-4">Sumrise - medium alt</h3>
      <p className="text-3xl text-gray-200">
        A full-stack blog site with React, Node, Express.js, and JWT auth. It features JWT authentication, role-based access with enhanced security to prevent XSS and other vulnerabilities.
      </p>
    </li>
    <li>
      <h3 className="text-4xl font-bold text-purple-300 mb-4">Klaro</h3>
      <p className="text-3xl text-gray-200">
        An e-commerce platform with virtual try-ons, ML-based recommendations. Worked on React, Tailwind CSS, and Node.js and also optimized for performance and UX.
      </p>
    </li>
    <li>
      <h3 className="text-4xl font-bold text-purple-300 mb-4">TNP Cell (WIP)</h3>
      <p className="text-3xl text-gray-200">
        A one-stop platform for college placements, streamlining drives, resume tracking, and student-company interactions. Currently being brewed.
      </p>
    </li>
   
  </ul>
</section>


      
        <Section id="contact-me" title="Contact Me">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium mb-8">
            Drop a "Hi" if you want to connect!
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://linkedin.com/in/harsharma45" label="LinkedIn" />
          </div>
        </Section>

        <div className="h-60" />
        <FloatingDockDemo />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
