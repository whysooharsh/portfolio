import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconLayoutList,
  IconBook,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="..." />,
      href: "/",
    },
    {
      title: "Blog",
      icon: <IconBook className="..." />,
      href: "/blogs",
    },
    {
      title: "Projects",
      icon: <IconLayoutList className="..." />,
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="..." />,
      href: "https://linkedin.com/in/harsharma45",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 dark:text-sky-300" />,
      href: "https://twitter.com/whysooharsh",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-200 dark:text-neutral-100" />,
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