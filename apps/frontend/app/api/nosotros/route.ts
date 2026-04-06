import { NextResponse } from "next/server";
import { nosotrosDefault } from "@/config/nosotros";

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  const API_URL = process.env.API_URL;

  try {
    const res = await fetch(`${API_URL}/api/nosotros?populate=*`, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error("API error");

    const json = await res.json();
    const data = json.data;

    if (!data) {
      throw new Error("No data found");
    }

    const nosotros = {
      historia: data.historia?.map((h: any) => h.parrafo) ?? nosotrosDefault.historia,
      mision: data.mision ?? nosotrosDefault.mision,
      vision: data.vision ?? nosotrosDefault.vision,
      valores: data.valores?.map((v: any) => v.valor) ?? nosotrosDefault.valores,
      periodoJunta: data.periodoJunta ?? nosotrosDefault.periodoJunta,
      juntaDirectiva:
        data.juntaDirectiva?.map((m: any) => ({
          cargo: m.cargo,
          nombre: m.nombre,
        })) ?? nosotrosDefault.juntaDirectiva,
      marcoLegal:
        data.marcoLegal?.map((m: any) => m.item) ?? nosotrosDefault.marcoLegal,
    };

    return NextResponse.json(nosotros);
  } catch (error) {
    console.warn("Fallback activado en API nosotros:", error);
    return NextResponse.json(nosotrosDefault);
  }
}
