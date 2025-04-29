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
    <div className="font-FiraSans w-full min-h-screen bg-black/100 overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>

      <div className="relative z-10 flex justify-center">
        <div className="lg:w-[50%] w-[70%] max-w-5xl px-6">

          <ScrollProgress />

          <div className="w-full flex justify-center items-center py-6 sticky top-0 z-40 bg-transparent bg-opacity-80 backdrop-blur-md">
            <div className="flex gap-8 sm:gap-16 text-lg sm:text-xl md:text-lg">
              <a href="#home" className="text-white hover:text-purple-300 transition-colors font-semibold">
                Home
              </a>
              <Link to="/blogs" className="text-white hover:text-purple-300 transition-colors font-semibold">
                Blogs
              </Link>
            </div>
          </div>


          <div id="home" className="py-20 sm:py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                  Hi, I'm Harsh
                </div>
                <div className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium max-w-md">
                  Third year undergrad here. I like to code, read, and play chess sometimes.
                </div>
                <div className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium max-w-md">
                  I love to build webapps and do CP for fun.
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <img
                  className="w-40 sm:w-48 md:w-60 lg:w-72 object-cover rounded-full shadow-2xl border-4 border-neutral-700"
                  src="https://res.cloudinary.com/dpwqggym0/image/upload/v1745837467/GpeocHdXAAAGCrl_bbbdaj.jpg"
                  loading="lazy"
                  alt="Harsh"
                />
              </div>
            </div>
          </div>

          <Section id="about" title="About Me">
            <p className="text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium bg-transparent">
              I'm Harsh, a third year undergraduate passionate about coding, web development, and competitive programming.
              I enjoy building webapps, reading, and playing chess. I still pretend to understand programming memes.
            </p>
          </Section>

          <Section id="education" title="Education">
            <div className="space-y-10 flex flex-col">
              {[
                {
                  icon: faGraduationCap,
                  title: "Abdul Kalam Technical University",
                  subtitle: "Bachelor of Technology in CSE",
                  date: "2022 - 2026",
                },
                {
                  icon: faSchool,
                  title: "Central Board of Secondary Education",
                  subtitle: "Senior Secondary (Class XII)",
                  date: "2021 - 2022",
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 text-left"
                >
                  <div className="flex items-start gap-6 flex-1 min-w-0">
                    <span className="text-purple-300 text-5xl shrink-0">
                      <FontAwesomeIcon icon={edu.icon} />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                        {edu.title}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-200 truncate">
                        {edu.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-semibold md:text-right md:w-auto w-fit self-start md:self-auto">
                    {edu.date}
                  </div>
                </div>
              ))}
            </div>
          </Section>


          <Section id="skills" title="Skills">
            <List
              items={[
                "C++",
                "ReactJS",
                "NodeJS",
                "ExpressJS",
                "JavaScript",
                "Tailwind CSS",
                "MongoDB",
              ]} className="sm:text-sm"
            />
          </Section>

          <section id="projects" className="mt-28 px-4 py-20 rounded-3xl text-center mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">Projects</h2>
            <ul className="space-y-14">
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Sumrise - Medium Alt</h3>
                <p className="text-xl text-gray-200">
                  A full-stack blog site with React, Node, Express.js, and JWT auth. Features role-based access with security.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Klaro</h3>
                <p className="text-xl text-gray-200">
                  E-commerce platform with ML recommendations and virtual try-ons. Optimized with React & Tailwind.
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">TNP Cell (WIP)</h3>
                <p className="text-xl text-gray-200">
                  Platform for college placements — resume tracking, drive management, and student-company interface.
                </p>
              </li>
            </ul>
          </section>

          <Section id="contact-me" title="Contact Me">
            <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8">
              Drop a "Hi" if you want to connect!
            </p>
            <div className="flex justify-center gap-6 text-xl">
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
