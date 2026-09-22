"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { CLINIC } from "@/content/site";

export function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-20 border-t border-line/10 bg-coal-soft/40">
      <div className="mx-auto max-w-content px-6 py-16 md:px-16 md:py-24">
        <SectionHeading
          eyebrow="Visit our clinic"
          title={
            <>
              Find your way to <span className="italic text-accent">better movement</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-line/10 bg-coal-card p-8 md:p-12">
              <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
                Address
              </p>
              <address className="mt-4 font-editorial text-2xl not-italic leading-snug text-ivory md:text-3xl">
                {CLINIC.legalName}
                <br />
                {CLINIC.addressLines[0]},
                <br />
                {CLINIC.addressLines[1]}
              </address>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-accent/40 px-7 py-3 text-xs font-display font-bold uppercase tracking-label text-accent transition-colors hover:bg-accent hover:text-coal"
              >
                Get directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
              <p className="mt-auto pt-10 text-sm leading-relaxed text-ivory-muted">
                Easy to reach from anywhere in Sonepur — look for us near the
                RTO office at Patabhadi.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-line/10 bg-coal-card p-8 md:p-12">
              <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
                Clinic hours
              </p>
              <ul className="mt-6 flex-1 divide-y divide-line/10">
                {CLINIC.hours.map((h) => (
                  <li key={h.days} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-editorial text-lg text-ivory">{h.days}</span>
                    <span className="text-right text-sm text-ivory-muted">{h.time}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CLINIC.phoneHref}
                className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-display font-semibold uppercase tracking-label text-ivory transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line/15">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                  </svg>
                </span>
                {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
