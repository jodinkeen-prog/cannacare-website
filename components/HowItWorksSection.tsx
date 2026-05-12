import ImagePlaceholder from "@/components/ImagePlaceholder";
import Reveal from "@/components/Reveal";
import { howItWorksSteps } from "@/lib/howItWorksContent";

export default function HowItWorksSection() {
  return (
    <section className="section-container section-y">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How It Works</p>
          <h2 className="heading-section">A Clear Consultation Pathway</h2>
          <p className="lede mx-auto">
            Three steps to explore connection with a licensed Australian clinic. Cannacare provides educational navigation only
            — registered practitioners make every clinical decision.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {howItWorksSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 120}>
            <div className="group flex h-full flex-col rounded-3xl border border-soft-border bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-base font-bold text-white shadow-soft">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-12">
          <div className="image-card relative">
            <ImagePlaceholder
              src="/media/how-it-works-video.mp4"
              alt="How it works video"
              width={1200}
              height={700}
              description="Video placeholder for how-it-works-video.mp4"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-navy shadow-soft">
                Play Video
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <p className="mt-8 rounded-2xl border border-soft-border bg-light-grey-bg p-5 text-sm leading-relaxed text-slate-600">
        Completing an enquiry does not guarantee eligibility, a consultation, or any particular consultation pathway outcome.
        All clinical decisions are made by registered health professionals independent of Cannacare.
      </p>
    </section>
  );
}
