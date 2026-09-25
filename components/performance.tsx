import { Reveal } from './reveal'

const paragraphs = [
  'Amirah Financial builds advanced trading tools for global financial markets, with a commitment to precision, adaptability, and performance',
  'Our proprietary software delivers accurate entry & exit signals across all major asset classes—including stocks, cryptocurrencies, futures, commodities, forex, and other tradable instruments',
  'Designed for institutional-grade execution, our platform integrates real-time market data and dynamic analytics to support confident trades in fast-moving environments',
]

export function Performance() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Performance
          </p>
          <div className="mt-6 space-y-5">
            {paragraphs.map((p) => (
              <p key={p} className="text-pretty text-lg leading-relaxed text-neutral-600">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-2xl">
            <img
              src="/trading-chart.jpg"
              alt="Amirah trading terminal showing entry signals on an upward price chart"
              width={1024}
              height={572}
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
