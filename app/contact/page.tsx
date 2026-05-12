import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { SUPPORT_EMAIL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Cannacare | General Enquiries",
    description: "Get in touch with Cannacare for general, partnership, or media enquiries.",
    openGraph: {
      title: "Contact Cannacare | General Enquiries",
      description: "Reach out to learn more about the consultation pathway and referral support."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/contact" }
  };
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Get in Touch" subtitle="Contact Cannacare for general enquiries about how we help adults navigate your options through licensed clinic referrals." />
      <section className="section-container py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm />
          <div className="card-base p-6">
            <h2 className="text-xl font-bold text-navy">Contact Information</h2>
            <p className="mt-3">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald underline-offset-2 hover:underline">
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p>Sydney, NSW, Australia</p>
            <p className="mt-3 text-sm text-slate-600">Typical response time: 1–2 business days.</p>
            <p className="mt-5 text-sm">Cannacare is not a medical provider. For urgent medical concerns, contact emergency services on 000.</p>
          </div>
        </div>
      </section>
    </>
  );
}
