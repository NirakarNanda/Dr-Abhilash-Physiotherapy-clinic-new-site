"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { STEPS } from "@/content/site";

export function Steps() {
  return (
    <section className="bg-coal">
      <div className="mx-auto max-w-content px-6 py-16 md:px-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Care in <span className="italic text-accent">three steps</span>
            </>
          }
          lede="Just follow these simple steps — from your first call to your first session."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line/10 bg-line/10 md:mt-20 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.index}
              className="group relative bg-coal-card p-8 transition-colors duration-500 hover:bg-coal-soft md:p-10"
            >
              <Reveal delay={i * 0.1}>
                <p className="font-editorial text-6xl text-line/10 transition-colors duration-500 group-hover:text-accent/30 md:text-7xl">
                  {step.index}
                </p>
                <h3 className="mt-6 font-editorial text-2xl text-ivory md:text-[1.7rem]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
                  {step.body}
                </p>
                <span
                  className="mt-8 block h-px w-full bg-gradient-to-r from-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
