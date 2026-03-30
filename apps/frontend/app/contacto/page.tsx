import type { Metadata } from 'next'
import { Contacto } from '@/components/Contacto/Contacto'
import { getContacto } from '@/services/contacto.service'

export const metadata: Metadata = {
  title: 'Contacto | ASADA Calle Concha',
  description: 'Contáctanos: dirección, teléfonos, correo electrónico y horarios de atención. Estamos para servirte.',
}

export default async function ContactoPage() {
  const data = await getContacto()

  return <Contacto data={data} />
}
