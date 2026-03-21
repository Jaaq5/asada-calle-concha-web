import Link from 'next/link'
import { 
  Droplets, 
  PlusCircle, 
  RefreshCw, 
  Gauge, 
  AlertTriangle, 
  FileCheck,
  Clock,
  DollarSign,
  FileText,
  ArrowRight
} from 'lucide-react'
import styles from './Servicios.module.css'

const servicios = [
  {
    id: 'agua-potable',
    icon: Droplets,
    title: 'Servicio de Agua Potable',
    description: 'Suministro continuo de agua potable de alta calidad, con monitoreo constante y cumplimiento de todas las normas sanitarias vigentes.',
    badge: 'Principal',
    badgeType: 'principal' as const,
    color: 'blue' as const,
    requisitos: 'Ser propietario o arrendatario',
    costo: 'Según tarifa vigente',
    actions: [
      { label: 'Información', href: '/servicios/agua-potable', type: 'secondary' as const },
    ],
  },
  {
    id: 'nuevas-conexiones',
    icon: PlusCircle,
    title: 'Nuevas Conexiones',
    description: 'Solicita la instalación de un nuevo servicio de agua potable para tu propiedad. Te guiamos en todo el proceso.',
    badge: 'Popular',
    badgeType: 'popular' as const,
    color: 'green' as const,
    requisitos: 'Escritura, cédula, plano catastrado',
    costo: 'Desde ₡85,000',
    actions: [
      { label: 'Solicitar', href: '/solicitar', type: 'primary' as const },
      { label: 'Requisitos', href: '/servicios/nuevas-conexiones', type: 'secondary' as const },
    ],
  },
  {
    id: 'reconexiones',
    icon: RefreshCw,
    title: 'Reconexiones',
    description: 'Restablecimiento del servicio tras suspensión por morosidad o solicitud previa del abonado.',
    color: 'deepBlue' as const,
    requisitos: 'Pago de deuda pendiente',
    costo: '₡15,000',
    actions: [
      { label: 'Solicitar', href: '/tramites/reconexion', type: 'primary' as const },
    ],
  },
  {
    id: 'cambio-medidor',
    icon: Gauge,
    title: 'Cambio de Medidor',
    description: 'Reemplazo de medidor por daño, deterioro o actualización tecnológica para una medición más precisa.',
    color: 'blue' as const,
    requisitos: 'Solicitud formal',
    costo: '₡45,000',
    actions: [
      { label: 'Solicitar', href: '/tramites/cambio-medidor', type: 'primary' as const },
    ],
  },
  {
    id: 'reporte-fugas',
    icon: AlertTriangle,
    title: 'Reporte de Fugas',
    description: 'Reporta fugas de agua en la vía pública o en tu propiedad. Atendemos emergencias las 24 horas.',
    color: 'green' as const,
    actions: [
      { label: 'Reportar', href: '/reportar', type: 'report' as const },
    ],
  },
  {
    id: 'certificaciones',
    icon: FileCheck,
    title: 'Certificaciones',
    description: 'Emisión de certificaciones de servicio activo, disponibilidad de agua y constancias para trámites legales.',
    color: 'deepBlue' as const,
    requisitos: 'Cédula del titular',
    costo: '₡5,000',
    actions: [
      { label: 'Solicitar', href: '/tramites/certificacion', type: 'primary' as const },
      { label: 'Descargar formulario', href: '/formularios', type: 'secondary' as const },
    ],
  },
]

const iconColorClasses = {
  blue: styles.iconBlue,
  green: styles.iconGreen,
  deepBlue: styles.iconDeepBlue,
}

const actionTypeClasses = {
  primary: styles.actionPrimary,
  secondary: styles.actionSecondary,
  report: styles.actionReport,
}

export function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
          <p className={styles.sectionSubtitle}>
            Soluciones completas para el suministro y gestión del agua potable
          </p>
        </header>

        <div className={styles.grid}>
          {servicios.map((servicio) => {
            const IconComponent = servicio.icon
            return (
              <article key={servicio.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconWrapper} ${iconColorClasses[servicio.color]}`}>
                    <IconComponent size={26} />
                  </div>
                  <div className={styles.cardTitleWrapper}>
                    <h3 className={styles.cardTitle}>{servicio.title}</h3>
                    {servicio.badge && (
                      <span className={`${styles.cardBadge} ${servicio.badgeType === 'principal' ? styles.badgePrincipal : styles.badgePopular}`}>
                        {servicio.badge}
                      </span>
                    )}
                  </div>
                </div>

                <p className={styles.cardDescription}>{servicio.description}</p>

                {(servicio.requisitos || servicio.costo) && (
                  <div className={styles.cardDetails}>
                    {servicio.requisitos && (
                      <div className={styles.detailItem}>
                        <FileText size={14} />
                        <span>{servicio.requisitos}</span>
                      </div>
                    )}
                    {servicio.costo && (
                      <div className={styles.detailItem}>
                        <DollarSign size={14} />
                        <span>{servicio.costo}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className={styles.cardActions}>
                  {servicio.actions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className={`${styles.actionButton} ${actionTypeClasses[action.type]}`}
                    >
                      {action.label}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
