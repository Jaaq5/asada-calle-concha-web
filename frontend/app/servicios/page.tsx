import type { Metadata } from 'next'
import { Servicios } from '@/components/Servicios/Servicios'

export const metadata: Metadata = {
  title: 'Servicios | ASADA Calle Concha',
  description: 'Descubre todos los servicios que ofrecemos: suministro de agua potable, nuevas conexiones, reconexiones, cambio de medidor, reporte de averías y certificaciones.',
}

export default function ServiciosPage() {
  return <Servicios />
}
