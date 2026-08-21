import type { Route } from "./+types/contact";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import ContactForm from "~/components/ContactForm";
import { useReveal } from "~/hooks/useReveal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us — Aurea Events | Plan Your Event Today" },
    {
      name: "description",
      content:
        "Get in touch with Aurea Events to start planning your dream event. Contact us for weddings, corporate events, birthdays, and more. Based in Lagos, Nigeria.",
    },
    { property: "og:title", content: "Contact Aurea Events" },
    {
      property: "og:description",
      content:
        "Let's create something extraordinary together. Reach out to start planning.",
    },
  ];
}

const contactInfo = [
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
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
        />
      </svg>
    ),
    title: "Visit Us",
    lines: ["Lagos, Nigeria"],
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    title: "Call Us",
    lines: ["+234 800 000 0000", "+234 900 000 0000"],
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Email Us",
    lines: ["hello@aureaevents.com", "info@aureaevents.com"],
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Working Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 4:00 PM"],
  },
];

export default function Contact() {
  const formReveal = useReveal();

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
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white! animate-fade-in">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, i) => (
                <div
                  key={info.title}
                  className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cobalt-50 flex items-center justify-center text-cobalt-700 mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-heading text-base text-cobalt-900 mb-2">
                    {info.title}
                  </h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="font-body text-sm text-charcoal/60">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-cream">
          <div
            ref={formReveal.ref}
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
              formReveal.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left: Form */}
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 block">
                Send Us a Message
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-cobalt-900 mb-4">
                Tell Us About Your
                <br />
                Dream Event
              </h2>
              <span className="gold-line mb-6" />
              <p className="font-body text-charcoal/60 leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within
                24 hours to discuss your vision and how we can bring it to life.
              </p>
              <ContactForm />
            </div>

            {/* Right: Image + Map placeholder */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-75">
                <img
                  src="/corporate-event.png"
                  alt="Aurea Events office"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-62.5 bg-cobalt-50 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto text-cobalt-300 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                    />
                  </svg>
                  <p className="font-body text-sm text-cobalt-400 font-medium">
                    Lagos, Nigeria
                  </p>
                  <p className="font-body text-xs text-cobalt-300 mt-1">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ-like info */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <SectionHeading
              label="Quick Info"
              title="How It Works"
              subtitle="Our process is designed to make event planning effortless for you."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "Share your vision with us during a personalised consultation. We listen, understand your needs, and provide expert guidance to help bring your event vision to life.",
                },
                {
                  step: "02",
                  title: "Planning",
                  description:
                    "Our team crafts a detailed plan covering every aspect; venue, vendors, timeline, and budget.",
                },
                {
                  step: "03",
                  title: "Execution",
                  description:
                    "We bring your vision to life with precision, handling every detail so you can enjoy the moment.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="font-heading text-4xl text-cobalt-100 block mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg text-cobalt-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
