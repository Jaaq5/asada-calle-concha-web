import { NoticiasData } from '@/types/noticias'

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
  gallery: [
    {
      id: 1,
      src: '/images/gallery/muestreo1.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
    {
      id: 2,
      src: '/images/gallery/muestreo2.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
    {
      id: 3,
      src: '/images/gallery/muestreo3.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
    {
      id: 4,
      src: '/images/gallery/muestreo4.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
    {
      id: 5,
      src: '/images/gallery/muestreo5.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
    {
      id: 6,
      src: '/images/gallery/muestreo6.webp',
      alt: 'Muestreo de agua',
      caption: 'Muestreo de agua',
    },
  ],
  facebook: {
    pageUrl: 'https://www.facebook.com/AsadaCalleConcha',
    pageName: 'ASADA Calle Concha',
  },
}
