import { Hero } from '@/components/hero'
import { Positioning } from '@/components/positioning'
import { Problem } from '@/components/problem'
import { Advantage } from '@/components/advantage'
import { Performance } from '@/components/performance'
import { SpecTable } from '@/components/spec-table'
import { Includes } from '@/components/includes'
import { OnboardingTimeline } from '@/components/onboarding-timeline'
import { ClosingCta } from '@/components/closing-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Positioning />
      <Problem />
      <Advantage />
      <Performance />
      <SpecTable />
      <Includes />
      <OnboardingTimeline />
      <ClosingCta />
      <SiteFooter />
    </main>
  )
}
