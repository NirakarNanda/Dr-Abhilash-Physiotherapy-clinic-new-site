"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { SERVICES, ALSO_OFFERED, type Service } from "@/content/site";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const featured = service.featured;
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5 md:p-10 ${
        featured
          ? "border-accent/40 bg-gradient-to-br from-coal-card to-[#1b211c]"
          : "border-line/10 bg-coal-card hover:border-accent/30"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-[10px] font-display font-bold uppercase tracking-label text-coal">
          At your home
        </span>
      )}
      <p className="text-[11px] font-display font-semibold uppercase tracking-label text-ivory-faint">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-4 font-editorial text-2xl leading-tight text-ivory md:text-[1.65rem]">
        {service.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-muted">
        {service.body}
      </p>
      <p className="mt-8 flex items-baseline gap-2 border-t border-line/10 pt-6">
        <span className={`font-editorial text-4xl ${featured ? "text-accent" : "text-ivory"}`}>
          {service.fee}
        </span>
        <span className="text-xs uppercase tracking-label text-ivory-faint">
          / {service.per}
        </span>
      </p>
    </article>
  );
}

export function Services() {
  const [featured, ...rest] = SERVICES;
  return (
    <section id="services" className="scroll-mt-20 bg-coal">
      <div className="mx-auto max-w-content px-6 py-16 md:px-16 md:py-24">
        <SectionHeading
          eyebrow="Services & fees"
          title={
            <>
              Everything your body needs,{" "}
              <span className="italic text-accent">priced honestly</span>
            </>
          }
          lede="One section, every service — from in-clinic sessions to full home visits. No hidden charges, no fine print."
        />

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-3">
          <Reveal className="lg:col-span-1" delay={0}>
            <ServiceCard service={featured} index={0} />
          </Reveal>
          {rest.slice(0, 2).map((s, i) => (
            <Reveal key={s.name} delay={0.08 * (i + 1)}>
              <ServiceCard service={s} index={i + 1} />
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rest.slice(2).map((s, i) => (
            <Reveal key={s.name} delay={0.08 * i}>
              <ServiceCard service={s} index={i + 3} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-line/10 bg-coal-soft/50 px-8 py-6">
            <p className="mr-2 text-[11px] font-display font-semibold uppercase tracking-label text-accent">
              Also available
            </p>
            {ALSO_OFFERED.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line/15 px-4 py-2 text-xs text-ivory-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
