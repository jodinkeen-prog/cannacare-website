import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <div className="relative h-[min(68vh,520px)] w-[min(124vw,840px)] sm:h-[min(74vh,640px)] sm:w-[min(112vw,900px)] lg:h-[min(80vh,760px)] lg:w-[min(96vw,960px)]">
          <Image
            src="/media/cannacare-logo-watermark.png"
            alt=""
            fill
            className="object-contain opacity-[0.07] blur-[2px]"
            sizes="100vw"
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-teal/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-emerald/30 blur-3xl"
      />
      <div className="section-container section-y relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-light-emerald" />
            Australian patient navigation
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Calm, Compliant Healthcare Navigation for Australian Adults.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Cannacare helps Australian adults navigate the consultation pathway and connect with
            licensed health professionals. We are an educational and connective service — we do not
            provide medical advice or sell products.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/consultation" className="cta-primary">
              Start a Consultation Enquiry
            </Link>
            <Link href="/how-it-works" className="cta-secondary">
              Learn How It Works
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/70">
            Free enquiry · No medical advice given · 18+ Australian residents only
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-6 rounded-[2.5rem] bg-white/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/20 transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/media/vidcall.png"
                alt="Patient connecting with a licensed health professional via a telehealth video consultation"
                width={1200}
                height={800}
                priority
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
