"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { ScrollTrigger, initScroll } from "@/lib/scroll";
import { anatomyStore } from "@/lib/anatomyStore";
import { ANATOMY_TRACK_VH } from "@/components/anatomy/anatomyData";
import { AnatomyLabels } from "@/components/anatomy/AnatomyLabels";
import { ExplodedLabels } from "@/components/anatomy/ExplodedLabels";
import { AnatomyProgress } from "@/components/anatomy/AnatomyProgress";
import { ScrollHint } from "@/components/anatomy/ScrollHint";
import { useReducedMotion } from "@/components/anatomy/useReducedMotion";

// The Canvas touches window/WebGL — keep it out of the server bundle.
const AnatomyScene = dynamic(
  () => import("@/components/anatomy/AnatomyScene").then((m) => m.AnatomyScene),
  { ssr: false }
);

// Film grain — a whisper of texture over the dark chapter, Aceternity-style.
// Inline SVG turbulence as a data URI; no extra asset to ship.
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

export function AnatomyExperience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    initScroll();
    if (!trackRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top top",
      end: "bottom bottom",
      // No `pin` here on purpose — the sticky canvas below handles pinning
      // via plain CSS `position: sticky`, so ScrollTrigger only has to
      // measure progress, not fight the browser's own scroll pipeline
      // (Section 23: "the user should always be able to scroll naturally").
      onUpdate: (self) => {
        anatomyStore.setProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="anatomy"
      ref={trackRef}
      style={{ height: `${ANATOMY_TRACK_VH}vh` }}
      className="relative bg-[var(--theme-bg)] transition-colors duration-300"
      aria-label="Interactive human anatomy walkthrough"
    >
      <div className="viewport-full sticky top-0 w-full overflow-hidden bg-[var(--theme-bg)] transition-colors duration-300">
        <AnatomyScene />

        {/* Aceternity-style spotlight: a soft sage glow behind the skeleton,
            lifting it off the near-black canvas. Above the WebGL canvas,
            below the text overlays. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{ background: "var(--theme-spotlight)" }}
        />
        {/* Vignette: gently darkens the frame edges for a studio feel. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[6]"
          style={{ background: "var(--theme-vignette)" }}
        />
        {/* Film grain at a whisper — texture without noise. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[6] opacity-[var(--theme-grain-opacity)]"
          style={{ backgroundImage: GRAIN_URI }}
        />

        <AnatomyLabels />
        <ExplodedLabels />
        <AnatomyProgress />
        <ScrollHint />

        {/* CC-BY attribution for the 3D skeleton model (required by the
            license). Kept subtle in the corner of the experience. */}
        <p className="pointer-events-none absolute bottom-3 left-4 z-10 max-w-[240px] font-body text-[10px] leading-snug text-[var(--theme-credit)] transition-colors duration-300">
          3D skeleton: &ldquo;CT Derived Human Skeleton&rdquo; by Terrie
          Simmons-Ehrhardt,{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto underline decoration-[var(--theme-credit)] underline-offset-2 hover:text-[var(--theme-credit-hover)]"
          >
            CC-BY 4.0
          </a>
        </p>

        {/* Content required for screen readers / no-motion users lives here
            too, so no information exists only inside the 3D animation
            (Section 20). Visually hidden but present in the DOM. */}
        <span className="sr-only">
          Scroll to explore the skull, spine, thoracic cage, shoulder, arm,
          hand, pelvis, hip, knee, ankle and foot.
        </span>

        {reducedMotion && (
          <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-6">
            <p className="max-w-sm text-center text-xs text-[var(--theme-muted)]">
              Motion is reduced based on your system settings. Scroll to move
              through each region.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
