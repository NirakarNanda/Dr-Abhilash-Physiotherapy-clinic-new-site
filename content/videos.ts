/**
 * OUR VIDEOS — single source of truth for the "Our Videos" section.
 *
 * The clinic's videos will live somewhere else (YouTube channel, Drive,
 * etc.). When they are ready, drop entries into the VIDEOS array below —
 * no structural changes needed anywhere else:
 *
 *   { id: "intro", title: "Welcome to Bijayalakshmi Physiotherapy Clinic", url: "https://www.youtube.com/watch?v=XXXX" }
 *
 * Supported `url` forms: YouTube watch / share / shorts / embed URLs and
 * bare 11-char video IDs, plus direct .mp4 links. Thumbnails are optional;
 * without one the section renders an elegant numbered placeholder card.
 * While VIDEOS is empty, the section shows an intentional "coming soon"
 * treatment instead of a broken grid.
 */

export interface VideoEntry {
  /** Stable slug, e.g. "clinic-tour". Used for React keys. */
  id: string;
  title: string;
  description?: string;
  /** YouTube URL / bare ID, or a direct .mp4 URL. */
  url: string;
  /** Optional poster image URL. */
  thumbnail?: string;
}

export const VIDEOS: VideoEntry[] = [
  // Example (uncomment and fill in when the videos arrive):
  // {
  //   id: "clinic-tour",
  //   title: "A tour of Bijayalakshmi Physiotherapy Clinic",
  //   description: "Walk through the clinic with Dr. Abhilash Nanda.",
  //   url: "https://www.youtube.com/watch?v=REPLACE_ME",
  // },
];

export const VIDEOS_COPY = {
  eyebrow: "Our Videos",
  title: "Watch recovery happen",
  body: "Treatment walkthroughs, exercise guides and patient stories — straight from the clinic floor.",
  comingSoonTitle: "The cameras are warming up",
  comingSoonBody:
    "We are filming treatment walkthroughs, guided exercises and recovery stories. New videos land here as soon as they are ready.",
  notifyLabel: "Get notified at your visit",
} as const;

/** Normalize a YouTube URL / bare ID to an embed URL. Returns null for mp4s. */
export function toYouTubeEmbed(url: string): string | null {
  const m =
    url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/) ||
    (url.match(/^[\w-]{11}$/) ? [url, url] : null);
  if (!m) return null;
  return `https://www.youtube.com/embed/${m[1]}?rel=0`;
}

export function isDirectVideo(url: string): boolean {
  return /\.mp4(\?|$)/i.test(url);
}
