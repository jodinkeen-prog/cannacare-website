"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { forwardRef } from "react";

/** Public site key; override with NEXT_PUBLIC_TURNSTILE_SITE_KEY on Vercel. */
const DEFAULT_TURNSTILE_SITE_KEY = "0x4AAAAAADN7AW_CEaXbTE9a";

const TurnstileField = forwardRef<TurnstileInstance | undefined, { className?: string }>(
  function TurnstileField({ className }, ref) {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || DEFAULT_TURNSTILE_SITE_KEY;

    return (
      <div className={className}>
        <Turnstile
          ref={ref}
          siteKey={siteKey}
          options={{ theme: "light", size: "normal" }}
        />
      </div>
    );
  }
);

TurnstileField.displayName = "TurnstileField";

export default TurnstileField;
