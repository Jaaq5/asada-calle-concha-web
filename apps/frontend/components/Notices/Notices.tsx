import Link from 'next/link'
import { ArrowRight, Facebook } from 'lucide-react'
import styles from './Notices.module.css'
import { NoticiasData } from '@/types/noticias'
import { Gallery } from '@/components/Gallery/Gallery'

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
  const displayedNotices = variant === 'home' ? data.notices.slice(0, 3) : data.notices
  const displayedGallery = variant === 'home' ? data.gallery.slice(0, 9) : data.gallery

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

        {/* Pay Day Image */}
        {data.payDayImage && (
          <div className={styles.featuredImageWrapper}>
            <Gallery images={[data.payDayImage]} single title="Fechas de pago y suspensión de servicio" />
          </div>
        )}

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
          <Gallery
            images={displayedGallery}
            showCount={variant === 'full'}
            totalCount={data.gallery.length}
          />
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
    </section>
  )
}
