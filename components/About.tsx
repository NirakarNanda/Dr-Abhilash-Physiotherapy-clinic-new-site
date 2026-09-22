"use client";

import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { CLINIC } from "@/content/site";

const CREDENTIALS = [
  {
    title: "BPT — Neelachal Institute of Medical Sciences",
    body: "Graduated in Physiotherapy from the College of Physiotherapy, Bhubaneswar — a solid foundation in physical therapy principles and techniques.",
  },
  {
    title: "Internship — Sum Ultimate, Bhubaneswar",
    body: "Specialized in COVID-19 rehabilitation, honing skills in managing complex recovery cases with effective, compassionate care.",
  },
  {
    title: "1 : 1 personal care",
    body: "Every session is one-on-one. No hand-offs, no rushed slots — your plan is built around your body and your goals.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-coal">
      <div className="mx-auto max-w-content px-6 py-24 md:px-16 md:py-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="About the doctor"
              title={
                <>
                  {CLINIC.doctor}{" "}
                  <span className="italic text-accent">{CLINIC.doctorSuffix}</span>
                </>
              }
            />
            <Reveal delay={0.15}>
              <div className="relative mt-10 aspect-square max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-coal-card">
                <Image
                  src="/logo-emblem.png"
                  alt="Bijayalakshmi Physiotherapy Clinic emblem"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,11,13,0.55), transparent 55%)",
                  }}
                  aria-hidden="true"
                />
                <p className="absolute bottom-5 left-6 right-6 font-editorial text-lg italic text-ivory">
                  “Care that treats the person, not just the pain.”
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="bg-coal-card p-8 md:p-10">
              <Reveal>
                <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
                  My academics
                </p>
                <p className="mt-4 text-base leading-relaxed text-ivory-muted">
                  I graduated with a degree in Physiotherapy from Neelachal
                  Institute of Medical Sciences, College of Physiotherapy,
                  Bhubaneswar — where I gained a solid foundation in physical
                  therapy principles and techniques. Following graduation, I
                  completed an internship at Sum Ultimate in Bhubaneswar,
                  specializing in COVID-19 rehabilitation and complex recovery
                  cases.
                </p>
              </Reveal>
            </div>
            {CREDENTIALS.map((c, i) => (
              <div key={c.title} className="bg-coal-card p-8 md:p-10">
                <Reveal delay={0.06 * i}>
                  <p className="flex items-baseline gap-4">
                    <span className="font-editorial text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-editorial text-xl text-ivory md:text-2xl">
                      {c.title}
                    </span>
                  </p>
                  <p className="mt-3 pl-9 text-sm leading-relaxed text-ivory-muted">
                    {c.body}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
