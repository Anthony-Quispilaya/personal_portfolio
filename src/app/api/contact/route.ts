import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactBody = {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM,
      CONTACT_FROM_NAME,
    } = process.env as Record<string, string | undefined>;

  const recipient = CONTACT_TO || SMTP_USER;
  const useRealSMTP = SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && recipient;

    const subject = `[Portfolio] ${body.subject}`;
    const text = `New contact form submission\n\nName: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company || '-'}\n\nMessage:\n${body.message}`;
    const html = `
      <div style=\"font-family: Arial, sans-serif; line-height:1.6;\">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || '-'}</p>
        <hr/>
        <p style=\"white-space:pre-wrap;\">${body.message}</p>
      </div>
    `;

    if (!useRealSMTP) {
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { error: 'Email service not configured. Set SMTP and CONTACT_* env vars in your hosting provider.' },
          { status: 500 }
        );
      }
      // Development fallback: Ethereal test account preview
      const testAccount = await nodemailer.createTestAccount();
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      const info = await transporter.sendMail({
        to: 'preview@example.com',
        from: { name: 'Portfolio Contact (DEV)', address: testAccount.user },
        replyTo: body.email,
        subject,
        text,
        html,
      });
      const previewUrl = nodemailer.getTestMessageUrl(info);
      return NextResponse.json({ ok: true, previewUrl });
    }

    // Real SMTP path
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    const fromAddress = CONTACT_FROM || SMTP_USER;
    const fromName = CONTACT_FROM_NAME || 'Portfolio Contact';

    await transporter.sendMail({
      to: recipient,
      from: { name: fromName, address: fromAddress! },
      replyTo: body.email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
