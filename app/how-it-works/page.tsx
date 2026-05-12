import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorksSection from "@/components/HowItWorksSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How It Works | Cannacare",
    description: "Learn how Cannacare helps Australian adults navigate the consultation pathway.",
    openGraph: {
      title: "How It Works | Cannacare",
      description: "Understand each step of the consultation pathway with a licensed health professional."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/how-it-works" }
  };
}

const faqs = [
  ["Is this a medical service?", "No. Cannacare is a patient navigation and referral service. We connect you with licensed clinics but do not provide medical advice or prescriptions."],
  ["Does completing an enquiry guarantee anything?", "No. Submitting an enquiry does not guarantee eligibility, a consultation, or a prescription. All decisions are made by registered health professionals."],
  ["Is this service available across Australia?", "We currently focus on connecting patients with clinics in New South Wales, with expansion planned."],
  ["Is there a cost to use Cannacare?", "There is no cost to submit an enquiry through Cannacare. Consultation fees are set by the clinic directly."],
  ["Who are the clinics you work with?", "We partner with licensed Australian medical clinics. All clinical decisions are made independently by their registered health professionals."]
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader title="How Cannacare Works" subtitle="A clear consultation pathway designed to help Australian adults navigate your options and connect with a qualified doctor." />
      <HowItWorksSection />
      <section className="section-container py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="card-base p-6"><h3 className="font-bold text-navy">Step 1: Enquiry</h3><p className="mt-3 text-sm">You submit an initial enquiry to share your details and consultation preferences. This helps us understand the pathway that may suit your needs.</p></article>
          <article className="card-base p-6"><h3 className="font-bold text-navy">Step 2: Clinic Match</h3><p className="mt-3 text-sm">Cannacare reviews your enquiry and refers you to a licensed health professional for clinical assessment where appropriate.</p></article>
          <article className="card-base p-6"><h3 className="font-bold text-navy">Step 3: Clinical Review</h3><p className="mt-3 text-sm">A qualified doctor conducts the consultation and provides advice based on your circumstances and professional standards.</p></article>
        </div>
      </section>
      <section className="section-container pb-16">
        <h2 className="mb-5 text-2xl font-bold text-navy">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card-base p-4">
              <summary className="cursor-pointer font-semibold text-navy">{q}</summary>
              <p className="mt-3 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
