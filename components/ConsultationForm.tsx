"use client";

import { FormEvent, useState } from "react";
import { FORMSPREE_ENDPOINT, parseFormspreeJson } from "@/lib/formspree";

const states = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];
const reasons = [
  "Chronic Pain Management",
  "Sleep-Related Concerns",
  "Anxiety-Related Concerns",
  "Neurological Conditions",
  "Palliative Support",
  "Other"
];

const isValidAustralianPhone = (value: string): boolean => {
  const normalized = value.replace(/\s/g, "");
  return /^(\+61|0)[2-478](\d){8}$/.test(normalized) || /^(\+61|0)4\d{8}$/.test(normalized);
};

export default function ConsultationForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    const required = ["fullName", "email", "phone", "state", "reason", "preferredContactMethod"];
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

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      let response: Response;
      try {
        response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: new FormData(event.currentTarget),
          headers: { Accept: "application/json" }
        });
      } catch {
        setSuccess("");
        setError("Network error. Please check your connection and try again.");
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
        return;
      }

      const data = await parseFormspreeJson(response);
      setSuccess("");
      setError(data.error?.trim() || "Something went wrong. Please try again.");
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
        <option value="">State / Territory</option>{states.map((s) => <option key={s}>{s}</option>)}
      </select>
      <select name="reason" required className="w-full rounded-xl border border-soft-border p-3">
        <option value="">General reason for enquiry</option>{reasons.map((r) => <option key={r}>{r}</option>)}
      </select>
      <textarea name="additionalContext" maxLength={300} placeholder="You may share any additional context here. Do not include specific medical details." className="w-full rounded-xl border border-soft-border p-3" />
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
      <label className="block text-sm"><input type="checkbox" name="ageConfirmed" value="true" /> I confirm I am 18 years of age or older</label>
      <label className="block text-sm"><input type="checkbox" name="consent" value="true" /> I consent to Cannacare contacting me regarding my enquiry and storing my information in accordance with the Privacy Policy.</label>
      <label className="block text-sm"><input type="checkbox" name="disclaimerAccepted" value="true" /> I understand that Cannacare is not a medical provider, does not prescribe medication, and that submitting this form does not guarantee eligibility, a consultation, or any treatment outcome.</label>
      <label className="block text-sm"><input type="checkbox" name="australiaConfirmed" value="true" /> I confirm I am located in Australia and am 18 years of age or older.</label>
      {success ? (
        <p className="text-sm text-emerald">{success}</p>
      ) : error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
      <button disabled={loading} className="cta-primary disabled:opacity-70">{loading ? "Submitting..." : "Submit Enquiry"}</button>
    </form>
  );
}
