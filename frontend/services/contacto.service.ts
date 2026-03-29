import { ContactoData } from "@/types/contacto";
import { contactoDefault } from "@/config/contacto";

export async function getContacto(): Promise<ContactoData> {
  try {
    // In Next.js App Router, using absolute URLs for absolute fetch in Server Components is required
    // When using an internal API route from a Server Component, typically you connect directly to the DB,
    // but for the sake of the API mock requirement, we fetch the local endpoint.
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/contacto`, {
      next: { revalidate: 3600 }, // Cache the mock result for reasonable performance
    });

    if (!res.ok) {
      console.warn("API de contacto falló. Usando valores por defecto.");
      return contactoDefault;
    }

    const data = await res.json();
    
    // Quick validation check to ensure primary data exists
    if (!data || !data.direccion || !data.telefonos) {
      throw new Error("Formato de respuesta inválido");
    }

    return data as ContactoData;
  } catch (error) {
    console.error("Error obteniendo datos de contacto:", error);
    return contactoDefault; // Fallback exactly as requested
  }
}
