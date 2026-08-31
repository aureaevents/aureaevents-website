const socials = [
  {
    label: "Instagram",
    handle: "@aureaeventsng",
    description: "Follow us on Instagram",
    url: "https://www.instagram.com/aureaeventsng?igsi=MWQ0bDVmZjlsZXA3",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Aurea Events",
    description: "Follow us on Facebook",
    url: "https://www.facebook.com/share/1BfAUSNS7E/?mibextid=wwXIfr",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@aureaeventsng_",
    description: "Watch our latest videos",
    url: "https://www.tiktok.com/@aureaeventsng_",
    bgColor: "bg-gray-100",
    iconColor: "text-charcoal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.48a8.18 8.18 0 004.76 1.52V7.56a4.83 4.83 0 01-1-.87z" />
      </svg>
    ),
  },
];

export default function Socials() {
  return (
    <section className="section-padding bg-cream" id="socials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 block text-center">
            Stay Connected
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-cobalt-900 text-center">
            See more of our works and Follow Us
          </h2>
          <span className="gold-line-center mt-4" />
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} — ${social.description}`}
              className={`group flex items-center gap-4 rounded-2xl px-5 py-5 ${social.bgColor} border border-transparent hover:border-cobalt-100 hover:shadow-lg btn-transition hover:-translate-y-0.5`}
            >
              {/* Icon */}
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${social.bgColor} ${social.iconColor} flex items-center justify-center group-hover:scale-110 btn-transition`}
              >
                {social.icon}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-heading text-base text-cobalt-900 truncate">
                  {social.handle}
                </p>
                <p className="font-body text-sm text-charcoal/60">
                  {social.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="w-5 h-5 ml-auto shrink-0 text-charcoal/30 group-hover:text-cobalt-500 group-hover:translate-x-1 btn-transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
