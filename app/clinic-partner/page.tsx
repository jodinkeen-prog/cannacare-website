import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ClinicPartnerForm from "@/components/ClinicPartnerForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Clinic Partnerships | Cannacare",
    description: "Licensed Australian clinics can submit a partnership enquiry to collaborate with Cannacare.",
    openGraph: {
      title: "Clinic Partnerships | Cannacare",
      description: "Explore referral and educational collaboration partnership options."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/clinic-partner" }
  };
}

export default function ClinicPartnerPage() {
  return (
    <>
      <PageHeader title="Partner With Cannacare" subtitle="Cannacare works with licensed Australian medical clinics to help navigate qualified patients through the consultation pathway. If you represent a clinic and would like to explore a referral partnership, complete the form below." />
      <section className="section-container py-12">
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <ClinicPartnerForm />
          <ImagePlaceholder src="/media/clinic-partner.png" alt="Clinic partner illustration" width={900} height={640} description="Clinic partnership illustration" />
        </div>
      </section>
    </>
  );
}
