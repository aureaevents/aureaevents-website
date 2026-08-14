import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Aurea Events transformed our wedding into a fairy tale. Every detail was meticulously planned and beautifully executed. We couldn't have asked for a more magical day.",
    name: "Adaeze & Chidi",
    role: "Wedding, Lagos",
  },
  {
    quote:
      "Our corporate gala was an absolute success thanks to Aurea Events. Professional, creative, and incredibly attentive to our brand's vision. Highly recommended.",
    name: "Funke Adeyemi",
    role: "Corporate Gala, Abuja",
  },
  {
    quote:
      "From the initial consultation to the final send-off, Aurea Events made my 40th birthday an unforgettable celebration. Their creativity is unmatched.",
    name: "Tunde Bakare",
    role: "Birthday Celebration, Lagos",
  },
  {
    quote:
      "Working with Aurea Events was a dream. They listened to every detail and delivered beyond our expectations. Our guests are still talking about the event!",
    name: "Ngozi & Emeka",
    role: "Traditional Wedding, Enugu",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="max-w-3xl mx-auto text-center" id="testimonial-slider">
      {/* Quote icon */}
      <svg
        className="w-12 h-12 mx-auto mb-8 text-gold-500/40"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote */}
      <div
        className={`transition-all duration-300 ${
          isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <blockquote className="font-heading text-xl md:text-2xl text-cobalt-900 leading-relaxed italic mb-8">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div>
          <p className="font-body text-sm font-semibold text-cobalt-700 uppercase tracking-wider">
            {t.name}
          </p>
          <p className="font-body text-xs text-charcoal/50 mt-1">{t.role}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full btn-transition ${
              i === current
                ? "w-8 h-2 bg-cobalt-700"
                : "w-2 h-2 bg-cobalt-200 hover:bg-cobalt-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
