/**
 * DESIGN: Sacred Earth Premium — Podcast page with Anchor embed players (avoids CORS)
 */
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const EPISODES = [
  { num: 1, title: "Reclaiming Your Mojo: From Stuck to Self-Empowered", guest: "Loz Antonenko", date: "5 Dec 2025", slug: "Reclaiming-Your-Mojo-From-Stuck-to-Self-Empowered---Loz-Antonenko-e3brolo", description: "Loz Antonenko joins Kyal to talk about what it really means to reclaim your energy, your drive, and your sense of self when life has knocked you flat." },
  { num: 2, title: "The Fire Bender: Turning Darkness Into Light", guest: "Brad Barnett", date: "5 Sep 2025", slug: "The-Fire-Bender-Turning-Darkness-Into-Light---Brad-Barnett-e37o708", description: "Brad Barnett shares how he transformed his darkest moments into a life of fire, purpose, and authentic expression." },
  { num: 3, title: "Finding Self Beyond the Binary: His Story", guest: "Alex Transcend", date: "20 Aug 2025", slug: "Finding-Self-Beyond-the-Binary-His-Story---Alex-Transcend-e371iqg", description: "Identity coach Alex Transcend opens up about the journey of finding yourself when the world categories do not fit." },
  { num: 4, title: "Redefining Strength: From Refugee to Brotherhood", guest: "Eric Em", date: "2 Aug 2025", slug: "Redefining-Strength-From-Refugee-to-Importance-of-Brotherhood---Eric-Em-e35pa12", description: "Eric Em shares a powerful story of resilience, identity, and the transformative role of brotherhood in rebuilding a life after displacement." },
  { num: 5, title: "From Depression to Divine: The Journey Back to Self", guest: "Loridana Montalto", date: "21 Jul 2025", slug: "From-Depression-to-Divine-The-Journey-Back-to-Self---Loridana-Montalto-e35p8qt", description: "Loridana Montalto takes us through the depths of depression and out the other side into a life of spiritual connection and embodied joy." },
  { num: 6, title: "Breaking the Cycle: From Bulimia to Inner Freedom", guest: "Claire Phillips", date: "3 Jul 2025", slug: "Breaking-the-Cycle-From-Bulimia-to-Inner-Freedom---Claire-Phillips-e34giap", description: "Claire Phillips shares her raw and honest journey through an eating disorder and the path she walked to reclaim her body, her worth, and her freedom." },
  { num: 7, title: "Rebuilding the Man: From Risk to Responsibility", guest: "Mitchell Lowe", date: "19 Jun 2025", slug: "Rebuilding-the-Man-From-Risk-to-Responsibility---Mitchell-Lowe-e34c12u", description: "Mitchell Lowe gets real about what it takes to step up, take responsibility, and rebuild yourself into the man you were always meant to be." },
  { num: 8, title: "From Hammer to Healing: Inner Child Transformation", guest: "Brendan Lucas", date: "1 Jun 2025", slug: "From-Hammer-to-Healing-A-Journey-Through-Inner-Child-Transformation---Brendan-Lucas-e33km83", description: "Brendan Lucas explores the profound work of inner child healing and what it means to finally move forward whole." },
  { num: 9, title: "Healing Beyond the Bars: A Journey to Inner Peace", guest: "Ty Brazel", date: "18 May 2025", slug: "Healing-Beyond-the-Bars-A-Journey-to-Inner-Peace---Ty-Brazel-e32v6vs", description: "Ty Brazel shares a story of finding peace and purpose from within, even when the walls around you feel impossible to escape." },
  { num: 10, title: "Fear to Freedom: Redefining Success on Your Terms", guest: "Maggie Tilley", date: "20 Mar 2025", slug: "Fear-to-Freedom-Redefining-Success-on-Your-Terms---Maggie-Tilley-e30e40u", description: "Maggie Tilley dismantles the conventional definition of success and shares what it looks like to build a life that actually feels like yours." },
  { num: 11, title: "OCD to Opportunity: Finding Purpose Through Art and Nature", guest: "Lydia Davies", date: "30 Nov 2024", slug: "OCD-to-Opportunity-Finding-Purpose-Through-Art-and-Nature---Lydia-Davies-e2rm4k2", description: "Lydia Davies shares how she transformed the relentless grip of OCD into a creative force using art and nature as her path back to presence." },
  { num: 12, title: "Conformity to Clarity: Embracing Authenticity and Purpose", guest: "Sarah van Eck", date: "2 Nov 2024", slug: "Conformity-to-Clarity-Embracing-Authenticity-and-Purpose---Sarah-van-Eck-e2qf4gr", description: "Sarah van Eck talks about shedding the weight of other people expectations and the moment she chose herself fully and without apology." },
  { num: 13, title: "Despair to Purpose: Embracing the Light Within", guest: "Brodie Klotz", date: "3 May 2024", slug: "Despair-to-Purpose-Embracing-the-Light-Within---Brodie-Klotz-e2j6rke", description: "Brodie Klotz opens up about the moment he hit rock bottom and what it took to find the light not outside himself, but within." },
  { num: 14, title: "Struggles to Innovation: Building Resilience Through Weight Loss", guest: "Phil Hedges", date: "30 Mar 2024", slug: "Struggles-to-Innovation-Building-Resilience-Through-Weight-Loss---Phil-Hedges-e2ho9tk", description: "Phil Hedges shares how his weight loss journey became a masterclass in resilience, identity, and the innovation that comes from being forced to change." },
  { num: 15, title: "Surviving to Thriving: Embracing Strength Through Being Abused", guest: "Tasha Nicholas", date: "13 Mar 2024", slug: "Surviving-to-Thriving-Embracing-Strength-Through-Being-Abused---Tasha-Nicholas-e2h0rid", description: "Tasha Nicholas shares her courageous story of surviving abuse and the long brave road to reclaiming her strength, her voice, and her life." },
  { num: 16, title: "Struggle to Strength: Embracing Fatherhood with CMT", guest: "Ashton Cole", date: "23 Feb 2024", slug: "Struggle-to-Strength-Embracing-Fatherhood-with-CMT---Ashton-Cole-e2g5ujh", description: "Ashton Cole navigates the intersection of disability and fatherhood and what it means to show up fully for your children when your own body is the challenge." },
  { num: 17, title: "Overcoming 11-Year Drug Addiction to Finding Acceptance", guest: "Ryan McCarthy", date: "12 Feb 2024", slug: "Overcoming-11-Year-Old-Drug-Addiction-to-Finding-Acceptance---Ryan-McCarthy-e2flv2r", description: "Ryan McCarthy shares eleven years of addiction, the moment he chose differently, and what acceptance of self truly looks and feels like on the other side." },
  { num: 18, title: "Disability to Adaptability: Navigating Life with Charcot-Marie-Tooth", guest: "Kyle Will", date: "7 Jan 2024", slug: "Disability-to-Adaptability-Navigating-Life-with-Charcot-Marie-Tooth---Kyle-Will-e2duchn", description: "Kyle Will shares what it means to live, adapt, and thrive with Charcot-Marie-Tooth disease and why disability is never the end of the story." },
  { num: 19, title: "Suicide Attempt to Mental Fitness: Brad Journey of Resilience", guest: "Brad Wright", date: "1 Jan 2024", slug: "Suicide-Attempt-to-Mental-Fitness-Brads-Journey-of-Resilience---Brad-Wright-e2dpel1", description: "Brad Wright shares one of the most raw and honest conversations on the show, from the edge of ending it all to building a life of mental strength and purpose." },
  { num: 20, title: "Overcoming Cocaine Addiction to Motherhood Magic", guest: "Gemmah Carr", date: "22 Dec 2023", slug: "Overcoming-Cocaine-Addiction-to-Motherhood-Magic---Gemmah-Carr-e2di6fo", description: "Gemmah Carr shares her journey from addiction to motherhood and the profound transformation that happens when you choose love over everything." },
  { num: 21, title: "Who is the Host?", guest: "Kyal Neil Currant", date: "18 Dec 2023", slug: "Who-is-the-host----Kyal-Neil-Currant-e2dcq1g", description: "The very first episode. Kyal Neil Currant introduces himself, his story, and why he created The To Be Podcast." },
];

const COVER = "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/39977947/39977947-1732882100626-cb24df1fd1b98.jpg";
const SHOW_URL = "https://podcasters.spotify.com/pod/show/the-to-be-podcast";

export default function Podcast() {
  const [active, setActive] = useState(EPISODES[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="w-full rounded-xl overflow-hidden shadow-xl">
            <iframe
              key={active.slug}
              src={`https://anchor.fm/s/eee2180c/podcast/embed/episodes/${active.slug}`}
              height="102"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={active.title}
              style={{ borderRadius: "12px", display: "block" }}
            />
          </div>
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
