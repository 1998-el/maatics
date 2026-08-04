import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getDb } from "@/lib/firebaseAdmin";

interface NewsletterPayload {
  email: string;
}

function isValidPayload(data: unknown): data is NewsletterPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.email === "string" &&
    /\S+@\S+\.\S+/.test(d.email)
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
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  try {
    const db = getDb();
    await db.collection("newsletter").add({
      email: body.email.trim().toLowerCase(),
      status: "inscrit",
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Erreur Firestore (newsletter) :", error);
    return NextResponse.json({ error: "Erreur serveur, réessayez plus tard." }, { status: 500 });
  }
}