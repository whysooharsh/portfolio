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
        "fixed bottom-4 flex h-16 items-center gap-2 rounded-2xl bg-black/80 px-4 py-2 shadow-lg backdrop-blur-lg border border-white/10",
        direction === "left" && "left-4",
        direction === "right" && "right-4",
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
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-transparent transition-all duration-300 ease-out group-hover:scale-125 group-hover:bg-white/10">
        {children}
      </div>
    </div>
  );
}