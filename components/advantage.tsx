import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const accuracyBullets = [
  'Intraday >90% accuracy',
  'Daily >95% accuracy',
  'Model improves weekly',
  '30+ customisable indicators and expanding',
]

const cards = [
  {
    title: 'Proven multi-asset coverage',
    body: 'Live results across multiple assets (crypto, equities, futures etc) and attracting interest from leading crypto exchanges and hedge funds.',
  },
  {
    title: 'Frictionless Integration',
    body: 'Ready to deploy free for 30 days with dedicated coaching. No custom infrastructure. Works on TradingView today.',
  },
  {
    title: 'Adaptive to Your Strategy',
    body: 'Customized signals for your AUM, risk tolerance, investment style, and ROI targets.',
  },
  {
    title: 'Resilience in high volatility',
    body: 'In the face of black swan events and evolving market conditions, our software maintains accuracy by dynamically recalibrating in real time.',
  },
]

export function Advantage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Amirah&apos;s Unique Advantage
          </h2>
          <div className="mt-8 h-px w-full bg-neutral-200" />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <article className="flex h-full flex-col border border-neutral-200 p-8 md:p-10">
              <h3 className="text-2xl font-medium tracking-tight text-emerald-600 md:text-3xl">
                &gt;90% Accurate
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
                Market Entry and Exit Signals
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {accuracyBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-neutral-600">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 60}>
              <article className="flex h-full flex-col border border-neutral-200 p-8">
                <h3 className="text-xl font-medium tracking-tight text-emerald-600">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
