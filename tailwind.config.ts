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
        bg: {
          DEFAULT: "#F7F5F0",
          secondary: "#ECE9E2",
        },
        ink: {
          DEFAULT: "#171717",
          muted: "#77736C",
        },
        accent: {
          DEFAULT: "#A8B7A1", // medical sage — primary accent, used sparingly
          warm: "#C9A68B", // warm clay accent, rarer still
        },
        coal: {
          DEFAULT: "#0A0B0D", // near-black canvas
          soft: "#101214",
          card: "#14171A",
        },
        ivory: {
          DEFAULT: "#F4F1EA",
          muted: "#B4B0A6",
          faint: "#8E8B83",
        },
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
