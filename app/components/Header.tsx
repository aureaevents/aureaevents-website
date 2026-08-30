import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg py-3`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Aurea Events Home"
        >
          <img
            src="/Aurea_Events_Logo1.png"
            alt="Aurea Events Logo"
            className="h-12 w-auto object-contain rounded"
            width={48}
            height={48}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium tracking-wide uppercase relative py-1 btn-transition ${
                location.pathname === link.to
                  ? "text-cobalt-700"
                  : "text-charcoal/70 hover:text-cobalt-700"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 ${
                location.pathname === link.to
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className={`hidden lg:inline-flex items-center gap-2 font-body text-sm font-semibold px-6 py-2.5 rounded-full btn-transition bg-cobalt-900 text-white hover:bg-cobalt-600 shadow-md hover:shadow-lg `}
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-cobalt-900  ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-cobalt-900 ${isMobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-cobalt-900 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-18  w-screen bg-cobalt-900/98 backdrop-blur-lg z-40 transition-all duration-500 flex flex-col py-6 items-center justify-center ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close button */}
        {/* <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button> */}

        <nav
          className="flex flex-col items-center gap-6"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-2xl transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-gold-500"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 bg-gold-500 text-cobalt-900 font-body font-semibold px-8 py-3 rounded-full hover:bg-gold-400 btn-transition"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
