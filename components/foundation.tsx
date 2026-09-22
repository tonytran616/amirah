import { Activity, LineChart } from 'lucide-react'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Activity,
    title: 'Real-time data & alerts',
    body: 'Live data feeds from major exchanges and users can set custom alerts based on our indicators',
  },
  {
    icon: LineChart,
    title: 'Advanced charting tools',
    body: 'Supports multiple timeframes (from seconds to months) and allows multiple charts for comparison',
  },
]

export function Foundation() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Amirah is building the foundation
            <span className="block text-neutral-400">
              for the future of finance.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <pillar.icon
                className="size-8 text-neutral-900"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
