"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { gsap, ScrollTrigger, initScroll, prefersReducedMotion } from "@/lib/scroll";

/* ------------------------------------------------------------------ */
/* Reveal — once-fired rise/fade on scroll into view.                  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initScroll();
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 86%",
          once: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeading — eyebrow rule + editorial title + optional lede.    */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <Reveal>
        <p
          className={`flex items-center gap-3 text-[11px] font-display font-semibold uppercase tracking-label text-accent ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="inline-block h-px w-8 bg-accent/60" aria-hidden="true" />
          {eyebrow}
          {centered && (
            <span className="inline-block h-px w-8 bg-accent/60" aria-hidden="true" />
          )}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-editorial text-4xl leading-[1.05] text-ivory md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 max-w-xl text-base leading-relaxed text-ivory-muted ${
              centered ? "mx-auto" : ""
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ParallaxImage — scrubbed drift inside an overflow-hidden frame.     */
/* ------------------------------------------------------------------ */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  amount?: number;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    initScroll();
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;
    if (prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      img,
      { yPercent: -amount / 2 },
      {
        yPercent: amount / 2,
        ease: "none",
        scrollTrigger: {
          trigger: frame,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [amount]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full scale-[1.15] object-cover ${imgClassName ?? ""}`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* StatCounter — animated count-up, fired once on entry.               */
/* ------------------------------------------------------------------ */
export function StatCounter({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    initScroll();
    const el = ref.current;
    if (!el) return;
    const render = (v: number) =>
      `${prefix}${v.toFixed(decimals)}${suffix}`;
    if (prefersReducedMotion()) {
      el.textContent = render(end);
      return;
    }
    const state = { v: 0 };
    const tween = gsap.to(state, {
      v: end,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = render(state.v);
      },
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — slow infinite ticker (pauses under reduced motion via CSS) */
/* ------------------------------------------------------------------ */
export function Marquee({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-0">
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div > div {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export { ScrollTrigger };
