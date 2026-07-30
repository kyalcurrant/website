import Header from "@/components/Header";

// Import images from constants (or use placeholder URLs)
const WORKSHOP_HERO = "/manus-storage/workshop-hero.webp";
const WORKSHOP_DETAIL = "/manus-storage/workshop-detail.webp";

export default function Workshop() {

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      {/* ════════════════════════════════════════════════════
          HERO — Pre-Speaker Workshop
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
            <p className="section-label mb-6 reveal">Monthly Workshop</p>
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
              Craft Your Message<br />
              and<br />
              <em style={{ color: "oklch(0.72 0.12 75)" }}>Land the Stage.</em>
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
              A low-cost entry point to discover your speaking voice. In this interactive workshop, you'll craft your core message, overcome your fears, and get clarity on your first speaking opportunity.
            </p>
            <div className="flex flex-wrap gap-4 reveal">
              <a href="#details" className="btn-gold">Learn More</a>
              <a href="#apply" className="btn-outline-cream">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WORKSHOP DETAILS
      ════════════════════════════════════════════════════ */}
      <section
        id="details"
        style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="reveal order-2 md:order-1">
              <img
                src={WORKSHOP_DETAIL}
                alt="Pre-Speaker Workshop"
                className="w-full object-cover rounded-lg"
                style={{ maxHeight: "500px", objectPosition: "center" }}
              />
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
                Find Your Voice<br />
                in One Day.
              </h2>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                This workshop is designed for aspiring speakers who want to get clarity on their message and overcome the fear of public speaking. Whether you're completely new to speaking or you've been thinking about it for years, this is your starting point.
              </p>
              <p className="font-body mb-5" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                You'll leave with a clear understanding of your core message, a plan for your first speaking opportunity, and the confidence to take the next step.
              </p>
              <p className="font-body mb-8" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
                This is the perfect gateway into The Soulful Speaker 12-week program.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="btn-gold">Apply for the Workshop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WHAT'S INCLUDED
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.18 0.05 155)", padding: "7rem 0" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              What You'll Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: "📖",
                title: "Craft Your Story",
                body: "Discover the core message that makes your voice unique. Learn what story to tell and why it matters.",
              },
              {
                icon: "🎤",
                title: "Speaking Skills",
                body: "Learn the fundamentals of public speaking. Overcome nervousness and develop presence on stage.",
              },
              {
                icon: "🎯",
                title: "Your First Opportunity",
                body: "Leave with a concrete plan for landing your first speaking gig. Know exactly where to start.",
              },
              {
                icon: "🤝",
                title: "Community",
                body: "Connect with other aspiring speakers. Build relationships with people on the same journey.",
              },
            ].map((item) => (
              <div key={item.title} className="pillar-card reveal">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "oklch(0.75 0.01 75)", lineHeight: "1.75", fontFamily: "'DM Sans', sans-serif" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          WORKSHOP DETAILS BOX
      ════════════════════════════════════════════════════ */}
      <section
        id="apply"
        style={{ background: "oklch(0.22 0.055 155)", padding: "7rem 0" }}
      >
        <div className="container max-w-2xl">
          <div className="reveal text-center mb-12">
            <h2
              className="font-display mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "oklch(0.96 0.015 75)",
                lineHeight: 1.2,
              }}
            >
              Workshop Details
            </h2>
          </div>

          <div className="reveal space-y-6 mb-8">
            {[
              { label: "Format", value: "In-person workshop" },
              { label: "Location", value: "Currumbin, Gold Coast, QLD" },
              { label: "Duration", value: "Full day (8 hours)" },
              { label: "When", value: "Monthly — dates available on application" },
              { label: "Group Size", value: "Small group (max 12 people)" },
              { label: "Investment", value: "Low-cost entry point" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-start pb-4" style={{ borderBottom: "1px solid oklch(0.72 0.12 75 / 0.2)" }}>
                <p className="font-body font-semibold" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'DM Sans', sans-serif" }}>
                  {label}
                </p>
                <p className="font-body text-right" style={{ color: "oklch(0.88 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <a
              href="mailto:kyal@kyalcurrant.com?subject=Pre-Speaker Workshop Application"
              className="btn-gold"
              style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
            >
              Apply for the Workshop
            </a>
            <p className="font-body text-xs mt-4" style={{ color: "oklch(0.65 0.01 75)", fontFamily: "'DM Sans', sans-serif" }}>
              Limited spots available. Applications reviewed personally by Kyal.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          NEXT STEP
      ════════════════════════════════════════════════════ */}
      <section
        style={{ background: "oklch(0.18 0.05 155)", padding: "7rem 0" }}
      >
        <div className="container max-w-2xl text-center reveal">
          <h2
            className="font-display mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              color: "oklch(0.96 0.015 75)",
              lineHeight: 1.2,
            }}
          >
            Ready for Deeper Work?
          </h2>
          <p className="font-body mb-8" style={{ color: "oklch(0.88 0.01 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif" }}>
            After the workshop, many people move into The Soulful Speaker 12-week program for deeper transformation and support landing their speaking gig.
          </p>
          <a href="/#offer" className="btn-gold">
            Learn About The Soulful Speaker
          </a>
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
