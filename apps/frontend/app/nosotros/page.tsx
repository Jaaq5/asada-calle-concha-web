import type { Metadata } from 'next'
import { Nosotros } from '@/components/Nosotros/Nosotros'
import { getNosotros } from '@/services/nosotros.service'

export const metadata: Metadata = {
  title: 'Nosotros | ASADA Calle Concha',
  description: 'Conoce nuestra historia, misión, visión, valores y junta directiva. ASADA Calle Concha, comprometidos con el servicio de agua potable desde 1985.',
}

export default async function NosotrosPage() {
  const data = await getNosotros()

  return <Nosotros data={data} />
}

