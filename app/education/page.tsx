import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EducationCard from "@/components/EducationCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Education | Cannacare Consultation Pathway Information",
    description:
      "Educational information for Australian adults about the consultation pathway and clinical assessment process.",
    openGraph: {
      title: "Education | Cannacare Consultation Pathway Information",
      description: "General information to help you navigate your options through licensed health professionals."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/education" }
  };
}

export default function EducationPage() {
  return (
    <>
      <PageHeader title="Understanding the Consultation Pathway" subtitle="General educational information for Australian adults navigating consultation options with a licensed health professional." />
      <section className="section-container py-12">
        <p className="mx-auto max-w-4xl text-center">
          In Australia, consultation pathways for certain medicinal options are managed by licensed
          health professionals under clinical assessment and relevant regulatory frameworks.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <EducationCard title="The Legal Consultation Pathway" description="In Australia, certain medicinal treatments may be accessible through a consultation with a licensed health professional, subject to clinical assessment and applicable regulatory frameworks." imageSrc="/media/education-legal-pathway.png" imageDescription="Legal pathway overview visual" />
          <EducationCard title="What to Expect at a Consultation" description="A consultation involves speaking with a qualified Australian doctor who will assess your individual circumstances and advise on whether any treatment pathway may be appropriate for you." imageSrc="/media/education-consultation.png" imageDescription="Consultation expectations visual" />
          <EducationCard title="Ongoing Patient Support" description="Patient navigation services like Cannacare help connect individuals with licensed clinics — we do not make clinical decisions or prescribe treatments." imageSrc="/media/education-support.png" imageDescription="Patient support visual" />
        </div>
        <p className="mt-8 rounded-2xl border border-soft-border bg-light-grey-bg p-4 text-sm">
          This page is for general educational purposes only. It does not constitute medical advice.
        </p>
      </section>
    </>
  );
}
