import { NoticiasData } from '@/types/noticias'
import { noticiasDefault } from '@/config/noticias'

export async function getNoticias(): Promise<NoticiasData> {
  try {
    const API_URL = process.env.API_URL || 'http://localhost:1337'

    const res = await fetch(`${API_URL}/api/noticia?populate=*`, {
      next: {
        tags: ['noticia'],
      },
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
        (data.Galeria ?? data.gallery)
          ?.map((img: any) => ({
            id: img.id,
            src: `${API_URL}${img.url}`,
            alt: img.alternativeText ?? '',
            caption: img.caption ?? '',
          }))
          .sort((a: any, b: any) => b.id - a.id) ?? noticiasDefault.gallery,
      facebook: {
        pageUrl: data.facebook?.pageUrl ?? noticiasDefault.facebook.pageUrl,
        pageName: data.facebook?.pageName ?? noticiasDefault.facebook.pageName,
      },
      payDayImage: (data.imagenPago ?? data.payDayImage)
        ? {
            id: (data.imagenPago ?? data.payDayImage).id,
            src: `${API_URL}${(data.imagenPago ?? data.payDayImage).url}`,
            alt: (data.imagenPago ?? data.payDayImage).alternativeText ?? '',
            caption: (data.imagenPago ?? data.payDayImage).caption ?? '',
          }
        : noticiasDefault.payDayImage,
    }

    return noticias
  } catch {
    // API not available - using default values (expected in development without Strapi)
    return noticiasDefault
  }
}
