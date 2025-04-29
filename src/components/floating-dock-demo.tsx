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
        <IconHome className="h-full w-full text-neutral-200 dark:text-neutral-100" />
      ),
      href: "#home",
    },
    {
      title: "Blog",
      icon: (
        <IconBook className="h-full w-full text-neutral-200 dark:text-neutral-100" />
      ),
      href: "/blogs",
    },
    {
      title: "Projects",
      icon: (
        <IconLayoutList className="h-full w-full text-neutral-200 dark:text-neutral-100" />
      ),
      href: "#projects",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-blue-400 dark:text-blue-300" />
      ),
      href: "https://linkedin.com/in/harsharma45",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-sky-400 dark:text-sky-300" />
      ),
      href: "https://twitter.com/whysooharsh",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-200 dark:text-neutral-100" />
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
          items={links}
        >
          {links.map((item) => (
            <div key={item.title} className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-none">
              {item.href.startsWith("/")
                ? (
                    <Link
                      to={item.href}
                      className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-none"
                    >
                      <div className="h-7 w-7">{item.icon}</div>
                    </Link>
                  )
                : (
                    <a
                      href={item.href}
                      className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-none"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <div className="h-7 w-7">{item.icon}</div>
                    </a>
                  )
              }
            </div>
          ))}
        </FloatingDock>
      </div>
    </div>
  );
}
