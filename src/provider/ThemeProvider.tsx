"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);
const changeEvent = "portfolio-theme-change";
let memoryTheme: Theme | undefined;

function getTheme(): Theme {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("theme");
  } catch {
    // Theme switching remains available when browser storage is blocked.
  }
  if (memoryTheme) return memoryTheme;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onStorage = (event: StorageEvent) => {
    if (event.key === "theme" || event.key === null) {
      memoryTheme = undefined;
      onChange();
    }
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", onChange);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    memoryTheme = getTheme() === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", memoryTheme);
    } catch {
      // Keep the in-memory preference for this visit.
    }
    window.dispatchEvent(new Event(changeEvent));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
