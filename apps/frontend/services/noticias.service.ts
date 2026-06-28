import { NoticiasData } from '@/types/noticias'
import { noticiasDefault } from '@/config/noticias'

export async function getNoticias(): Promise<NoticiasData> {
  try {
    const API_URL = process.env.API_URL || 'http://localhost:1337'

    const res = await fetch(`${API_URL}/api/noticias?populate=*`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.warn('API de noticias falló. Usando valores por defecto.')
      return noticiasDefault
    }

    const json = await res.json()
    const data = json.data

    if (!data) {
      return noticiasDefault
    }

    const noticias: NoticiasData = {
      notices:
        data.notices?.map((n: any) => ({
          id: n.id,
          type: n.type,
          title: n.title,
          description: n.description,
          date: n.date,
          href: n.href,
        })) ?? noticiasDefault.notices,
      gallery:
        data.gallery?.map((g: any) => ({
          id: g.id,
          src: g.src,
          alt: g.alt,
          caption: g.caption,
        })) ?? noticiasDefault.gallery,
      facebook: {
        pageUrl: data.facebook?.pageUrl ?? noticiasDefault.facebook.pageUrl,
        pageName: data.facebook?.pageName ?? noticiasDefault.facebook.pageName,
      },
      payDayImage: data.payDayImage
        ? { id: data.payDayImage.id, src: data.payDayImage.src, alt: data.payDayImage.alt, caption: data.payDayImage.caption }
        : noticiasDefault.payDayImage,
    }

    return noticias
  } catch {
    // API not available - using default values (expected in development without Strapi)
    return noticiasDefault
  }
}
