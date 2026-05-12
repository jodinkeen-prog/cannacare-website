/** Primary enquiries email — use site-wide for consistency and Formspree-adjacent contact. */
export const SUPPORT_EMAIL = "cannacare.enquiries@gmail.com";

export function mailtoSupport(subject?: string): string {
  const base = `mailto:${SUPPORT_EMAIL}`;
  if (!subject?.trim()) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}
