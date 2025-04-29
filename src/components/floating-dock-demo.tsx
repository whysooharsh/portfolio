import * as React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconLayoutList,
  IconBook,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-7 w-7 text-neutral-200 dark:text-neutral-100" />
      ),
      href: "#home",
    },
    {
      title: "Blog",
      icon: (
        <IconBook className="h-7 w-7 text-neutral-200 dark:text-neutral-100" />
      ),
      href: "/blogs",
    },
    {
      title: "Projects",
      icon: (
        <IconLayoutList className="h-7 w-7 text-neutral-200 dark:text-neutral-100" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-7 w-7 text-blue-400 dark:text-blue-300" />
      ),
      href: "https://linkedin.com/in/harsharma45",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-7 w-7 text-sky-400 dark:text-sky-300" />
      ),
      href: "https://twitter.com/whysooharsh",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-7 w-7 text-neutral-200 dark:text-neutral-100" />
      ),
      href: "https://github.com/whysooharsh",
    },
  ];

  return (
    <div className="fixed bottom-16 bg-transparent inset-x-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <FloatingDock
          desktopClassName="h-36 pb-8 bg-black/80 border-none shadow-2xl backdrop-blur-xl"
          mobileClassName="translate-y-0 h-28 bg-black/80 border-none shadow-2xl backdrop-blur-xl"
          items={links.map((item) => ({
            ...item,
            element: item.href.startsWith("/") ? (
              <Link
                to={item.href}
                className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-none"
              >
                {item.icon}
              </Link>
            ) : (
              <a
                href={item.href}
                className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          }))}
        />
      </div>
    </div>
  );
}
