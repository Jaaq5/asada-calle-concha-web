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
  ArrowRight,
  HandCoins,
  PhoneCall,
  Smartphone
} from 'lucide-react'
import styles from './Servicios.module.css'

const servicios = [
  {
    id: 'certificaciones',
    icon: FileCheck,
    title: 'Certificación de Disponibilidad Hídrica',
    badge: 'Principal',
    badgeType: 'principal' as const,
    description: 'Certificación que emite la ASADA para constatar la disponibilidad de agua potable en una propiedad específica.',
    color: 'deepBlue' as const,
    requisitos: [
      'Copia de la cédula del propietario o representante legal',
      'Certificación literal del Registro Nacional',
      'Copia del plano catastrado certificado'
    ],
    //costo: 'Pago',
    actions: [
      { label: 'Solicitar', href: 'https://wa.me/50660622347?text=Hola%20buenas%2C%20quisiera%20solicitar%20una%20certificaci%C3%B3n%20de%20disponibilidad%20h%C3%ADdrica', type: 'primary' as const },
      { label: 'Descargar formulario', href: '/pdfs/certificacion-disponibilidad.pdf', type: 'secondary' as const },
    ],
  },
  {
    id: 'traslado-hidrometro',
    icon: Gauge,
    title: 'Traslado de Hidrometro',
    description: 'Reubicación del hidrometro por solicitud del abonado.',
    color: 'blue' as const,
    requisitos: [
      'Copia de la cédula del propietario o representante legal',
      'Copia de comprobante de pago del servicio al día',
    ],
    costo: 'Costo del traslado',
    actions: [
      { label: 'Solicitar', href: 'https://wa.me/50660622347?text=Hola%20buenas%2C%20quisiera%20solicitar%20un%20traslado%20de%20hidrometro', type: 'primary' as const },
      { label: 'Descargar formulario', href: '/pdfs/traslado-hidrometro.pdf', type: 'secondary' as const },
    ],
  },
  {
    id: 'corta-reconexion',
    icon: RefreshCw,
    title: 'Corta y Reconexión',
    description: 'Servicio de reconexión del servicio de agua potable por solicitud del abonado.',
    color: 'deepBlue' as const,
    requisitos: 'Pago de deuda pendiente',
    costo: '₡ 9.045 + IVA',
    actions: [
      { label: 'Solicitar', href: 'tel:+50624540300', type: 'primary' as const, actionIcon: PhoneCall },
      { label: 'Solicitar', href: 'https://wa.me/50660622347?text=Hola%20buenas%2C%20quisiera%20solicitar%20una%20reconexión%20del%20servicio%20de%20agua%20potable', type: 'primary' as const, actionIcon: Smartphone },
    ],
  },
  
  /*
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
    id: 'reporte-fugas',
    icon: AlertTriangle,
    title: 'Reporte de Fugas',
    description: 'Reporta fugas de agua en la vía pública o en tu propiedad. Atendemos emergencias las 24 horas.',
    color: 'green' as const,
    actions: [
      { label: 'Reportar', href: '/reportar', type: 'report' as const },
    ],
  },
  */
  
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
                      <>
                        {Array.isArray(servicio.requisitos) ? (
                          servicio.requisitos.map((req, index) => (
                            <div key={index} className={styles.detailItem}>
                              <FileText size={14} />
                              <span>{req}</span>
                            </div>
                          ))
                        ) : (
                          <div className={styles.detailItem}>
                            <FileText size={14} />
                            <span>{servicio.requisitos}</span>
                          </div>
                        )}
                      </>
                    )}
                    {servicio.costo && (
                      <div className={styles.detailItem}>
                        <HandCoins size={14} />
                        <a 
                          href="https://aresep.go.cr/agua-potable/tarifas/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'underline', color: 'inherit' }}
                        >
                          {servicio.costo}
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <div className={styles.cardActions}>
                  {servicio.actions.map((action) => {
                    const ActionIconComponent = ('actionIcon' in action ? action.actionIcon : ArrowRight) as any;
                    return (
                      <Link
                        key={action.href}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionButton} ${actionTypeClasses[action.type]}`}
                      >
                        {action.label}
                        <ActionIconComponent size={14} />
                      </Link>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
