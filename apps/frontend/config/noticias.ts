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
      src: '/images/gallery/infraestructura-tanque.webp',
      alt: 'Tanque de almacenamiento de agua potable',
      caption: 'Tanque de almacenamiento',
    },
    {
      id: 2,
      src: '/images/gallery/comunidad-reunion.webp',
      alt: 'Reunión comunitaria de ASADA',
      caption: 'Asamblea comunitaria',
    },
    {
      id: 3,
      src: '/images/gallery/naturaleza-naciente.webp',
      alt: 'Naciente de agua natural protegida',
      caption: 'Naciente protegida',
    },
    {
      id: 4,
      src: '/images/gallery/mantenimiento-tuberia.webp',
      alt: 'Trabajos de mantenimiento en tubería',
      caption: 'Mantenimiento de red',
    },
    {
      id: 5,
      src: '/images/gallery/paisaje-calle-concha.webp',
      alt: 'Paisaje verde de la comunidad de Calle Concha',
      caption: 'Comunidad Calle Concha',
    },
    {
      id: 6,
      src: '/images/gallery/equipo-trabajo.webp',
      alt: 'Equipo de trabajo de ASADA Calle Concha',
      caption: 'Nuestro equipo',
    },
  ],
  facebook: {
    pageUrl: 'https://www.facebook.com/AsadaCalleConcha',
    pageName: 'ASADA Calle Concha',
  },
}
