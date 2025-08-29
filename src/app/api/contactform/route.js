import ContactDetails from "@/components/emailTemplate/ContactDetails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, message, number } = body;

    if (!name || !email || !company) {
      return new Response(JSON.stringify({ error: "Required fields missing" }), { status: 400 });
    }

    const { error } = await resend.emails.send({
      // from: "Montra Webforms <no-reply@montra.>",
      from: "Acme <onboarding@resend.dev>",
      to: ["vidushi@weareenigma.com"],
      // to:["info@montra.org"],
      subject: "New Contact Form Submission",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userCompany: company,
        userMessage: message || "No message provided",
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API Error:", err.message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
