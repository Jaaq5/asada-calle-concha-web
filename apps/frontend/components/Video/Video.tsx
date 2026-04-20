'use client'

import { Video as VideoIcon } from 'lucide-react'
import styles from './Video.module.css'

interface VideoProps {
  title?: string
  videoUrl?: string
}

export function Video({ 
  title = 'Video Destacado', 
  videoUrl = 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100095307517156%2Fvideos%2F1900600270385418%2F&show_text=false&width=267&t=0' 
}: VideoProps) {
  return (
    <div className={styles.videoSection}>
      <div className={styles.videoHeader}>
        <VideoIcon size={22} className={styles.videoIcon} />
        <h3 className={styles.videoTitle}>{title}</h3>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          src={videoUrl}
          width="267"
          height="476"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title={title}
          loading="lazy"
        />
      </div>
    </div>
  )
}
