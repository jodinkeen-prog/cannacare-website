import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

interface FeatureSplitProps {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  background?: "white" | "muted";
}

export default function FeatureSplit({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  ctaLabel,
  ctaHref,
  background = "white"
}: FeatureSplitProps) {
  const wrapperBg = background === "muted" ? "bg-light-grey-bg" : "bg-white";

  return (
    <section className={`${wrapperBg} section-y`}>
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={imageOnLeft ? "order-1" : "order-1 lg:order-2"} delay={imageOnLeft ? 0 : 140}>
            <div className="image-card group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className={imageOnLeft ? "order-2" : "order-2 lg:order-1"} delay={imageOnLeft ? 140 : 0}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="heading-section">{title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </div>
            {ctaLabel && ctaHref ? (
              <Link href={ctaHref} className="cta-primary mt-8">
                {ctaLabel}
              </Link>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
