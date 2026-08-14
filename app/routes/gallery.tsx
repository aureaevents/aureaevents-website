import type { Route } from "./+types/gallery";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import GalleryGrid from "~/components/GalleryGrid";
import Button from "~/components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery — Aurea Events | Our Event Portfolio" },
    {
      name: "description",
      content:
        "Browse our portfolio of stunning events — weddings, corporate galas, birthday celebrations, and more. See the Aurea Events difference in every detail.",
    },
    { property: "og:title", content: "Gallery — Aurea Events Portfolio" },
    {
      property: "og:description",
      content:
        "A visual showcase of our most memorable events and celebrations.",
    },
  ];
}

const galleryImages = [
  { src: "/hero-bg.png", alt: "Grand Ballroom Gala", category: "Corporate" },
  {
    src: "/wedding-event.png",
    alt: "Garden Wedding Ceremony",
    category: "Wedding",
  },
  {
    src: "/corporate-event.png",
    alt: "Executive Conference",
    category: "Corporate",
  },
  {
    src: "/birthday-party.png",
    alt: "Luxury Birthday Bash",
    category: "Birthday",
  },
  {
    src: "/wedding-event.png",
    alt: "Beach Wedding Reception",
    category: "Wedding",
  },
  { src: "/hero-bg.png", alt: "Annual Awards Night", category: "Corporate" },
  {
    src: "/birthday-party.png",
    alt: "Children's Birthday",
    category: "Birthday",
  },
  {
    src: "/corporate-event.png",
    alt: "Product Launch Event",
    category: "Corporate",
  },
  {
    src: "/wedding-event.png",
    alt: "Traditional Wedding",
    category: "Wedding",
  },
  { src: "/hero-bg.png", alt: "Cocktail Reception", category: "Social" },
  {
    src: "/birthday-party.png",
    alt: "Milestone Celebration",
    category: "Birthday",
  },
  {
    src: "/corporate-event.png",
    alt: "Charity Gala Dinner",
    category: "Social",
  },
];

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-100 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/wedding-event.png"
              alt=""
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-cobalt-900/75" />
          </div>
          <div className="relative z-10 text-center px-4">
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block animate-fade-in-down">
              Our Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white! animate-fade-in">
              Event Gallery
            </h1>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Work"
              title="Events We've Created"
              subtitle="Every image tells a story of meticulous planning, creative design, and flawless execution. Browse through our portfolio to see the Aurea Events difference."
            />
            <GalleryGrid images={galleryImages} showFilter />
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
              Want Your Event
              <br />
              in Our Gallery?
            </h2>
            <p className="font-body text-white/80 mb-10 max-w-xl mx-auto">
              Let us create a stunning event that you&apos;ll be proud to share.
              Get in touch to start planning.
            </p>
            <Button to="/contact" variant="gold" size="lg">
              Start Your Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
