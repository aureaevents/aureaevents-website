import type { Route } from "./+types/home";
import { Link } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Button from "~/components/Button";
import SectionHeading from "~/components/SectionHeading";
import ServiceCard from "~/components/ServiceCard";
import TestimonialSlider from "~/components/TestimonialSlider";
import StatsCounter from "~/components/StatsCounter";
import GalleryGrid from "~/components/GalleryGrid";
import { useReveal } from "~/hooks/useReveal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aurea Events — Premium Event Planning & Management Agency" },
    {
      name: "description",
      content:
        "Aurea Events is a premier event planning and management agency creating unforgettable experiences. Weddings, corporate events, birthdays, and more. Lagos, Nigeria.",
    },
    {
      property: "og:title",
      content: "Aurea Events — Premium Event Planning & Management",
    },
    {
      property: "og:description",
      content:
        "Creating unforgettable moments through meticulous planning and flawless execution.",
    },
    { property: "og:type", content: "website" },
  ];
}

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Wedding Planning",
    description:
      "From intimate ceremonies to grand celebrations, we craft wedding experiences that reflect your unique love story.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Corporate Events",
    description:
      "Elevate your brand with meticulously planned corporate gatherings, conferences, and galas that leave lasting impressions.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z"
        />
      </svg>
    ),
    title: "Birthday Celebrations",
    description:
      "Make every milestone memorable with bespoke birthday celebrations designed to dazzle and delight.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Event Decoration",
    description:
      "Transform any space into a breathtaking spectacle with our creative design and decor expertise.",
  },
];

const galleryImages = [
  { src: "/hero-bg.png", alt: "Luxury Gala Event", category: "Corporate" },
  {
    src: "/wedding-event.png",
    alt: "Garden Wedding Setup",
    category: "Wedding",
  },
  {
    src: "/corporate-event.png",
    alt: "Corporate Conference",
    category: "Corporate",
  },
  {
    src: "/birthday-party.png",
    alt: "Birthday Celebration",
    category: "Birthday",
  },
  { src: "/hero-bg.png", alt: "Grand Ballroom Reception", category: "Wedding" },
  { src: "/wedding-event.png", alt: "Outdoor Ceremony", category: "Wedding" },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Planned" },
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Team Members" },
];

export default function Home() {
  const aboutReveal = useReveal();
  const servicesReveal = useReveal();
  const statsReveal = useReveal();
  const galleryReveal = useReveal();
  const testimonialReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <>
      <Header />
      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Ken Burns */}
          {/* <div className="absolute inset-0">
            <img
              src="/hero-bg.png"
              alt=""
              className="w-full h-full object-cover animate-ken-burns"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cobalt-900/70 via-cobalt-900/50 to-cobalt-900/80" />
          </div> */}

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <span className="inline-block font-body text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-6 animate-fade-in-down">
              Premium Event Planning
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight animate-fade-in">
              Aurea Events
              <br />
              <span className="text-gold-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl  ">
                Creating Moment Worth Remembering
              </span>
            </h1>
            <p className="font-body text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium animate-fade-in-up leading-relaxed">
              We transform your vision into extraordinary events. From intimate
              gatherings to grand celebrations, every detail is crafted with
              passion and precision.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button to="/contact" variant="primary" size="lg">
                Plan Your Event
              </Button>
              <Button
                to="/gallery"
                variant="secondary"
                size="lg"
                className="  "
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
              <div className="w-1 h-2.5 rounded-full bg-white/60 animate-fade-in" />
            </div>
          </div>
        </section>

        {/* ===== ABOUT PREVIEW ===== */}
        <section className="section-padding bg-white" id="about-preview">
          <div
            ref={aboutReveal.ref}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
              aboutReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wedding-event.png"
                  alt="Aurea Events — Elegant wedding setup"
                  className="w-full h-100 md:h-125 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500 rounded-2xl -z-10" />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-cobalt-700 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="font-heading text-3xl">12+</p>
                <p className="font-body text-xs uppercase tracking-wider text-white/70">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 block">
                About Aurea Events
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-cobalt-900 mb-4">
                Where Vision Meets
                <br />
                Flawless Execution
              </h2>
              <span className="gold-line mb-6" />
              <p className="font-body text-charcoal leading-relaxed mb-4">
                At Aurea Events, we believe every occasion deserves to be
                extraordinary. Founded with a passion for creating unforgettable
                experiences, our team brings together creativity, precision, and
                an unwavering commitment to excellence.
              </p>
              <p className="font-body text-charcoal leading-relaxed mb-8">
                From concept to execution, we handle every detail so you can
                focus on what matters most, enjoying the moment with the people
                you love.
              </p>
              <Button to="/about" variant="primary">
                Our Story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SERVICES PREVIEW ===== */}
        <section className="section-padding bg-cream" id="services-preview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={servicesReveal.ref}
              className={`transition-all duration-700 ${
                servicesReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <SectionHeading
                label="What We Do"
                title="Our Services"
                subtitle="We offer a comprehensive suite of event planning services tailored to bring your vision to life with elegance and precision."
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`transition-all duration-700 ${
                    servicesReveal.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button to="/services" variant="secondary">
                All Services
              </Button>
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section
          className="py-16 md:py-20 bg-cobalt-900 relative overflow-hidden"
          id="stats"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cobalt-500 rounded-full blur-3xl" />
          </div>
          <div
            ref={statsReveal.ref}
            className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
              statsReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <StatsCounter stats={stats} light />
          </div>
        </section>

        {/* ===== GALLERY PREVIEW ===== */}
        <section className="section-padding bg-white" id="gallery-preview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={galleryReveal.ref}
              className={`transition-all duration-700 ${
                galleryReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <SectionHeading
                label="Our Portfolio"
                title="Featured Events"
                subtitle="A glimpse into some of the extraordinary events we've had the privilege of creating."
              />
            </div>
            <div
              className={`transition-all duration-700 delay-200 ${
                galleryReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <GalleryGrid images={galleryImages} />
            </div>
            <div className="text-center mt-12">
              <Button to="/gallery" variant="primary">
                View Full Gallery
              </Button>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="section-padding bg-cream" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={testimonialReveal.ref}
              className={`transition-all duration-700 ${
                testimonialReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <SectionHeading
                label="Testimonials"
                title="What Our Clients Say"
                subtitle="Don't just take our word for it, hear from the couples and companies who trusted us with their most important moments."
              />
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="relative py-20 md:py-28 overflow-hidden" id="cta">
          <div className="absolute inset-0">
            <img
              src="/corporate-event.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cobalt-900/85" />
          </div>
          <div
            ref={ctaReveal.ref}
            className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
              ctaReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4 block">
              Ready to Begin?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white! mb-6">
              Let&apos;s Create Something
              <br />
              Extraordinary Together
            </h2>
            <p className="font-body text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re planning a wedding, corporate event, or a
              special celebration, we&apos;re here to make it unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="gold" size="lg">
                Start Planning
              </Button>
              <Button
                to="/services"
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-cobalt-900! hover:border-white"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
