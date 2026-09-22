"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { REVIEWS, CLINIC } from "@/content/site";

function Stars() {
  return (
    <p className="flex gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-accent"
        >
          <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45 6.2 20.5l1.1-6.47L2.6 9.45l6.5-.95L12 2.6z" />
        </svg>
      ))}
    </p>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-y border-white/10 bg-coal-soft/40">
      <div className="mx-auto max-w-content px-6 py-24 md:px-16 md:py-36">
        <SectionHeading
          eyebrow="Patient stories"
          title={
            <>
              What our clients <span className="italic text-accent">say about us</span>
            </>
          }
          lede={`A ${CLINIC.rating} rating across ${CLINIC.reviewCount} Google reviews — in their own words.`}
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={0.06 * (i % 3)}
              className={i % 3 === 1 ? "lg:mt-10" : ""}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-coal-card p-8 transition-colors duration-500 hover:border-accent/30">
                <Stars />
                <blockquote className="mt-5 flex-1 font-editorial text-lg leading-relaxed text-ivory">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-editorial text-sm text-accent">
                    {r.name.charAt(0)}
                  </span>
                  <span className="text-sm font-medium text-ivory-muted">{r.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
