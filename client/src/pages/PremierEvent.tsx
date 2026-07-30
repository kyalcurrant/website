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
import Header from "@/components/Header";

export default function PremierEvent() {
  const [, setLocation] = useLocation();
  const eventPhotos = [
    "/manus-storage/premier-event-1_28202b11.webp",
    "/manus-storage/premier-event-2_d2f3a542.webp",
    "/manus-storage/premier-event-3_d7d37ce8.webp",
  ];

  return (
    <div className="min-h-screen bg-[#0d1a0d] text-[#f5f0e8]">
      <Header />

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
                The Premier Speaker Event
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
              Do you struggle in love, relationships or business?
            </h1>

            <p className="text-lg md:text-xl mb-8 text-[#f5f0e8]/90 font-light leading-relaxed max-w-xl">
              Are you wanting to create change in your life or the world? Are you searching for clarity, direction, or deeper connection? Then you are invited to The Premier Speaker Event.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://www.eventbrite.com.au/e/the-premier-speaker-event-is-in-brisbane-tickets-1990535007792"
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

      {/* WHAT IS THIS SECTION */}
      <section id="event-details" className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              This is not your typical speaking event.
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#f5f0e8]/90">
              <p>
                This is an intentionally held space where real humans share real stories. A space where nothing is off topic. Where full expression is welcomed. No labels. No expectations. No attachments to who you should be.
              </p>

              <p>
                This experience is designed to inspire change through vulnerability and presence, so you can begin creating the life you truly want and have always dreamed of.
              </p>

              <div className="my-12 p-8 border-l-4 border-[#c9a84c] bg-[#0d1a0d]/50">
                <p className="text-xl italic text-[#c9a84c] mb-4">
                  When vulnerability and presence come together, something powerful happens.
                </p>
                <p className="text-[#f5f0e8]">
                  Walls drop. Truth is spoken. Change begins.
                </p>
              </div>

              <p>
                Each speaker shares their lived experience, wisdom, and journey of transformation and change, showing what becomes possible when you step into authenticity and align with who you truly are.
              </p>

              <p>
                By witnessing others speak from a place of honesty, something within you begins to shift. You reflect on your own story. You reconnect with your voice. You begin to see new possibilities for your life.
              </p>

              <p className="text-[#c9a84c] font-semibold">
                This is where live transformation happens, inspiration becomes action, presence becomes leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-SPEAKER WORKSHOP SECTION */}
      <section className="py-20 md:py-32 bg-[#1a2a1a]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              Pre-Speaker Event Workshop Training
            </h2>
            <p className="text-2xl font-display text-[#c9a84c] mb-8">
              Craft Your Message & Land The Stage
            </p>

            <p className="text-lg leading-relaxed text-[#f5f0e8]/90 mb-8">
              Before the main stage, join an exclusive pre-speaker workshop designed for entrepreneurs, coaches, and leaders ready to step into their voice and share their message. This practical and embodied session will help you:
            </p>

            <ul className="space-y-3 mb-8 text-[#f5f0e8]/90">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Learn how to create a simple one page speaker document for engagements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Craft a clear message based on your lived experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Align your internal energy to speak from vulnerability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Connect your body and voice for authentic presence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Create a simple social pitch to communicate what you do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Build a confident elevator pitch to share your story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Understand how to position yourself for speaking opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold">•</span>
                <span>Speak with clarity, authenticity, and emotional connection</span>
              </li>
            </ul>

            <div className="my-12 p-8 bg-[#0d1a0d]/50 border-l-4 border-[#c9a84c]">
              <p className="text-lg text-[#f5f0e8] mb-4">
                This workshop is about more than speaking. It is about embodying your message so when you step onto a stage, your presence speaks before your words do.
              </p>
              <p className="text-lg text-[#f5f0e8]">
                You will leave with clarity, confidence, and a practical framework and asset to take action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL RECEIVE */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display text-center text-[#f5f0e8]">
            What You'll Receive
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
              <div key={idx} className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                <p className="text-lg text-[#f5f0e8]/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BENEFIT SECTION */}
      <section className="py-20 md:py-32 bg-[#1a2a1a]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              The Benefit of Being in the Room
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#f5f0e8]/90">
              <p>
                Experience real change through vulnerability and presence. You will walk away inspired, empowered, and equipped with clarity, confidence, meaningful connections, and practical tools to create change in your own life.
              </p>

              <p className="text-[#c9a84c] font-semibold text-xl">
                This is where learning meets experience. You do not just hear the message. You feel it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              What Makes This Event Different
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#f5f0e8]/90">
              <p>
                This is not just a speaking event. This is an experience. Where vulnerability becomes strength. Where presence becomes leadership. Where stories create real change.
              </p>

              <p className="text-[#c9a84c] font-semibold text-xl">
                This is a room where people come to be seen, heard, and felt. This is a room where transformation happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOST SECTION */}
      <section className="py-20 md:py-32 bg-[#1a2a1a]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              Host — Kyal Neil Currant
            </h2>

            <p className="text-lg leading-relaxed text-[#f5f0e8]/90 mb-6">
              Kyal Currant is a coach, motivational speaker, and trauma informed facilitator who creates powerful spaces for authentic human connection, transformation, and change.
            </p>

            <p className="text-lg leading-relaxed text-[#f5f0e8]/90 mb-6">
              He has spoken across 14+ countries and trained with world class leaders, bringing a global perspective to his work. Known for his raw honesty, humour, and vulnerability, Kyal helps people reconnect with their voice and body, step into leadership, and create meaningful change in their lives.
            </p>

            <p className="text-lg leading-relaxed text-[#f5f0e8]/90">
              His work bridges nervous system awareness, lived experience, ancient wisdom and deep human connection to create lasting transformation and change.
            </p>
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="py-20 md:py-32 bg-[#0d1a0d]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              In Collaboration With Legacy Events Co
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#f5f0e8]/90">
              <p>
                Legacy Events Co is dedicated to creating meaningful, heart led spaces that bring people together through connection, storytelling, and shared experiences. Their focus is on building community, supporting authentic voices, and co creating events that leave a lasting impact beyond the event itself.
              </p>

              <p>
                With a passion for depth, connection, and real human experiences, Legacy Events Co helps bring The Premier Speaker Event to life by holding spaces where people feel welcomed, supported, and inspired to be themselves.
              </p>

              <p className="text-[#c9a84c] font-semibold text-xl">
                Together, this collaboration exists to create more than events. It creates spaces where people can connect, grow, and experience real change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING INVITATION */}
      <section className="py-20 md:py-32 bg-[#1a2a1a]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-[#f5f0e8]">
              Come as you are.
            </h2>

            <p className="text-2xl text-[#c9a84c] font-display mb-12">
              Leave with clarity, inspiration, powerful connections, and the courage to create change.
            </p>

            <a
              href="https://www.eventbrite.com.au/e/the-premier-speaker-event-is-in-brisbane-tickets-1990535007792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#0d1a0d] px-12 py-4 rounded font-semibold hover:bg-[#8a6f3a] transition text-lg"
            >
              Register Now — Limited Spots
            </a>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-20 md:py-32 bg-[#0d1a0d] border-t border-[#c9a84c]/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#c9a84c] mb-4">
              Mission Statement
            </h3>
            <p className="text-2xl md:text-3xl font-display text-[#f5f0e8] leading-relaxed">
              To create a space where people feel seen, heard and accepted no matter their story, while inspiring real change through vulnerability, presence and authentic human connection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
