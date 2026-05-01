import { useState } from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  const extractYouTubeId = (url: string) => {
    const match = url.match(/shorts\/([^?]+)/);
    return match ? match[1] : null;
  };

  const getEmbedUrl = (videoUrl: string) => {
    const id = extractYouTubeId(videoUrl);
    return id ? `https://www.youtube.com/embed/${id}` : null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-[#1C3A2E] text-white sticky top-0 z-50 shadow-lg">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-lg font-bold tracking-wide" style={{ color: "#F5F0E8", textDecoration: "none" }}>
            Kyal Currant
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "The Retreat", href: "/#retreat" },
              { label: "The Book", href: "/#book" },
              { label: "Podcast", href: "/podcast" },
              { label: "Testimonials", href: "/testimonials" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body transition-colors"
                style={{ color: "#E8DFD0", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#E8DFD0")}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="/#retreat" className="hidden md:inline-block" style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem", background: "#C9A84C", color: "#1C3A2E", textDecoration: "none", borderRadius: "0.5rem", fontWeight: "600", transition: "all 0.3s" }} onMouseEnter={(e) => (e.currentTarget.style.background = "#B89840")} onMouseLeave={(e) => (e.currentTarget.style.background = "#C9A84C")}>
            Apply Now
          </a>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-b from-[#1C3A2E] to-[#0F1F1A] text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#C9A84C] mb-4">
            REAL TRANSFORMATIONS
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Leaders Who've Stepped Into Their Power
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear directly from high-level coaches, healers, and entrepreneurs who have experienced the Connected retreat and embodied leadership coaching.
          </p>
        </div>
      </div>

      {/* Main Testimonials Section */}
      <div className="bg-background py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="md:col-span-2">
              <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
                {selectedTestimonial && getEmbedUrl(selectedTestimonial.videoUrl) && (
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={getEmbedUrl(selectedTestimonial.videoUrl) || ''}
                      title={`${selectedTestimonial.name} testimonial`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>

              {/* Testimonial Info */}
              <div className="mt-8 bg-[#F5F0E8] p-8 rounded-lg">
                <p className="text-sm uppercase tracking-widest text-[#C9A84C] mb-2">
                  {selectedTestimonial.type === 'speaker' ? 'Speaker Testimonial' : 'Coaching Testimonial'}
                </p>
                <h3 className="text-3xl font-serif font-bold text-[#1C3A2E] mb-2">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-lg text-[#3D2B1F] mb-4">{selectedTestimonial.role}</p>
                <p className="text-gray-700 italic">{selectedTestimonial.context}</p>
              </div>
            </div>

            {/* Testimonial List */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-serif font-bold text-[#1C3A2E] mb-6">
                All Testimonials
              </h3>
              <div className="space-y-3">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedTestimonial.id === testimonial.id
                        ? 'bg-[#C9A84C] text-[#1C3A2E]'
                        : 'bg-[#F5F0E8] text-[#1C3A2E] hover:bg-[#E8DFD0]'
                    }`}
                  >
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs opacity-75 mt-1">{testimonial.role}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Testimonials */}
      <div className="bg-[#1C3A2E] py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#C9A84C] mb-4">
              FULL TESTIMONIAL GALLERY
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Every Voice Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <a
                key={testimonial.id}
                href={testimonial.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2A4A3E] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-black h-40 flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <svg
                    className="w-16 h-16 text-[#C9A84C] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-white text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#C9A84C] text-sm mb-3">{testimonial.role}</p>
                  <p className="text-gray-300 text-sm">{testimonial.context}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#F5F0E8] py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-[#1C3A2E] mb-6">
            Ready to Join Them?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            These leaders stepped into their power on sacred land. Your transformation is waiting.
          </p>
          <a
            href="/#apply"
            className="inline-block bg-[#C9A84C] text-[#1C3A2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#B89840] transition-colors"
          >
            Apply for Connected
          </a>
        </div>
      </div>
    </div>
  );
}
