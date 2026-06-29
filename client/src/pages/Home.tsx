/**
 * KYAL CURRANT — SACRED EARTH PREMIUM DESIGN SYSTEM
 * StoryBrand Structure: Hero → Problem → Guide → Plan → CTA → Failure/Success → Testimonials → Offer → Lead Magnet → Footer
 * Colours: Forest green (#1C3A2E equiv) · Warm cream · Gold/amber
 * Typography: Playfair Display (headlines) + DM Sans (body)
 * Philosophy: Premium restraint. Every word earns its place.
 */

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

// ── Image asset paths (manus-storage) ──────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/hero-bg-9UmPLQHarHzy248Fjoxc7w.webp";
const RETREAT_SCENE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/retreat-scene-BvmqVEMuYTqZ5A3yoqqdqW.webp";
const LAND_WIDE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/land-wide-7ua9sbYcxvSERt8YaYzVsm.webp";
const KYAL_1 = "/manus-storage/kyal-1_b328b359.webp";
const KYAL_2 = "/manus-storage/kyal-top-cropped_0dddb969.webp";
const KYAL_3 = "/manus-storage/kyal-3_30e3d200.webp";
const KYAL_4 = "/manus-storage/kyal-speaking-cropped_7e5efa01.webp";
const KYAL_7 = "/manus-storage/kyal-7_cf76233f.webp";

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
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Sticky nav scroll state ────────────────────────────────────────────────
function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

