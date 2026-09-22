import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Site-wide theme tokens. coal/ivory/accent/line are CSS-variable
           driven (rgb triplet + <alpha-value> so opacity modifiers keep
           working) — :root holds the dark defaults, [data-theme="light"]
           swaps them to the warm beige treatment. One toggle re-themes
           the whole clinic site coherently. */
        bg: {
          DEFAULT: "#F7F5F0",
          secondary: "#ECE9E2",
        },
        ink: {
          DEFAULT: "#171717",
          muted: "#77736C",
        },
        accent: {
          DEFAULT: "rgb(var(--site-accent) / <alpha-value>)", // medical sage — primary accent, used sparingly
          warm: "#C9A68B", // warm clay accent, rarer still
        },
        coal: {
          DEFAULT: "rgb(var(--site-bg) / <alpha-value>)", // page canvas
          soft: "rgb(var(--site-bg-soft) / <alpha-value>)",
          card: "rgb(var(--site-card) / <alpha-value>)",
        },
        ivory: {
          DEFAULT: "rgb(var(--site-ink) / <alpha-value>)", // primary text
          muted: "rgb(var(--site-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--site-ink-faint) / <alpha-value>)",
        },
        line: "rgb(var(--site-line) / <alpha-value>)", // hairline borders/dividers
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // Manrope — nav wordmarks, labels
        body: ["var(--font-body)", "sans-serif"], // Inter — UI text
        editorial: ["var(--font-editorial)", "Georgia", "serif"], // Fraunces — display headlines
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
