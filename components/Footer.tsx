import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" }
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms & Conditions" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" }
];

export default function Footer() {
  return (
    <footer className="border-t border-soft-border bg-light-grey-bg">
      <div className="section-container py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo.png"
              alt="Cannacare logo"
              width={200}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Australian patient navigation for medicinal consultation pathways. Educational and
              connective only.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-emerald">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-emerald">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy">
              Contact
            </h3>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-slate-600 transition hover:text-emerald"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-1.5 text-sm text-slate-600">Sydney, NSW, Australia</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "18+ Australia",
            "No medical advice",
            "Licensed referrals",
            "Privacy-conscious",
            "Education only"
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-soft-border bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-12 border-t border-soft-border pt-8">
          <p className="text-sm text-slate-600">
            © 2024 Cannacare Patient Acquisition. ABN: [PLACEHOLDER]. All rights reserved.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Cannacare is a patient navigation and referral service. We do not provide medical advice,
            prescribe medication, or sell medicinal cannabis. All clinical decisions are made by
            registered Australian health professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
