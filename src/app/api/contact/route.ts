import { NextResponse } from "next/server";
import { SITE } from "@/lib/site-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // In production, send email via your provider (Resend, SendGrid, etc.)
    // For now we only validate and return success; no CC or address per requirements.
    const payload = {
      to: SITE.email,
      subject: `Consultation request from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\nMessage:\n${message}`,
    };

    // TODO: integrate with your email API
    console.log("Contact form submission:", payload);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
