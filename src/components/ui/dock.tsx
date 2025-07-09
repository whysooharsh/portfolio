import * as React from "react";
import { cn } from "../../lib/utils";

interface DockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "left" | "right" | "middle";
}

interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Dock({ children, direction = "middle", className }: DockProps) {
  return (
    <div
      className={cn(
        "fixed bottom-4 flex h-14 md:h-16 items-center gap-1 md:gap-2 rounded-xl md:rounded-2xl  backdrop-filter bg-opacity-60 border border-gray-100 dark:bg-black/80 px-2 md:px-4 py-2 shadow-lg backdrop-blur-lg dark:border-white/10",
        direction === "left" && "left-2 md:left-4",
        direction === "right" && "right-2 md:right-4",
        direction === "middle" && "left-1/2 -translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DockIcon({ children, className }: DockIconProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center",
        className
      )}
    >
      <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-out group-hover:scale-110 md:group-hover:scale-125 dark:group-hover:bg-white/10">
        {children}
      </div>
    </div>
  );
}