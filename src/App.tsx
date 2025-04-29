import * as React from "react";
import { Spotlight } from "./components/spotlight-new.tsx";
import { ScrollProgress } from "./components/scroll-progress.tsx";
import { Section } from "./components/Section.tsx";
import { List } from "./components/List.tsx";
import { SocialLink } from "./components/SocialLink.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Blogs.tsx";
import FloatingDockDemo from "./components/floating-dock-demo.tsx";

function MainPage() {
  return (
    <div className="font-FiraSans w-full min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-5xl px-6">

          <ScrollProgress />

          <div className="w-full flex justify-center items-center py-6 sticky top-0 z-40 bg-black bg-opacity-80 backdrop-blur-md">
            <div className="flex gap-8 sm:gap-16 text-lg sm:text-2xl md:text-3xl">
              <a href="#home" className="text-white hover:text-purple-300 transition-colors font-semibold">
                Home
              </a>
              <Link to="/blogs" className="text-white hover:text-purple-300 transition-colors font-semibold">
                Blogs
              </Link>
            </div>
          </div>

          <div id="home" className="py-20 sm:py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="text-left flex flex-col items-start">
                <div className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight">
                  Hi, I'm Harsh
                </div>
                <div className="mt-8 text-xl sm:text-2xl text-gray-200 font-medium">
                  Third year undergrad here. I like to code, read, and play chess sometimes.
                </div>
                <div className="mt-4 text-xl sm:text-2xl text-gray-200 font-medium">
                  I love to build webapps and do CP for fun.
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  className="w-full max-w-sm object-cover rounded-3xl shadow-2xl border-4 border-purple-400/30"
                  src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
                  loading="lazy"
                  alt="Harsh"
                />
              </div>
            </div>
          </div>

          <Section id="about" title="About Me">
            <p className="text-xl sm:text-2xl text-gray-200 font-medium">
              I'm Harsh, a third year undergraduate passionate about coding, web development, and competitive programming.
              I enjoy building webapps, reading, and playing chess. I still pretend to understand programming memes.
            </p>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 text-left">
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  <span className="text-purple-300 text-5xl shrink-0">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-2xl sm:text-3xl font-bold text-white truncate">
                      Abdul Kalam Technical University
                    </span>
                    <span className="text-xl sm:text-2xl text-gray-200 truncate">
                      Bachelor of Technology in CSE
                    </span>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl text-gray-400 font-semibold md:text-right w-full md:w-auto">
                  2022 - 2026
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 text-left">
                <div className="flex items-center gap-6 flex-1 min-w-0">
                  <span className="text-purple-300 text-5xl shrink-0">
                    <FontAwesomeIcon icon={faSchool} />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-2xl sm:text-3xl font-bold text-white truncate">
                      CBSE
                    </span>
                    <span className="text-xl sm:text-2xl text-gray-200 truncate">
                      Senior Secondary (Class XII)
                    </span>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl text-gray-400 font-semibold md:text-right w-full md:w-auto">
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

          <section id="projects" className="mt-28 px-4 py-20 rounded-3xl text-center mb-32">
            <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">Projects</h2>
            <ul className="space-y-14">
              <li>
                <h3 className="text-3xl font-bold text-purple-300 mb-4">Sumrise - Medium Alt</h3>
                <p className="text-2xl text-gray-200">
                  A full-stack blog site with React, Node, Express.js, and JWT auth. Features role-based access with security.
                </p>
              </li>
              <li>
                <h3 className="text-3xl font-bold text-purple-300 mb-4">Klaro</h3>
                <p className="text-2xl text-gray-200">
                  E-commerce platform with ML recommendations and virtual try-ons. Optimized with React & Tailwind.
                </p>
              </li>
              <li>
                <h3 className="text-3xl font-bold text-purple-300 mb-4">TNP Cell (WIP)</h3>
                <p className="text-2xl text-gray-200">
                  Platform for college placements — resume tracking, drive management, and student-company interface.
                </p>
              </li>
            </ul>
          </section>

          <Section id="contact-me" title="Contact Me">
            <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8">
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
    </div>
  );
}

function AppComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default AppComponent;
