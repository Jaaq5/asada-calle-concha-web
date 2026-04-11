'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import styles from './QrCode.module.css'

interface QrCodeProps {
  title?: string
  subtitle?: string
}

export function QrCode({ 
  title = '¡Bienvenidos a la Asamblea General Ordinaria!', 
  subtitle = 'Escanea el código QR con tu cámara para acceder al sitio web. Presiona sobre el código para ampliarlo.' 
}: QrCodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div className={styles.qrBanner}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <button 
          className={styles.qrWrapper} 
          onClick={toggleExpand}
          aria-label="Ampliar código QR"
        >
          <Image 
            src="/images/qr-code.jpg" 
            alt="Código QR ASADA Calle Concha" 
            width={80} 
            height={80}
            className={styles.qrImage}
          />
        </button>
      </div>

      {/* Lightbox / Modal */}
      {isExpanded && (
        <div className={styles.lightbox} onClick={toggleExpand}>
          <button className={styles.lightboxClose} onClick={toggleExpand}>
            <X size={32} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src="/images/qr-code.jpg" 
              alt="Código QR ASADA Calle Concha ampliado" 
              width={500} 
              height={500}
              className={styles.expandedQr}
              priority
            />
            <p className={styles.lightboxCaption}>Escanea desde tu dispositivo móvil</p>
          </div>
        </div>
      )}
    </div>
  )
}
