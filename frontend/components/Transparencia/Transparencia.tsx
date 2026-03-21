import Link from 'next/link'
import { 
  FileText, 
  DollarSign, 
  Calculator, 
  Receipt, 
  BarChart3, 
  BookOpen,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import styles from './Transparencia.module.css'

const documentos = [
  {
    id: 'actas',
    icon: FileText,
    title: 'Actas de Junta Directiva',
    description: 'Consulta las actas de las sesiones ordinarias y extraordinarias.',
    href: '/transparencia/actas',
    color: 'blue' as const,
  },
  {
    id: 'estados-financieros',
    icon: DollarSign,
    title: 'Estados Financieros',
    description: 'Informes financieros mensuales y anuales auditados.',
    href: '/transparencia/estados-financieros',
    color: 'green' as const,
  },
  {
    id: 'presupuestos',
    icon: Calculator,
    title: 'Presupuestos',
    description: 'Presupuestos ordinarios y extraordinarios aprobados.',
    href: '/transparencia/presupuestos',
    color: 'deepBlue' as const,
  },
  {
    id: 'tarifas',
    icon: Receipt,
    title: 'Tarifas Vigentes',
    description: 'Estructura tarifaria actualizada y aprobada por ARESEP.',
    href: '/transparencia/tarifas',
    color: 'blue' as const,
  },
  {
    id: 'informes',
    icon: BarChart3,
    title: 'Informes Anuales',
    description: 'Reportes de gestión y rendición de cuentas anuales.',
    href: '/transparencia/informes',
    color: 'green' as const,
  },
  {
    id: 'reglamento',
    icon: BookOpen,
    title: 'Reglamento Interno',
    description: 'Normativa interna y estatutos de la ASADA.',
    href: '/transparencia/reglamento',
    color: 'deepBlue' as const,
  },
]

const iconColorClasses = {
  blue: styles.iconBlue,
  green: styles.iconGreen,
  deepBlue: styles.iconDeepBlue,
}

export function Transparencia() {
  return (
    <section id="transparencia" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Transparencia</h2>
          <p className={styles.sectionSubtitle}>
            Acceso público a información institucional y rendición de cuentas
          </p>
        </header>

        <div className={styles.grid}>
          {documentos.map((doc) => {
            const IconComponent = doc.icon
            return (
              <Link key={doc.id} href={doc.href} className={styles.card}>
                <div className={`${styles.iconWrapper} ${iconColorClasses[doc.color]}`}>
                  <IconComponent size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{doc.title}</h3>
                  <p className={styles.cardDescription}>{doc.description}</p>
                </div>
                <ArrowRight size={20} className={styles.cardArrow} />
              </Link>
            )
          })}
        </div>

        <div className={styles.trustBanner}>
          <div className={styles.trustIcon}>
            <ShieldCheck size={28} />
          </div>
          <div className={styles.trustContent}>
            <h3>Compromiso con la Transparencia</h3>
            <p>
              Toda nuestra información financiera y de gestión está disponible para consulta pública, 
              cumpliendo con las normativas de acceso a la información y rendición de cuentas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
