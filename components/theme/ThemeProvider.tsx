"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type SiteTheme = "dark" | "light";

const STORAGE_KEY = "hh-theme";

interface ThemeContextValue {
  theme: SiteTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Site-wide dark/light theme. Dark is the default experience — always,
 * on every first visit, regardless of the OS preference (by design: the
 * dark skeleton chapter is the site's identity). The choice persists in
 * localStorage. `document.documentElement.dataset.theme` is the single
 * source of truth for CSS; an inline script in the layout sets it before
 * first paint so there's no theme flash, and this effect keeps it (and
 * storage) in sync afterwards.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<SiteTheme>("dark");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") setTheme(stored);
    } catch {
      // Storage unavailable (private mode etc.) — stay on dark.
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore persistence failures; the theme still applies in-memory.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
