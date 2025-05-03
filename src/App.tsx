import * as React from "react";
import { useState, useEffect } from "react";
import { Spotlight } from "./components/spotlight-new.tsx";
import { ScrollProgress } from "./components/scroll-progress.tsx";
import { Section } from "./components/Section.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Blogs } from "./Blogs.tsx";
import FloatingDockDemo from "./components/floating-dock-demo.tsx";
import InterstellarLinkedInButton from "./components/AnimatedLinkedInLink.tsx";
import ScrambleIn from "./components/ScrambleIn.tsx";
import ProjectCard from './components/ProjectCard';
import SkillsCloud from './components/SkillsCloud';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function MainPage() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

   
    gsap.to('html', {
      scrollBehavior: 'smooth',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      }
    });

    // Section animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=100',
            end: 'top center',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
          <div className="w-full flex justify-center items-center py-2 sticky top-0 z-40 bg-transparent bg-opacity-80 backdrop-blur-md">
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
                    scrambleSpeed={12}
                    scrambledLetterCount={3}
                    className="text-white"
                    scrambledClassName="text-purple-300"
                  />
                </div>
                <div className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium max-w-md">
                  <ScrambleIn
                    text="Third year undergrad here. I like to code, read, and play chess sometimes."
                    scrambleSpeed={10}
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
              scrambleSpeed={10}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          }>
            <p className="text-sm sm:text-base md:text-lg text-[1rem] text-gray-200 font-medium bg-transparent">
              <ScrambleIn
                text="I'm Harsh, a third year undergraduate passionate about coding, web development, and competitive programming. I enjoy building webapps, reading, and playing chess. I still pretend to understand programming memes."
                scrambleSpeed={6}
                className="text-gray-200"
                scrambledClassName="text-gray-400"
                scrambledLetterCount={4}
              />
            </p>
          </Section>

          <Section id="education" title={
            <ScrambleIn
              text="Education"
              scrambleSpeed={12}
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
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-2 text-left"
                >
                  <div className="flex items-start gap-6 flex-1 min-w-0">
                    <span className="text-purple-300 text-5xl shrink-0">
                      <FontAwesomeIcon icon={edu.icon} />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                        <ScrambleIn
                          text={edu.title}
                          scrambleSpeed={20}
                          className="text-white"
                          scrambledClassName="text-purple-300"
                          autoStart={hasScrolled}
                        />
                      </span>
                      <span className="text-xs sm:text-sm text-gray-200 truncate">
                        <ScrambleIn
                          text={edu.subtitle}
                          scrambleSpeed={20}
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
                      scrambleSpeed={10}
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
                scrambleSpeed={10}
                className="text-white"
                scrambledClassName="text-purple-300"
              />
            </div>
          }>
            <SkillsCloud />
          </Section>

          <Section id="projects" title={
            <ScrambleIn
              text="Projects"
              scrambleSpeed={12}
              scrambledLetterCount={3}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          }>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                title="EchoVault(WIP)"
                description="Echo Vault is an AI-powered memory capsule that securely stores and organizes personal data for easy recall and reflection."
                image="https://res.cloudinary.com/dpwqggym0/image/upload/v1746253136/Screenshot_2025-05-03_114842_wtuxhq.png"
                technologies={["React", "Node.js", "MongoDB", "Express"]}
                link="https://github.com/whysooharsh/EchoVault"
              />

              <ProjectCard
                title="Portfolio"
                description="This is my portfolio website that I built using React, TailwindCSS, and Framer Motion."
                image="https://res.cloudinary.com/dpwqggym0/image/upload/v1746253058/Screenshot_2025-05-03_114726_jfanvu.png"
                technologies={["React", "TailwindCSS", "Framer Motion", "TypeScript"]}
                link="https://github.com/whysooharsh/react-portfolio"
              />
            </div>
          </Section>

        <Section id="contact-me" title={
          <div className="text-center w-full">
            <ScrambleIn
              text="Contact Me"
              scrambleSpeed={15}
              className="text-white"
              scrambledClassName="text-purple-300"
            />
          </div>
        }>
          <p className="text-xl sm:text-2xl text-gray-200 font-medium mb-8 text-center">
            <ScrambleIn
              text="Drop a 'Hi' if you want to connect!"
              scrambleSpeed={18}
              className="text-gray-200"
              scrambledClassName="text-purple-300"
            />
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
