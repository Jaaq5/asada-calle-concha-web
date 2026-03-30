import type { Metadata } from 'next'
import { TramitesOnline } from '@/components/TramitesOnline/TramitesOnline'

export const metadata: Metadata = {
  title: 'Trámites en Línea | ASADA Calle Concha',
  description: 'Realiza tus trámites en línea: consulta tu factura, solicita nuevos servicios, reporta averías y actualiza tus datos desde la comodidad de tu hogar.',
}

export default function TramitesPage() {
  return <TramitesOnline />
}
