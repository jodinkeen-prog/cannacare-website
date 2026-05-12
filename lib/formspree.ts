export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojrrkjg";

/** Safe JSON parse for Formspree responses (handles empty/non-JSON bodies without throwing). */
export async function parseFormspreeJson(response: Response): Promise<{ error?: string }> {
  try {
    const text = await response.text();
    if (!text.trim()) return {};
    try {
      return JSON.parse(text) as { error?: string };
    } catch {
      return {};
    }
  } catch {
    return {};
  }
}
