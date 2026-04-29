import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "jason@aunexes.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
  }
  const resend = new Resend(apiKey);

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const text = [
    "New project inquiry from portfolio contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "N/A"}`,
    "",
    "Project details:",
    message,
  ].join("\n");

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Project Inquiry from ${name}`,
      text,
    });

    if (error) {
      return res.status(500).json({ ok: false, error: error.message || "Failed to send email" });
    }

    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (error) {
    return res.status(500).json({ ok: false, error: "Unexpected server error" });
  }
}
