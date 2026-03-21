import Link from 'next/link'
import { FileText, PlusCircle, AlertTriangle, UserCog, ArrowRight } from 'lucide-react'
import styles from './TramitesOnline.module.css'

const tramites = [
  {
    id: 'consultar-factura',
    icon: FileText,
    title: 'Consultar Factura',
    description: 'Revisa el estado de cuenta, historial de consumo y realiza pagos en línea.',
    href: '/factura',
    featured: true,
  },
  {
    id: 'nuevo-servicio',
    icon: PlusCircle,
    title: 'Solicitar Servicio',
    description: 'Inicia tu solicitud de nuevo servicio de agua potable completamente en línea.',
    href: '/solicitar',
    featured: false,
  },
  {
    id: 'reportar-averia',
    icon: AlertTriangle,
    title: 'Reportar Avería',
    description: 'Informa sobre fugas, daños o problemas con el servicio de forma inmediata.',
    href: '/reportar',
    featured: false,
  },
  {
    id: 'actualizar-datos',
    icon: UserCog,
    title: 'Actualizar Datos',
    description: 'Mantén tu información de contacto y datos de abonado actualizados.',
    href: '/actualizar-datos',
    featured: false,
  },
]

export function TramitesOnline() {
  return (
    <section id="tramites" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trámites en Línea</h2>
          <p className={styles.sectionSubtitle}>
            Realiza tus gestiones de forma rápida y segura desde cualquier lugar
          </p>
        </header>

        <div className={styles.grid}>
          {tramites.map((tramite) => {
            const IconComponent = tramite.icon
            return (
              <Link
                key={tramite.id}
                href={tramite.href}
                className={`${styles.card} ${tramite.featured ? styles.featured : ''}`}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={32} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{tramite.title}</h3>
                  <p className={styles.cardDescription}>{tramite.description}</p>
                  <span className={styles.cardAction}>
                    Acceder
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
