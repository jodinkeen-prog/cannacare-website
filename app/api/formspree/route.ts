import { NextResponse } from "next/server";
import { FORMSPREE_ENDPOINT } from "@/lib/formspree";

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteverifyJson = {
  success: boolean;
  "error-codes"?: string[];
};

function stripTurnstileFields(incoming: FormData): FormData {
  const out = new FormData();
  incoming.forEach((value, key) => {
    if (key === "cf-turnstile-response") return;
    out.append(key, value);
  });
  return out;
}

export async function POST(request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { error: "Form submission is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const token = incoming.get("cf-turnstile-response");
  if (typeof token !== "string" || !token.trim()) {
    return NextResponse.json(
      { error: "Please complete the security check before submitting." },
      { status: 400 }
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const remoteip = forwardedFor?.split(",")[0]?.trim();

  const verifyBody = new URLSearchParams({ secret, response: token.trim() });
  if (remoteip) verifyBody.set("remoteip", remoteip);

  let verifyJson: SiteverifyJson;
  try {
    const verifyRes = await fetch(TURNSTILE_VERIFY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody
    });
    verifyJson = (await verifyRes.json()) as SiteverifyJson;
  } catch {
    return NextResponse.json(
      { error: "Security verification could not be completed. Please try again." },
      { status: 400 }
    );
  }

  if (!verifyJson.success) {
    return NextResponse.json(
      {
        error:
          "Security check did not pass. Please try again, or refresh the page if the problem continues."
      },
      { status: 400 }
    );
  }

  const outgoing = stripTurnstileFields(incoming);

  let fsResponse: Response;
  try {
    fsResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: outgoing,
      headers: { Accept: "application/json" }
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach our form service. Please try again shortly." },
      { status: 502 }
    );
  }

  const text = await fsResponse.text();
  const contentType = fsResponse.headers.get("content-type") || "application/json";

  return new NextResponse(text, {
    status: fsResponse.status,
    headers: { "Content-Type": contentType }
  });
}