// ── Lead capture modal ─────────────────────────────────────────────────────
function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "oklch(0.12 0.04 155 / 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-8 md:p-10"
        style={{ background: "oklch(0.18 0.05 155)", border: "1px solid oklch(0.72 0.12 75 / 0.35)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-cream opacity-50 hover:opacity-100 text-xl font-light"
          style={{ color: "oklch(0.96 0.015 75)" }}
        >
          ×
        </button>
        {!submitted ? (
          <>
            <p className="section-label mb-4">Free Resource</p>
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-3" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}>
              The Body Knows First
            </h3>
            <p className="font-body text-sm mb-6" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.7" }}>
              A free audio guide: 5 somatic practices that help high-performing leaders reconnect with their body, reduce physical breakdown, and lead from alignment — not adrenaline.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                placeholder="Your first name"
                required
                className="w-full px-4 py-3 text-sm font-body outline-none"
                style={{
                  background: "oklch(0.28 0.06 155)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  color: "oklch(0.96 0.015 75)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 text-sm font-body outline-none"
                style={{
                  background: "oklch(0.28 0.06 155)",
                  border: "1px solid oklch(0.72 0.12 75 / 0.3)",
                  color: "oklch(0.96 0.015 75)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <button type="submit" className="btn-gold w-full mt-1">
                Send Me the Guide
              </button>
            </form>
            <p className="text-xs mt-4 opacity-40" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'DM Sans', sans-serif" }}>
              No spam. Unsubscribe any time.
            </p>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="font-display text-2xl mb-3" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}>
              It's on its way.
            </h3>
            <p className="text-sm" style={{ color: "oklch(0.75 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
              Check your inbox. The guide will be there shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function Home() {
  useReveal();
  const scrolled = useScrolled();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <Header scrolled={scrolled} />

      {/* ════════════════════════════════════════════════════
          HERO — StoryBrand: The Hero's World
      ════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "oklch(0.12 0.04 155 / 0.72)" }} />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.18 0.05 155))" }} />

        <div className="relative container pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <p className="section-label mb-6 reveal">Aspiring Entrepreneur · Startup Founder · Change-Maker</p>
            <h1
              className="font-display reveal"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "oklch(0.96 0.015 75)",
                marginBottom: "1.5rem",
              }}
            >
              Find Your Story and<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>Get on Stage.</em>
            </h1>
            <p
              className="font-body reveal"
              style={{
                fontSize: "1.15rem",
                color: "oklch(0.88 0.01 75)",
                maxWidth: "560px",
                lineHeight: "1.75",
                marginBottom: "2.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              You know you have something worth sharing. A story. A message. A perspective that could change people's lives. But fear, self-doubt, and lack of confidence have kept you quiet. In 12 weeks, I'll help you find your voice, own your story, and land your first speaking gig.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="/workshop" className="btn-gold">Start with the Workshop</a>
              <a href="#offer" className="btn-outline-cream">
                Learn About The Soulful Speaker
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROBLEM — StoryBrand: Name the Villain
      ════════════════════════════════════════════════════ */}
      <section
        id="problem"
        style={{ background: "oklch(0.18 0.05 155)", padding: "6rem 0" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">

            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.96 0.015 75)",
                marginBottom: "1.75rem",
                lineHeight: 1.2,
              }}
            >
              Your voice matters.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>The world needs to hear it.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: "🤐",
                title: "The Fear of Judgment",
                body: "You know your story is powerful. But what if people judge you? What if you're too much? What if you say the wrong thing? So you stay silent.",
              },
              {
                icon: "🌀",
                title: "The Confidence Gap",
                body: "You've never spoken publicly before. You don't know where to start. You don't have a platform. You don't know what to say or how to say it. The overwhelm keeps you stuck.",
              },
              {
                icon: "⏰",
                title: "The Opportunity Cost",
                body: "Every day you stay silent is a day someone doesn't hear your message. A day you don't build your platform. A day you don't step into your power.",
              },
            ].map((card) => (
              <div key={card.title} className="pillar-card reveal">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.75", fontFamily: "'DM Sans', sans-serif" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="max-w-2xl mx-auto mt-16 text-center reveal">
            <p
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontStyle: "italic",
                color: "oklch(0.88 0.01 75)",
                lineHeight: 1.5,
              }}
            >
              "Your voice is not just worth sharing. It's needed."
            </p>
            <p className="section-label mt-5" style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}>— Kyal Neil Currant</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          GUIDE — StoryBrand: Meet the Guide
      ════════════════════════════════════════════════════ */}
      <section
        id="about"
        style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="reveal order-2 md:order-1">
              <div className="relative">
                <img
                  src="/manus-storage/kyal-guide-portrait_4f3ac10b.webp"
                  alt="Kyal Neil Currant portrait"
                  className="w-full object-cover rounded-lg"
                  style={{ maxHeight: "600px", objectPosition: "center" }}
                />
                {/* Credential badge */}
                <div
                  className="absolute bottom-6 right-0 px-6 py-4"
                  style={{ background: "oklch(0.18 0.05 155)", maxWidth: "220px" }}
                >
                  <p className="font-body text-xs mb-1" style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
                    Spoken in
                  </p>
                  <p className="font-display text-3xl font-bold" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}>
                    14+
                  </p>
                  <p className="font-body text-xs" style={{ color: "oklch(0.75 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                    Countries Virtually &amp; Global Summits
                  </p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="reveal order-1 md:order-2">

              <h2
                className="font-display"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "oklch(0.18 0.05 155)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                I know what it takes<br />
                to find your voice.
              </h2>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                I grew up with a disability. For years, I stayed quiet. I didn't think my voice mattered. But when I was forced to speak up, to advocate for myself, something shifted. I discovered that my voice was powerful. And more importantly, that it was needed.
              </p>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                I've now spoken in 14+ countries, shared my message with thousands of people, and helped hundreds of entrepreneurs find their voice and land their first speaking gig. I know the fear. I know the self-doubt. And I know how to move through it.
              </p>
              <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                In 12 weeks, I'll help you do the same.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#offer" className="btn-gold">Learn About The Soulful Speaker</a>
                <a href="/workshop" className="btn-outline-gold">Start with the Workshop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LAND BREAK — Full-bleed Sacred Land
      ════════════════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${LAND_WIDE})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          height: "420px",
        }}
      >
        <div className="absolute inset-0" style={{ background: "oklch(0.12 0.04 155 / 0.45)" }} />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="section-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>Sacred Land</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                color: "oklch(0.96 0.015 75)",
                fontStyle: "italic",
                maxWidth: "700px",
              }}
            >
              "The land speaks. The question is whether you're still enough to hear it."
            </h2>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          THE SOULFUL SPEAKER — The Main Offer
      ════════════════════════════════════════════════════ */}
      <section
        id="offer"
        style={{ background: "oklch(0.18 0.05 155)", padding: "7rem 0" }}
      >
        <div className="container">
          {/* Header */}
          <div className="max-w-2xl reveal mb-16">
            <p className="section-label mb-5">The Offer</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              The Soulful Speaker.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>A 12-Week Transformation</em>
            </h2>
            <p className="font-body" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", maxWidth: "520px", fontFamily: "'DM Sans', sans-serif" }}>
              Find your story. Own your voice. Land your first speaking gig. Through 1-on-1 coaching, we'll move you from fear and silence to confidence and impact.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                num: "01",
                title: "Share Your Story",
                body: "Uncover the power of your story. Learn what makes your message unique. Get clear on why your voice matters. Build the confidence to share it.",
              },
              {
                num: "02",
                title: "Own Your Voice",
                body: "Move through the fear and self-doubt. Develop the presence and authenticity that draws people in. Learn to speak with power and conviction.",
              },
              {
                num: "03",
                title: "Get on Stage",
                body: "Land your first speaking gig. Build your platform. Step into your power. Move from silence to impact.",
              },
            ].map((p) => (
              <div key={p.num} className="pillar-card reveal">
                <p className="font-display text-5xl font-bold mb-4" style={{ color: "oklch(0.72 0.12 75 / 0.3)", fontFamily: "'Playfair Display', serif" }}>
                  {p.num}
                </p>
                <h3 className="font-display text-2xl mb-3" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}>
                  {p.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.75", fontFamily: "'DM Sans', sans-serif" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Offer Box */}
          <div
            className="reveal grid md:grid-cols-2 gap-0"
            style={{ border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
          >
            {/* Left — Retreat image */}
            <div className="relative min-h-[320px] md:min-h-0">
              <img
                src={RETREAT_SCENE}
                alt="Connected Retreat campfire circle"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "oklch(0.12 0.04 155 / 0.4)" }} />
            </div>

            {/* Right — Offer details */}
            <div className="p-8 md:p-10" style={{ background: "oklch(0.22 0.055 155)" }}>
              <p className="section-label mb-4">What's Included</p>
              <div className="space-y-0 mb-8">
                {[
                  ["12 weeks of 1-on-1 coaching", "Value $4,000+"],
                  ["Story discovery & message development", "Value $1,500"],
                  ["Speaking skills & platform building", "Value $1,200"],
                  ["Nervous system work & confidence building", "Value $800"],
                  ["Speaking opportunity support", "Value $500"],
                  ["Lifetime community access", "Priceless"],
                ].map(([item, val]) => (
                  <div key={item} className="value-row">
                    <span style={{ color: "oklch(0.88 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    <span className="val-price">{val}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <p className="font-body text-xs mb-4" style={{ color: "oklch(0.65 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                  Limited spots available. This is 1-on-1 coaching, so I work with a small number of clients at a time.
                </p>
                <a href="/workshop" className="btn-gold w-full block text-center">
                  Start with the Workshop
                </a>
              </div>
              <p className="font-body text-xs text-center" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                Or apply directly to work 1-on-1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          THE PLAN — StoryBrand: 3-Step Plan
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.92 0.02 75)", padding: "6rem 0" }}
      >
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-14 reveal">
            <p className="section-label mb-4">How It Works</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.18 0.05 155)",
                lineHeight: 1.2,
              }}
            >
              Your path to the stage.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Start with the Workshop",
                body: "Attend the monthly Pre-Speaker Workshop to craft your core message and overcome your fears. Get clarity on your speaking voice.",
              },
              {
                step: "2",
                title: "Apply for The Soulful Speaker",
                body: "Ready for deeper work? Apply to work 1-on-1 with Kyal for 12 weeks. We'll dive deep into your story and build your confidence.",
              },
              {
                step: "3",
                title: "Land Your Speaking Gig",
                body: "By week 12, you'll have landed your first speaking opportunity. You'll be on stage, sharing your message, and stepping into your power.",
              },
            ].map((s) => (
              <div key={s.step} className="reveal text-center md:text-left">
                <div
                  className="font-display text-6xl font-bold mb-4"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "oklch(0.4 0.04 75)", lineHeight: "1.75", fontFamily: "'DM Sans', sans-serif" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FAILURE / SUCCESS — StoryBrand: Stakes
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.18 0.05 155)", padding: "6rem 0" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="section-label mb-5">What Happens If Nothing Changes</p>
              <h2
                className="font-display mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "oklch(0.96 0.015 75)",
                  lineHeight: 1.2,
                }}
              >
                If you stay silent,<br />
                <em style={{ color: "oklch(0.72 0.12 75)" }}>you stay small.</em>
              </h2>
              <div className="space-y-4">
                {[
                  "Your message never reaches the people who need it.",
                  "You watch others take the stage while you stay in the shadows.",
                  "The fear and self-doubt grow stronger every year.",
                  "You build a business, but your voice remains unheard.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="mt-1 text-sm" style={{ color: "oklch(0.72 0.12 75 / 0.6)" }}>—</span>
                    <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.7", fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <p className="section-label mb-5">What Becomes Possible</p>
              <h2
                className="font-display mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "oklch(0.96 0.015 75)",
                  lineHeight: 1.2,
                }}
              >
                When you find your voice,<br />
                <em style={{ color: "oklch(0.72 0.12 75)" }}>everything changes.</em>
              </h2>
              <div className="space-y-4">
                {[
                  "You step on stage with confidence and authenticity.",
                  "Your message reaches thousands of people who need to hear it.",
                  "You build a platform and a community around your voice.",
                  "You become the leader and influencer you were always meant to be.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="mt-1 text-sm" style={{ color: "oklch(0.72 0.12 75)" }}>✓</span>
                    <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.7", fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section
        id="testimonials"
        style={{ background: "oklch(0.22 0.055 155)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-14 reveal">
            <p className="section-label mb-4">What People Say</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              Real words from real people.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Kyal helped me find my voice and gave me the confidence to share my story on stage. I landed my first speaking gig and it's changed everything for me.",
                name: "Sarah Mitchell",
                role: "Speaker",
                img: KYAL_4,
              },
              {
                quote: "I was terrified of public speaking. Through Kyal's coaching, I moved through that fear and now I'm speaking at events and building my platform. This is the real deal.",
                name: "Marcus Johnson",
                role: "Entrepreneur",
                img: KYAL_7,
              },
              {
                quote: "Kyal's approach is different. He doesn't just teach speaking skills—he helps you own your story and your voice. I feel like a completely different person on stage now.",
                name: "Emma Chen",
                role: "Coach & Speaker",
                img: KYAL_3,
              },
            ].map((t) => (
              <div key={t.name} className="testimonial-card reveal">
                <blockquote>"{t.quote}"</blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="font-body text-sm font-semibold" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'DM Sans', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="font-body text-xs" style={{ color: "oklch(0.65 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>            ))}\n          </div>\n          <div className="text-center mt-12 reveal">\n            <a href="/testimonials" className="btn-gold" style={{ padding: "0.75rem 2rem", fontSize: "0.875rem" }}>\n              See All Video Testimonials\n            </a>\n          </div>\n        </div>\n      </section>\n\n      {/* ════════════════════════════════════════════════════\n          THE BOOK  ════════════════════════════════════════════════════ */}
      <section
        id="book"
        style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Book visual */}
            <div className="reveal">
              <div
                className="relative p-10 flex items-center justify-center"
                style={{
                  background: "oklch(0.18 0.05 155)",
                  minHeight: "380px",
                }}
              >
                <div className="text-center">
                  <div
                    className="inline-block px-8 py-10 mb-4"
                    style={{
                      background: "oklch(0.28 0.06 155)",
                      border: "1px solid oklch(0.72 0.12 75 / 0.4)",
                      maxWidth: "240px",
                    }}
                  >
                    <p className="section-label mb-3">Coming Soon</p>
                    <h3
                      className="font-display text-3xl font-bold mb-2"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
                    >
                      Disabled<br />Delusion
                    </h3>
                    <div className="w-8 h-px mx-auto my-4" style={{ background: "oklch(0.72 0.12 75 / 0.5)" }} />
                    <p className="font-body text-xs" style={{ color: "oklch(0.75 0.01 75)", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.6" }}>
                      How to Heal Trauma & Overcome Disability... Just Like I Did, to Change Your Life!
                    </p>
                    <p className="section-label mt-4" style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}>Kyal Neil Currant</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Copy */}
            <div className="reveal">
              <p className="section-label mb-5">The Book</p>
              <h2
                className="font-display"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "oklch(0.18 0.05 155)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Disabled Delusion — How to Heal Trauma & Overcome Disability... Just Like I Did, to Change Your Life!
              </h2>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                The story of how a kid born with a disability learned that the greatest limitation was never physical. It was the story he'd been told — and the one he kept telling himself.
              </p>
              <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                This book is for anyone who has ever felt like their body, their past, or their circumstances were the reason they couldn't have the life they wanted. Kyal's story will change that belief forever.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold"
              >
                Get Notified at Launch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          VALUE LADDER / ASCENSION
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.28 0.06 155)", padding: "6rem 0" }}
      >
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-14 reveal">
            <p className="section-label mb-4">The Journey</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              There's a path for every stage<br />
              of your transformation.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                level: "Gateway",
                title: "Pre-Speaker Workshop",
                price: "Low-Cost",
                desc: "Monthly in-person workshop. Craft your core message, overcome your fears, and get clarity on your first speaking opportunity.",
                cta: "Learn More",
                href: "/workshop",
                highlight: false,
              },
              {
                level: "Transformation",
                title: "The Soulful Speaker",
                price: "12 Weeks",
                desc: "1-on-1 coaching to find your voice, own your story, and land your first speaking gig. This is where the real work happens.",
                cta: "Apply Now",
                href: "/#offer",
                highlight: true,
              },
              {
                level: "Mastery",
                title: "Back-End Offers",
                price: "By Application",
                desc: "For speakers who've landed their gig and are ready to scale their impact. Available after completing The Soulful Speaker.",
                cta: "Express Interest",
                href: "mailto:kyal@kyalcurrant.com?subject=Speaking Impact Interest",
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.title}
                className="reveal p-6 flex flex-col"
                style={{
                  background: tier.highlight ? "oklch(0.18 0.05 155)" : "oklch(0.22 0.055 155)",
                  border: tier.highlight ? "1px solid oklch(0.72 0.12 75 / 0.6)" : "1px solid oklch(0.72 0.12 75 / 0.15)",
                }}
              >
                <p className="section-label mb-3">{tier.level}</p>
                <h3
                  className="font-display text-xl mb-2"
                  style={{ color: tier.highlight ? "oklch(0.72 0.12 75)" : "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {tier.title}
                </h3>
                <p
                  className="font-display text-2xl font-bold mb-4"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {tier.price}
                </p>
                <p
                  className="font-body text-sm flex-1 mb-6"
                  style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.7", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tier.desc}
                </p>
                <a
                  href={tier.href}
                  className={tier.highlight ? "btn-gold text-center" : "btn-outline-gold text-center"}
                  style={{ fontSize: "0.75rem" }}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LEAD MAGNET CTA
      ════════════════════════════════════════════════════ */}
      <section
        className="relative"
        style={{
          backgroundImage: `url(${KYAL_2})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          padding: "7rem 0",
        }}
      >
        <div className="absolute inset-0" style={{ background: "oklch(0.12 0.04 155 / 0.82)" }} />
        <div className="relative container">
          <div className="max-w-xl mx-auto text-center reveal">
            <p className="section-label mb-5">Free Resource</p>
            <h2
              className="font-display mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              Ready to find your voice?<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>Start with the workshop.</em>
            </h2>
            <p
              className="font-body mb-8"
              style={{ color: "oklch(0.80 0.01 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}
            >
              The Pre-Speaker Workshop is a low-cost entry point to discover your speaking voice. You'll craft your core message, overcome your fears, and get clarity on your first speaking opportunity.
            </p>
            <a href="/workshop" className="btn-gold">
              Learn About the Workshop
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SPEAKING
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.92 0.02 75)", padding: "6rem 0" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="section-label mb-5">Speaking</p>
              <h2
                className="font-display"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "oklch(0.18 0.05 155)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Bring Kyal to your<br />
                stage or summit.
              </h2>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                Kyal has spoken at global summits and events in 14+ countries virtually. His talks blend raw personal story, somatic science, and practical tools that audiences feel in their bodies, not just their heads.
              </p>
              <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                Whether it's a corporate leadership event, a wellness summit, or a personal development conference, Kyal's presence on your stage will be the talk of the room.
              </p>
              <a href="mailto:kyal@kyalcurrant.com?subject=Speaking Enquiry" className="btn-gold">
                Enquire About Speaking
              </a>
            </div>
            <div className="reveal">
              <img
                src="/manus-storage/kyal-speaking_66144436.png"
                alt="Kyal Neil Currant speaking on stage"
                className="w-full object-cover rounded-lg"
                style={{ maxHeight: "480px", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.18 0.05 155)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <p className="section-label mb-6">The Decision</p>
            <h2
              className="font-display mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.15,
              }}
            >
              Your voice matters.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>It's time to share it.</em>
            </h2>
            <p
              className="font-body mb-10"
              style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}
            >
              The Soulful Speaker is for the aspiring entrepreneur who knows their message matters but hasn't had the confidence or clarity to share it on stage. If that's you, let's talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:kyal@kyalcurrant.com?subject=The Soulful Speaker Application" className="btn-gold">
                Apply to Work 1-on-1
              </a>
              <a href="/workshop" className="btn-outline-cream">
                Start with the Workshop
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════ */}
      <footer
        style={{ background: "oklch(0.14 0.04 155)", borderTop: "1px solid oklch(0.72 0.12 75 / 0.15)", padding: "3rem 0" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="font-display text-xl mb-1"
                style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}
              >
                Kyal Neil Currant
              </p>
              <p className="font-body text-xs" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                Speaker · Coach · Soulful Speaker Guide
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "The Soulful Speaker", href: "/#offer" },
                { label: "Workshop", href: "/workshop" },
                { label: "Podcast", href: "/podcast" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "mailto:kyal@kyalcurrant.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-xs transition-colors"
                  style={{ color: "oklch(0.55 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.01 75)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: "oklch(0.4 0.02 75)", fontFamily: "'DM Sans', sans-serif" }}>
              © 2025 Kyal Neil Currant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
