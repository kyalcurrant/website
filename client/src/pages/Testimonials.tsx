/**
 * DESIGN PHILOSOPHY: Sacred Earth Premium
 * - Forest Deep Green (#1a2e1a) primary dark, Warm Cream (#f5f0e8) light sections
 * - Gold/Amber (#c9a84c) accent of transformation
 * - Playfair Display for headlines, DM Sans for body
 * - StoryBrand framework: Hero (Problem) → Guide (Coaching) → Plan (Events) → Proof (Testimonials) → CTA
 */

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X, Play, Quote } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    name: "Peter Huynh",
    role: "Client Acquisitions",
    type: "Speaker Event",
    youtubeId: "Zi3ToMfVHOM",
    bio: "Founder and Head of Growth at Client Acquisitions, Peter helps online coaches and creators build automated lead generation systems that warm prospects, build trust, and book calls on autopilot.",
  },
  {
    id: 2,
    name: "Mana Shigematsu",
    role: "Physiotherapist, The Ikaika Method",
    type: "Coaching",
    youtubeId: "iodNF1yTes0",
    bio: "Doctor of Physiotherapy and founder of Ikaika: Integrated Recovery and Performance. Mana bridges the gap between pain and peak performance using his evidence-based Ikaika Method.",
  },
  {
    id: 3,
    name: "Nancy Wall",
    role: "Personal Power Coach",
    type: "Coaching",
    youtubeId: "-Wtjhxt8RZM",
    bio: "Certified NLP practitioner and personal power coach helping ambitious women reclaim their confidence, strength, and vitality by breaking through limiting beliefs.",
  },
  {
    id: 4,
    name: "Brendan Lucas-Seears",
    role: "Quantum Coach",
    type: "Coaching",
    youtubeId: "u_xw8B6Y4Ak",
    bio: "Quantum coach working at the intersection of consciousness, identity, and high performance. Brendan guides leaders to transcend limiting patterns and operate from an expanded state of possibility.",
  },
  {
    id: 5,
    name: "Louise Deland",
    role: "Health & Wellness Coach",
    type: "Coaching",
    youtubeId: "yQ_GeKSV5UQ",
    bio: "Health and wellness coach dedicated to helping people build sustainable habits, restore energy, and reconnect with their body through holistic principles and practical tools.",
  },
  {
    id: 6,
    name: "Maetreyii",
    role: "Sound Healer",
    type: "Speaker Event",
    youtubeId: "jrdvCFWWlQU",
    bio: "Celestial sound healer and certified Sound Healing Mastery trainer based in Queensland. Maetreyii channels divine frequencies through her angelic voice, guiding thousands into deep healing states.",
  },
  {
    id: 7,
    name: "Nathan Phillips",
    role: "Speaker Event Attendee",
    type: "Speaker Event",
    youtubeId: "4NSErppvPkY",
    bio: "Entrepreneur and business leader who attended Kyal's The Speaker Event, experiencing firsthand the power of authentic communication and embodied presence in leadership.",
  },
  {
    id: 8,
    name: "Jacqui Mync",
    role: "Fertility Coach — The Womb Whisperer",
    type: "Speaker Event",
    youtubeId: "DB3xu8FWoTc",
    bio: "Certified holistic fertility coach, IFBB Pro, speaker, and devoted mother. Jacqui uses holographics and epigenetics to help women overcome infertility and reclaim their body's innate wisdom.",
  },
  {
    id: 9,
    name: "Alex Transcend",
    role: "Identity Coach & Speaker",
    type: "Speaker Event",
    youtubeId: "2C_0SYc67s0",
    bio: "Embodiment mentor and identity coach who has supported 700+ individuals worldwide. Alex guides people back into their bodies and truth through immersive retreats and the I AM identity recalibration program.",
  },
  {
    id: 10,
    name: "Imogen Hobbs",
    role: "Men's Empowerment Coach",
    type: "Speaker Event",
    youtubeId: "O7a1v22K4ds",
    bio: "Founder of Change Channel Coaching. Imogen empowers men to overcome self-doubt and imposter syndrome, helping them reclaim their potential through emotional intelligence and clear boundaries.",
  },
  {
    id: 11,
    name: "Brad Barnett",
    role: "Brad the Fire Bender — Speaker & Storytelling Mentor",
    type: "Speaker Event",
    youtubeId: "lQc-z73Px4E",
    bio: "Known as Brad the Fire Bender, Brad is a speaker, performer, and storytelling mentor who uses the power of narrative and embodied performance to help people ignite their authentic voice.",
  },
  {
    id: 12,
    name: "Scott Wallace",
    role: "Breathwork Facilitator, Coach & Speaker",
    type: "Coaching",
    youtubeId: "kC7NgNGMrFU",
    bio: "Founder of Earth Centred Coaching. Scott is a breathwork facilitator, transformational coach, and speaker on a mission to empower people to live a conscious and connected life.",
  },
  {
    id: 13,
    name: "Nathan Howe",
    role: "Breathwork Facilitator & Coach",
    type: "Coaching",
    youtubeId: "e2nSsLSfjt4",
    bio: "Holistic health specialist, breathwork facilitator, NLP practitioner, and life transformation coach helping men and women build new life habits through breathwork and mindset mentoring.",
  },
  {
    id: 14,
    name: "Lewis Huckstep",
    role: "Coach",
    type: "Coaching",
    youtubeId: "H2TuwvW49rc",
    bio: "Coach and mentor dedicated to helping high-achievers break through the invisible ceiling of performance, unlocking deeper levels of clarity, confidence, and aligned action in life and business.",
  },
  {
    id: 15,
    name: "Richard Asimba",
    role: "Digital Creator",
    type: "Coaching",
    youtubeId: "QyjZSB5OXqg",
    bio: "Online income and digital social media coach helping independent creators and entrepreneurs build passive income streams from scratch through practical digital product creation and monetisation.",
  },
  {
    id: 16,
    name: "Renae Louise",
    role: "Coach",
    type: "Speaker Event",
    youtubeId: "c7cnXwmshzI",
    bio: "Coach and facilitator helping clients reconnect with their authentic self and create meaningful change in their life and business through a grounded, heart-led approach to transformation.",
  },
];

