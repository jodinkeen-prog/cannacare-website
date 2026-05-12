import { NextResponse } from "next/server";
import { appendLead } from "@/lib/formHandler";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    await appendLead(payload);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unable to store lead.", error: String(error) },
      { status: 500 }
    );
  }
}
