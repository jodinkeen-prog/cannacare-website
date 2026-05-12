"use client";

import { FormEvent, useRef, useState } from "react";
import TurnstileField from "@/components/TurnstileField";
import { parseFormspreeJson } from "@/lib/formspree";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

const states = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];
const reasons = [
  "Sleep & Rest",
  "Physical Wellbeing",
  "Mental Wellbeing",
  "General Education",
  "Clinic Referral",
  "Other"
];

const contactTimes = ["Morning", "Afternoon", "Evening", "Anytime"];
const consultationTypes = ["Phone", "Video", "No preference"];

const isValidAustralianPhone = (value: string): boolean => {
  const normalized = value.replace(/\s/g, "");
  return /^(\+61|0)[2-478](\d){8}$/.test(normalized) || /^(\+61|0)4\d{8}$/.test(normalized);
};

export default function ConsultationForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance | undefined>(undefined);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    const required = [
      "fullName",
      "email",
      "phone",
      "state",
      "reason",
      "consultationType",
      "preferredContactMethod",
      "bestContactTime"
    ];
    const missing = required.some((key) => !payload[key]);
    if (missing) {
      setSuccess("");
      setError("Please complete all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(payload.email)) {
      setSuccess("");
      setError("Please enter a valid email address.");
      return;
    }
    if (!isValidAustralianPhone(payload.phone)) {
      setSuccess("");
      setError("Please enter a valid Australian phone number.");
      return;
    }
    if (!(payload.ageConfirmed && payload.consent && payload.disclaimerAccepted && payload.australiaConfirmed)) {
      setSuccess("");
      setError("All required confirmations and consent checkboxes must be checked.");
      return;
    }

    const turnstileToken = turnstileRef.current?.getResponse?.();
    if (!turnstileToken?.trim()) {
      setSuccess("");
      setError("Please complete the security check before submitting.");
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      let response: Response;
      try {
        const submitData = new FormData(event.currentTarget);
        submitData.delete("cf-turnstile-response");
        submitData.append("cf-turnstile-response", turnstileToken.trim());

        response = await fetch("/api/formspree", {
          method: "POST",
          body: submitData,
          headers: { Accept: "application/json" }
        });
      } catch {
        setSuccess("");
        setError("Network error. Please check your connection and try again.");
        turnstileRef.current?.reset?.();
        return;
      }
      if (response.ok) {
        setError("");
        setSuccess(
          `Thank you, ${payload.fullName}. Your enquiry has been received. A member of our team will be in touch within 1–2 business days to discuss next steps. Please note this is not a medical assessment.`
        );
        try {
          event.currentTarget.reset();
        } catch {
          /* ignore reset edge cases */
        }
        turnstileRef.current?.reset?.();
        return;
      }

      const data = await parseFormspreeJson(response);
      setSuccess("");
      setError(data.error?.trim() || "Something went wrong. Please try again.");
      turnstileRef.current?.reset?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4 p-6">
      <input type="hidden" name="_subject" value="Cannacare consultation enquiry" />
      <input name="fullName" placeholder="Full Name" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="email" placeholder="Email Address" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="phone" placeholder="Phone Number" required className="w-full rounded-xl border border-soft-border p-3" />
      <select name="state" required className="w-full rounded-xl border border-soft-border p-3">
        <option value="">State / Territory</option>
        {states.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <select name="reason" required className="w-full rounded-xl border border-soft-border p-3">
        <option value="">General reason for enquiry</option>
        {reasons.map((r) => (
          <option key={r}>{r}</option>
        ))}
      </select>

      <div className="space-y-2">
        <div id="consult-consultation-type-label" className="block text-sm text-slate-700">
          Preferred consultation type
        </div>
        <select
          name="consultationType"
          required
          className="w-full rounded-xl border border-soft-border p-3"
          aria-labelledby="consult-consultation-type-label"
        >
          <option value="">Select preference</option>
          {consultationTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2" role="group" aria-labelledby="consult-preferred-contact-label">
        <div id="consult-preferred-contact-label" className="block text-sm text-slate-700">
          Preferred Contact Method
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-700">
          <label className="inline-flex cursor-pointer items-center gap-2">
            <input type="radio" name="preferredContactMethod" value="Email" required />
            <span>Email</span>
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2">
            <input type="radio" name="preferredContactMethod" value="Phone" required />
            <span>Phone</span>
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <div id="consult-best-time-label" className="block text-sm text-slate-700">
          Best contact time
        </div>
        <select
          name="bestContactTime"
          required
          className="w-full rounded-xl border border-soft-border p-3"
          aria-labelledby="consult-best-time-label"
        >
          <option value="">Select time window</option>
          {contactTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <p className="rounded-xl border border-amber-200/80 bg-amber-50/90 p-3 text-sm leading-relaxed text-slate-700">
          Please do not include urgent medical information or detailed clinical history in this form. General context only. A
          licensed healthcare professional assigned to your enquiry can discuss your medical circumstances privately during
          consultation if appropriate.
        </p>
        <textarea
          name="additionalContext"
          maxLength={500}
          placeholder="Optional: brief, general context only (no detailed clinical history)."
          className="w-full rounded-xl border border-soft-border p-3"
          rows={4}
        />
      </div>

      <label className="block text-sm">
        <input type="checkbox" name="ageConfirmed" value="true" /> I confirm I am 18 years of age or older
      </label>
      <label className="block text-sm">
        <input type="checkbox" name="consent" value="true" /> I consent to Cannacare contacting me regarding my enquiry and
        storing my information in accordance with the Privacy Policy.
      </label>
      <label className="block text-sm">
        <input type="checkbox" name="disclaimerAccepted" value="true" /> I understand that Cannacare is not a medical
        provider, does not prescribe medication, and that submitting this form does not guarantee eligibility, a consultation,
        or any clinical outcome.
      </label>
      <label className="block text-sm">
        <input type="checkbox" name="australiaConfirmed" value="true" /> I confirm I am located in Australia and am 18 years
        of age or older.
      </label>
      <TurnstileField ref={turnstileRef} className="flex justify-start" />
      {success ? (
        <p className="text-sm text-emerald">{success}</p>
      ) : error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
      <button disabled={loading} className="cta-primary disabled:opacity-70">
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
