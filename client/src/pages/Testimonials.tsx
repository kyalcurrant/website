import { useState } from 'react';
import { testimonials } from '@/data/testimonials';

// ─── Design: Sacred Earth Premium ───────────────────────────────────────────
// Playfair Display / DM Sans · Forest #1C3A2E · Cream #F5F0E8 · Gold #C9A84C
// StoryBrand structure: Problem → Guide → Plan → Transformation (proof)
// ────────────────────────────────────────────────────────────────────────────

const C = {
  forest: '#1C3A2E',
  forestDark: '#0F1F1A',
  forestMid: '#2A4A3E',
  cream: '#F5F0E8',
  creamDark: '#EDE6D8',
  gold: '#C9A84C',
  goldDark: '#B89840',
  text: '#3D2B1F',
  muted: '#7A6A5A',
};

const getEmbedUrl = (url: string) => {
  const match = url.match(/shorts\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  return `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1`;
};

const typeLabel = (type: string) => {
  if (type === 'speaker') return 'Speaker Event';
  if (type === 'event') return 'The Speaker Event';
  return 'Coaching';
};

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'The Retreat', href: '/#retreat' },
  { label: 'The Book', href: '/#book' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Testimonials', href: '/testimonials' },
];

// Screenshot proof images — uploaded to CDN
const screenshotImages = [
  { src: '/manus-storage/t1_349e7d55.png', label: 'Client Result' },
  { src: '/manus-storage/t2_32a6d5ba.png', label: 'Client Result' },
  { src: '/manus-storage/t3_ed10eb98.png', label: 'Client Result' },
  { src: '/manus-storage/t4_fe61cc96.png', label: 'Client Result' },
  { src: '/manus-storage/t5_93e2334b.png', label: 'Client Result' },
  { src: '/manus-storage/t6_b0462587.png', label: 'Client Result' },
  { src: '/manus-storage/t7_4f09ff4d.png', label: 'Client Result' },
  { src: '/manus-storage/t8_ee4dcfae.png', label: 'Client Result' },
  { src: '/manus-storage/t9_d4066c63.png', label: 'Client Result' },
  { src: '/manus-storage/t10_ba14a35d.png', label: 'Client Result' },
  { src: '/manus-storage/t11_93155d2c.png', label: 'Client Result' },
  { src: '/manus-storage/t12_4e481f95.png', label: 'Client Result' },
];

// Coaching testimonials for the "Guide" section
const coachingTestimonials = testimonials.filter(t => t.type === 'coaching');
// Speaker / event testimonials for the "Event" section
const eventTestimonials = testimonials.filter(t => t.type === 'speaker' || t.type === 'event');