const WRITTEN_TESTIMONIALS = [
  {
    id: "w1",
    quote:
      "From tears to tribulation. You have been holding space and guiding me through my limitations and blockages. It was a breakthrough that gave me instant peace within. I know you feel like this is just getting started. For me it felt like a natural gift.",
    name: "Karine Smith",
    role: "Coaching Client",
  },
  {
    id: "w2",
    quote:
      "I recently sat with Kyal and went through Time Line Therapy. Instantly upon meeting him, I felt at ease. His energy felt familiar, warm and relaxed. I was able to drop into my unconscious mind and freely work through the 5 core emotions. Since this session I have felt amazing, more at ease, relaxed and focused on my future.",
    name: "Keven McDougall",
    role: "Time Line Therapy Client",
  },
  {
    id: "w3",
    quote:
      "In only 30 minutes Kyal helped me reframe new ways to go deeper with a potential new client when they come up with objections on a sales call. This skill is absolutely fundamental for anyone having a service based business. Thank you Kyal.",
    name: "Lahaina",
    role: "Confidence Coach",
  },
  {
    id: "w4",
    quote:
      "Thank you for having my back through Time Line Therapy. You've been so patient and supportive, and that allowed me to have major breakthroughs in re-writing my past so I can move forward in life without holding onto past emotions. I have come to know myself deeper.",
    name: "Tasha Nicholas",
    role: "Coaching Client",
  },
  {
    id: "w5",
    quote:
      "Kyal helped me to see from a higher perspective on a situation I was struggling with. The perspective shift enabled me to move forward clearer in what I needed to do. What was a problem for me is no longer a problem with a new mindset shift. Kyal is supportive, caring and great to work with.",
    name: "Hillary Rowland",
    role: "Coaching Client",
  },
  {
    id: "w6",
    quote:
      "Your passion and purpose shone through in how sales gets to be in flow and more easeful. I loved the models and the practical questions — these were gold for me!",
    name: "Louise Davis",
    role: "Webinar Attendee",
  },
  {
    id: "w7",
    quote:
      "I feel like another level of confidence has been installed into my subconscious. I feel ready to take on the world.",
    name: "Kirily Jacobson",
    role: "Hypnotherapy Client",
  },
  {
    id: "w8",
    quote:
      "Thank you very much for your hypnosis session. The whole freedom and bliss that it left me in. And the blissful sleep I had that evening. Thank you Kyal. Once again.",
    name: "Cheryl O'Connor",
    role: "Hypnosis Client",
  },
  {
    id: "w9",
    quote:
      "He gave me some very strong questions to ask in my journey in sales. My main takeaway was: don't be afraid to ask questions. For that I have to say thank you.",
    name: "Armo Jase",
    role: "Event Attendee",
  },
  {
    id: "w10",
    quote:
      "Throughout our time together, we encountered challenges and obstacles but with perseverance, teamwork, and a lot of weekly sessions, we overcame each hurdle and stayed committed to our goals. I am forever grateful.",
    name: "Wella Guanzon",
    role: "Coaching Client",
  },
];

