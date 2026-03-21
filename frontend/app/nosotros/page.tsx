import type { Metadata } from 'next'
import { Nosotros } from '@/components/Nosotros/Nosotros'

export const metadata: Metadata = {
  title: 'Nosotros | ASADA Calle Concha',
  description: 'Conoce nuestra historia, misión, visión, valores y junta directiva. ASADA Calle Concha, comprometidos con el servicio de agua potable desde 1985.',
}

export default function NosotrosPage() {
  return <Nosotros />
}
