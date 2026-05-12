import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy | Cannacare",
    description: "Cannacare privacy policy and information handling statement under Australian law.",
    openGraph: {
      title: "Privacy Policy | Cannacare",
      description: "How Cannacare collects, uses, stores, and manages personal information."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/privacy-policy" }
  };
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="How Cannacare handles personal information in accordance with the Australian Privacy Act 1988." />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <p>Cannacare collects personal information you provide through enquiry forms, including contact details and service preferences. We use this information to respond to enquiries, support the consultation pathway process, and improve our navigation services.</p>
        <p>Information may be stored in secure internal systems and shared only where required to connect you with licensed health professionals or to comply with legal obligations. We do not sell personal information.</p>
        <p>You may request access to or correction of your personal information by contacting <strong>hello@cannacare.com.au</strong>. ABN: <strong>[PLACEHOLDER]</strong>.</p>
        <p>Where third-party providers are used for hosting, analytics, or operations, we require reasonable security practices. This policy is designed to align with the Australian Privacy Act 1988 and applicable privacy principles.</p>
        <p className="rounded-xl border border-soft-border bg-light-grey-bg p-4 text-sm">This website provides general information only and does not constitute medical advice.</p>
      </section>
    </>
  );
}
