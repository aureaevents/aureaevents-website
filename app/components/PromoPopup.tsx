import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenPopup = sessionStorage.getItem("aurea_popup_seen");
    if (!hasSeenPopup) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("aurea_popup_seen", "true");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-white btn-transition"
          aria-label="Close popup"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left — Image */}
        <div className="relative h-fit grid place-items-center md:h-auto">
          <img
            src="/main/Proposal Offer.webp"
            alt="Aurea Events — Special Offer"
            className="md:w-full md:h-full h-75 object-cover aspect-auto "
          />
        </div>

        {/* Right — Content */}
        <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
          <span className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-gold-500 mb-3">
            Limited Time Offer
          </span>

          <h2
            id="promo-popup-title"
            className="font-heading text-2xl sm:text-3xl text-cobalt-900 leading-tight mb-3"
          >
            Make Your Next
            <br />
            Proposal <span className="text-gold-500">Unforgettable</span>
          </h2>

          <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6">
            Let Aurea Events bring your dream proposal to life. Contact us now
            for a consultation.
          </p>

          <Link
            to="/contact#form"
            onClick={closePopup}
            className="inline-flex items-center justify-center gap-2 w-full bg-red-700 text-white font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-red-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-transition"
          >
            Book Your Proposal
          </Link>

          <button
            type="button"
            onClick={closePopup}
            className="mt-3 font-body text-xs text-charcoal/50 hover:text-charcoal/80 btn-transition underline underline-offset-2"
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
}
