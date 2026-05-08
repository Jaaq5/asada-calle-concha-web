import Link from 'next/link'
import { FileText, PlusCircle, AlertTriangle, UserCog, ArrowRight, UserX, DropletOff, FileMinus, UserPlus } from 'lucide-react'
import styles from './TramitesOnline.module.css'

const tramites = [
  {
    id: 'consultar-factura',
    icon: FileText,
    title: 'Consultar Factura',
    description: 'Revisar el estado de cuenta e historial de consumo.',
    href: 'https://acueductoscr.com/Recibos?provincia=2&idacueducto=254',
    featured: true,
  },
  {
    id: 'quejas-sugerencias',
    icon: AlertTriangle,
    title: 'Sugerencias, Quejas y Reclamos',
    description: 'Presentar sus sugerencias, quejas y reclamos a la ASADA.',
    href: 'https://wa.me/50660622347?text=Hola%20buenas,%20me%20gustaría%20presentar%20una%20queja.',
    featured: false,
  },
  {
    id: 'renuncia-derecho-paja',
    icon: FileMinus,
    title: 'Renuncia al derecho de paja',
    description: 'Descargar formulario para solicitar la renuncia al derecho de paja.',
    href: '/pdfs/tramites/renuncia-derecho-paja.pdf',
    featured: false,
  },
  {
    id: 'eliminacion-servicio-agua',
    icon: DropletOff,
    title: 'Eliminación del servicio de agua',
    description: 'Descargar formulario para la eliminación del servicio.',
    href: '/pdfs/tramites/eliminacion-servicio-agua.pdf',
    featured: false,
  },
  {
    id: 'inscripcion-asociado',
    icon: UserPlus,
    title: 'Inscripción como asociado',
    description: 'Solicitar la inscripción como nuevo asociado a la ASADA.',
    href: 'https://wa.me/50660622347?text=Hola,%20me%20gustaría%20inscribirme%20como%20nuevo%20asociado%20a%20la%20ASADA.',
    featured: false,
  },
  {
    id: 'renuncia-asociado',
    icon: UserX,
    title: 'Renuncia condición de asociado',
    description: 'Descargar formulario para solicitar la renuncia de condición de asociado.',
    href: '/pdfs/tramites/renuncia-asociado.pdf',
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
                target="_blank"
                rel="noopener noreferrer"
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
