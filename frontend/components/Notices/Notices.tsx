import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from './Notices.module.css'

const notices = [
  {
    id: 1,
    type: 'suspension' as const,
    title: 'Corte programado - Zona alta de Calle Concha',
    description: 'Se realizarán trabajos de mantenimiento preventivo en la red de distribución. El servicio se suspenderá de 8:00 a.m. a 2:00 p.m.',
    date: '15 de marzo, 2026',
    href: '/avisos/corte-marzo-2026',
  },
  {
    id: 2,
    type: 'comunicado' as const,
    title: 'Asamblea General Ordinaria 2026',
    description: 'Se convoca a todos los abonados a la Asamblea General Ordinaria para la rendición de cuentas del período 2025 y elección de fiscalía.',
    date: '20 de marzo, 2026',
    href: '/avisos/asamblea-2026',
  },
  {
    id: 3,
    type: 'noticia' as const,
    title: 'Proyecto de ampliación de red aprobado',
    description: 'La Junta Directiva aprobó el proyecto de ampliación de la red de distribución que beneficiará a 50 nuevas familias.',
    date: '12 de marzo, 2026',
    href: '/noticias/ampliacion-red',
  },
]

const badgeConfig = {
  suspension: { label: 'Suspensión', className: styles.badgeWarning },
  comunicado: { label: 'Comunicado', className: styles.badgeInfo },
  noticia: { label: 'Noticia', className: styles.badgeNews },
}

export function Notices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Avisos y Noticias</h2>
          <p className={styles.sectionSubtitle}>
            Mantente informado sobre las novedades de nuestra ASADA
          </p>
        </header>

        <div className={styles.grid}>
          {notices.map((notice) => {
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

        <div className={styles.viewAll}>
          <Link href="/noticias" className={styles.viewAllButton}>
            Ver todas las noticias
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
