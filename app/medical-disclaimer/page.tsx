import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Medical Disclaimer | Cannacare",
    description: "Important medical disclaimer for Cannacare website visitors and enquiry users.",
    openGraph: {
      title: "Medical Disclaimer | Cannacare",
      description: "Understand the limits of Cannacare's role and seek clinical assessment from qualified professionals."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/medical-disclaimer" }
  };
}

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHeader title="Medical Disclaimer" subtitle="Important information about Cannacare’s non-clinical role." />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <h2 className="text-xl font-bold text-navy">Not a medical service</h2>
        <p>
          Cannacare is <strong>not</strong> a medical provider. We do not provide medical advice, diagnosis, or treatment.
          Information on this website is general and educational only.
        </p>

        <h2 className="text-xl font-bold text-navy">No prescribing or product sales</h2>
        <p>
          Cannacare does not prescribe medication, dispense products, or sell medicinal cannabis or related products. Any
          clinical assessment, prescribing decision, or treatment discussion occurs solely between you and a registered
          Australian health professional at a licensed clinic.
        </p>

        <h2 className="text-xl font-bold text-navy">No guaranteed outcomes</h2>
        <p>
          Submitting an enquiry does not ensure eligibility, a consultation appointment, or any particular consultation
          pathway result. Outcomes depend on independent clinical judgment and applicable laws and regulations.
        </p>

        <h2 className="text-xl font-bold text-navy">Professional advice</h2>
        <p>
          Always seek advice from a qualified doctor or other registered health professional regarding your personal health
          circumstances before making health decisions.
        </p>

        <h2 className="text-xl font-bold text-navy">Emergencies</h2>
        <p>
          If you or someone else is experiencing a medical emergency, call <strong>000</strong> immediately or attend the
          nearest emergency department.
        </p>

        <h2 className="text-xl font-bold text-navy">Referrals</h2>
        <p>
          Where Cannacare assists with navigation, referrals are directed to licensed Australian clinics and appropriately
          registered health professionals. Cannacare does not control clinical decisions made by those providers.
        </p>

        <p className="rounded-xl border border-soft-border bg-light-grey-bg p-4 text-sm">
          Cannacare provides educational and connective navigation support only.
        </p>
      </section>
    </>
  );
}
