import Image from "next/image";
import type { EducationCardProps } from "@/types";

export default function EducationCard({
  title,
  description,
  imageSrc,
  imageDescription
}: EducationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-soft-border bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageDescription || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
