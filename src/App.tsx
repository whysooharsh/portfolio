import * as React from "react";
import { useState, useEffect } from "react";
import { Spotlight } from "./components/spotlight-new.tsx";
import { ScrollProgress } from "./components/scroll-progress.tsx";
import { Section } from "./components/Section.tsx";
import { List } from "./components/List.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./Blogs.tsx";
import FloatingDockDemo from "./components/floating-dock-demo.tsx";
import InterstellarLinkedInButton from "./components/AnimatedLinkedInLink.tsx";
import ScrambleIn from "./components/ScrambleIn.tsx";


function MainPage() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                <ScrambleIn
                  text="Home"
                  scrambleSpeed={30}
                  className="text-white"
                  scrambledClassName="text-purple-300"
                />
              </a>
              <Link to="/blogs" className="text-white hover:text-purple-300 transition-colors font-semibold">
                <ScrambleIn
                  text="Blogs"
                  scrambleSpeed={30}
                  className="text-white"
                  scrambledClassName="text-purple-300"
                />
              </Link>
            </div>
          </div>

          <div id="home" className="py-20 sm:py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                  <ScrambleIn
                    text="Hi, I'm Harsh"
                    scrambleSpeed={40}
                    scrambledLetterCount={3}
                    className="text-white"
                    scrambledClassName="text-purple-300"
                  />
                </div>
                <div className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium max-w-md">
                  <ScrambleIn
                    text="Third year undergrad here. I like to code, read, and play chess sometimes."
                    scrambleSpeed={20}
                    className="text-gray-200"
                    scrambledClassName="text-purple-200"
                  />
                </div>
                <div className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium max-w-md">
                  <ScrambleIn
                    text="I love to build webapps and do CP for fun."
                    scrambleSpeed={20}
                    className="text-gray-200"
                    scrambledClassName="text-purple-200"
                  />
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

          <Section id="about" title={
            <ScrambleIn
              text="About Me"
              scrambleSpeed={40}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          }>
            <p className="text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium bg-transparent">
              <ScrambleIn
                text="I'm Harsh, a third year undergraduate passionate about coding, web development, and competitive programming. I enjoy building webapps, reading, and playing chess. I still pretend to understand programming memes."
                scrambleSpeed={15}
                className="text-gray-200"
                scrambledClassName="text-gray-400"
                scrambledLetterCount={4}
              />
            </p>
          </Section>

          <Section id="education" title={
            <ScrambleIn
              text="Education"
              scrambleSpeed={40}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          }>
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
                        <ScrambleIn
                          text={edu.title}
                          scrambleSpeed={35}
                          className="text-white"
                          scrambledClassName="text-purple-300"
                          autoStart={hasScrolled}
                        />
                      </span>
                      <span className="text-xs sm:text-sm text-gray-200 truncate">
                        <ScrambleIn
                          text={edu.subtitle}
                          scrambleSpeed={30}
                          className="text-gray-200"
                          scrambledClassName="text-gray-400"
                          autoStart={hasScrolled}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-semibold md:text-right md:w-auto w-fit self-start md:self-auto">
                    <ScrambleIn
                      text={edu.date}
                      scrambleSpeed={25}
                      className="text-gray-400"
                      autoStart={hasScrolled}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="skills" title={
  <div className="text-center w-full">
    <ScrambleIn
      text="Skills"
      scrambleSpeed={40}
      className="text-white"
      scrambledClassName="text-purple-300"
    />
  </div>
}>
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

          <Section id="projects" title={
            <ScrambleIn
              text="Projects"
              scrambleSpeed={50}
              scrambledLetterCount={3}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          }>
            <ul className="space-y-14 text-center sm:text-left">
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">
                  <ScrambleIn
                    text="Sumrise - Medium Alt"
                    scrambleSpeed={40}
                    className="text-purple-300"
                    scrambledClassName="text-white"
                    autoStart={hasScrolled}
                  />
                </h3>
                <p className="text-xl text-gray-200">
                  <ScrambleIn
                    text="A full-stack blog site with React, Node, Express.js, and JWT auth. Features role-based access with security."
                    scrambleSpeed={20}
                    className="text-gray-200"
                    scrambledClassName="text-gray-400"
                    autoStart={hasScrolled}
                  />
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">
                  <ScrambleIn
                    text="Klaro"
                    scrambleSpeed={40}
                    className="text-purple-300"
                    scrambledClassName="text-white"
                    autoStart={hasScrolled}
                  />
                </h3>
                <p className="text-xl text-gray-200">
                  <ScrambleIn
                    text="E-commerce platform with ML recommendations and virtual try-ons. Optimized with React & Tailwind."
                    scrambleSpeed={20}
                    className="text-gray-200"
                    scrambledClassName="text-gray-400"
                    autoStart={hasScrolled}
                  />
                </p>
              </li>
              <li>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">
                  <ScrambleIn
                    text="TNP Cell (WIP)"
                    scrambleSpeed={40}
                    className="text-purple-300"
                    scrambledClassName="text-white"
                    autoStart={hasScrolled}
                  />
                </h3>
                <p className="text-xl text-gray-200">
                  <ScrambleIn
                    text="Platform for college placements — resume tracking, drive management, and student-company interface."
                    scrambleSpeed={20}
                    className="text-gray-200"
                    scrambledClassName="text-gray-400"
                    autoStart={hasScrolled}
                  />
                </p>
              </li>
            </ul>
          </Section>

        <Section id="contact-me" title={
  <div className="text-center w-full">
    <ScrambleIn
      text="Contact Me"
      scrambleSpeed={40}
      className="text-white"
      scrambledClassName="text-purple-300"
    />
  </div>
}>
  <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8 text-center">
    Drop a "Hi" if you want to connect!
  </p>
  <div className="flex justify-center gap-6 text-xl">
    <InterstellarLinkedInButton href="https://linkedin.com/in/harsharma45" />
  </div>
</Section>

          <div className="h-40" />
          <FloatingDockDemo />
        </div>
      </div>
    </div>
  );
}

function AppComponent() {
   
  
  return (
    <>
       
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppComponent;
