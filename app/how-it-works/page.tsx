import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorksSection from "@/components/HowItWorksSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How It Works | Cannacare",
    description: "Learn how Cannacare helps Australian adults navigate the consultation pathway.",
    openGraph: {
      title: "How It Works | Cannacare",
      description: "Understand each step of the consultation pathway with a licensed health professional."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/how-it-works" }
  };
}

const faqs = [
  [
    "Is Cannacare a medical provider?",
    "No. Cannacare is a patient navigation and referral support service only. We do not provide medical advice, diagnosis, or treatment. Information on our website is general and educational."
  ],
  [
    "Does submitting an enquiry guarantee treatment?",
    "No. Submitting an enquiry does not guarantee eligibility, a consultation, or any treatment or clinical pathway outcome. Decisions are made independently by registered Australian health professionals."
  ],
  [
    "Who makes clinical decisions?",
    "Only registered doctors and clinicians at licensed Australian clinics make clinical decisions. Cannacare does not assess your health or decide suitability for any consultation pathway."
  ],
  [
    "Is this service available only in Australia?",
    "Cannacare’s navigation service is intended for Australian adults (18+) seeking information about consultation pathways in Australia. Clinical services are delivered by Australian clinics under Australian laws and frameworks."
  ],
  [
    "Is there a cost to submit an enquiry?",
    "There is no charge to submit an enquiry through Cannacare. Any consultation fees are set and collected by the clinic according to their policies."
  ],
  [
    "How will I be contacted?",
    "If we need to follow up, we will generally use the contact method and preferences you provide in your enquiry (for example email or phone). You can indicate preferred contact times in the consultation enquiry form."
  ],
  [
    "What information should I avoid submitting?",
    "Do not include emergency symptoms, detailed clinical histories, or highly sensitive medical information in website forms. Forms are for general enquiry and navigation only. Keep details brief and general."
  ],
  [
    "What if this is a medical emergency?",
    "Call 000 immediately or attend your nearest emergency department. Cannacare is not an emergency service and cannot provide urgent clinical care."
  ]
] as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How Cannacare Works"
        subtitle="A transparent navigation pathway for Australian adults — connective and educational support toward licensed clinics. No clinical decisions are made by Cannacare."
      />
      <HowItWorksSection />
      <section className="section-container pb-16 pt-4">
        <h2 className="mb-5 text-2xl font-bold text-navy">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card-base p-4">
              <summary className="cursor-pointer font-semibold text-navy">{q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
