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
        "fixed bottom-4 flex h-16 items-end gap-4 rounded-2xl bg-black/80 p-4 shadow-lg backdrop-blur-lg",
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
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-transform duration-300 group-hover:scale-150">
        {children}
      </div>
    </div>
  );
} 