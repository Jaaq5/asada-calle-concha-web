import type { Metadata } from 'next'
import { Contacto } from '@/components/Contacto/Contacto'

export const metadata: Metadata = {
  title: 'Contacto | ASADA Calle Concha',
  description: 'Contáctanos: dirección, teléfonos, correo electrónico y horarios de atención. Estamos para servirte.',
}

export default function ContactoPage() {
  return <Contacto />
}
