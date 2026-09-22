import type { Metadata } from "next";
import { Manrope, Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const editorial = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bijayalakshmi Physiotherapy Clinic (Healing Here) | Dr. Abhilash Nanda (PT), Sonepur",
  description:
    "Bijayalakshmi Physiotherapy Clinic (Healing Here) — personalized physiotherapy in Sonepur, Odisha by Dr. Abhilash Nanda (PT). Injury recovery, chronic pain management, sports rehabilitation and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${editorial.variable}`}
    >
      <head>
        {/* Pre-paint theme: dark is the default on every first visit.
            The stored choice ('hh-theme') drives both the clinic pages
            and /anatomy through one shared ThemeProvider. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hh-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body className="bg-coal font-body text-ivory antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
