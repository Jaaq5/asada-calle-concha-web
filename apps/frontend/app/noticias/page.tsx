import type { Metadata } from 'next'
import { Notices } from '@/components/Notices/Notices'
import { getNoticias } from '@/services/noticias.service'

export const metadata: Metadata = {
  title: 'Noticias y Avisos | ASADA Calle Concha',
  description: 'Mantente informado sobre los comunicados, avisos de suspensión, noticias y eventos de ASADA Calle Concha.',
}

export default async function NoticiasPage() {
  const data = await getNoticias()
  return <Notices data={data} variant="full" />
}
