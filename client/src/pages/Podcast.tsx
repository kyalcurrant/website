/**
 * DESIGN: Sacred Earth Premium — Podcast page
 * Uses creators.spotify.com embed (correct URL after Anchor -> Spotify migration)
 * Falls back to native HTML5 audio player using direct MP3 URLs from RSS
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const EPISODES = [
  { num: 1,  title: "Reclaiming Your Mojo: From Stuck to Self-Empowered", guest: "Loz Antonenko",      date: "5 Dec 2025",  shortId: "e3brolo", audio: "https://anchor.fm/s/eee2180c/podcast/play/112107640/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-11-4%2F02ba864f-c068-9028-1831-cf16dfdb063e.mp3", description: "Loz Antonenko joins Kyal to talk about what it really means to reclaim your energy, your drive, and your sense of self when life has knocked you flat." },
  { num: 2,  title: "The Fire Bender: Turning Darkness Into Light",         guest: "Brad Barnett",       date: "5 Sep 2025",  shortId: "e37o708", audio: "https://anchor.fm/s/eee2180c/podcast/play/107796936/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-8-4%2F1da7c54c-de9b-2c0f-6df8-b1939c192de1.mp3", description: "Brad Barnett shares how he transformed his darkest moments into a life of fire, purpose, and authentic expression." },
  { num: 3,  title: "Finding Self Beyond the Binary: His Story",            guest: "Alex Transcend",     date: "20 Aug 2025", shortId: "e371iqg", audio: "https://anchor.fm/s/eee2180c/podcast/play/107055376/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-7-19%2F7c09b8a5-ea4b-e5cb-86da-1bd0eff57611.mp3", description: "Identity coach Alex Transcend opens up about the journey of finding yourself when the world categories do not fit." },
  { num: 4,  title: "Redefining Strength: From Refugee to Brotherhood",     guest: "Eric Em",            date: "2 Aug 2025",  shortId: "e35pa12", audio: "https://anchor.fm/s/eee2180c/podcast/play/105735650/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-6-20%2F27102719-9f3a-6753-2d8d-449f69860712.mp3", description: "Eric Em shares a powerful story of resilience, identity, and the transformative role of brotherhood in rebuilding a life after displacement." },
  { num: 5,  title: "From Depression to Divine: The Journey Back to Self",  guest: "Loridana Montalto",  date: "21 Jul 2025", shortId: "e35p8qt", audio: "https://anchor.fm/s/eee2180c/podcast/play/105734429/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-6-20%2F49dab951-bd14-f38b-f554-5d2707978338.mp3", description: "Loridana Montalto takes us through the depths of depression and out the other side into a life of spiritual connection and embodied joy." },
  { num: 6,  title: "Breaking the Cycle: From Bulimia to Inner Freedom",    guest: "Claire Phillips",    date: "3 Jul 2025",  shortId: "e34giap", audio: "https://anchor.fm/s/eee2180c/podcast/play/104400665/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-5-20%2F82112682-d5a8-92b0-81fc-16fadd99d349.mp3", description: "Claire Phillips shares her raw and honest journey through an eating disorder and the path she walked to reclaim her body, her worth, and her freedom." },
  { num: 7,  title: "Rebuilding the Man: From Risk to Responsibility",       guest: "Mitchell Lowe",      date: "19 Jun 2025", shortId: "e34c12u", audio: "https://anchor.fm/s/eee2180c/podcast/play/104251934/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-5-17%2F084d9144-f244-a1b8-1896-7f79c381bc3b.mp3", description: "Mitchell Lowe gets real about what it takes to step up, take responsibility, and rebuild yourself into the man you were always meant to be." },
  { num: 8,  title: "From Hammer to Healing: Inner Child Transformation",   guest: "Brendan Lucas",      date: "1 Jun 2025",  shortId: "e33km83", audio: "https://anchor.fm/s/eee2180c/podcast/play/103487171/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-5-1%2F43ff3561-7d3b-3ee4-ac43-481325aefd03.mp3", description: "Brendan Lucas explores the profound work of inner child healing and what it means to finally move forward whole." },
  { num: 9,  title: "Healing Beyond the Bars: A Journey to Inner Peace",    guest: "Ty Brazel",          date: "18 May 2025", shortId: "e32v6vs", audio: "https://anchor.fm/s/eee2180c/podcast/play/102783420/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-4-17%2Fd734ab9d-4e34-a92e-cce0-bb5f820fdd57.mp3", description: "Ty Brazel shares a story of finding peace and purpose from within, even when the walls around you feel impossible to escape." },
  { num: 10, title: "Fear to Freedom: Redefining Success on Your Terms",    guest: "Maggie Tilley",      date: "20 Mar 2025", shortId: "e30e40u", audio: "https://anchor.fm/s/eee2180c/podcast/play/100126174/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-2-20%2F8d60a122-6b93-b546-be33-00fb768ce08f.mp3", description: "Maggie Tilley dismantles the conventional definition of success and shares what it looks like to build a life that actually feels like yours." },
  { num: 11, title: "OCD to Opportunity: Finding Purpose Through Art and Nature", guest: "Lydia Davies",  date: "30 Nov 2024", shortId: "e2rm4k2", audio: "https://anchor.fm/s/eee2180c/podcast/play/95146050/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-10-29%2F77ac8b19-852d-7651-ba5e-70f7ed3ff204.mp3", description: "Lydia Davies shares how she transformed the relentless grip of OCD into a creative force using art and nature as her path back to presence." },
  { num: 12, title: "Conformity to Clarity: Embracing Authenticity and Purpose", guest: "Sarah van Eck", date: "2 Nov 2024",  shortId: "e2qf4gr", audio: "https://anchor.fm/s/eee2180c/podcast/play/93867995/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-10-2%2F47147d90-07cb-e1c7-cd98-78d8c3882822.mp3", description: "Sarah van Eck talks about shedding the weight of other people expectations and the moment she chose herself fully and without apology." },
  { num: 13, title: "Despair to Purpose: Embracing the Light Within",       guest: "Brodie Klotz",       date: "3 May 2024",  shortId: "e2j6rke", audio: "https://anchor.fm/s/eee2180c/podcast/play/86256718/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-4-3%2F0d7dad22-a0f6-1fba-544b-547c72c1cf8c.mp3", description: "Brodie Klotz opens up about the moment he hit rock bottom and what it took to find the light not outside himself, but within." },
  { num: 14, title: "Struggles to Innovation: Building Resilience Through Weight Loss", guest: "Phil Hedges", date: "30 Mar 2024", shortId: "e2ho9tk", audio: "https://anchor.fm/s/eee2180c/podcast/play/84731252/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-2-30%2F7112efd9-5a74-f9ea-e996-61e44517e425.mp3", description: "Phil Hedges shares how his weight loss journey became a masterclass in resilience, identity, and the innovation that comes from being forced to change." },
  { num: 15, title: "Surviving to Thriving: Embracing Strength Through Being Abused", guest: "Tasha Nicholas", date: "13 Mar 2024", shortId: "e2h0rid", audio: "https://anchor.fm/s/eee2180c/podcast/play/83962893/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-2-13%2F1c2c051f-aaa8-8eec-5ad2-9f9f664badbb.mp3", description: "Tasha Nicholas shares her courageous story of surviving abuse and the long brave road to reclaiming her strength, her voice, and her life." },
  { num: 16, title: "Struggle to Strength: Embracing Fatherhood with CMT", guest: "Ashton Cole",         date: "23 Feb 2024", shortId: "e2g5ujh", audio: "https://anchor.fm/s/eee2180c/podcast/play/83081265/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-1-23%2F18e6a00b-0938-b1e4-8df9-e0c7a98ad537.mp3", description: "Ashton Cole navigates the intersection of disability and fatherhood and what it means to show up fully for your children when your own body is the challenge." },
  { num: 17, title: "Overcoming 11-Year Drug Addiction to Finding Acceptance", guest: "Ryan McCarthy",   date: "12 Feb 2024", shortId: "e2flv2r", audio: "https://anchor.fm/s/eee2180c/podcast/play/82557467/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-1-12%2Fbf8e411a-02de-cd4d-fdaa-967446d0b4df.mp3", description: "Ryan McCarthy shares eleven years of addiction, the moment he chose differently, and what acceptance of self truly looks and feels like on the other side." },
  { num: 18, title: "Disability to Adaptability: Navigating Life with Charcot-Marie-Tooth", guest: "Kyle Will", date: "7 Jan 2024", shortId: "e2duchn", audio: "https://anchor.fm/s/eee2180c/podcast/play/80736247/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-0-3%2Fa29a01e0-3939-ce77-fc81-32f4b0365370.mp3", description: "Kyle Will shares what it means to live, adapt, and thrive with Charcot-Marie-Tooth disease and why disability is never the end of the story." },
  { num: 19, title: "Suicide Attempt to Mental Fitness: Brad Journey of Resilience", guest: "Brad Wright", date: "1 Jan 2024", shortId: "e2dpel1", audio: "https://anchor.fm/s/eee2180c/podcast/play/80574561/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-0-1%2Fa6365a76-5a5d-5c29-c10b-f65a90abcd94.mp3", description: "Brad Wright shares one of the most raw and honest conversations on the show, from the edge of ending it all to building a life of mental strength and purpose." },
  { num: 20, title: "Overcoming Cocaine Addiction to Motherhood Magic",     guest: "Gemmah Carr",        date: "22 Dec 2023", shortId: "e2di6fo", audio: "https://anchor.fm/s/eee2180c/podcast/play/80336824/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2023-11-22%2F25b043fb-b21f-b5fd-46bf-1cc3e801dd01.mp3", description: "Gemmah Carr shares her journey from addiction to motherhood and the profound transformation that happens when you choose love over everything." },
  { num: 21, title: "Who is the Host?",                                      guest: "Kyal Neil Currant",  date: "18 Dec 2023", shortId: "e2dcq1g", audio: "https://anchor.fm/s/eee2180c/podcast/play/80160240/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2023-11-18%2F5a81e6c2-0a66-b174-c9f8-1c32aafd57f4.mp3", description: "The very first episode. Kyal Neil Currant introduces himself, his story, and why he created The To Be Podcast." },
];

const COVER = "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/39977947/39977947-1732882100626-cb24df1fd1b98.jpg";
const SHOW_URL = "https://podcasters.spotify.com/pod/show/the-to-be-podcast";

export default function Podcast() {
  const [active, setActive] = useState(EPISODES[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const embedUrl = `https://creators.spotify.com/pod/profile/the-to-be-podcast/embed/episodes/${active.shortId}`;

  return (
    <div className="min-h-screen bg-[#0d1a0d] text-[#f5f0e8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d1a0d]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/"><span className="font-['Playfair_Display'] text-xl font-bold text-[#f5f0e8] cursor-pointer hover:text-[#c9a84c] transition-colors">Kyal Neil Currant</span></Link>
          <div className="hidden md:flex items-center gap-8">
            {[{ label: "About", href: "/#about" }, { label: "The Retreat", href: "/#retreat" }, { label: "The Book", href: "/#book" }, { label: "Podcast", href: "/podcast" }, { label: "Testimonials", href: "/testimonials" }].map((item) => (
              <Link key={item.label} href={item.href}><span className={`text-sm font-medium transition-colors cursor-pointer ${item.href === "/podcast" ? "text-[#c9a84c]" : "text-[#f5f0e8]/70 hover:text-[#f5f0e8]"}`}>{item.label}</span></Link>
            ))}
            <Link href="/#retreat"><Button className="bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold text-sm px-5 py-2 rounded-none">Apply Now</Button></Link>
          </div>
          <button className="md:hidden text-[#f5f0e8] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="space-y-1.5"><span className="block w-6 h-0.5 bg-current" /><span className="block w-6 h-0.5 bg-current" /><span className="block w-6 h-0.5 bg-current" /></div>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1a0d] border-t border-white/10 px-6 py-4 space-y-4">
            {[{ label: "Home", href: "/" }, { label: "About", href: "/#about" }, { label: "The Retreat", href: "/#retreat" }, { label: "The Book", href: "/#book" }, { label: "Podcast", href: "/podcast" }, { label: "Testimonials", href: "/testimonials" }].map((item) => (
              <Link key={item.label} href={item.href}><span className="block text-sm text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors cursor-pointer" onClick={() => setMobileMenuOpen(false)}>{item.label}</span></Link>
            ))}
            <Link href="/#retreat"><Button className="w-full bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold rounded-none">Apply Now</Button></Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={COVER} alt="The To Be Podcast" className="w-44 h-44 md:w-52 md:h-52 rounded-2xl shadow-2xl object-cover flex-shrink-0" />
            <div>
              <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-3">Hosted by Kyal Neil Currant</p>
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4 leading-tight">The To Be Podcast</h1>
              <p className="text-[#f5f0e8]/70 text-base leading-relaxed max-w-xl mb-6">Conversations about what it means to be human, to lead with your whole body, and to build a life that actually feels like yours.</p>
              <div className="flex flex-wrap gap-3">
                <a href={SHOW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1aa34a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                  Listen on Spotify
                </a>
                <a href="https://podcasts.apple.com/search?term=the+to+be+podcast+kyal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#872EC4] hover:bg-[#7525b0] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
                  Apple Podcasts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PLAYER */}
      <section className="py-10 px-6 bg-[#1a2e1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-1">Now Playing — Ep. {String(active.num).padStart(2, "0")}</p>
          <h2 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#f5f0e8] mb-1">{active.title}</h2>
          <p className="text-[#f5f0e8]/60 text-sm mb-2">with {active.guest} · {active.date}</p>
          <p className="text-[#f5f0e8]/50 text-sm mb-5 max-w-2xl">{active.description}</p>

          {/* Spotify Creators embed — correct URL after Anchor migration */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl mb-4">
            <iframe
              key={active.shortId}
              src={embedUrl}
              height="152"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={active.title}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              style={{ borderRadius: "12px", display: "block" }}
            />
          </div>

          {/* HTML5 audio fallback */}
          <details className="mt-2">
            <summary className="text-[#c9a84c]/60 text-xs cursor-pointer hover:text-[#c9a84c] transition-colors">Having trouble with the player? Use the audio player below</summary>
            <div className="mt-3">
              <audio
                key={active.audio}
                controls
                className="w-full"
                style={{ accentColor: "#c9a84c" }}
              >
                <source src={active.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </details>
        </div>
      </section>

      {/* EPISODE LIST */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-2">All Episodes</p>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#f5f0e8]">{EPISODES.length} conversations worth having</h2>
          </div>
          <div className="space-y-2">
            {EPISODES.map((ep) => (
              <button key={ep.num} onClick={() => { setActive(ep); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`w-full text-left group rounded-xl border transition-all duration-200 p-4 ${active.num === ep.num ? "bg-[#1a2e1a] border-[#c9a84c]/40" : "bg-[#0d1a0d] border-white/10 hover:border-[#c9a84c]/30 hover:bg-[#1a2e1a]/60"}`}>
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 text-xs font-mono font-bold w-6 text-right ${active.num === ep.num ? "text-[#c9a84c]" : "text-[#f5f0e8]/30"}`}>{String(ep.num).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm leading-snug truncate ${active.num === ep.num ? "text-[#f5f0e8]" : "text-[#f5f0e8]/80"}`}>{ep.title}</p>
                    <p className="text-xs text-[#c9a84c]/70 mt-0.5">with {ep.guest} · {ep.date}</p>
                  </div>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center ${active.num === ep.num ? "bg-[#c9a84c] border-[#c9a84c]" : "border-white/20"}`}>
                    <svg width="8" height="10" viewBox="0 0 10 12" fill="currentColor" className={active.num === ep.num ? "text-[#0d1a0d]" : "text-[#f5f0e8]/40"}><path d="M0 0l10 6-10 6V0z" /></svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2e1a] text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase mb-5">Go Deeper</p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#f5f0e8] mb-5 leading-tight">The podcast is just <span className="italic text-[#c9a84c]">the beginning.</span></h2>
          <p className="text-[#f5f0e8]/60 text-base leading-relaxed mb-8">If something in these conversations landed in your body, that is not an accident. The next step is to experience it in person on sacred land with a small group of leaders who are ready to do the real work.</p>
          <Link href="/#retreat"><Button className="bg-[#c9a84c] hover:bg-[#b8943d] text-[#0d1a0d] font-semibold text-base px-10 py-4 rounded-none h-auto">Apply for Connected</Button></Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d1a0d] border-t border-white/10 py-10 px-6 text-center">
        <Link href="/"><span className="font-['Playfair_Display'] text-xl font-bold text-[#f5f0e8] cursor-pointer hover:text-[#c9a84c] transition-colors">Kyal Neil Currant</span></Link>
        <p className="text-[#f5f0e8]/40 text-xs mt-3">© {new Date().getFullYear()} Kyal Neil Currant. All rights reserved.</p>
      </footer>
    </div>
  );
}
