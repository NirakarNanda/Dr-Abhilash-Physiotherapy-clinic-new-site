"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CLINIC } from "@/content/site";

export function AppointmentCTA() {
  return (
    <section id="appointment" className="relative scroll-mt-20 overflow-hidden bg-coal">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(168,183,161,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-6 py-28 text-center md:px-16 md:py-44">
        <Reveal>
          <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
            Make an appointment
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-3xl font-editorial text-4xl leading-[1.05] text-ivory md:text-7xl">
            Consult with your <span className="italic text-accent">physiotherapist</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-muted">
            Call for an appointment, get your date &amp; serial, and start
            treatment the same day. Your recovery begins with one conversation.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-sm font-display font-bold uppercase tracking-label text-coal transition-colors hover:bg-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
              </svg>
              {CLINIC.phoneDisplay}
            </a>
            <a
              href="#visit"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-display font-bold uppercase tracking-label text-ivory transition-colors hover:border-accent hover:text-accent"
            >
              Visit the clinic
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-8 text-xs uppercase tracking-label text-ivory-faint">
            Mon – Sat · 8:00 AM – 8:00 PM &nbsp;·&nbsp; Sun · 8:00 AM – 12:00 PM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
