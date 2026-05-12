"use client";

import { FormEvent, useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/formspree";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<
      string,
      string
    >;
    if (!payload.name || !payload.email || !payload.subject || !payload.message || !payload.consent) {
      return setError("Please complete all required fields.");
    }

    setLoading(true);
    try {
      const submitData = new FormData(event.currentTarget);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: submitData,
        headers: { Accept: "application/json" }
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setError(data.error?.trim() || "Something went wrong. Please try again.");
        return;
      }

      setSuccess("Thank you. Your message has been received and our team will reply shortly.");
      event.currentTarget.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4 p-6">
      <input type="hidden" name="_subject" value="Cannacare contact — Get in touch" />
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
      <button disabled={loading} className="cta-primary disabled:opacity-70">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
