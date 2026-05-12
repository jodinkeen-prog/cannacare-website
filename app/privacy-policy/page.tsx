import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SUPPORT_EMAIL } from "@/lib/site";

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
      <PageHeader
        title="Privacy Policy"
        subtitle="How Cannacare handles personal information in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs)."
      />
      <section className="section-container py-12 prose prose-slate max-w-none">
        <h2 className="text-xl font-bold text-navy">Who we are</h2>
        <p>
          Cannacare operates an educational and connective patient navigation service for Australian adults. We are{" "}
          <strong>not</strong> a medical provider. This policy explains how we handle personal information when you use
          our website or submit an enquiry.
        </p>

        <h2 className="text-xl font-bold text-navy">What we collect</h2>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul>
          <li>Identity and contact details (for example name, email address, phone number);</li>
          <li>Your state or territory and general enquiry preferences you choose in our forms;</li>
          <li>Messages or additional context you choose to include (you should avoid sending detailed clinical information);</li>
          <li>Technical information related to website operation (for example basic server or analytics data where used).</li>
        </ul>

        <h2 className="text-xl font-bold text-navy">Why we collect and use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to enquiries and facilitate navigation toward an appropriate licensed Australian clinic or pathway;</li>
          <li>Operate, secure, and improve our website and internal processes;</li>
          <li>Meet legal and regulatory obligations.</li>
        </ul>

        <h2 className="text-xl font-bold text-navy">Disclosure</h2>
        <p>
          We do not sell personal information. We may disclose information to licensed clinics or health professionals where
          necessary to assist with your enquiry, to service providers who help us run our business (for example hosting or
          email delivery), or where required by law.
        </p>

        <h2 className="text-xl font-bold text-navy">Overseas disclosure</h2>
        <p>
          Where we use service providers that may process data outside Australia, we take reasonable steps to ensure
          appropriate safeguards are in place consistent with applicable privacy requirements.
        </p>

        <h2 className="text-xl font-bold text-navy">Security and retention</h2>
        <p>
          We hold information using reasonable administrative and technical safeguards. We retain personal information only
          for as long as needed for the purposes above or as required by law.
        </p>

        <h2 className="text-xl font-bold text-navy">Cookies and similar technologies</h2>
        <p>
          Our website may use cookies or similar technologies needed for functionality or analytics. You can control
          cookies through your browser settings.
        </p>

        <h2 className="text-xl font-bold text-navy">Access, correction, and complaints</h2>
        <p>
          You may request access to or correction of your personal information by contacting{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald">
            {SUPPORT_EMAIL}
          </a>
          . If you have a privacy complaint, please contact us first. You may also lodge a complaint with the Office of the
          Australian Information Commissioner (OAIC) at{" "}
          <a href="https://www.oaic.gov.au" className="text-emerald" target="_blank" rel="noopener noreferrer">
            oaic.gov.au
          </a>
          .
        </p>

        <p>
          <strong>ABN:</strong> [PLACEHOLDER]
        </p>

        <p className="rounded-xl border border-soft-border bg-light-grey-bg p-4 text-sm">
          This website provides general information only and does not constitute medical advice. Cannacare does not provide
          clinical assessment or prescribe medication.
        </p>
      </section>
    </>
  );
}
