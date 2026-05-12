"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImagePlaceholderProps } from "@/types";

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  description
}: ImagePlaceholderProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="flex h-full min-h-56 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald bg-emerald/10 p-6 text-center"
        style={{ minHeight: `${Math.min(height, 320)}px` }}
      >
        <p className="mb-2 text-sm font-semibold text-emerald">{description}</p>
        <p className="font-mono text-xs text-slate-600">{src}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-full rounded-2xl object-cover"
      onError={() => setErrored(true)}
    />
  );
}
