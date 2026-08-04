import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getDb } from "@/lib/firebaseAdmin";
import { sendNotificationEmail } from "@/lib/mailer";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 1 &&
    typeof d.email === "string" &&
    /\S+@\S+\.\S+/.test(d.email) &&
    typeof d.subject === "string" &&
    d.subject.trim().length > 1 &&
    typeof d.message === "string" &&
    d.message.trim().length > 1
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide (JSON attendu)." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Champs requis manquants ou invalides." }, { status: 400 });
  }

  try {
    const db = getDb();
    const docRef = await db.collection("contacts").add({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      status: "nouveau",
      createdAt: FieldValue.serverTimestamp(),
    });

    try {
      await sendNotificationEmail({
        subject: `Nouveau message de contact — ${body.subject}`,
        replyTo: body.email,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${body.name}</p>
          <p><strong>Email :</strong> ${body.email}</p>
          <p><strong>Sujet :</strong> ${body.subject}</p>
          <p><strong>Message :</strong><br/>${body.message}</p>
        `,
      });
    } catch (mailError) {
      console.error("Erreur envoi email (contact) :", mailError);
    }

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Erreur Firestore (contact) :", error);
    return NextResponse.json({ error: "Erreur serveur, réessayez plus tard." }, { status: 500 });
  }
}
