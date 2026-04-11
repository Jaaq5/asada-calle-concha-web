import { Hero } from '@/components/Hero/Hero'
import { QrCode } from '@/components/QrCode/QrCode'
import { QuickAccess } from '@/components/QuickAccess/QuickAccess'
import { Notices } from '@/components/Notices/Notices'
import { getNoticias } from '@/services/noticias.service'

export default async function HomePage() {
  const noticiasData = await getNoticias()

  return (
    <>
      <QrCode />
      <Hero />
      <QuickAccess />
      <Notices data={noticiasData} variant="home" />
    </>
  )
}
