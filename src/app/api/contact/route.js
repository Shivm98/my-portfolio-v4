import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import portfolio from "@/content/portfolio.json";

export const runtime = "nodejs";

const LIMITS = { name: 120, email: 254, message: 8000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str, max) {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, max).replace(/\0/g, "");
}

function mailConfigured() {
  return Boolean(
    process.env.MAIL_HOST &&
      process.env.MAIL_USER &&
      process.env.MAIL_PASS &&
      process.env.MAIL_FROM &&
      process.env.MAIL_TO,
  );
}

export async function POST(request) {
  if (!mailConfigured()) {
    return NextResponse.json(
      { error: "service_unavailable" },
      { status: 503 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const hp = typeof body.company === "string" ? body.company.trim() : "";
  if (hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name, LIMITS.name);
  const email = sanitize(body.email, LIMITS.email).toLowerCase();
  const message = sanitize(body.message, LIMITS.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const port = Number.parseInt(process.env.MAIL_PORT || "587", 10);
  const secure =
    process.env.MAIL_SECURE === "true" ||
    process.env.MAIL_SECURE === "1" ||
    port === 465;

  const subjectBase = String(
    portfolio.contact?.form?.emailSubject ||
      process.env.MAIL_SUBJECT_PREFIX ||
      "Portfolio inquiry",
  )
    .replace(/\r?\n/g, " ")
    .slice(0, 80);
  const subject = `${subjectBase} · ${name}`.slice(0, 200);

  const text = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port,
      secure,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
