import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Use | Cannacare",
    description: "Terms governing use of the Cannacare patient navigation website and services.",
    openGraph: {
      title: "Terms of Use | Cannacare",
      description: "Read Cannacare terms, user eligibility rules, and legal limitations."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/terms-of-use" }
  };
}

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader title="Terms of Use" subtitle="Conditions for using Cannacare's consultation pathway navigation service." />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <p>Cannacare is a navigation and referral service only. We are not a medical provider and do not provide medical advice, prescriptions, or direct clinical services.</p>
        <p>By using this website, you confirm you are 18 years or older and located in Australia. Use of this service does not create a doctor-patient relationship with Cannacare.</p>
        <p>We do not represent that submitting an enquiry will result in eligibility, consultation, or any outcome. Clinical assessment is performed independently by licensed health professionals.</p>
        <p>All content, branding, and materials on this website are owned by Cannacare unless otherwise stated. Governing law: New South Wales, Australia.</p>
        <p className="rounded-xl border border-soft-border bg-light-grey-bg p-4 text-sm">For urgent situations, contact emergency services by calling 000.</p>
      </section>
    </>
  );
}
