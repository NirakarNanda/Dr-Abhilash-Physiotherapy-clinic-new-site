import Image from "next/image";
import { CLINIC, NAV_LINKS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080A]">
      <div className="mx-auto max-w-content px-6 py-16 md:px-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/15">
                <Image
                  src="/logo-emblem.png"
                  alt="Bijayalakshmi Physiotherapy Clinic emblem"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="leading-none">
                <span className="block font-display text-sm font-bold tracking-wide text-ivory">
                  BIJAYALAKSHMI
                </span>
                <span className="mt-1 block text-[10px] font-display uppercase tracking-label text-ivory-faint">
                  Physiotherapy Clinic
                </span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory-faint">
              {CLINIC.tagline}
            </p>
            <p className="mt-4 text-sm text-ivory-muted">
              {CLINIC.doctor} {CLINIC.doctorSuffix}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory-muted transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/anatomy" className="text-sm text-accent transition-colors hover:text-ivory">
                  3D Anatomy
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-display font-semibold uppercase tracking-label text-accent">
              Contact
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-ivory-muted">
              <p>
                {CLINIC.addressLines[0]},
                <br />
                {CLINIC.addressLines[1]}
              </p>
              <p>
                <a href={CLINIC.phoneHref} className="transition-colors hover:text-ivory">
                  {CLINIC.phoneDisplay}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] leading-relaxed text-ivory-faint/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {CLINIC.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl">
            3D skeleton: CT Derived Human Skeleton by Terrie Simmons-Ehrhardt,
            CC-BY 4.0. This site is for information only and is not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
