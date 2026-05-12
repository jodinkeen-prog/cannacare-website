"use client";

import { FormEvent, useState } from "react";

const states = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];

export default function ClinicPartnerForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    if (!payload.clinicName || !payload.contactName || !payload.email || !payload.phone || !payload.state || !payload.partnershipInterest || !payload.consent) {
      return setError("Please complete all required fields.");
    }
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, type: "clinic-partner" })
    });
    if (!response.ok) return setError("Something went wrong. Please try again.");
    setSuccess("Thank you. We've received your partnership enquiry and will be in touch within 2–3 business days.");
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="card-base space-y-4 p-6">
      <input name="clinicName" placeholder="Clinic / Business Name" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="contactName" placeholder="Contact Person Name" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="email" placeholder="Email Address" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="phone" placeholder="Phone Number" required className="w-full rounded-xl border border-soft-border p-3" />
      <input name="website" placeholder="Clinic Website (optional)" className="w-full rounded-xl border border-soft-border p-3" />
      <select name="state" required className="w-full rounded-xl border border-soft-border p-3"><option value="">Primary Location / State</option>{states.map((s) => <option key={s}>{s}</option>)}</select>
      <select name="partnershipInterest" required className="w-full rounded-xl border border-soft-border p-3">
        <option value="">Type of partnership interest</option>
        <option>Referral Partnership</option>
        <option>Educational Collaboration</option>
        <option>Other</option>
      </select>
      <textarea name="message" placeholder="Message / additional information" className="w-full rounded-xl border border-soft-border p-3" />
      <label className="block text-sm"><input type="checkbox" name="consent" value="true" /> I consent to Cannacare storing and using this information to follow up regarding a partnership enquiry.</label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {success ? <p className="text-sm text-emerald">{success}</p> : null}
      <button className="cta-primary">Submit Partnership Enquiry</button>
    </form>
  );
}
