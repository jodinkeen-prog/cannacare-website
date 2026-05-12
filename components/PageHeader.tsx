interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-hero-gradient py-16 text-white">
      <div className="section-container text-center">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-white/90 md:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
