import React from 'react';
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
} from "lucide-react";

export function HeroSection() {
  return (
    <div className="w-full py-10 md:py-20">
      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:max-w-2xl md:mx-auto px-4 sm:px-0">
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          <img
            className="w-24 h-24 object-cover rounded-full shadow-lg border-[2px] border-neutral-800 grayscale contrast-200"
            src="https://res.cloudinary.com/dlvjrvhak/image/upload/v1752088049/20250710_0035_Man_with_Glasses_remix_01jzr94rdeee2tkacernzj50jg_nqkirv.png"
            loading="lazy"
            alt="Harsh Sharma"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl dark:font-medium tracking-wide dark:text-white text-black mb-2">
            Harsh Sharma
          </h1>
          <p className="dark:text-gray-400 text-black mb-1 text-sm">
            Full-stack developer with a strong foundation in{" "}
            <span className="dark:text-white text-black dark:font-normal font-bold">C++</span>, 
            data structures, and the{" "}
            <span className="dark:text-white text-black dark:font-normal font-bold">MERN</span> stack.
          </p>
          <p className="dark:text-gray-400 text-black mb-3 text-sm">
            Outside tech, I read, write, sketch occasionally, and play chess.
          </p>

          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <a href="https://linkedin.com/in/harsharma45" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 dark:text-gray-500 text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com/harsh" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 dark:text-gray-500 text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/whysooharsh" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 dark:text-gray-500 text-black dark:hover:text-white transition-colors" />
            </a>
            <a href="mailto:imharsharma45@gmail.com">
              <Mail className="w-5 h-5 dark:text-gray-500 text-black dark:hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
