import { Moon, Sun } from "lucide-react";
import { useState, useEffect, forwardRef } from "react";
import { cn } from "../lib/utils";

export const ModeToggle = forwardRef<HTMLButtonElement, { className?: string }>(
  ({ className }, ref) => {
    const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "dark";
      }
      return "dark";
    });

    useEffect(() => {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);

    return (
      <button
        ref={ref}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={cn(
          "h-10 w-10 rounded-full bg-transparent p-2 hover:bg-gray-800/50",
          className
        )}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-white" />
        ) : (
          <Moon className="h-5 w-5 text-white" />
        )}
      </button>
    );
  }
);

ModeToggle.displayName = "ModeToggle"; 