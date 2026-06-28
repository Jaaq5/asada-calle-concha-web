export type NoticeType = 'suspension' | 'comunicado' | 'noticia'

export interface Notice {
  id: number
  type: NoticeType
  title: string
  description: string
  date: string
  href: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

export interface FacebookConfig {
  pageUrl: string
  pageName: string
}

export interface NoticiasData {
  notices: Notice[]
  gallery: GalleryImage[]
  facebook: FacebookConfig
  payDayImage?: GalleryImage
}
