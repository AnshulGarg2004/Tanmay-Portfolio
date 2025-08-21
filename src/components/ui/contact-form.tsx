'use client'
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // TODO: Replace with your actual submit logic
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-[#121529cc] backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#a855f7cc]">
      <h2 className="text-3xl font-bold mb-6 text-[#ec4899] text-center">
        Contact Me
      </h2>
      {submitted && (
        <p className="mb-4 text-green-400 font-semibold text-center">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <label
          htmlFor="name"
          className="block mb-1 font-semibold text-[#a78bfa]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#ec4899] transition-colors
            ${
              errors.name
                ? "border-red-500 bg-[#2b2e4a]"
                : "border-[#7c3aed] bg-transparent"
            }
            text-white placeholder-[#c4b5fd]`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}

        <label
          htmlFor="email"
          className="block mt-4 mb-1 font-semibold text-[#a78bfa]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#ec4899] transition-colors
            ${
              errors.email
                ? "border-red-500 bg-[#2b2e4a]"
                : "border-[#7c3aed] bg-transparent"
            }
            text-white placeholder-[#c4b5fd]`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        <label
          htmlFor="message"
          className="block mt-4 mb-1 font-semibold text-[#a78bfa]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className={`w-full p-3 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-[#ec4899] transition-colors
            ${
              errors.message
                ? "border-red-500 bg-[#2b2e4a]"
                : "border-[#7c3aed] bg-transparent"
            }
            text-white placeholder-[#c4b5fd]`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}

        <button
          type="submit"
          className="mt-6 w-full bg-[#ec4899] hover:bg-[#d63384] text-white font-bold py-3 rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
