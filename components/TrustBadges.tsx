import Reveal from "@/components/Reveal";

const badges = [
  "Australian Adults Only — 18+ Service",
  "No Medical Advice Given",
  "Licensed Clinic Referrals Only",
  "TGA-Aware Navigation"
];

interface TrustBadgesProps {
  variant?: "wide" | "stack";
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="h-3 w-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function BadgeCard({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-soft-border bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-soft">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald">
        <CheckIcon />
      </span>
      <p className="text-sm font-semibold leading-snug text-navy">{label}</p>
    </div>
  );
}

export default function TrustBadges({ variant = "wide" }: TrustBadgesProps) {
  if (variant === "stack") {
    return (
      <Reveal>
        <div className="flex flex-col gap-3">
          {badges.map((badge) => (
            <BadgeCard key={badge} label={badge} />
          ))}
        </div>
      </Reveal>
    );
  }

  return (
    <section className="section-container py-12">
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <BadgeCard key={badge} label={badge} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
