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
    full_name: "",
    email_address: "",
    phone_number: "",
    occasion: "",
    preferred_date: "",
    venue_status: "No",
    number_of_guests: "",
    budget: "₦1,000,000-₦2,000,000",
    what_matters_most: "Beautiful Decor",
    other_notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
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

    if (!formData.full_name) {
      setError("Please fill in your name");
      return;
    }
    if (!formData.email_address) {
      setError("Please fill in your email");
      return;
    }
    if (!formData.phone_number) {
      setError("Please fill in your phone number");
      return;
    }
    if (!formData.occasion) {
      setError("Please fill in the occasion type");
      return;
    }
    if (!formData.preferred_date) {
      setError("Please fill in your event date");
      return;
    }
    if (!formData.venue_status) {
      setError("Please fill in your venue availability");
      return;
    }
    if (!formData.number_of_guests) {
      setError("Please fill in your number of guests");
      return;
    }
    if (!formData.budget) {
      setError("Please fill in your budget");
      return;
    }
    if (!formData.what_matters_most) {
      setError("Please decide in what matters most to you in your event");
      return;
    }
    console.log("Form submitted:", formData);
    console.log("Form:", form.current);
    if (!form.current) {
      console.error("Form is null");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      full_name: formData.full_name,
      email_address: formData.email_address,
      phone_number: formData.phone_number,
      occasion: formData.occasion,
      preferred_date: formData.preferred_date,
      venue_status: formData.venue_status,
      number_of_guests: formData.number_of_guests,
      budget: formData.budget,
      what_matters_most: formData.what_matters_most,
      other_notes: formData.other_notes,
    };

    console.log("Template params:", templateParams);
    console.log("EmailJS Service ID:", emailJsServiceId);
    console.log("EmailJS Template ID:", emailJsTemplateId);
    console.log("EmailJS Public Key:", emailJsPublicKey);
    emailjs
      .send(emailJsServiceId, emailJsTemplateId, templateParams, {
        publicKey: emailJsPublicKey,
      })
      .then(
        () => {
          setIsLoading(false);
          setIsSubmitted(true);
          console.log("SUCCESS!");
          setFormData({
            full_name: "",
            email_address: "",
            phone_number: "",
            occasion: "",
            preferred_date: "",
            venue_status: "",
            number_of_guests: "",
            budget: "",
            what_matters_most: "",
            other_notes: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          setError("Failed to send message. Please try again.");
          setTimeout(() => setError(""), 5000);
        },
      );
  };

  const inputClasses =
    "w-full font-body text-sm px-4 py-3.5 rounded-xl border border-cobalt-100 bg-white text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-cobalt-500 focus:ring-2 focus:ring-cobalt-100 btn-transition";

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-5 relative"
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
            value={formData.full_name}
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
            value={formData.email_address}
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
            value={formData.phone_number}
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
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Wedding"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="preferred_date"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Preferred Event Date
          </label>
          <input
            type="date"
            id="preferred_date"
            name="preferred_date"
            value={formData.preferred_date}
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
            value={formData.venue_status}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231976D2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[right_12px_center] bg-size-[20px]`}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="number_of_guests"
            className="font-body text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-1.5 block"
          >
            Expected Number of Guests
          </label>
          <input
            type="number"
            id="number_of_guests"
            name="number_of_guests"
            value={formData.number_of_guests}
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
            <option value="₦1,000,000-₦2,000,000">
              ₦1,000,000 - ₦2,000,000
            </option>
            <option value="₦2,000,000-₦3,000,000">
              ₦2,000,000 - ₦3,000,000
            </option>
            <option value="₦3,000,000-₦4,000,000">
              ₦3,000,000 - ₦4,000,000
            </option>
            <option value="₦4,000,000+">₦4,000,000 +</option>
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
            id="what_matters_most"
            name="what_matters_most"
            value={formData.what_matters_most}
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
            Tell Us About Your Event
          </label>
          <textarea
            id="message"
            name="other_notes"
            rows={5}
            value={formData.other_notes}
            onChange={handleChange}
            placeholder="Describe your dream event..."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        id="contact-submit-btn"
        disabled={isLoading}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cobalt-700 text-white font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-cobalt-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 btn-transition ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {error && (
        <p className="font-body text-sm text-red-600 mt-2 animate-fade-in">
          {error}
        </p>
      )}

      {/* Subtle Success Pop-up Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsSubmitted(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-cobalt-100/60 text-center relative transform transition-all animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal p-1 rounded-full btn-transition"
              aria-label="Close message"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h3
              id="success-modal-title"
              className="font-heading text-2xl text-cobalt-900 mb-2"
            >
              Message Received!
            </h3>
            <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
              Thank you for reaching out to Aurea Events. We have received your
              request and will get back to you within 24 hours.
            </p>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-cobalt-700 hover:bg-cobalt-600 text-white font-body font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full btn-transition shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
