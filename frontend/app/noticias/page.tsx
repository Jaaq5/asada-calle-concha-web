import type { Metadata } from 'next'
import { Notices } from '@/components/Notices/Notices'

export const metadata: Metadata = {
  title: 'Noticias y Avisos | ASADA Calle Concha',
  description: 'Mantente informado sobre los comunicados, avisos de suspensión, noticias y eventos de ASADA Calle Concha.',
}

export default function NoticiasPage() {
  return <Notices />
}
