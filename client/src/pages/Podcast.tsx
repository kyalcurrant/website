/**
 * KYAL CURRANT — PODCAST PAGE
 * Sacred Earth Premium Design System
 * "The To Be Podcast" — RSS feed ready scaffold
 * Replace RSS_FEED_URL with the actual feed URL when available.
 */

import { useEffect, useState } from "react";

// ── Scroll-reveal hook ─────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Types ──────────────────────────────────────────────────────────────────
interface Episode {
  title: string;
  description: string;
  pubDate: string;
  duration: string;
  audioUrl: string;
  episodeNumber?: string;
}

// ── RSS Parser ─────────────────────────────────────────────────────────────
// TODO: Replace with your actual RSS feed URL when available
const RSS_FEED_URL = "https://anchor.fm/s/eee2180c/podcast/rss";

async function fetchEpisodes(): Promise<Episode[]> {
  if (!RSS_FEED_URL) return [];
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`
    );
    const data = await res.json();
    if (data.status !== "ok") return [];
    return data.items.map((item: Record<string, string>, idx: number) => ({
      title: item.title || "",
      description: item.description?.replace(/<[^>]+>/g, "").slice(0, 200) + "..." || "",
      pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" }) : "",
      duration: item.itunes_duration || "",
      audioUrl: item.enclosure || item.link || "",
      episodeNumber: String(data.items.length - idx).padStart(3, "0"),
    }));
  } catch {
    return [];
  }
}

// ── Placeholder episodes (shown until RSS feed is connected) ───────────────
const PLACEHOLDER_EPISODES: Episode[] = [
  {
    title: "Why Your Body Is Trying to Save You",
    description: "Kyal unpacks the connection between unexpressed emotion, nervous system dysregulation, and the physical injuries that keep showing up in high-performing leaders.",
    pubDate: "Coming Soon",
    duration: "",
    audioUrl: "",
    episodeNumber: "001",
  },
  {
    title: "The Disability That Set Me Free",
    description: "The story behind Disabled Delusion — how growing up with a disability became the greatest teacher Kyal ever had, and what it means for your own perceived limitations.",
    pubDate: "Coming Soon",
    duration: "",
    audioUrl: "",
    episodeNumber: "002",
  },
  {
    title: "Somatic Intelligence for Leaders",
    description: "What is somatic intelligence, why does it matter more than strategy, and how do you start developing it? Kyal breaks it down in plain language.",
    pubDate: "Coming Soon",
    duration: "",
    audioUrl: "",
    episodeNumber: "003",
  },
];

// ── Podcast Player ─────────────────────────────────────────────────────────
function EpisodeCard({ ep, index }: { ep: Episode; index: number }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!ep.audioUrl) return;
    if (!audioRef[0]) {
      audioRef[0] = new Audio(ep.audioUrl);
      audioRef[0].onended = () => setPlaying(false);
    }
    if (playing) {
      audioRef[0].pause();
      setPlaying(false);
    } else {
      audioRef[0].play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="reveal flex gap-5 p-6 md:p-8"
      style={{
        background: index % 2 === 0 ? "oklch(0.22 0.055 155)" : "oklch(0.20 0.05 155)",
        borderBottom: "1px solid oklch(0.72 0.12 75 / 0.12)",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Episode number */}
      <div className="flex-shrink-0 w-14 text-right pt-1">
        <span
          className="font-display text-xs font-bold"
          style={{ color: "oklch(0.72 0.12 75 / 0.5)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.1em" }}
        >
          {ep.episodeNumber}
        </span>
      </div>

      {/* Play button */}
      <button
        onClick={togglePlay}
        className="flex-shrink-0 w-11 h-11 flex items-center justify-center transition-all"
        style={{
          background: ep.audioUrl ? "oklch(0.72 0.12 75)" : "oklch(0.35 0.04 75 / 0.4)",
          borderRadius: "50%",
          cursor: ep.audioUrl ? "pointer" : "default",
        }}
        aria-label={playing ? "Pause episode" : "Play episode"}
        disabled={!ep.audioUrl}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="oklch(0.18 0.05 155)">
            <rect x="2" y="1" width="4" height="12" rx="1" />
            <rect x="8" y="1" width="4" height="12" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="oklch(0.18 0.05 155)">
            <path d="M3 1.5L12 7L3 12.5V1.5Z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3
            className="font-display text-lg leading-snug"
            style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}
          >
            {ep.title}
          </h3>
          {ep.duration && (
            <span
              className="flex-shrink-0 text-xs px-2 py-0.5"
              style={{
                color: "oklch(0.72 0.12 75)",
                border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {ep.duration}
            </span>
          )}
        </div>
        <p
          className="text-sm mb-3"
          style={{ color: "oklch(0.70 0.01 75)", lineHeight: "1.7", fontFamily: "'DM Sans', sans-serif" }}
        >
          {ep.description}
        </p>
        {ep.pubDate && (
          <p
            className="text-xs"
            style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em" }}
          >
            {ep.pubDate}
          </p>
        )}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Podcast() {
  useReveal();
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEpisodes().then((eps) => {
      setEpisodes(eps.length > 0 ? eps : PLACEHOLDER_EPISODES);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.18 0.05 155)", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-50"
        style={{ background: "oklch(0.14 0.04 155)", borderBottom: "1px solid oklch(0.72 0.12 75 / 0.15)" }}
      >
        <div className="container flex items-center justify-between py-4">
          <a
            href="/"
            className="font-display text-lg tracking-wide"
            style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif", textDecoration: "none" }}
          >
            Kyal Currant
          </a>
          <a
            href="/#retreat"
            className="text-xs px-5 py-2.5 transition-all"
            style={{
              background: "oklch(0.72 0.12 75)",
              color: "oklch(0.14 0.04 155)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ padding: "6rem 0 4rem" }}>
        <div className="container">
          <div className="max-w-2xl reveal">
            <p
              className="text-xs mb-5 tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.18em" }}
            >
              The Podcast
            </p>
            <h1
              className="font-display mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "oklch(0.96 0.015 75)",
              }}
            >
              The To Be<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>Podcast.</em>
            </h1>
            <p
              className="font-body text-lg"
              style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", maxWidth: "520px", fontFamily: "'DM Sans', sans-serif" }}
            >
              Conversations about what it means to be human, to lead with your whole body, and to build a life that actually feels like yours. Hosted by Kyal Currant.
            </p>

            {/* Subscribe links — add real URLs when available */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "Spotify", href: "#", icon: "S" },
                { label: "Apple Podcasts", href: "#", icon: "A" },
                { label: "RSS Feed", href: RSS_FEED_URL || "#", icon: "R" },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs transition-all"
                  style={{
                    border: "1px solid oklch(0.72 0.12 75 / 0.35)",
                    color: "oklch(0.85 0.01 75)",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.72 0.12 75)";
                    e.currentTarget.style.color = "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.72 0.12 75 / 0.35)";
                    e.currentTarget.style.color = "oklch(0.85 0.01 75)";
                  }}
                >
                  <span
                    className="w-5 h-5 flex items-center justify-center text-xs font-bold"
                    style={{ background: "oklch(0.72 0.12 75 / 0.2)", color: "oklch(0.72 0.12 75)" }}
                  >
                    {platform.icon}
                  </span>
                  {platform.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ borderTop: "1px solid oklch(0.72 0.12 75 / 0.15)" }} />

      {/* ── Episode List ── */}
      <section style={{ padding: "3rem 0 6rem" }}>
        <div className="container">
          <div className="flex items-center justify-between mb-8 reveal">
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.18em" }}
            >
              {loading ? "Loading episodes..." : `All Episodes`}
            </p>
            {!RSS_FEED_URL && (
              <span
                className="text-xs px-3 py-1"
                style={{
                  background: "oklch(0.72 0.12 75 / 0.15)",
                  color: "oklch(0.72 0.12 75)",
                  fontFamily: "'DM Sans', sans-serif",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                }}
              >
                RSS Feed Pending
              </span>
            )}
          </div>

          {loading ? (
            <div className="py-20 text-center" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
              Loading episodes...
            </div>
          ) : (
            <div style={{ border: "1px solid oklch(0.72 0.12 75 / 0.15)" }}>
              {episodes.map((ep, i) => (
                <EpisodeCard key={ep.title} ep={ep} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "oklch(0.22 0.055 155)", padding: "5rem 0", borderTop: "1px solid oklch(0.72 0.12 75 / 0.15)" }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center reveal">
            <p
              className="text-xs mb-5 tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.18em" }}
            >
              Ready to Go Deeper?
            </p>
            <h2
              className="font-display mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              The podcast is the beginning.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>The retreat is the work.</em>
            </h2>
            <p
              className="font-body mb-8"
              style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}
            >
              Three days on sacred land in Currumbin. Maximum 7 people. The most transformative experience you will ever have as a leader.
            </p>
            <a
              href="/#retreat"
              className="inline-block px-8 py-4 text-sm font-semibold transition-all"
              style={{
                background: "oklch(0.72 0.12 75)",
                color: "oklch(0.14 0.04 155)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "oklch(0.80 0.14 75)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "oklch(0.72 0.12 75)")}
            >
              Apply for the Retreat
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: "oklch(0.14 0.04 155)", borderTop: "1px solid oklch(0.72 0.12 75 / 0.15)", padding: "2.5rem 0" }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}>
            Kyal Currant
          </p>
          <a href="/" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", textDecoration: "none" }}>
            ← Back to main site
          </a>
          <p className="font-body text-xs" style={{ color: "oklch(0.4 0.02 75)", fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Kyal Currant
          </p>
        </div>
      </footer>
    </div>
  );
}
