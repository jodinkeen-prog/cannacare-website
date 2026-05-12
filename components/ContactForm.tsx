"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!payload.name || !payload.email || !payload.subject || !payload.message || !payload.consent) {
      return setError("Please complete all required fields.");
    }
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, type: "contact" })
    });
    if (!response.ok) return setError("Something went wrong. Please try again.");
    setSuccess("Thank you. Your message has been received and our team will reply shortly.");
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4 p-6">
      <input name="name" placeholder="Name" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="email" placeholder="Email" required className="w-full rounded-xl border border-soft-border p-3" />
      <select name="subject" required className="w-full rounded-xl border border-soft-border p-3">
        <option value="">Subject</option>
        <option>General Enquiry</option>
        <option>Media</option>
        <option>Partnership</option>
        <option>Other</option>
      </select>
      <textarea name="message" required placeholder="Message" className="w-full rounded-xl border border-soft-border p-3" />
      <label className="block text-sm"><input type="checkbox" name="consent" value="true" /> I consent to Cannacare storing this information to respond to my enquiry.</label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {success ? <p className="text-sm text-emerald">{success}</p> : null}
      <button className="cta-primary">Send Message</button>
    </form>
  );
}
