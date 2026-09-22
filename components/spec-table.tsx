import { Reveal } from './reveal'

const rows = [
  { label: 'Coverage', value: 'Crypto, equities, futures' },
  { label: 'Signal cadence', value: 'Intraday and daily' },
  { label: 'Latency', value: 'Real-time' },
  { label: 'Indicators', value: '30+, expanding' },
  { label: 'Delivery', value: 'TradingView, webhook, API' },
  { label: 'Onboarding', value: '30 days free, with dedicated coaching' },
  { label: 'Support', value: '24/7 technical support and monitoring' },
  {
    label: 'Model updates',
    value: 'Bi-weekly indicator releases, weekly retraining',
  },
]

export function SpecTable() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Amirah In Detail
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-12 border-t border-neutral-200">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 border-b border-neutral-200 py-5 sm:grid-cols-3 sm:gap-6"
              >
                <dt className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                  {row.label}
                </dt>
                <dd className="text-base text-neutral-900 sm:col-span-2">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
