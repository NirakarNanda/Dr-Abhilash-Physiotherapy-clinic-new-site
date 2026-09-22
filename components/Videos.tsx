"use client";

import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import {
  VIDEOS,
  VIDEOS_COPY,
  toYouTubeEmbed,
  isDirectVideo,
  type VideoEntry,
} from "@/content/videos";

function VideoCard({ video, index }: { video: VideoEntry; index: number }) {
  const embed = toYouTubeEmbed(video.url);
  const mp4 = !embed && isDirectVideo(video.url);
  return (
    <Reveal delay={0.07 * (index % 3)}>
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-coal-card transition-colors duration-500 hover:border-accent/30">
        <div className="relative aspect-video bg-black">
          {embed ? (
            <iframe
              src={embed}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : mp4 ? (
            <video
              src={video.url}
              controls
              preload="metadata"
              poster={video.thumbnail}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : video.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={video.thumbnail}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Watch ${video.title} (opens in a new tab)`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 transition-transform duration-500 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-accent" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
            </a>
          )}
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-display font-semibold uppercase tracking-label text-ivory backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-editorial text-xl text-ivory">{video.title}</h3>
          {video.description && (
            <p className="mt-2 text-sm leading-relaxed text-ivory-muted">
              {video.description}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/** Intentional "coming soon" treatment while VIDEOS is empty. */
function ComingSoon() {
  return (
    <div className="mt-14 md:mt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-coal-card/50 px-8 py-16 text-center md:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(168,183,161,0.08), transparent 70%)",
            }}
            aria-hidden="true"
          />
          {/* film-strip motif */}
          <div className="relative mx-auto mb-10 flex max-w-2xl justify-center gap-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block aspect-video w-full rounded-lg border border-white/10 bg-black/40 ${
                  i === 1 ? "border-accent/30" : ""
                }`}
              >
                <span className="flex h-full items-center justify-center">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                      i === 1
                        ? "border-accent/50 bg-accent/10"
                        : "border-white/15 bg-white/5"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={i === 1 ? "ml-0.5 text-accent" : "ml-0.5 text-ivory-faint"} aria-hidden="true">
                      <path d="M8 5.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                </span>
              </span>
            ))}
          </div>
          <h3 className="relative font-editorial text-3xl text-ivory md:text-4xl">
            {VIDEOS_COPY.comingSoonTitle}
          </h3>
          <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ivory-muted md:text-base">
            {VIDEOS_COPY.comingSoonBody}
          </p>
          <a
            href="#appointment"
            className="relative mt-8 inline-block rounded-full border border-accent/40 px-7 py-3 text-xs font-display font-bold uppercase tracking-label text-accent transition-colors hover:bg-accent hover:text-coal"
          >
            {VIDEOS_COPY.notifyLabel}
          </a>
        </div>
      </Reveal>
    </div>
  );
}

export function Videos() {
  return (
    <section id="videos" className="scroll-mt-20 bg-coal">
      <div className="mx-auto max-w-content px-6 py-24 md:px-16 md:py-36">
        <SectionHeading
          eyebrow={VIDEOS_COPY.eyebrow}
          title={
            <>
              Watch <span className="italic text-accent">recovery happen</span>
            </>
          }
          lede={VIDEOS_COPY.body}
          align="center"
        />
        {VIDEOS.length === 0 ? (
          <ComingSoon />
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
