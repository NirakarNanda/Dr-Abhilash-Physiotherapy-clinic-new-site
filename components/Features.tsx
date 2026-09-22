"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { FEATURES } from "@/content/site";

/** Minimal line icons — one per treatment, drawn in the sage accent. */
function FeatureIcon({ index }: { index: number }) {
  const paths = [
    // Kinesio taping — layered strips
    <path key="p" d="M4 7h9M4 12h13M4 17h9" />,
    // Vestibular — balance arcs
    <path key="p" d="M12 3v10M5 13a7 7 0 0 0 14 0M8.5 21h7" />,
    // Electrotherapy — pulse
    <path key="p" d="M3 12h4l2.5-6 4 12L16 12h5" />,
    // Dry needling — needle + point
    <path key="p" d="M5 19L15 9M15 9l2-2M17 7l-2 2M4 4l3 3" />,
    // Pilates — core circle
    <circle key="p" cx="12" cy="12" r="7" />,
    // Joint mobilization — interlocking arcs
    <path key="p" d="M8 5a5 5 0 0 1 8 8M16 19a5 5 0 0 1-8-8" />,
  ];
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      {paths[index % paths.length]}
    </svg>
  );
}

export function Features() {
  return (
    <section id="treatments" className="scroll-mt-20 border-y border-white/10 bg-coal-soft/40">
      <div className="mx-auto max-w-content px-6 py-24 md:px-16 md:py-36">
        <SectionHeading
          eyebrow="Key features"
          title={
            <>
              What makes us <span className="italic text-accent">more special</span>
            </>
          }
          lede="Modern, evidence-based techniques — chosen for your condition, explained in plain language, delivered one-on-one."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.name} delay={0.06 * (i % 3)}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-coal-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(168,183,161,0.18)" }}
                  aria-hidden="true"
                />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                  <FeatureIcon index={i} />
                </div>
                <h3 className="mt-6 font-editorial text-xl text-ivory md:text-2xl">
                  {f.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
                  {f.body}
                </p>
                <p className="mt-6 text-[11px] font-display font-semibold uppercase tracking-label text-ivory-faint/60">
                  {String(i + 1).padStart(2, "0")} / 06
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
