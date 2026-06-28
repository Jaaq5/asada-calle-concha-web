'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import styles from './Gallery.module.css'
import { GalleryImage } from '@/types/noticias'

interface GalleryProps {
  images: GalleryImage[]
  showCount?: boolean
  totalCount?: number
  single?: boolean
  title?: string
}

export function Gallery({ images, showCount = false, totalCount = 0, single = false, title = 'Galería de Imágenes' }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className={styles.gallerySection}>
        <div className={styles.mediaSectionHeader}>
          <Images size={22} className={styles.galleryIcon} />
          <h3 className={styles.mediaSectionTitle}>{title}</h3>
        </div>
        <div className={styles.galleryGrid} style={single ? { gridTemplateColumns: '1fr' } : undefined}>
          {images.map((image, index) => (
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
        {showCount && totalCount > 6 && (
          <p className={styles.galleryCount}>
            {totalCount} imágenes en total
          </p>
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
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={900}
              height={600}
              className={styles.lightboxImage}
              priority
            />
            <p className={styles.lightboxCaption}>
              {images[lightboxIndex].caption}
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
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
