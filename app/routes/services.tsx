import type { Route } from "./+types/services";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import Button from "~/components/Button";
import { useReveal } from "~/hooks/useReveal";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Our Services — Aurea Events | Wedding, Corporate & Event Planning",
    },
    {
      name: "description",
      content:
        "Explore our full range of event planning services: weddings, corporate events, birthday celebrations, social gatherings, event decoration, and coordination. Aurea Events, Lagos Nigeria.",
    },
    { property: "og:title", content: "Services — Aurea Events" },
    {
      property: "og:description",
      content:
        "Comprehensive event planning services tailored to your unique vision.",
    },
  ];
}

const services = [
  {
    icon: (
      <svg
        className="w-8 h-8"
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
      "Your wedding day should be the most magical day of your life. We handle everything from venue selection and vendor coordination to ceremony design and day-of management, ensuring every moment is picture-perfect.",
    features: [
      "Full-service planning",
      "Venue sourcing & design",
      "Vendor management",
      "Day-of coordination",
      "Budget management",
    ],
    image: "/wedding-event.png",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
      "Elevate your brand presence with expertly crafted corporate events. From product launches and conferences to team retreats and award ceremonies, we deliver professional excellence with creative flair.",
    features: [
      "Conference management",
      "Product launches",
      "Gala dinners",
      "Team building events",
      "Brand activations",
    ],
    image: "/corporate-event.png",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
      "Whether it's a milestone birthday or a surprise party, we design celebrations that are as unique as the guest of honour. Creative themes, stunning decor, and seamless logistics are our specialty.",
    features: [
      "Theme development",
      "Custom decor",
      "Entertainment booking",
      "Catering coordination",
      "Photography setup",
    ],
    image: "/birthday-party.png",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: "Social Gatherings",
    description:
      "From cocktail parties and brunches to anniversaries and holiday celebrations, we create social events that bring people together in style. Every gathering becomes a cherished memory.",
    features: [
      "Cocktail parties",
      "Anniversary celebrations",
      "Holiday events",
      "Engagement parties",
      "Baby showers",
    ],
    image: "/hero-bg.png",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Event Decoration",
    description:
      "Transform any space into a breathtaking visual experience. Our creative team specialises in luxurious floral arrangements, dramatic lighting design, and bespoke decorative elements that captivate every guest.",
    features: [
      "Floral design",
      "Lighting design",
      "Table styling",
      "Stage design",
      "Custom installations",
    ],
    image: "/wedding-event.png",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
    title: "Event Coordination",
    description:
      "Already have a plan but need expert hands to execute it? Our day-of coordination service ensures every timeline, vendor, and detail runs smoothly so you can be fully present for your event.",
    features: [
      "Timeline management",
      "Vendor liaison",
      "On-site management",
      "Guest coordination",
      "Crisis management",
    ],
    image: "/corporate-event.png",
  },
];

export default function Services() {
  const reveal = useReveal();

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/corporate-event.png"
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-cobalt-900/75" />
          </div>
          <div className="relative z-10 text-center px-4">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block animate-fade-in-down">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white! animate-fade-in">
              Our Services
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <SectionHeading
              label="Tailored to You"
              title="Comprehensive Event Solutions"
              subtitle="Every event is unique, and so is our approach. We offer a full spectrum of services designed to meet your specific needs, style, and budget."
            />
          </div>
        </section>

        {/* Services Detail */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={reveal.ref} className="space-y-20">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reveal.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image */}
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg img-overlay-container aspect-4/3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="w-14 h-14 rounded-xl bg-cobalt-50 flex items-center justify-center text-cobalt-700 mb-5">
                      {service.icon}
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-cobalt-900 mb-4">
                      {service.title}
                    </h2>
                    <span className="gold-line mb-5" />
                    <p className="font-body text-charcoal/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <svg
                            className="w-4 h-4 text-gold-500 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-body text-sm text-charcoal/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button to="/contact" variant="primary" size="sm">
                      Enquire Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-bg.png"
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cobalt-900/85" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4 block">
              Let&apos;s Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white! mb-6">
              Have a Vision?
              <br />
              We&apos;ll Make It Happen
            </h2>
            <p className="font-body text-white/80 mb-10 max-w-xl mx-auto">
              Tell us about your dream event and let our team craft a
              personalized plan to bring it to life.
            </p>
            <Button to="/contact" variant="gold" size="lg">
              Plan Your Event
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
