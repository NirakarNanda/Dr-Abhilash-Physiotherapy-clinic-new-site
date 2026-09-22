"use client";

import { Reveal } from "@/components/ui/Reveal";

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-coal">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--site-quote-glow)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-6 py-16 md:px-16 md:py-24">
        <Reveal>
          <p className="text-center text-[11px] font-display font-semibold uppercase tracking-label text-accent">
            Our promise
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="mx-auto mt-8 max-w-4xl text-center font-editorial text-4xl leading-[1.12] text-ivory md:text-7xl">
            “Always recover,{" "}
            <span className="italic text-accent">whenever it’s possible.</span>”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-ivory-muted">
            We also offer treatments that enhance your physical well-being —
            giving you the confidence boost you deserve.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
