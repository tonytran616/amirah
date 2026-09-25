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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Amirah&apos;s Unique Advantage
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-neutral-500">
              Institutional-grade signals built for precision, adaptability, and
              performance across global markets.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 rounded-[24px] bg-[#f2f2f2] p-2">
            <div className="grid gap-2 md:grid-cols-3">
              <article className="flex h-full flex-col rounded-2xl bg-white p-8 md:col-span-2 md:p-10">
                <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                  &gt;90% Accurate
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-neutral-400">
                  Market Entry and Exit Signals
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {accuracyBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                        <Check
                          className="size-3"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-base leading-relaxed text-neutral-600">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {cards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-full flex-col rounded-2xl bg-white p-8"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-500">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
