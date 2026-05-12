import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SUPPORT_EMAIL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms & Conditions | Cannacare",
    description: "Terms governing use of the Cannacare patient navigation website and services.",
    openGraph: {
      title: "Terms & Conditions | Cannacare",
      description: "Read Cannacare terms, user eligibility rules, and legal limitations."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/terms-of-use" }
  };
}

export default function TermsOfUsePage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Conditions for using Cannacare’s patient navigation and referral support service in Australia."
      />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <h2 className="text-xl font-bold text-navy">Nature of the service</h2>
        <p>
          Cannacare provides <strong>patient navigation and referral support</strong> only. We are not a medical provider.
          We do not provide medical advice, clinical assessment, prescriptions, or dispense or sell medicinal products. Use
          of this website does not create a doctor–patient relationship with Cannacare.
        </p>

        <h2 className="text-xl font-bold text-navy">Eligibility</h2>
        <p>
          By using this website you confirm you are <strong>18 years of age or older</strong> and that you are seeking
          information in connection with services available in <strong>Australia</strong>.
        </p>

        <h2 className="text-xl font-bold text-navy">No guarantees</h2>
        <p>
          Submitting an enquiry does not guarantee eligibility, a consultation, a referral outcome, or any particular
          clinical pathway. All clinical decisions are made independently by registered Australian health professionals and
          licensed clinics.
        </p>

        <h2 className="text-xl font-bold text-navy">Acceptable use</h2>
        <p>
          You agree not to misuse the website, interfere with its operation, or submit unlawful, misleading, or harmful
          content. Enquiry forms are for general navigation purposes only — do not use them for emergencies or detailed
          clinical histories.
        </p>

        <h2 className="text-xl font-bold text-navy">Intellectual property</h2>
        <p>
          Content, branding, and materials on this website are owned by Cannacare or its licensors unless otherwise stated.
          You may not copy or reuse materials without prior written consent except as permitted by law.
        </p>

        <h2 className="text-xl font-bold text-navy">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by Australian law, Cannacare is not liable for loss arising from reliance on
          general website information, third-party clinics, or matters outside our reasonable control. Nothing in these
          terms excludes liability that cannot be excluded under law.
        </p>

        <h2 className="text-xl font-bold text-navy">Governing law</h2>
        <p>
          These terms are governed by the laws of <strong>New South Wales, Australia</strong>. You submit to the
          non-exclusive jurisdiction of the courts of New South Wales.
        </p>

        <h2 className="text-xl font-bold text-navy">Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald">
            {SUPPORT_EMAIL}
          </a>
        </p>

        <p className="rounded-xl border border-soft-border bg-light-grey-bg p-4 text-sm">
          For urgent or emergency situations, call <strong>000</strong> immediately.
        </p>
      </section>
    </>
  );
}
