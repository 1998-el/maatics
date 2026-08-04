import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error("Variables SMTP manquantes (SMTP_HOST, SMTP_USER, SMTP_PASSWORD).");
  }

  const isProduction = process.env.NODE_ENV === "production";

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    // La vérification du certificat n'est désactivée qu'en dev, pour contourner
    // une interception TLS locale (antivirus/proxy). En production, le certificat
    // LWS est vérifié normalement — ne jamais retirer cette condition.
    tls: { rejectUnauthorized: isProduction },
  });

  return transporter;
}

interface SendMailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail({ subject, html, replyTo }: SendMailOptions) {
  const mailer = getTransporter();
  const from = process.env.SMTP_USER!;
  const to = process.env.CONTACT_NOTIFICATION_TO ?? from;

  await mailer.sendMail({ from, to, subject, html, replyTo });
}