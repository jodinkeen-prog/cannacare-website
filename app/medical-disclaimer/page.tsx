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
      <PageHeader title="Medical Disclaimer" subtitle="Important information about Cannacare's non-clinical role." />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <p>Cannacare is not a medical provider. We do not provide medical advice or clinical assessment.</p>
        <p>Cannacare does not prescribe medication, dispense products, or sell medicinal products.</p>
        <p>Submitting an enquiry does not ensure eligibility, appointment outcomes, or any treatment result.</p>
        <p>Always seek advice from a qualified doctor or other licensed health professional regarding personal health concerns.</p>
        <p>For emergencies, call 000 immediately.</p>
        <p>Cannacare refers only to licensed Australian clinics and AHPRA-registered professionals.</p>
      </section>
    </>
  );
}
