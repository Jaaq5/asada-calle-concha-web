'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images, ZoomIn, ZoomOut } from 'lucide-react'
import styles from './Gallery.module.css'
import { GalleryImage } from '@/types/noticias'

interface GalleryProps {
  images: GalleryImage[]
  showCount?: boolean
  totalCount?: number
  single?: boolean
  title?: string
  pageSize?: number
}

export function Gallery({
  images,
  showCount = false,
  totalCount = 0,
  single = false,
  title = 'Galería de Imágenes',
  pageSize = 9,
}: GalleryProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const isPaginated = !single && images.length > pageSize
  const totalPages = isPaginated ? Math.ceil(images.length / pageSize) : 1
  const displayedImages = isPaginated
    ? images.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    : images

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    setIsZoomed(false)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setIsZoomed(false)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1))
    setIsZoomed(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1))
    setIsZoomed(false)
  }

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsZoomed((prev) => !prev)
  }

  return (
    <>
      <div className={styles.gallerySection}>
        <div className={styles.mediaSectionHeader}>
          <Images size={22} className={styles.galleryIcon} />
          <h3 className={styles.mediaSectionTitle}>{title}</h3>
        </div>
        <div className={styles.galleryGrid} style={single ? { gridTemplateColumns: '1fr' } : undefined}>
          {displayedImages.map((image, index) => (
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

        {isPaginated && (
          <div className={styles.paginationControls}>
            <button
              className={styles.paginationButton}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              aria-label="Página anterior"
            >
              <ChevronLeft size={18} />
              Anterior
            </button>
            <span className={styles.paginationInfo}>
              Página {currentPage + 1} de {totalPages}
            </span>
            <button
              className={styles.paginationButton}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              aria-label="Página siguiente"
            >
              Siguiente
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {showCount && totalCount > 0 && (
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
            className={styles.lightboxZoom}
            onClick={toggleZoom}
            aria-label={isZoomed ? 'Alejar imagen' : 'Acercar imagen'}
          >
            {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
          </button>

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
              src={displayedImages[lightboxIndex].src}
              alt={displayedImages[lightboxIndex].alt}
              width={900}
              height={600}
              className={`${styles.lightboxImage} ${isZoomed ? styles.zoomed : ''}`}
              priority
            />
            <p className={styles.lightboxCaption}>
              {displayedImages[lightboxIndex].caption}
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
            {lightboxIndex + 1} / {displayedImages.length}
          </div>
        </div>
      )}
    </>
  )
}
