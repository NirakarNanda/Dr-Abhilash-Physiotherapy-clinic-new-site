"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-coal/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:h-[72px] md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Healing Here — home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image
              src="/logo-emblem.png"
              alt="Healing Here clinic emblem"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-sm font-bold tracking-wide text-ivory">
              HEALING&nbsp;HERE
            </span>
            <span className="mt-1 block text-[10px] font-display uppercase tracking-label text-ivory-faint">
              Physiotherapy Clinic
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-[11px] font-display font-medium uppercase tracking-label transition-colors ${
                  link.label === "3D Anatomy"
                    ? "text-accent hover:text-ivory"
                    : "text-ivory-muted hover:text-ivory"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="hidden rounded-full bg-ivory px-5 py-2.5 text-[11px] font-display font-bold uppercase tracking-label text-coal transition-colors hover:bg-accent sm:inline-block"
          >
            Book appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M2 2l12 12M14 2L2 14" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <nav className="border-t border-white/10 bg-coal/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-white/5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-xs font-display font-medium uppercase tracking-label text-ivory-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-ivory px-5 py-3 text-center text-[11px] font-display font-bold uppercase tracking-label text-coal"
              >
                Book appointment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