const SCREENSHOT_IMAGES = [
  { src: "/manus-storage/t1_23d84041.png", alt: "Cheryl Jones testimonial" },
  { src: "/manus-storage/t2_1664b567.png", alt: "Wella Guanzon testimonial" },
  { src: "/manus-storage/t3_1f064f69.png", alt: "Louise Davis testimonial" },
  { src: "/manus-storage/t4_0010b764.png", alt: "Lahaina testimonial" },
  { src: "/manus-storage/t5_a5a97032.png", alt: "Armo Jase testimonial" },
  { src: "/manus-storage/t6_45952af7.png", alt: "Karine Smith testimonial" },
  { src: "/manus-storage/t7_6e239140.png", alt: "Tasha Nicholas testimonial" },
  { src: "/manus-storage/t8_213c680d.png", alt: "Keven McDougall testimonial" },
  { src: "/manus-storage/t9_f80a39f5.png", alt: "Hillary Rowland testimonial" },
  { src: "/manus-storage/t11_50479a3a.png", alt: "Kirily Jacobson testimonial" },
  { src: "/manus-storage/t12_fab4d05f.png", alt: "Cheryl O'Connor testimonial" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function VideoModal({ video, onClose }: { video: typeof VIDEO_TESTIMONIALS[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d1a0d] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white rounded-full p-1.5 transition-colors"
        >
          <X size={18} />
        </button>
        <div className="aspect-[9/16] max-h-[80vh] mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={`${video.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="p-5 border-t border-white/10">
          <p className="font-semibold text-[#f5f0e8] font-['Playfair_Display']">{video.name}</p>
          <p className="text-sm text-[#c9a84c]">{video.role}</p>
          {video.bio && <p className="text-sm text-[#f5f0e8]/70 mt-2 leading-relaxed">{video.bio}</p>}
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onClick }: { video: typeof VIDEO_TESTIMONIALS[0]; onClick: () => void }) {
  return (
    <div
      className="group cursor-pointer bg-[#0d1a0d] rounded-xl overflow-hidden border border-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] bg-black overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={`${video.name} testimonial`}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#c9a84c]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play size={20} className="text-[#0d1a0d] ml-1" fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            video.type === "Speaker Event"
              ? "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30"
              : "bg-white/10 text-white/80 border border-white/20"
          }`}>
            {video.type}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-[#f5f0e8] text-sm font-['Playfair_Display']">{video.name}</p>
        <p className="text-xs text-[#c9a84c] mt-0.5 leading-snug">{video.role}</p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEO_TESTIMONIALS[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | "Coaching" | "Speaker Event">("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredVideos = activeFilter === "All"
    ? VIDEO_TESTIMONIALS
    : VIDEO_TESTIMONIALS.filter((v) => v.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#0d1a0d] text-[#f5f0e8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d1a0d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="font-['Playfair_Display'] text-xl font-bold text-[#f5f0e8] cursor-pointer hover:text-[#c9a84c] transition-colors">
              Kyal Neil Currant
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "/#about" },
              { label: "The Retreat", href: "/#retreat" },
              { label: "The Book", href: "/#book" },
              { label: "Podcast", href: "/podcast" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((item) => (
              <Link key={item.label} href={item.href}>
                <span className={`text-sm font-medium transition-colors cursor-pointer ${
                  item.href === "/testimonials"
                    ? "text-[#c9a84c]"
                    : "text-[#f5f0e8]/70 hover:text-[#f5f0e8]"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/#retreat">
              <Button className="bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold text-sm px-5 py-2 rounded-none">
                Apply Now
              </Button>
            </Link>
          </div>
          <button
            className="md:hidden text-[#f5f0e8] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
              <span className="block w-6 h-0.5 bg-current" />
            </div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1a0d] border-t border-white/10 px-6 py-4 space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "The Retreat", href: "/#retreat" },
              { label: "The Book", href: "/#book" },
              { label: "Podcast", href: "/podcast" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((item) => (
              <Link key={item.label} href={item.href}>
                <span
                  className="block text-sm text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/#retreat">
              <Button className="w-full bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold rounded-none">
                Apply Now
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* ── HERO: THE PROBLEM ── */}
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-6">Real People. Real Results.</p>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold leading-tight mb-8">
          They showed up.<br />
          <span className="italic text-[#c9a84c]">Everything changed.</span>
        </h1>
        <p className="text-[#f5f0e8]/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          These are leaders, coaches, and entrepreneurs who were high-performing on the outside and quietly falling apart on the inside. They stopped chasing strategies and started listening to what their body had been saying all along.
        </p>
      </section>

      {/* ── STORYBRAND: THE GUIDE — COACHING TESTIMONIALS ── */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-3">The Guide</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1a2e1a]">
              What happens in the work
            </h2>
            <p className="text-[#1a2e1a]/60 mt-4 max-w-xl mx-auto">
              One-to-one coaching, Time Line Therapy, hypnotherapy, and somatic work. These are the people who went deep.
            </p>
          </div>

          {/* Written pull-quotes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {WRITTEN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl p-7 border border-[#1a2e1a]/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote size={28} className="text-[#c9a84c] mb-4" />
                <p className="text-[#1a2e1a]/80 leading-relaxed text-sm mb-5 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#1a2e1a]/10 pt-4">
                  <p className="font-semibold text-[#1a2e1a] font-['Playfair_Display']">{t.name}</p>
                  <p className="text-xs text-[#c9a84c] mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORYBRAND: THE PLAN — VIDEO TESTIMONIALS ── */}
      <section className="py-20 bg-[#0d1a0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-3">In Their Own Words</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#f5f0e8]">
              Watch the transformation
            </h2>
            <p className="text-[#f5f0e8]/60 mt-4 max-w-xl mx-auto">
              Coaches, healers, and leaders sharing what shifted after working with Kyal or attending The Speaker Event.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {(["All", "Coaching", "Speaker Event"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-sm font-medium rounded-none border transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#c9a84c] text-[#0d1a0d] border-[#c9a84c]"
                    : "bg-transparent text-[#f5f0e8]/60 border-white/20 hover:border-[#c9a84c]/50 hover:text-[#f5f0e8]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => setActiveVideo(video)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── STORYBRAND: PROOF — SCREENSHOT GALLERY ── */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-3">The Proof</p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1a2e1a]">
              The messages that followed
            </h2>
            <p className="text-[#1a2e1a]/60 mt-4 max-w-xl mx-auto">
              Unprompted. Unedited. These are the words people sent after the work was done.
            </p>
          </div>

          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {SCREENSHOT_IMAGES.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setLightboxImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORYBRAND: STAKES — CTA ── */}
      <section className="py-24 bg-[#1a2e1a] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-6">Your Turn</p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#f5f0e8] mb-6 leading-tight">
            You've seen what's possible.<br />
            <span className="italic text-[#c9a84c]">Now it's your move.</span>
          </h2>
          <p className="text-[#f5f0e8]/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The people in these videos were exactly where you are. They stopped waiting for the right time and showed up. That's all it took.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#retreat">
              <Button className="bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold text-base px-10 py-4 rounded-none h-auto">
                Apply for Connected
              </Button>
            </Link>
            <Link href="/#events">
              <Button
                variant="outline"
                className="border-[#f5f0e8]/30 text-[#f5f0e8] hover:bg-[#f5f0e8]/10 font-semibold text-base px-10 py-4 rounded-none h-auto bg-transparent"
              >
                Attend a Speaker Event — From $47
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1a0d] border-t border-white/10 py-10 px-6 text-center">
        <Link href="/">
          <span className="font-['Playfair_Display'] text-xl font-bold text-[#f5f0e8] cursor-pointer hover:text-[#c9a84c] transition-colors">
            Kyal Neil Currant
          </span>
        </Link>
        <p className="text-[#f5f0e8]/40 text-xs mt-3">
          © {new Date().getFullYear()} Kyal Neil Currant. All rights reserved.
        </p>
      </footer>

      {/* ── VIDEO MODAL ── */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImg}
            alt="Testimonial screenshot"
            className="max-w-sm max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
