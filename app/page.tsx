import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import TrustBadges from "@/components/TrustBadges";
import HowItWorksSection from "@/components/HowItWorksSection";
import EducationCard from "@/components/EducationCard";
import FeatureSplit from "@/components/FeatureSplit";
import WellbeingCard from "@/components/WellbeingCard";
import Reveal from "@/components/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cannacare | Medicinal Consultation Navigation in Australia",
    description:
      "Cannacare helps Australian adults connect with licensed health professionals for medicinal consultation pathways. Free, educational, and legally compliant.",
    openGraph: {
      title: "Cannacare | Medicinal Consultation Navigation in Australia",
      description:
        "Navigate your options with licensed health professional consultation pathway education."
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://cannacare.com.au/" }
  };
}

const wellbeingCards = [
  {
    title: "Physical Wellbeing",
    description:
      "Stay active and supported through everyday life with guidance from licensed Australian health professionals.",
    imageSrc: "/media/oldman.png",
    imageAlt: "Older Australian gentleman tending to his vegetable garden"
  },
  {
    title: "Sleep Support",
    description:
      "Discuss sleep concerns with a registered doctor who can review your circumstances and clinical history.",
    imageSrc: "/media/youngwomen.png",
    imageAlt: "Young woman resting peacefully in bed at home"
  },
  {
    title: "Mental Wellbeing",
    description:
      "Connect with licensed clinicians who can talk through lifestyle factors and appropriate next steps.",
    imageSrc: "/media/youngman.png",
    imageAlt: "Smiling Australian man enjoying time outdoors"
  },
  {
    title: "Wellness at Every Stage",
    description:
      "Compassionate consultation pathways for Australian adults across every stage of life.",
    imageSrc: "/media/oldwomen.png",
    imageAlt: "Older woman enjoying a quiet moment with a warm cup of tea"
  }
];

const educationCards = [
  {
    title: "The Legal Consultation Pathway",
    description:
      "In Australia, certain medicinal treatments may be accessible through a consultation with a licensed health professional, subject to clinical assessment and applicable regulatory frameworks.",
    imageSrc: "/media/education-legal-pathway.png",
    imageDescription: "Doctor in consultation with an older patient at a clinic desk"
  },
  {
    title: "What to Expect at a Consultation",
    description:
      "A consultation pathway starts with a discussion with a qualified doctor who will review your individual circumstances and provide guidance based on clinical assessment.",
    imageSrc: "/media/education-consultation.png",
    imageDescription: "Senior woman speaking with a doctor over a telehealth video call"
  },
  {
    title: "Ongoing Patient Support",
    description:
      "Patient navigation services like Cannacare help adults connect with licensed clinics while health professionals independently make all clinical decisions.",
    imageSrc: "/media/education-support.png",
    imageDescription: "Australian healthcare team standing together inside a clinic"
  }
];

function InfoIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="h-5 w-5 text-navy"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M10 9v5" />
      <path d="M10 6h.01" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-container py-8">
        <DisclaimerBanner inline />
      </section>

      <TrustBadges />

      <FeatureSplit
        eyebrow="Trusted Network"
        title="Connecting You With Australia's Trusted Healthcare Professionals"
        imageSrc="/media/doctors.png"
        imageAlt="A team of licensed Australian healthcare professionals at a clinic reception"
        imageOnLeft={false}
        ctaLabel="See How It Works"
        ctaHref="/how-it-works"
        description={
          <>
            <p>
              Cannacare partners exclusively with licensed Australian medical clinics. Every clinical
              decision — from assessment to advice — is made independently by a qualified, registered
              health professional.
            </p>
            <p>
              Our role is purely educational and connective: we help you find the right consultation
              pathway and clinic for your circumstances. Cannacare does not diagnose, prescribe, or
              sell products.
            </p>
          </>
        }
      />

      <HowItWorksSection />

      <section className="bg-light-grey-bg section-y">
        <div className="section-container">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">Holistic Support</p>
              <h2 className="heading-section">Wellbeing Across Every Stage of Life</h2>
              <p className="lede mx-auto">
                Australians of every age can speak with a licensed health professional about
                lifestyle, wellbeing, and the consultation pathways available to them.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wellbeingCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <WellbeingCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Restful Living"
        title="Sleep Support Through Licensed Care Pathways"
        imageSrc="/media/sleeping.png"
        imageAlt="Woman sleeping peacefully in a calm, softly lit bedroom"
        imageOnLeft
        ctaLabel="Start a Consultation Enquiry"
        ctaHref="/consultation"
        description={
          <>
            <p>
              Restorative sleep is a foundation of overall wellbeing. If sleep is something you&rsquo;d
              like to discuss, a registered Australian doctor can review your circumstances and
              clinical history during a consultation.
            </p>
            <p>
              Cannacare doesn&rsquo;t make any clinical decisions &mdash; we simply help connect you
              with the right licensed clinic to have that conversation.
            </p>
          </>
        }
      />

      <section className="section-container section-y">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Education</p>
            <h2 className="heading-section">Education to Navigate Your Options</h2>
            <p className="lede mx-auto">
              General educational information for Australian adults. Cannacare does not provide
              medical advice.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {educationCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <EducationCard {...card} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-container section-y">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-white shadow-soft sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teal/30 blur-3xl"
            />
            <div className="relative">
              <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Take the Next Step
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ready to Connect With a Licensed Health Professional?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Explore the consultation pathway with a registered Australian health professional.
                Submitting an enquiry does not guarantee eligibility, a consultation, or any clinical pathway outcome.
              </p>
              <Link href="/consultation" className="cta-primary mt-8">
                Go to Consultation Enquiry
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-container pb-20 sm:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-soft-border bg-light-grey-bg p-7 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-soft-border">
                <InfoIcon />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-navy">
                  Compliance Notice
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Cannacare is a patient navigation and referral service, not a medical provider. We
                  do not provide medical advice or prescribe medication. Clinical assessment and any
                  consultation pathway decisions are made solely by your treating licensed clinician.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
