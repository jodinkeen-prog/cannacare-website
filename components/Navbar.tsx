"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/education", label: "Education" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-8 z-40 border-b border-soft-border bg-white/85 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav className="section-container flex items-center justify-between py-4 sm:py-5">
        <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-[1.02]">
          <Image src="/logo.png" alt="Cannacare logo" width={160} height={40} className="h-10 w-auto" />
        </Link>
        <button
          className="rounded-full border border-soft-border px-3 py-2 text-sm text-navy transition hover:border-emerald hover:text-emerald md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          Menu
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy transition hover:text-emerald"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/consultation" className="cta-primary text-sm">
            Start Enquiry
          </Link>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container border-t border-soft-border py-4">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy transition hover:text-emerald"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="cta-primary mt-1 w-full text-sm sm:w-fit"
              onClick={() => setOpen(false)}
            >
              Start Enquiry
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
