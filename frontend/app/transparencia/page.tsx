import type { Metadata } from 'next'
import { Transparencia } from '@/components/Transparencia/Transparencia'

export const metadata: Metadata = {
  title: 'Transparencia | ASADA Calle Concha',
  description: 'Accede a nuestras actas de reuniones, estados financieros, presupuestos, tarifas vigentes, informes anuales y reglamento interno. Compromiso con la transparencia.',
}

export default function TransparenciaPage() {
  return <Transparencia />
}
