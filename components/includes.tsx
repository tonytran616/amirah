import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const items = [
  'Bi-weekly new indicator releases',
  'Real-time signal customisation for your portfolio',
  'Ongoing model optimization as markets evolve',
  '24/7 technical support and monitoring',
  'First-mover advantage in your metropolitan area',
  'Competitive edge backed by proprietary technology',
  "Direct access to Amirah's research team",
  'Custom indicator development for your specific strategies',
]

export function Includes() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            What working with Amirah includes
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border-t border-white/10 pt-5"
              >
                <Check
                  className="mt-0.5 size-5 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-white/75 md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
