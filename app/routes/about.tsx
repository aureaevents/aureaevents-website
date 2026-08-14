import type { Route } from "./+types/about";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import StatsCounter from "~/components/StatsCounter";
import Button from "~/components/Button";
import { useReveal } from "~/hooks/useReveal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us — Aurea Events | Our Story & Vision" },
    {
      name: "description",
      content:
        "Learn about Aurea Events, a premier event planning agency with over 12 years of experience creating extraordinary events across Nigeria. Meet our team and discover our mission.",
    },
    { property: "og:title", content: "About Aurea Events — Our Story" },
    {
      property: "og:description",
      content:
        "Discover the passion and expertise behind every Aurea Events experience.",
    },
  ];
}

const stats = [
  { value: 500, suffix: "+", label: "Events Planned" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Team Members" },
];

const values = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    title: "Excellence",
    description:
      "We pursue the highest standards in every detail, ensuring flawless execution from concept to completion.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
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
    title: "Passion",
    description:
      "Every event is a labour of love. Our genuine passion for creating beautiful moments drives everything we do.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Collaboration",
    description:
      "Your vision is our blueprint. We work closely with every client to bring their unique dreams to reality.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Innovation",
    description:
      "We stay ahead of trends and embrace creative solutions to deliver events that are fresh, modern, and memorable.",
  },
];

export default function About() {
  const storyReveal = useReveal();
  const valuesReveal = useReveal();
  const missionReveal = useReveal();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-bg.png"
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-cobalt-900/75" />
          </div>
          <div className="relative z-10 text-center px-4">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block animate-fade-in-down">
              Our Story
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white! animate-fade-in">
              About Aurea Events
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white">
          <div
            ref={storyReveal.ref}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
              storyReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 lg:order-1">
              <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 block">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-cobalt-900 mb-4">
                A Legacy of Creating
                <br />
                Unforgettable Moments
              </h2>
              <span className="gold-line mb-6" />
              <p className="font-body text-charcoal/60 leading-relaxed mb-4">
                Aurea Events was founded with a singular vision: to elevate
                every celebration into an extraordinary experience. What began
                as a small team with big dreams has grown into one of
                Nigeria&apos;s most trusted event planning agencies.
              </p>
              <p className="font-body text-charcoal/60 leading-relaxed mb-4">
                Our name, &ldquo;Aurea,&rdquo; draws from the Latin word for
                &ldquo;golden&rdquo; — reflecting our commitment to delivering
                events that shine with quality, elegance, and timeless beauty.
                Every detail, from the first consultation to the final farewell,
                is handled with meticulous care.
              </p>
              <p className="font-body text-charcoal/60 leading-relaxed mb-8">
                With over a decade of experience and hundreds of successful
                events, we&apos;ve built a reputation for turning dreams into
                reality. Our diverse portfolio spans intimate weddings, grand
                corporate galas, vibrant birthday celebrations, and everything
                in between.
              </p>
              <Button to="/contact" variant="primary">
                Work With Us
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/corporate-event.png"
                  alt="Aurea Events team at work"
                  className="w-full h-100 md:h-125 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold-500 rounded-2xl -z-10" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-cobalt-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cobalt-500 rounded-full blur-3xl" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StatsCounter stats={stats} light />
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={valuesReveal.ref}
              className={`transition-all duration-700 ${
                valuesReveal.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <SectionHeading
                label="Our Core Values"
                title="What Drives Us"
                subtitle="Our values are the foundation of every event we create and every relationship we build."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-cobalt-50 ${
                    valuesReveal.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-cobalt-50 flex items-center justify-center text-cobalt-700 mx-auto mb-5">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-lg text-cobalt-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="section-padding bg-white">
          <div
            ref={missionReveal.ref}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-700 ${
              missionReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-cobalt-50 rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-cobalt-700 flex items-center justify-center text-white mb-5">
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-cobalt-900 mb-4">
                Our Vision
              </h3>
              <span className="gold-line mb-4" />
              <p className="font-body text-charcoal/60 leading-relaxed">
                To be the most sought-after event planning agency in Africa,
                recognized for our unwavering commitment to excellence,
                innovation, and creating moments that transcend expectations.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center text-cobalt-900 mb-5">
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
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-cobalt-900 mb-4">
                Our Mission
              </h3>
              <span className="gold-line mb-4" />
              <p className="font-body text-charcoal/60 leading-relaxed">
                To transform every client&apos;s vision into a breathtaking
                reality through personalized service, creative design, and
                seamless coordination — ensuring every event is a golden
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/birthday-party.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cobalt-900/85" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl text-white! mb-6">
              Ready to Create Your
              <br />
              Perfect Event?
            </h2>
            <p className="font-body text-white/80 mb-10 max-w-xl mx-auto">
              Let&apos;s discuss your vision and start planning something truly
              special.
            </p>
            <Button to="/contact" variant="gold" size="lg">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
