import { Hero } from '@/components/Hero/Hero'
import { QuickAccess } from '@/components/QuickAccess/QuickAccess'
import { Notices } from '@/components/Notices/Notices'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Notices />
    </>
  )
}
