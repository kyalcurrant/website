/**
 * DESIGN: Sacred Earth Premium
 * - Dark Forest Green backgrounds with Warm Cream text
 * - Playfair Display for headlines, DM Sans for body
 * - Sacred Gold accents for CTAs and emphasis
 * - Full-bleed photography with dark overlay
 * - Asymmetric layout, generous whitespace
 * - Entrance animations on scroll
 *
 * PURPOSE: StoryBrand conversion page for The Premier Speaker Event
 * - Hero: Name the desire (step into your voice, create change)
 * - Problem: Stuck, unclear, disconnected
 * - Guide: Kyal's story, the event's structure
 * - Plan: What happens at the event, the workshop, the experience
 * - CTA: Register now, limited spots
 * - Stakes: What happens if you don't come
 * - Success: What you'll feel and have after
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Users, Clock, MapPin, Sparkles, Heart, Zap } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function PremierEvent() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const eventPhotos = [
    "/manus-storage/premier-event-1_28202b11.webp",
    "/manus-storage/premier-event-2_d2f3a542.webp",
    "/manus-storage/premier-event-3_d7d37ce8.webp",
  ];

  return (
    <div className="min-h-screen bg-[#0d1a0d] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0d1a0d]/95 backdrop-blur border-b border-[#c9a84c]/20">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-[#c9a84c]">Kyal Neil</span> Currant
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setLocation("/")} className="hover:text-[#c9a84c] transition">
              Home
            </button>
            <button onClick={() => setLocation("/podcast")} className="hover:text-[#c9a84c] transition">
              Podcast
            </button>
            <button onClick={() => setLocation("/testimonials")} className="hover:text-[#c9a84c] transition">
              Testimonials
            </button>
            <a
              href="https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1988736396096"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c9a84c] text-[#0d1a0d] px-6 py-2 rounded hover:bg-[#8a6f3a] transition font-medium"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#c9a84c]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1a0d] border-t border-[#c9a84c]/20 p-4 space-y-4">
            <button onClick={() => setLocation("/")} className="block w-full text-left hover:text-[#c9a84c]">
              Home
            </button>
            <button onClick={() => setLocation("/podcast")} className="block w-full text-left hover:text-[#c9a84c]">
              Podcast
            </button>
            <button onClick={() => setLocation("/testimonials")} className="block w-full text-left hover:text-[#c9a84c]">
              Testimonials
            </button>
            <a
              href="https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1988736396096"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#c9a84c] text-[#0d1a0d] px-6 py-2 rounded hover:bg-[#8a6f3a] transition font-medium text-center"
            >
              Register Now
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${eventPhotos[0]}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0d]/90 via-[#0d1a0d]/70 to-[#0d1a0d]/30" />

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-12 h-px bg-[#c9a84c]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#c9a84c]">
                Monthly Event
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Premier
              <br />
              <span className="italic text-[#c9a84c]">Speaker Event</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-[#f5f0e8]/90 font-light">
              Creating change through vulnerability. Where real humans share real stories.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1988736396096"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] text-[#0d1a0d] px-8 py-4 rounded font-semibold hover:bg-[#8a6f3a] transition text-center"
              >
                Register Now — Limited Spots
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("event-details");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#c9a84c] text-[#c9a84c] px-8 py-4 rounded font-semibold hover:bg-[#c9a84c]/10 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#c9a84c]" />
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="w-12 h-px bg-[#c9a84c] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                You feel <span className="italic text-[#c9a84c]">stuck</span>.
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                Do you feel stuck in life, love, or business? Are you wanting to create change but don't know where to start? Are you searching for clarity, direction, or deeper connection?
              </p>

              <p>
                You've achieved things. You've built things. But something is missing. You sense there's more to express, more to share, more to become. Yet the path forward feels unclear.
              </p>

              <p className="text-[#c9a84c] italic">
                What if the answer wasn't another strategy or another course? What if it was simply witnessing others step into their truth and remembering your own?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GUIDE SECTION */}
      <section className="py-20 md:py-32 bg-[#f5f0e8] text-[#0d1a0d]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-px bg-[#c9a84c] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Meet Your <span className="italic text-[#c9a84c]">Guide</span>
              </h2>

              <div className="space-y-6 text-lg">
                <p>
                  Kyal Neil Currant is a trauma-informed coach, speaker, and facilitator who creates powerful spaces for authentic human connection and transformation.
                </p>

                <p>
                  He has spoken across 14+ countries virtually and trained with world-class leaders including Ryan Tuckwood (Australia's #1 Sales Coach), Cody McAuliffe (Creator of The Holographic™ Method), and Darren Stephens (#1 International Bestselling Author & Entrepreneur).
                </p>

                <p>
                  Known for his raw honesty, humour, and vulnerability, Kyal helps people reconnect with their voice, step into leadership, and create meaningful change. His work bridges nervous system awareness, lived experience, ancient wisdom, and deep human connection to create lasting transformation.
                </p>

                <p className="text-[#c9a84c] font-semibold">
                  He has been exactly where you are. And he found a way through.
                </p>
              </div>
            </div>

            <div className="bg-[#0d1a0d] p-8 rounded">
              <div className="space-y-6 text-[#f5f0e8]">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#c9a84c] mb-2">Spoken in 14+ Countries Virtually</h3>
                    <p className="text-sm">Bringing global perspective and lived experience to every stage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#c9a84c] mb-2">Trauma-Informed Facilitator</h3>
                    <p className="text-sm">Creates safe, held spaces where real transformation happens.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#c9a84c] mb-2">Nervous System Expert</h3>
                    <p className="text-sm">Bridges somatic awareness with authentic leadership and presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PLAN SECTION */}
      <section id="event-details" className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="mb-16">
            <div className="w-12 h-px bg-[#c9a84c] mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold">
              What Happens at <span className="italic text-[#c9a84c]">The Event</span>
            </h2>
          </div>

          {/* Event Details Card */}
          <div className="bg-[#1a2f1a] border border-[#c9a84c]/30 rounded-lg p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#c9a84c]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c]">When</span>
                </div>
                <p className="text-lg">Saturday, May 23</p>
                <p className="text-[#f5f0e8]/70">3 PM – 6 PM</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c]">Where</span>
                </div>
                <p className="text-lg">Currumbin, QLD</p>
                <p className="text-[#f5f0e8]/70">Gecko Environment Council</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-[#c9a84c]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c]">Community</span>
                </div>
                <p className="text-lg">Intimate Group</p>
                <p className="text-[#f5f0e8]/70">Real humans, real stories</p>
              </div>
            </div>

            <div className="border-t border-[#c9a84c]/20 pt-8">
              <h3 className="text-2xl font-bold mb-6">The Experience</h3>
              <p className="text-lg mb-6">
                This is not your typical speaking event. This is an intentionally held space where real humans share real stories.
              </p>
              <p className="text-[#f5f0e8]/90 mb-6">
                A space where nothing is off topic. Where full expression is welcomed. No labels. No expectations. No attachments to who you should be.
              </p>
              <p className="italic text-[#c9a84c]">
                When vulnerability and presence come together, something powerful happens. Walls drop. Truth is spoken. Change begins.
              </p>
            </div>
          </div>

          {/* Pre-Workshop */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">
              Pre-Event Workshop: <span className="italic text-[#c9a84c]">Craft Your Message & Land The Stage</span>
            </h3>

            <p className="text-lg mb-8 text-[#f5f0e8]/90">
              Before the main event, join an exclusive pre-event workshop designed for entrepreneurs, coaches, and leaders ready to step into their voice and share their message.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Create a simple one-page speaker document for engagements",
                "Craft a clear message based on your lived experience",
                "Align your internal energy to speak from vulnerability",
                "Connect your body and voice for authentic presence",
                "Create a simple social pitch to communicate what you do",
                "Build a confident elevator pitch to share your story",
                "Understand how to position yourself for speaking opportunities",
                "Speak with clarity, authenticity, and emotional connection",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-1 bg-[#c9a84c] flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[#c9a84c] italic">
              This workshop is about embodying your message so when you step onto a stage, your presence speaks before your words do.
            </p>
          </div>

          {/* What You'll Receive */}
          <div className="bg-[#1a2f1a] border border-[#c9a84c]/30 rounded-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8">What You'll Receive</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Practical tools you can apply in everyday life",
                "Wisdom from people living their truth",
                "Real stories of transformation and growth",
                "Live inspiration created from the energy in the room",
                "A safe space to reconnect with yourself",
                "Networking with people creating real impact in the world",
                "A supportive and welcoming community",
                "Proof that change is possible for you",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Sparkles className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 md:py-32 bg-[#f5f0e8] text-[#0d1a0d]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            See the <span className="italic text-[#c9a84c]">Energy</span> in the Room
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {eventPhotos.map((photo, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo}
                  alt={`Event attendees ${idx + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STAKES SECTION */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">If You Don't Come</h3>
              <ul className="space-y-4 text-[#f5f0e8]/80">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>You stay stuck in the same patterns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Your voice remains unheard</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>You miss the connection that changes everything</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Another month passes without clarity or action</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#c9a84c]">When You Come</h3>
              <ul className="space-y-4 text-[#f5f0e8]/80">
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  <span>You reconnect with your voice and your truth</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  <span>You witness real transformation happening in real time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  <span>You leave with clarity, inspiration, and meaningful connections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c9a84c] font-bold">✓</span>
                  <span>You step into leadership and create real change</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS VISION */}
      <section className="py-20 md:py-32 bg-[#f5f0e8] text-[#0d1a0d]">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <div className="w-12 h-px bg-[#c9a84c] mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold">
              You Leave <span className="italic text-[#c9a84c]">Transformed</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              You walk out of that room feeling seen, heard, and accepted. Your body feels lighter. Your voice feels clearer. You have clarity on what comes next.
            </p>

            <p>
              You have meaningful connections with people who get it. People who are also creating change. People who will support you on your journey.
            </p>

            <p>
              You have practical tools you can use immediately. A framework. A community. Proof that change is possible.
            </p>

            <p className="text-[#c9a84c] italic font-semibold text-xl">
              Most importantly, you have courage. The courage to be yourself. The courage to speak your truth. The courage to create the change you came here to create.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="mb-12">
            <div className="w-12 h-px bg-[#c9a84c] mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold">
              What Makes This <span className="italic text-[#c9a84c]">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Not a Speech",
                desc: "This is an experience. Where vulnerability becomes strength. Where presence becomes leadership.",
              },
              {
                title: "Real Stories",
                desc: "Real humans sharing real transformation. Not polished. Not perfect. Raw, honest, and powerful.",
              },
              {
                title: "Held Space",
                desc: "Intentionally created by Kyal and Legacy Events Co. A room where people come to be seen, heard, and felt.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1a2f1a] border-[#c9a84c]/30 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">{item.title}</h3>
                <p className="text-[#f5f0e8]/80">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-[#1a2f1a] border-t border-[#c9a84c]/30">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Come as you are.
            <br />
            <span className="italic text-[#c9a84c]">Leave transformed.</span>
          </h2>

          <p className="text-xl mb-12 text-[#f5f0e8]/80 max-w-2xl mx-auto">
            Limited spots available. This event fills up fast. Secure your place now and join a room of people ready to create real change.
          </p>

          <a
            href="https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1988736396096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c9a84c] text-[#0d1a0d] px-10 py-4 rounded font-semibold hover:bg-[#8a6f3a] transition text-lg"
          >
            Register Now — Limited Spots
          </a>

          <p className="mt-8 text-[#f5f0e8]/60 text-sm">
            Questions? Reach out to Kyal directly.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS — Social Proof from Past Attendees */}
      <section style={{ background: "oklch(0.96 0.015 75)", padding: "7rem 0" }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-label mb-4">PEOPLE WHO SHOWED UP</p>
            <h2
              className="font-display"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "oklch(0.18 0.05 155)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              They Attended.<br />
              Everything Shifted.
            </h2>
            <p className="font-body" style={{ color: "oklch(0.35 0.04 75)", lineHeight: "1.8", fontFamily: "'DM Sans', sans-serif", maxWidth: "600px", margin: "0 auto" }}>
              These are real people who walked into the room uncertain, and walked out transformed. Watch what they have to say.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Peter Huynh */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/Zi3ToMfVHOM"
                  title="Peter Huynh testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Peter Huynh</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Client Acquisitions</p>
            </div>

            {/* Maetreyii */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/jrdvCFWWlQU"
                  title="Maetreyii testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Maetreyii</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Sound Healer</p>
            </div>

            {/* Nathan Phillips */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/4NSErppvPkY"
                  title="Nathan Phillips testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Nathan Phillips</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Event Attendee</p>
            </div>

            {/* Jacqui Mync */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/DB3xu8FWoTc"
                  title="Jacqui Mync testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Jacqui Mync</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Fertility Coach</p>
            </div>

            {/* Alex Transcend */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/2C_0SYc67s0"
                  title="Alex Transcend testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Alex Transcend</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Identity Coach & Speaker</p>
            </div>

            {/* Imogen Hobbs */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/O7a1v22K4ds"
                  title="Imogen Hobbs testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Imogen Hobbs</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Men's Empowerment Coach</p>
            </div>

            {/* Brad Barnett */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/lQc-z73Px4E"
                  title="Brad Barnett testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Brad Barnett</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Speaker & Storytelling Mentor</p>
            </div>

            {/* Renae Louise */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-lg" style={{ background: "oklch(0.92 0.004 286.32)", aspectRatio: "9/16", width: "100%", position: "relative" }}>
                <iframe
                  src="https://www.youtube.com/embed/c7cnXwmshzI"
                  title="Renae Louise testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, zIndex: 10 }}
                />
              </div>
              <p className="font-display font-bold mt-4" style={{ color: "oklch(0.18 0.05 155)", fontFamily: "'Playfair Display', serif" }}>Renae Louise</p>
              <p className="font-body text-sm" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>Coach</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="font-body mb-6" style={{ color: "oklch(0.35 0.04 75)", fontFamily: "'DM Sans', sans-serif" }}>
              Ready to be next?
            </p>
            <a
              href="https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1988736396096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded font-semibold text-lg transition"
              style={{ background: "oklch(0.18 0.05 155)", color: "oklch(0.72 0.12 75)", borderColor: "oklch(0.72 0.12 75)", border: "2px solid" }}
            >
              Secure Your Spot — From $97
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1a0d] border-t border-[#c9a84c]/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-[#c9a84c]">Kyal Neil Currant</h4>
              <p className="text-[#f5f0e8]/70 text-sm">
                Trauma-informed facilitator, speaker, and coach creating spaces for authentic human connection and transformation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#c9a84c]">In Collaboration With</h4>
              <p className="text-[#f5f0e8]/70 text-sm">
                Legacy Events Co creates meaningful, heart-led spaces that bring people together through connection, storytelling, and shared experiences.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#c9a84c]">Quick Links</h4>
              <ul className="space-y-2 text-[#f5f0e8]/70 text-sm">
                <li>
                  <button onClick={() => setLocation("/")} className="hover:text-[#c9a84c] transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => setLocation("/podcast")} className="hover:text-[#c9a84c] transition">
                    Podcast
                  </button>
                </li>
                <li>
                  <button onClick={() => setLocation("/testimonials")} className="hover:text-[#c9a84c] transition">
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#c9a84c]/20 pt-8 text-center text-[#f5f0e8]/60 text-sm">
            <p>© 2026 Kyal Neil Currant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
