import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_xqianpi";
const BOOKING_TEMPLATE_ID = "template_2n20upv";
const CONTACT_TEMPLATE_ID = "template_se1t35o";

export type FormType = "booking" | "contact";

export type FormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function getPublicKey(): string | null {
  if (typeof window === "undefined") return null;
  return process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? null;
}

export function isEmailJsConfigured(): boolean {
  return !!getPublicKey();
}

export async function sendFormEmail(
  formType: FormType,
  payload: FormPayload
): Promise<void> {
  const publicKey = getPublicKey();
  if (!publicKey) {
    throw new Error("EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local");
  }

  const templateId = formType === "booking" ? BOOKING_TEMPLATE_ID : CONTACT_TEMPLATE_ID;

  await emailjs.send(
    SERVICE_ID,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone || "—",
      message: payload.message,
      reply_to: payload.email,
    },
    publicKey
  );
}
