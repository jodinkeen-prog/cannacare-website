"use client";

import { FormEvent, useState } from "react";

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
    if (missing) return setError("Please complete all required fields.");
    if (!/\S+@\S+\.\S+/.test(payload.email)) return setError("Please enter a valid email address.");
    if (!isValidAustralianPhone(payload.phone)) return setError("Please enter a valid Australian phone number.");
    if (!(payload.ageConfirmed && payload.consent && payload.disclaimerAccepted && payload.australiaConfirmed)) {
      return setError("All required confirmations and consent checkboxes must be checked.");
    }

    setLoading(true);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, type: "consultation" })
    });
    setLoading(false);

    if (!response.ok) return setError("Something went wrong. Please try again.");
    setSuccess(
      `Thank you, ${payload.fullName}. Your enquiry has been received. A member of our team will be in touch within 1–2 business days to discuss next steps. Please note this is not a medical assessment.`
    );
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4 p-6">
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
      <div className="flex gap-6 text-sm">
        <label><input type="radio" name="preferredContactMethod" value="Email" required /> Email</label>
        <label><input type="radio" name="preferredContactMethod" value="Phone" required /> Phone</label>
      </div>
      <label className="block text-sm"><input type="checkbox" name="ageConfirmed" value="true" /> I confirm I am 18 years of age or older</label>
      <label className="block text-sm"><input type="checkbox" name="consent" value="true" /> I consent to Cannacare contacting me regarding my enquiry and storing my information in accordance with the Privacy Policy.</label>
      <label className="block text-sm"><input type="checkbox" name="disclaimerAccepted" value="true" /> I understand that Cannacare is not a medical provider, does not prescribe medication, and that submitting this form does not guarantee eligibility, a consultation, or any treatment outcome.</label>
      <label className="block text-sm"><input type="checkbox" name="australiaConfirmed" value="true" /> I confirm I am located in Australia and am 18 years of age or older.</label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {success ? <p className="text-sm text-emerald">{success}</p> : null}
      <button disabled={loading} className="cta-primary disabled:opacity-70">{loading ? "Submitting..." : "Submit Enquiry"}</button>
    </form>
  );
}
