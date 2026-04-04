import { NextResponse } from "next/server";
import { contactoDefault } from "@/config/contacto";

/*
export async function GET() {
  // Mock endpoint returning the static configuration as JSON
  return NextResponse.json(contactoDefault);
}
*/

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}/api/contacto?populate=*`, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error("API error");

    const json = await res.json();
    const data = json.data;

    const contacto = {
      direccion: {
        calle: data.direccion?.[0]?.calle ?? "",
        ciudad: data.direccion?.[0]?.ciudad ?? "",
        mapaIframeUrl: data.direccion?.[0]?.mapaIframeUrl ?? "",
        mapaRedirectUrl: data.direccion?.[0]?.mapaRedirectUrl ?? "",
      },
      telefonos: data.telefono?.map((t: any) => ({
        numero: t.numero,
        descripcion: t.descripcion,
      })) ?? [],
      correo: data.correo?.Email ?? "",
      horario: data.horario?.map((h: any) => h.horario) ?? [],
      whatsapp: {
        numero: data.whatsapp?.[0]?.numero ?? "",
        mensajeDefecto: data.whatsapp?.[0]?.mensajeDefecto ?? "",
      },
    };

    return NextResponse.json(contacto);
  } catch (error) {
    console.warn("Fallback activado:", error);
    return NextResponse.json(contactoDefault);
  }
}

/*
export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5s

  try {
    const res = await fetch("https://api.tusitio.com/contacto", {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error("API error");

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.warn("Fallback activado:", error);

    return NextResponse.json(contactoDefault);
  }
}
*/

/*
{
  "direccion": "Calle Concha, Sarchi",
  "telefonos": [
    { "numero": "2454-0300", "tipo": "Oficina" },
    { "numero": "6062-2347", "tipo": "Oficina" }
  ],
  "correo": ["info@asadacalleconcha.cr"],
  "horario": "Lunes a Sábado 8am - 12pm",
  "whatsapp": "50688888888"
}
*/

/*
Frontend (Contacto.tsx)
        ↓
/api/contacto (Next.js route)
        ↓
API externa (backend real)
        ↓ (si falla)
config/contacto.ts (fallback)
*/
