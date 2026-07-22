import Header from "@/components/Header";

// Import images from constants (or use placeholder URLs)
const WORKSHOP_HERO = "/manus-storage/workshop-hero.webp";
const WORKSHOP_DETAIL = "/manus-storage/workshop-detail.webp";

export default function Workshop() {

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      {/* ════════════════════════════════════════════════════
          HERO — The Premier Speaker Event™
      ════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${WORKSHOP_HERO})`,
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
            <p className="section-label mb-6 reveal">Real Humans · Real Stories</p>
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
              The Premier Speaker Event™
            </h1>
            <p
              className="font-body reveal"
              style={{
                fontSize: "1.15rem",
                color: "oklch(0.88 0.01 75)",
                maxWidth: "600px",
                lineHeight: "1.75",
                marginBottom: "1.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Do you struggle in love, relationships or business? Are you searching for clarity, direction, or deeper connection? Are you ready to create real change in your life?
            </p>
            <p
              className="font-body reveal"
              style={{
                fontSize: "1.05rem",
                color: "oklch(0.75 0.01 75)",
                maxWidth: "600px",
                lineHeight: "1.75",
                marginBottom: "2.5rem",
                fontFamily: "'DM Sans', sans-serif",
                opacity: 0.9,
              }}
            >
              Then you are invited to The Premier Speaker Event™, an evening where real humans share real stories. A space where nothing is off topic, full expression is welcomed, and there are no labels, no expectations, and no attachments to who you should be.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="#apply" className="btn-gold">Reserve Your Seat — From $15</a>
              <a href="/#offer" className="btn-outline-cream">
                Learn About The Soulful Speaker
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          THE EVENT EXPERIENCE
      ════════════════════════════════════════════════════ */}
      <section
        id="details"
        style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
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
              Step into authenticity.
            </h2>
            <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", fontSize: "1.1rem", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
              Each speaker shares their lived experience and their journey of transformation, showing what becomes possible when you step into authenticity. Witnessing others speak from a place of honesty shifts something in you too. You reflect on your own story. You reconnect with your voice. You begin to see new possibilities for your life.
            </p>
            <p className="font-body font-bold" style={{ color: "oklch(0.18 0.05 155)", fontSize: "1.1rem", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
              Come as you are. Leave with clarity, inspiration, powerful connections, and the courage to create change.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PRE-SPEAKER WORKSHOP
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.18 0.05 155)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="max-w-2xl reveal mb-14">
            <p className="section-label mb-4">Optional Add-on</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Add the Pre Speaker Workshop
            </h2>
            <p className="font-body" style={{ color: "oklch(0.88 0.01 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
              Before the main stage, join an optional pre speaker workshop: <strong>Craft Your Message and Land the Stage</strong>. This is a hands on session for entrepreneurs, coaches, and leaders who are ready to step into their own voice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h3 className="font-display text-xl mb-6" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}>
                In this workshop you will:
              </h3>
              <div className="space-y-4">
                {[
                  "Create a simple one page speaker document for future engagements",
                  "Craft a clear message from your own lived experience",
                  "Align your energy so you can speak from vulnerability with confidence",
                  "Build a confident elevator pitch and social pitch",
                  "Learn how to position yourself for speaking opportunities",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span style={{ color: "oklch(0.72 0.12 75)", fontWeight: "bold" }}>✓</span>
                    <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.6", fontFamily: "'DM Sans', sans-serif" }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal p-8 rounded-lg" style={{ background: "oklch(0.22 0.055 155)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}>
              <h3 className="font-display text-xl mb-4" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}>
                The Outcome
              </h3>
              <p className="font-body" style={{ color: "oklch(0.88 0.01 75)", lineHeight: "1.7", fontFamily: "'DM Sans', sans-serif" }}>
                You will leave the workshop with a practical framework and your own speaker assets, ready to bring into the evening event and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          RESERVE SEAT
      ════════════════════════════════════════════════════ */}
      <section
        id="apply"
        style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}
      >
        <div className="container max-w-2xl text-center">
          <div className="reveal mb-12">
            <p className="section-label mb-4" style={{ color: "oklch(0.18 0.05 155)" }}>Ready to Step Into Your Voice?</p>
            <h2
              className="font-display mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "oklch(0.18 0.05 155)",
                lineHeight: 1.2,
              }}
            >
              Reserve your seat.
            </h2>
            <p className="font-body" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
              The Premier Speaker Event™ and Workshop are held monthly. Spaces are limited to ensure an intimate, supportive experience.
            </p>
          </div>

          <div className="reveal p-6 mb-8 rounded-lg" style={{ background: "rgba(201,168,76,0.18)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}>
            <p className="font-body text-sm" style={{ color: "#000", fontWeight: "600", fontFamily: "'DM Sans', sans-serif" }}>
              Next events: July 23rd, August 20th, September 24th · From $15 (Early Bird)
            </p>
          </div>

          <div className="text-center reveal">
            <a
              href="https://www.eventbrite.com.au/e/the-premier-speaker-event-brisbane-tickets-1994753070130?aff=oddtdtcreator" target="_blank" rel="noopener"
              className="btn-gold"
              style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
            >
              Reserve Your Seat — From $15
            </a>
            <div className="mt-6">
              <a href="/#offer" className="text-sm font-semibold" style={{ color: "oklch(0.18 0.05 155)", textDecoration: "underline" }}>
                Ready for Deeper Work?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════════ */}
      <footer
        style={{ background: "oklch(0.12 0.04 155)", padding: "4rem 0 2rem", borderTop: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-sm mb-4" style={{ color: "oklch(0.65 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
              © 2026 Kyal Neil Currant. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <a href="/" className="text-sm" style={{ color: "oklch(0.65 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                Home
              </a>
              <a href="/#offer" className="text-sm" style={{ color: "oklch(0.65 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                The Soulful Speaker
              </a>
              <a href="/podcast" className="text-sm" style={{ color: "oklch(0.65 0.01 75)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                Podcast
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
