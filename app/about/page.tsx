import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Cannacare | Patient Navigation Service",
    description: "Learn about Cannacare and our role helping Australian adults navigate consultation options.",
    openGraph: {
      title: "About Cannacare | Patient Navigation Service",
      description: "Educational and connective support for consultation pathways with licensed clinics."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/about" }
  };
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Cannacare" subtitle="A calm, compliant service helping Australian adults navigate your options and connect with licensed health professionals." />
      <section className="section-container py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p>Cannacare is an Australian patient navigation service. We help adults understand the legal consultation pathways available to them and connect them with licensed health professionals — without providing medical advice ourselves.</p>
            <p>Our role is educational and connective. We are not a clinic, we do not prescribe, and we do not sell products. We believe every Australian deserves access to clear, calm, legally compliant information about their healthcare options.</p>
            <p>We work exclusively with licensed Australian medical clinics and health professionals.</p>
          </div>
          <ImagePlaceholder src="/media/doctors.png" alt="Licensed Australian healthcare professionals at a clinic" width={900} height={640} description="Licensed Australian healthcare professionals" />
        </div>
        <div className="mt-10 rounded-2xl bg-navy p-8 text-center text-2xl font-bold text-white">
          Connecting Patients. Empowering Care.
        </div>
        <p className="mt-6 text-sm">Compliance statement: Cannacare provides consultation pathway navigation only. Clinical assessment and advice are provided solely by a qualified doctor.</p>
      </section>
    </>
  );
}
