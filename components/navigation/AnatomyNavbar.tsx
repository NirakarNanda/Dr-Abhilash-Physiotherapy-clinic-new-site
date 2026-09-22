"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";

const LINKS = [
  { label: "Clinic", href: "/" },
  { label: "Anatomy", href: "#anatomy" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit", href: "/#visit" },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.4 14.2A8.5 8.5 0 0 1 9.8 3.6a8.5 8.5 0 1 0 10.6 10.6Z" />
    </svg>
  );
}

export function AnatomyNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  // The page is now the dark anatomy chapter alone, so the chrome simply
  // follows the active theme instead of tracking section boundaries.
  const darkChrome = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        darkChrome
          ? "bg-[#0A0B0D]/85 backdrop-blur-sm"
          : scrolled
            ? "bg-bg/85 backdrop-blur-sm"
            : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-16">
        <a
          href="#top"
          aria-label="Bijayalakshmi Physiotherapy Clinic — 3D anatomy"
          className="flex items-center gap-3"
        >
          <span className="relative block h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/logo-emblem.png"
              alt="Bijayalakshmi Physiotherapy Clinic emblem"
              fill
              sizes="32px"
              className="object-cover"
            />
          </span>
          <span
            className={`font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${
              darkChrome ? "text-[#F4F1EA]" : "text-ink"
            }`}
          >
            BIJAYALAKSHMI
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-xs font-body uppercase tracking-label transition-colors duration-300 ${
                  darkChrome
                    ? "text-[#B4B0A6] hover:text-[#F4F1EA]"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300 ${
              darkChrome
                ? "border-white/20 text-[#F4F1EA] hover:border-white/50"
                : "border-ink/15 text-ink hover:border-ink/40"
            }`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="/#appointment"
            className={`rounded-full border px-4 py-2 text-xs font-body uppercase tracking-label transition-colors duration-300 ${
              darkChrome
                ? "border-white/20 text-[#F4F1EA] hover:border-white/50"
                : "border-ink/15 text-ink hover:border-ink/40"
            }`}
          >
            Book a consultation
          </a>
        </div>
      </nav>
    </header>
  );
}
