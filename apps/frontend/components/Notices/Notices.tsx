'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Facebook, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import styles from './Notices.module.css'
import { NoticiasData } from '@/types/noticias'

const badgeConfig = {
  suspension: { label: 'Suspensión', className: styles.badgeWarning },
  comunicado: { label: 'Comunicado', className: styles.badgeInfo },
  noticia: { label: 'Noticia', className: styles.badgeNews },
}

interface NoticesProps {
  data: NoticiasData
  variant?: 'home' | 'full'
}

export function Notices({ data, variant = 'full' }: NoticesProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const displayedNotices = variant === 'home' ? data.notices.slice(0, 3) : data.notices
  const displayedGallery = variant === 'home' ? data.gallery.slice(0, 4) : data.gallery

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? displayedGallery.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === displayedGallery.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Avisos y Noticias</h2>
          <p className={styles.sectionSubtitle}>
            Mantente informado sobre las novedades de nuestra ASADA
          </p>
        </header>

        {/* Notice Cards */}
        {/*
        <div className={styles.grid}>
          {displayedNotices.map((notice) => {
            const badge = badgeConfig[notice.type]
            return (
              <article key={notice.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={`${styles.cardBadge} ${badge.className}`}>
                    {badge.label}
                  </span>
                  <time className={styles.cardDate}>{notice.date}</time>
                </div>
                <h3 className={styles.cardTitle}>{notice.title}</h3>
                <p className={styles.cardDescription}>{notice.description}</p>
                <Link href={notice.href} className={styles.cardLink}>
                  Leer más <ArrowRight size={16} />
                </Link>
              </article>
            )
          })}
        </div>
        */}

        {/* Facebook & Gallery Row */}
        <div className={styles.mediaRow}>
          {/* Facebook Section */}
          <div className={styles.facebookSection}>
            <div className={styles.mediaSectionHeader}>
              <Facebook size={22} className={styles.facebookIcon} />
              <h3 className={styles.mediaSectionTitle}>Síguenos en Facebook</h3>
            </div>
            <div className={styles.facebookEmbed}>
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(data.facebook.pageUrl)}&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="400"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={`Facebook - ${data.facebook.pageName}`}
                loading="lazy"
              />
            </div>
            <a
              href={data.facebook.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebookLink}
            >
              Visitar página de Facebook
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Gallery Section */}
          <div className={styles.gallerySection}>
            <div className={styles.mediaSectionHeader}>
              <Images size={22} className={styles.galleryIcon} />
              <h3 className={styles.mediaSectionTitle}>Galería de Imágenes</h3>
            </div>
            <div className={styles.galleryGrid}>
              {displayedGallery.map((image, index) => (
                <button
                  key={image.id}
                  className={styles.galleryItem}
                  onClick={() => openLightbox(index)}
                  aria-label={`Ver imagen: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={styles.galleryImage}
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryCaption}>{image.caption}</span>
                  </div>
                </button>
              ))}
            </div>
            {variant === 'full' && data.gallery.length > 6 && (
              <p className={styles.galleryCount}>
                {data.gallery.length} imágenes en total
              </p>
            )}
          </div>
        </div>

        {/* View All CTA (home variant only) */}
        {variant === 'home' && (
          <div className={styles.viewAll}>
            <Link href="/noticias" className={styles.viewAllButton}>
              Ver todas las noticias
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imágenes"
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Cerrar visor"
          >
            <X size={28} />
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={displayedGallery[lightboxIndex].src}
              alt={displayedGallery[lightboxIndex].alt}
              width={900}
              height={600}
              className={styles.lightboxImage}
              priority
            />
            <p className={styles.lightboxCaption}>
              {displayedGallery[lightboxIndex].caption}
            </p>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={32} />
          </button>

          <div className={styles.lightboxCounter}>
            {lightboxIndex + 1} / {displayedGallery.length}
          </div>
        </div>
      )}
    </section>
  )
}
