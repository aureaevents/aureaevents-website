import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Social Gathering",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputClasses =
    "w-full font-body text-sm px-4 py-3.5 rounded-xl border border-cobalt-100 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cobalt-500 focus:ring-2 focus:ring-cobalt-100 btn-transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+234 800 000 0000"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="eventType"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231976D2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px]`}
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="eventDate"
          className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
        >
          Preferred Event Date
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
        >
          Tell Us About Your Event *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your dream event..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        id="contact-submit-btn"
        className="w-full sm:w-auto bg-cobalt-700 text-white font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-cobalt-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-transition"
      >
        {isSubmitted ? "✓ Message Sent!" : "Send Message"}
      </button>

      {isSubmitted && (
        <p className="font-body text-sm text-green-600 mt-2 animate-fade-in">
          Thank you! We&apos;ll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}
