import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getDb } from "@/lib/firebaseAdmin";
import { sendNotificationEmail } from "@/lib/mailer";

interface QuotePayload {
  service: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

function isValidPayload(data: unknown): data is QuotePayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.service === "string" &&
    typeof d.name === "string" &&
    d.name.trim().length > 1 &&
    typeof d.email === "string" &&
    /\S+@\S+\.\S+/.test(d.email) &&
    typeof d.phone === "string" &&
    d.phone.trim().length > 3
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
    const docRef = await db.collection("devis").add({
      service: body.service,
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      company: body.company?.trim() ?? null,
      message: body.message?.trim() ?? null,
      status: "nouveau",
      createdAt: FieldValue.serverTimestamp(),
    });

    try {
      await sendNotificationEmail({
        subject: `Nouvelle demande de devis — ${body.service}`,
        replyTo: body.email,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Service :</strong> ${body.service}</p>
          <p><strong>Nom :</strong> ${body.name}</p>
          <p><strong>Email :</strong> ${body.email}</p>
          <p><strong>Téléphone :</strong> ${body.phone}</p>
          <p><strong>Entreprise :</strong> ${body.company ?? "—"}</p>
          <p><strong>Message :</strong><br/>${body.message ?? "—"}</p>
        `,
      });
    } catch (mailError) {
      console.error("Erreur envoi email (devis) :", mailError);
    }

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (error) {
    console.error("Erreur Firestore (devis) :", error);
    return NextResponse.json({ error: "Erreur serveur, réessayez plus tard." }, { status: 500 });
  }
}
