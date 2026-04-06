import { Hero } from '@/components/Hero/Hero'
import { QuickAccess } from '@/components/QuickAccess/QuickAccess'
import { Notices } from '@/components/Notices/Notices'
import { getNoticias } from '@/services/noticias.service'

export default async function HomePage() {
  const noticiasData = await getNoticias()

  return (
    <>
      <Hero />
      <QuickAccess />
      <Notices data={noticiasData} variant="home" />
    </>
  )
}
