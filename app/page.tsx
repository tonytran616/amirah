import { Hero } from '@/components/hero'
import { Positioning } from '@/components/positioning'
import { Leadership } from '@/components/leadership'
import { Advantage } from '@/components/advantage'
import { Performance } from '@/components/performance'
import { SpecTable } from '@/components/spec-table'
import { Foundation } from '@/components/foundation'
import { Includes } from '@/components/includes'
import { OnboardingTimeline } from '@/components/onboarding-timeline'
import { Partners } from '@/components/partners'
import { Message } from '@/components/message'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Positioning />
      <Leadership />
      <Advantage />
      <Performance />
      <SpecTable />
      <Foundation />
      <Includes />
      <OnboardingTimeline />
      <Partners />
      <Message />
      <Contact />
      <SiteFooter />
    </main>
  )
}