export default function Testimonials() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [selectedCoachId, setSelectedCoachId] = useState(coachingTestimonials[0]?.id);
  const [selectedEventId, setSelectedEventId] = useState(eventTestimonials[0]?.id);

  const selectedCoach = coachingTestimonials.find(t => t.id === selectedCoachId) ?? coachingTestimonials[0];
  const selectedEvent = eventTestimonials.find(t => t.id === selectedEventId) ?? eventTestimonials[0];

  return (
    <div style={{ minHeight: '100vh', background: C.cream, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', cursor: 'zoom-out' }}
        >
          <img src={lightboxImg} alt="Testimonial screenshot" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', boxShadow: '0 20px 80px rgba(0,0,0,0.6)' }} />
          <button onClick={() => setLightboxImg(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: C.gold, color: C.forest, border: 'none', borderRadius: '50%', width: '2.5rem', height: '2.5rem', fontSize: '1.25rem', cursor: 'pointer', fontWeight: 700 }}>×</button>
        </div>
      )}

      {/* ── Navigation ── */}
      <nav style={{ background: C.forest, position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <a href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontWeight: 700, color: C.cream, textDecoration: 'none' }}>
            Kyal Currant
          </a>
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
            {NAV_LINKS.map(item => (
              <a key={item.label} href={item.href}
                style={{ fontSize: '0.8125rem', color: '#E8DFD0', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = '#E8DFD0')}
              >{item.label}</a>
            ))}
          </div>
          <a href="/#retreat"
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.7rem', background: C.gold, color: C.forest, textDecoration: 'none', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = C.goldDark)}
            onMouseLeave={e => (e.currentTarget.style.background = C.gold)}
          >Apply Now</a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO: The Problem (StoryBrand: Name the villain)
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: `linear-gradient(to bottom, ${C.forestDark}, ${C.forest})`, color: 'white', padding: '6rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
            REAL PEOPLE. REAL TRANSFORMATION.
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '1.5rem' }}>
            They Were Doing Everything Right.<br />
            <span style={{ color: C.gold }}>And Still Felt Something Was Missing.</span>
          </h1>
          <p style={{ fontSize: '1.0625rem', color: '#C8BFB0', lineHeight: 1.75, maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
            High-performing coaches, healers, and leaders — successful on paper, disconnected in their body. They'd seen the doctors. Done the programs. Read the books. Nothing reached the root. Then they found Kyal.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { number: '16+', label: 'Video Testimonials' },
              { number: '3', label: 'Experiences Offered' },
              { number: '14+', label: 'Countries Virtually' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: C.gold, lineHeight: 1 }}>{stat.number}</p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A09080', marginTop: '0.35rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — THE GUIDE: Coaching Testimonials
          StoryBrand: "The Guide who has walked this path"
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.cream, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section label */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>
              1:1 COACHING & MENTORSHIP
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: C.forest, marginBottom: '0.75rem' }}>
              When the Body Finally Gets Heard
            </h2>
            <p style={{ fontSize: '1rem', color: C.muted, maxWidth: '38rem', lineHeight: 1.7 }}>
              These leaders came to Kyal's 1:1 coaching carrying injuries, numbness, and patterns they couldn't explain. What shifted wasn't strategy — it was the energy underneath.
            </p>
          </div>

          {/* Player + List grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: '2rem', alignItems: 'start' }} className="testimonials-player-grid">
            {/* Left: Player */}
            <div>
              <div style={{ background: '#000', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                {getEmbedUrl(selectedCoach.videoUrl) ? (
                  <iframe
                    key={selectedCoach.id}
                    src={getEmbedUrl(selectedCoach.videoUrl)!}
                    title={selectedCoach.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.gold, fontSize: '0.875rem' }}>Video unavailable</div>
                )}
              </div>
              <div style={{ background: C.forest, padding: '1.75rem 2rem', marginTop: '0' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.4rem' }}>Coaching Testimonial</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: C.cream, marginBottom: '0.25rem' }}>{selectedCoach.name}</h3>
                <p style={{ fontSize: '0.9rem', color: C.gold }}>{selectedCoach.role}</p>
              </div>
            </div>

            {/* Right: List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '480px', overflowY: 'auto' }}>
              {coachingTestimonials.map(t => (
                <button key={t.id} onClick={() => setSelectedCoachId(t.id)}
                  style={{ textAlign: 'left', padding: '0.875rem 1rem', background: selectedCoachId === t.id ? C.gold : C.creamDark, color: C.forest, border: 'none', cursor: 'pointer', transition: 'background 0.2s', borderLeft: `3px solid ${selectedCoachId === t.id ? C.forest : 'transparent'}` }}
                  onMouseEnter={e => { if (selectedCoachId !== t.id) e.currentTarget.style.background = '#E0D5C0'; }}
                  onMouseLeave={e => { if (selectedCoachId !== t.id) e.currentTarget.style.background = C.creamDark; }}
                >
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.2rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.3 }}>{t.role}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — THE PLAN: Speaker Event Testimonials
          StoryBrand: "Here's how it works — the first step"
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.forest, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>
              THE SPEAKER EVENT
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: C.cream, marginBottom: '0.75rem' }}>
              One Room. One Truth. Everything Changes.
            </h2>
            <p style={{ fontSize: '1rem', color: '#A09080', maxWidth: '38rem', lineHeight: 1.7 }}>
              People walk into The Speaker Event not knowing what to expect. They leave with something they can't fully explain — just a knowing that something has shifted. These are their words.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: '2rem', alignItems: 'start' }} className="testimonials-player-grid">
            <div>
              <div style={{ background: '#000', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                {getEmbedUrl(selectedEvent.videoUrl) ? (
                  <iframe
                    key={selectedEvent.id}
                    src={getEmbedUrl(selectedEvent.videoUrl)!}
                    title={selectedEvent.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.gold, fontSize: '0.875rem' }}>Video unavailable</div>
                )}
              </div>
              <div style={{ background: C.forestMid, padding: '1.75rem 2rem' }}>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.4rem' }}>{typeLabel(selectedEvent.type)}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: C.cream, marginBottom: '0.25rem' }}>{selectedEvent.name}</h3>
                <p style={{ fontSize: '0.9rem', color: C.gold }}>{selectedEvent.role}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '480px', overflowY: 'auto' }}>
              {eventTestimonials.map(t => (
                <button key={t.id} onClick={() => setSelectedEventId(t.id)}
                  style={{ textAlign: 'left', padding: '0.875rem 1rem', background: selectedEventId === t.id ? C.gold : C.forestMid, color: selectedEventId === t.id ? C.forest : C.cream, border: 'none', cursor: 'pointer', transition: 'background 0.2s', borderLeft: `3px solid ${selectedEventId === t.id ? C.cream : 'transparent'}` }}
                  onMouseEnter={e => { if (selectedEventId !== t.id) e.currentTarget.style.background = '#3A5A4E'; }}
                  onMouseLeave={e => { if (selectedEventId !== t.id) e.currentTarget.style.background = C.forestMid; }}
                >
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.2rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: 1.3 }}>{t.role}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — SUCCESS: Screenshot Proof Gallery
          StoryBrand: "What success looks like"
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.creamDark, padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.75rem' }}>
              RESULTS & PROOF
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: C.forest, marginBottom: '0.75rem' }}>
              The Transformation Speaks for Itself
            </h2>
            <p style={{ fontSize: '1rem', color: C.muted, maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              Messages, breakthroughs, and moments of clarity — shared directly by the people who've done the work. Click any image to view it in full.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {screenshotImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(img.src)}
                style={{ background: 'white', border: '2px solid transparent', padding: '0', cursor: 'zoom-in', overflow: 'hidden', transition: 'all 0.25s', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.15)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <img
                  src={img.src}
                  alt={`Client result ${i + 1}`}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '0.75rem 1rem', background: C.cream, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                  <p style={{ fontSize: '0.75rem', color: C.muted, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Client Result</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — FAILURE AVOIDED / CTA
          StoryBrand: "What happens if you don't act" + Call to Action
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: C.forestDark, padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '44rem', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
            YOUR NEXT STEP
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 700, color: C.cream, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            The Body Keeps the Score.<br />
            <span style={{ color: C.gold }}>So Does the Transformation.</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#A09080', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Every person on this page was once where you are. They took a step. The land, the group, and the process took care of the rest. Your transformation is waiting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#retreat"
              style={{ display: 'inline-block', background: C.gold, color: C.forest, padding: '1rem 2.5rem', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = C.goldDark)}
              onMouseLeave={e => (e.currentTarget.style.background = C.gold)}
            >Apply for Connected</a>
            <a href="/#events"
              style={{ display: 'inline-block', background: 'transparent', color: C.cream, padding: '1rem 2.5rem', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', border: `1px solid rgba(245,240,232,0.3)`, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.color = C.gold; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'; e.currentTarget.style.color = C.cream; }}
            >Attend a Speaker Event</a>
          </div>
        </div>
      </section>

    </div>
  );
}
