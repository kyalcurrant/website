/**
 * KYAL CURRANT — SACRED EARTH PREMIUM DESIGN SYSTEM
 * StoryBrand Structure: Hero → Problem → Guide → Plan → CTA → Failure/Success → Testimonials → Offer → Lead Magnet → Footer
 * Colours: Forest green (#1C3A2E equiv) · Warm cream · Gold/amber
 * Typography: Playfair Display (headlines) + DM Sans (body)
 * Philosophy: Premium restraint. Every word earns its place.
 */

import { useEffect, useRef, useState } from "react";

// ── Image asset paths (manus-storage) ──────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/hero-bg-9UmPLQHarHzy248Fjoxc7w.webp";
const RETREAT_SCENE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/retreat-scene-BvmqVEMuYTqZ5A3yoqqdqW.webp";
const LAND_WIDE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663486097900/M4McNZFuLWN87qi77X2nxu/land-wide-7ua9sbYcxvSERt8YaYzVsm.webp";
const KYAL_1 = "/manus-storage/kyal-1_b328b359.webp";
const KYAL_2 = "/manus-storage/kyal-2_3f58534f.webp";
const KYAL_3 = "/manus-storage/kyal-3_30e3d200.webp";
const KYAL_4 = "/manus-storage/kyal-4_5bedcde3.webp";
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

      {/* ════════════════════════════════════════════════════
          NAV
      ════════════════════════════════════════════════════ */}
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`} style={!scrolled ? { background: "transparent" } : {}}>
        <div className="container flex items-center justify-between py-5">
          <a href="#" className="font-display text-lg tracking-wide" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif", textDecoration: "none" }}>
            Kyal Currant
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "The Retreat", href: "#retreat" },
              { label: "The Book", href: "#book" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body transition-colors"
                style={{ color: "oklch(0.85 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.12 75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.85 0.01 75)")}
              >
                {item.label}
              </a>
            ))}
            <a href="#retreat" className="btn-gold" style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}>
              Apply Now
            </a>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => (
              <span key={i} className="block w-6 h-px" style={{ background: "oklch(0.96 0.015 75)" }} />
            ))}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "oklch(0.18 0.05 155)" }}>
            {[
              { label: "About", href: "#about" },
              { label: "The Retreat", href: "#retreat" },
              { label: "The Book", href: "#book" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2"
                style={{ color: "oklch(0.85 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <a href="#retreat" className="btn-gold text-center mt-2">Apply Now</a>
          </div>
        )}
      </nav>

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
            <p className="section-label mb-6 reveal">Trauma-Informed Facilitator · Speaker · Coach</p>
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
              Your body has been trying<br />
              to tell you something.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>It's time to listen.</em>
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
              You've built the business. You've hit the targets. And yet your body is breaking down, your relationships are crumbling, and you have no idea why. The doctors have no answers. The strategies aren't working. Because the problem isn't your performance. It's what's stored inside you.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="#retreat" className="btn-gold">Discover the Retreat</a>
              <button onClick={() => setModalOpen(true)} className="btn-outline-cream">
                Free Audio Guide
              </button>
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
            <p className="section-label mb-5">The Real Problem</p>
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
              High performance without<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>embodiment</em> is just<br />
              a slow breakdown.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                icon: "⚡",
                title: "The Body Keeps Score",
                body: "Unexplained injuries. Chronic tension. Fatigue that sleep doesn't fix. Your body is not failing you. It's storing energy that has never been expressed.",
              },
              {
                icon: "🌀",
                title: "The Disconnection Loop",
                body: "You think you're doing everything right. But you've learned to override your feelings so well, you've lost the signal entirely. Numbness masquerades as strength.",
              },
              {
                icon: "🔗",
                title: "The Relationship Toll",
                body: "The people closest to you feel it first. The distance. The reactivity. The walls. Because what's unresolved inside you always finds its way out.",
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
              "You are not holding energy that hasn't been expressed. You are not broken. You are holding energy that hasn't been expressed."
            </p>
            <p className="section-label mt-5" style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}>— Kyal Currant</p>
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
                  src={KYAL_1}
                  alt="Kyal Currant"
                  className="w-full object-cover"
                  style={{ maxHeight: "600px", objectPosition: "top" }}
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
                    Countries & Global Summits
                  </p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="reveal order-1 md:order-2">
              <p className="section-label mb-5">Meet Your Guide</p>
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
                I've lived what you're<br />
                going through.
              </h2>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                I grew up with a disability. I know what it feels like to have a body that seems to work against you. I know the shame, the disconnection, the desperate search for answers that never come from the outside.
              </p>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                What changed everything for me was learning to listen to what the energy inside my body was actually saying. Not override it. Not manage it. <em>Listen to it.</em>
              </p>
              <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                I've now spoken in 14+ countries, facilitated transformation for hundreds of leaders, and built a methodology that sits at the intersection of trauma science, somatic intelligence, and the ancient wisdom of the land. I'm not here to fix you. I'm here to help you remember what you already know.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#retreat" className="btn-gold">Work With Kyal</a>
                <a href="#book" className="btn-outline-gold">Read the Book</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LAND BREAK — Full-bleed Currumbin Valley
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
            <p className="section-label mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>Currumbin Valley, Queensland</p>
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
          THE RETREAT — StoryBrand: The Plan + The Offer
      ════════════════════════════════════════════════════ */}
      <section
        id="retreat"
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
              Connected.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>A 3-Day Immersive Retreat</em><br />
              in Currumbin.
            </h2>
            <p className="font-body" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", maxWidth: "520px", fontFamily: "'DM Sans', sans-serif" }}>
              For high-level leaders who are ready to stop managing their body and start listening to it. Seven people. Three days. One piece of sacred land. A complete reset of how you lead, communicate, and create.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                num: "01",
                title: "Communicate",
                body: "Learn the language of your body. Understand what your nervous system has been trying to tell you. Develop the capacity to speak from a place of truth, not performance.",
              },
              {
                num: "02",
                title: "Connect",
                body: "Reconnect with the land, with yourself, and with the six other leaders in the room. Real connection — not networking. The kind that changes the trajectory of your life.",
              },
              {
                num: "03",
                title: "Create",
                body: "When you're aligned in body, mind, and soul, creation becomes effortless. Leave with a clear vision, energetic alignment, and the sales psychology to bring it to life.",
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
                  ["3 full days of immersive facilitation", "Value $3,000+"],
                  ["Somatic nervous system practices", "Value $800"],
                  ["Sales psychology & energetic alignment", "Value $1,200"],
                  ["Land-based ceremonies & connection", "Value $600"],
                  ["Camping & communal meals included", "Value $400"],
                  ["Small group (max 7 people)", "Priceless"],
                  ["Post-retreat integration support", "Value $500"],
                ].map(([item, val]) => (
                  <div key={item} className="value-row">
                    <span style={{ color: "oklch(0.88 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                    <span className="val-price">{val}</span>
                  </div>
                ))}
              </div>
              <div
                className="flex items-end justify-between mb-8 pb-6"
                style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.25)" }}
              >
                <div>
                  <p className="section-label mb-1">Total Value</p>
                  <p className="font-display text-2xl line-through opacity-40" style={{ color: "oklch(0.96 0.015 75)", fontFamily: "'Playfair Display', serif" }}>
                    $6,500+
                  </p>
                </div>
                <div className="text-right">
                  <p className="section-label mb-1">Your Investment</p>
                  <p className="font-display text-4xl font-bold" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}>
                    $2,997
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-body text-xs mb-4" style={{ color: "oklch(0.65 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                  Maximum 7 places. This is an intimate, high-touch experience. Once it's full, it's full.
                </p>
                <a href="mailto:kyal@kyalcurrant.com?subject=Connected Retreat Application" className="btn-gold w-full block text-center">
                  Apply for a Place
                </a>
              </div>
              <p className="font-body text-xs text-center" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                Applications reviewed personally by Kyal. Not everyone will be accepted.
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
              Three steps to getting your body and your life back.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                body: "Submit a short application. Kyal reviews every one personally to ensure this is the right fit for you and the group.",
              },
              {
                step: "2",
                title: "Arrive",
                body: "Show up to Currumbin with nothing but yourself. The land, the group, and the process will take care of the rest.",
              },
              {
                step: "3",
                title: "Align",
                body: "Leave with a regulated nervous system, a clear vision, and a community of leaders who have seen the real you.",
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
                The body always wins<br />
                <em style={{ color: "oklch(0.72 0.12 75)" }}>eventually.</em>
              </h2>
              <div className="space-y-4">
                {[
                  "The injuries keep coming back, and no one can explain why.",
                  "The numbness deepens. You stop feeling the wins.",
                  "Your relationships pay the price for what you won't feel.",
                  "You build the empire. But you're not there to enjoy it.",
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
                When you lead from<br />
                <em style={{ color: "oklch(0.72 0.12 75)" }}>inside the body.</em>
              </h2>
              <div className="space-y-4">
                {[
                  "Your body stops working against you and starts working with you.",
                  "You communicate with a clarity and authority that people feel.",
                  "Your relationships deepen because you're actually present in them.",
                  "You build wealth that serves your legacy, not just your ego.",
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
                quote: "I've done every kind of coaching. Nothing touched what Kyal touched in three days. I left feeling like I'd been given my body back.",
                name: "Michael R.",
                role: "Founder, 7-figure business",
                img: KYAL_4,
              },
              {
                quote: "I didn't understand why I kept getting injured. After the retreat, I understood everything. The work Kyal does is unlike anything I've experienced.",
                name: "Sarah T.",
                role: "Executive Leader",
                img: KYAL_7,
              },
              {
                quote: "I came in disconnected and numb. I left with a clarity about who I am and what I'm building that I've never had before. This is the work.",
                name: "James K.",
                role: "Entrepreneur & Speaker",
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          THE BOOK
      ════════════════════════════════════════════════════ */}
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
                      How to heal trauma and overcome disability to transform your life
                    </p>
                    <p className="section-label mt-4" style={{ color: "oklch(0.72 0.12 75 / 0.7)" }}>Kyal Currant</p>
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
                Disabled Delusion
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
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                level: "Entry",
                title: "Live Events & Talks",
                price: "Free — $97",
                desc: "Experience Kyal's energy and methodology live. The starting point for many who go on to do the deeper work.",
                cta: "Find an Event",
                href: "#",
                highlight: false,
              },
              {
                level: "Foundation",
                title: "Disabled Delusion",
                price: "$29",
                desc: "The book. The story. The framework. Everything you need to understand why you're stuck and what to do about it.",
                cta: "Get Notified",
                href: "#book",
                highlight: false,
              },
              {
                level: "Transformation",
                title: "Connected Retreat",
                price: "$2,997",
                desc: "Three days on sacred land. The work that changes everything. Maximum 7 people per cohort.",
                cta: "Apply Now",
                href: "#retreat",
                highlight: true,
              },
              {
                level: "Mastery",
                title: "12-Month Mastermind",
                price: "$25,000",
                desc: "For leaders who've done the retreat and are ready to build their legacy at scale. Application only.",
                cta: "Express Interest",
                href: "mailto:kyal@kyalcurrant.com?subject=Mastermind Interest",
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
              Start here.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>The Body Knows First.</em>
            </h2>
            <p
              className="font-body mb-8"
              style={{ color: "oklch(0.80 0.01 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}
            >
              A free audio guide with 5 somatic practices for high-performing leaders. Use them before a big meeting, after a hard conversation, or whenever your body is telling you something your mind won't hear.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-gold">
              Download Free Guide
            </button>
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
                Kyal has spoken at global summits and events in 14+ countries. His talks blend raw personal story, somatic science, and practical tools that audiences feel in their bodies, not just their heads.
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
                src={KYAL_4}
                alt="Kyal Currant speaking"
                className="w-full object-cover"
                style={{ maxHeight: "480px", objectPosition: "top" }}
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
              Seven places.<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>One decision.</em>
            </h2>
            <p
              className="font-body mb-10"
              style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.8", fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}
            >
              The Connected Retreat is not for everyone. It's for the leader who is ready to stop performing and start living. If that's you, apply now. Kyal will be in touch personally.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:kyal@kyalcurrant.com?subject=Connected Retreat Application" className="btn-gold">
                Apply for a Place — $2,997
              </a>
              <button onClick={() => setModalOpen(true)} className="btn-outline-cream">
                Not Ready Yet? Start Here.
              </button>
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
                Kyal Currant
              </p>
              <p className="font-body text-xs" style={{ color: "oklch(0.55 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                Trauma-Informed Facilitator · Speaker · Coach
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { label: "The Retreat", href: "#retreat" },
                { label: "About", href: "#about" },
                { label: "The Book", href: "#book" },
                { label: "Speaking", href: "#speaking" },
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
              © 2025 Kyal Currant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
