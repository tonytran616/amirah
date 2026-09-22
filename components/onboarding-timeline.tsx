import { Reveal } from './reveal'

const steps = [
  { day: 'Day 0', title: 'First call', note: 'We map your assets, risk and goals.' },
  { day: 'Day 5', title: 'Access granted', note: 'Signals live on your TradingView.' },
  { day: 'Day 15', title: 'Coaching period', note: 'Dedicated guidance as you deploy.' },
  { day: 'Day 30', title: 'Review and decide', note: 'Assess the results together.' },
]

export function OnboardingTimeline() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Onboarding
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step) => (
              <li key={step.day} className="relative md:pt-8">
                <span
                  className="absolute left-0 top-2 hidden h-px w-full bg-neutral-200 md:block"
                  aria-hidden="true"
                />
                <span
                  className="absolute left-0 top-2 hidden size-2 -translate-y-1/2 rounded-full bg-emerald-600 md:block"
                  aria-hidden="true"
                />
                <p className="font-mono text-sm tracking-wide text-emerald-600">
                  {step.day}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
