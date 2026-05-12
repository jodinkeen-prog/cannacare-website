import Image from "next/image";

interface WellbeingCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function WellbeingCard({
  title,
  description,
  imageSrc,
  imageAlt
}: WellbeingCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-soft-border bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
}
