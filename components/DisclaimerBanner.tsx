"use client";

import { useEffect, useState } from "react";

interface DisclaimerBannerProps {
  inline?: boolean;
}

const KEY = "cannacare_disclaimer_dismissed";

export default function DisclaimerBanner({ inline = false }: DisclaimerBannerProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (inline) return;
    const dismissed = localStorage.getItem(KEY) === "true";
    setHidden(dismissed);
  }, [inline]);

  if (!inline && hidden) return null;

  return (
    <div className={`${inline ? "rounded-2xl" : "sticky top-0 z-50"} bg-navy text-white`}>
      <div className="section-container flex items-center justify-between gap-4 py-2 text-xs">
        <p>
          This website provides general information only and does not constitute medical advice. For
          medical emergencies, call 000.
        </p>
        {!inline ? (
          <button
            aria-label="Dismiss disclaimer"
            className="rounded-full border border-white/40 px-2 py-0.5 text-xs hover:bg-white/10"
            onClick={() => {
              localStorage.setItem(KEY, "true");
              setHidden(true);
            }}
          >
            X
          </button>
        ) : null}
      </div>
    </div>
  );
}
