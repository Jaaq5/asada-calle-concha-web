import { NoticiasData, GalleryImage } from '@/types/noticias'
import fs from 'fs'
import path from 'path'

function getGalleryImages(): GalleryImage[] {
  try {
    const galleryDir = path.join(process.cwd(), 'public/images/gallery')
    const files = fs.readdirSync(galleryDir)
    
    return files
      .filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file))
      .map((file, index) => {
        const baseName = file.replace(/\.[^/.]+$/, '')

        return {
          id: index + 1,
          src: `/images/gallery/${file}`,
          alt: baseName,
          caption: baseName,
        }
      })
  } catch (error) {
    console.warn('Could not read gallery directory:', error)
    return []
  }
}

export const noticiasDefault: NoticiasData = {
  notices: [
    {
      id: 1,
      type: 'suspension',
      title: 'Corte programado - Zona alta de Calle Concha',
      description:
        'Se realizarán trabajos de mantenimiento preventivo en la red de distribución. El servicio se suspenderá de 8:00 a.m. a 2:00 p.m.',
      date: '15 de marzo, 2026',
      href: '/avisos/corte-marzo-2026',
    },
    {
      id: 2,
      type: 'comunicado',
      title: 'Asamblea General Ordinaria 2026',
      description:
        'Se convoca a todos los abonados a la Asamblea General Ordinaria para la rendición de cuentas del período 2025 y elección de fiscalía.',
      date: '20 de marzo, 2026',
      href: '/avisos/asamblea-2026',
    },
    {
      id: 3,
      type: 'noticia',
      title: 'Proyecto de ampliación de red aprobado',
      description:
        'La Junta Directiva aprobó el proyecto de ampliación de la red de distribución que beneficiará a 50 nuevas familias.',
      date: '12 de marzo, 2026',
      href: '/noticias/ampliacion-red',
    },
  ],
  gallery: getGalleryImages(),
  facebook: {
    pageUrl: 'https://www.facebook.com/AsadaCalleConcha',
    pageName: 'ASADA Calle Concha',
  },
}
