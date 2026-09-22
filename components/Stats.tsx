"use client";

import { Reveal, StatCounter } from "@/components/ui/Reveal";
import { CLINIC } from "@/content/site";

const STATS = [
  { end: 5, decimals: 1, suffix: "", label: "Google rating", sub: "across patient reviews" },
  { end: 76, decimals: 0, suffix: "+", label: "Five-star reviews", sub: "and counting" },
  { end: 6, decimals: 0, suffix: "", label: "Specialist services", sub: "under one roof" },
];

export function Stats() {
  return (
    <section className="border-y border-line/10 bg-coal-soft/60">
      <div className="mx-auto grid max-w-content grid-cols-1 divide-y divide-line/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-16">
        {STATS.map((s, i) => (
          <div key={s.label} className="px-2 py-10 md:py-14">
            <Reveal delay={i * 0.08}>
              <p className="font-editorial text-5xl text-ivory md:text-6xl">
                <StatCounter end={s.end} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs font-display font-semibold uppercase tracking-label text-accent">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-ivory-faint">{s.sub}</p>
            </Reveal>
          </div>
        ))}
      </div>
      <p className="sr-only">
        {CLINIC.legalName} holds a {CLINIC.rating} rating from {CLINIC.reviewCount} Google reviews.
      </p>
    </section>
  );
}
