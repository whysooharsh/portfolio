import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconBrandLeetcode,
  IconBook,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />,
      href: "/",
    },
    {
      title: "Blog",
      icon: <IconBook className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />,
      href: "/blogs",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
      href: "https://www.leetcode.com/whysooharsh/",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
      href: "https://linkedin.com/in/harsharma45",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      href: "https://twitter.com/whysooharsh",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      href: "https://github.com/whysooharsh",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 sm:bottom-8 md:bottom-10 lg:bottom-14 z-30 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-[90vw] w-full flex justify-center">
        <FloatingDock
          className="w-full max-w-[18rem] sm:max-w-[40rem] max-h-20 sm:max-h-24 px-2"
          items={links}
        />
      </div>
    </div>
  );
}