import { useState } from "react";
import { useLocation } from "wouter";

interface HeaderProps {
  scrolled?: boolean;
}

export default function Header({ scrolled = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "The Premier Speaker Event", href: "/premier-event" },
    { label: "The Retreat", href: "/#retreat" },
    { label: "The Book", href: "/#book" },
    { label: "Podcast", href: "/podcast" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location === href;
  };

  return (
    <nav
      className={`site-nav ${scrolled ? "scrolled" : ""}`}
      style={!scrolled ? { background: "transparent" } : {}}
    >
      <div className="container flex items-center justify-between py-5">
        <a
          href="/"
          className="font-display text-lg tracking-wide"
          style={{
            color: "oklch(0.96 0.015 75)",
            fontFamily: "'Playfair Display', serif",
            textDecoration: "none",
          }}
        >
          Kyal Neil Currant
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body transition-colors"
              style={{
                color: "oklch(0.85 0.01 75)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "oklch(0.72 0.12 75)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "oklch(0.85 0.01 75)")
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#retreat"
            className="btn-gold"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}
          >
            Apply Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px"
              style={{ background: "oklch(0.96 0.015 75)" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "oklch(0.18 0.05 155)" }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm py-2"
              style={{
                color: "oklch(0.85 0.01 75)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#retreat"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-gold text-center"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
