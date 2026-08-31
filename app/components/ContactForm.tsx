import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Social Gathering",
  "Other",
];

export default function ContactForm() {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    venueAvailability: "",
    guestsNo: "",
    budget: "",
    importantPoint: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!formData.name) {
      setError("Please fill in your name");
      return;
    }
    if (!formData.email) {
      setError("Please fill in your email");
      return;
    }
    if (!formData.phone) {
      setError("Please fill in your phone number");
      return;
    }
    if (!formData.eventType) {
      setError("Please fill in your event type");
      return;
    }
    if (!formData.eventDate) {
      setError("Please fill in your event date");
      return;
    }
    if (!formData.venueAvailability) {
      setError("Please fill in your venue availability");
      return;
    }
    if (!formData.guestsNo) {
      setError("Please fill in your number of guests");
      return;
    }
    if (!formData.budget) {
      setError("Please fill in your budget");
      return;
    }
    if (!formData.importantPoint) {
      setError("Please fill in your important point");
      return;
    }
    if (!formData.message) {
      setError("Please fill in your message");
      return;
    }
    console.log("Form submitted:", formData);
    console.log("Form:", form.current);
    if (!form.current) {
      console.error("Form is null");
      return;
    }
    emailjs
      .sendForm(emailJsServiceId, emailJsTemplateId, form.current, {
        publicKey: emailJsPublicKey,
      })
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 4000);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed to send message");
          setTimeout(() => setError(""), 4000);
        },
      );
  };

  const inputClasses =
    "w-full font-body text-sm px-4 py-3.5 rounded-xl border border-cobalt-100 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cobalt-500 focus:ring-2 focus:ring-cobalt-100 btn-transition";

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-5"
      id="contact-form"
    >
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
            name="full_name"
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
            name="email_address"
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
            name="phone_number"
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
            Whats the Occasion?
          </label>
          <input
            type="text"
            id="eventtype"
            name="occasion"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="Wedding"
            className={inputClasses}
          />
          {/* <select
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
          </select> */}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
            name="preferred_date"
            value={formData.eventDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="venue_status"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Do you have a venue yet?
          </label>
          <select
            id="venue_status"
            name="venue_status"
            value={formData.venueAvailability}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231976D2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px]`}
          >
            <option value="">Yes / No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="guestsNo"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Guests Expectation
          </label>
          <input
            type="number"
            id="guestsNo"
            name="number_of_guests"
            value={formData.guestsNo}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="budget"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            What's your budget?
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231976D2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px]`}
          >
            <option value="1M-2M">1,000,000 - 2,000,000</option>
            <option value="2M-3M">2,000,000 - 3,000,000</option>
            <option value="3M-4M">3,000,000 - 4,000,000</option>
            <option value="4M+">4,000,000 +</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <div>
          <label
            htmlFor="importantPoint"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            What matters most to you in your event?
          </label>
          <select
            id="importantPoint"
            name="what_matters_most"
            value={formData.importantPoint}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231976D2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px]`}
          >
            <option value="Beautiful Decor">Beautiful Decor</option>
            <option value="Guest Experience ">Guest Experience </option>
            <option value="Smooth Coordination">Smooth Coordination</option>
            <option value="Budget-friendly Planning">
              Budget-friendly Planning
            </option>
            <option value="Luxury Experience">Luxury Experience</option>
            <option value="Others">Others</option>
          </select>
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
            name="other_notes"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your dream event..."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        id="contact-submit-btn"
        className="w-full sm:w-auto bg-cobalt-700 text-white font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-cobalt-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-transition"
      >
        {isSubmitted ? "✓ Message Sent!" : "Send Message"}
      </button>

      {error && (
        <p className="font-body text-sm text-red-600 mt-2 animate-fade-in">
          {error}
        </p>
      )}

      {isSubmitted && (
        <p className="font-body text-sm text-green-600 mt-2 animate-fade-in">
          Thank you! We&apos;ll get back to you within 24 hours.
        </p>
      )}
    </form>
  );
}
