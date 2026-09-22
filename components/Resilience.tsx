"use client";

import { Reveal, SectionHeading, ParallaxImage } from "@/components/ui/Reveal";
import { RESILIENCE } from "@/content/site";

export function Resilience() {
  return (
    <section
      id="resilience"
      className="scroll-mt-20 border-t border-line/10 bg-coal"
    >
      <div className="mx-auto max-w-content px-6 py-16 md:px-16 md:py-24">
        <SectionHeading
          eyebrow={RESILIENCE.eyebrow}
          title={
            <>
              {RESILIENCE.titleA}{" "}
              <span className="italic text-accent">
                {RESILIENCE.titleAccent}
              </span>
            </>
          }
          lede={RESILIENCE.lede}
        />
        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-2">
          {RESILIENCE.panels.map((panel, i) => (
            <Reveal key={panel.title} delay={0.08 * i} className="h-full">
              <article className="h-full overflow-hidden rounded-3xl border border-line/10 bg-coal-card transition-colors duration-500 hover:border-accent/30">
                <div className="relative">
                  <ParallaxImage
                    src={panel.src}
                    alt={panel.alt}
                    className="aspect-[4/3] w-full"
                    amount={10}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,11,13,0.72), transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="absolute left-6 top-6 rounded-full border border-line/20 bg-coal/60 px-4 py-1.5 text-[11px] font-display font-semibold uppercase tracking-label text-ivory backdrop-blur-sm">
                    {panel.tag}
                  </span>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-editorial text-2xl text-ivory md:text-3xl">
                    {panel.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ivory-muted">
                    {panel.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
