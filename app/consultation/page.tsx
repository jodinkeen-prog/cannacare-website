import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ConsultationForm from "@/components/ConsultationForm";
import TrustBadges from "@/components/TrustBadges";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Consultation Enquiry | Cannacare",
    description: "Submit an enquiry to begin a consultation pathway with a licensed health professional.",
    openGraph: {
      title: "Consultation Enquiry | Cannacare",
      description: "Register your interest and navigate your options through licensed clinic referrals."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/consultation" }
  };
}

export default function ConsultationPage() {
  return (
    <>
      <PageHeader title="Submit a Consultation Enquiry" subtitle="Complete the form below to register your interest. A member of our team will be in touch to help connect you with an appropriate licensed clinic. This is not a medical assessment." />
      <section className="section-container py-12">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ConsultationForm />
          <aside className="space-y-4">
            <TrustBadges variant="stack" />
            <div className="rounded-2xl border border-soft-border bg-light-grey-bg p-5 text-sm leading-relaxed text-slate-600">
              Cannacare supports the consultation pathway only. Clinical assessment and decisions are made
              by a qualified doctor.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
