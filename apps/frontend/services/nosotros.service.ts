import { NosotrosData } from "@/types/nosotros";
import { nosotrosDefault } from "@/config/nosotros";

export async function getNosotros(): Promise<NosotrosData> {
  try {
    const API_URL = process.env.API_URL || "http://localhost:1337";

    const res = await fetch(`${API_URL}/api/nosotros?populate=*`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn("API de nosotros falló. Usando valores por defecto.");
      return nosotrosDefault;
    }

    const json = await res.json();
    const data = json.data;

    if (!data) {
      return nosotrosDefault;
    }

    const nosotros: NosotrosData = {
      historia:
        data.historia?.map((h: any) => h.parrafo) ?? nosotrosDefault.historia,
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

    return nosotros;
  } catch (error) {
    console.error("Error obteniendo datos de nosotros:", error);
    return nosotrosDefault;
  }
}
