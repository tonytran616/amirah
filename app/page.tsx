import { Hero } from '@/components/hero'

export default function Page() {
  return (
    <main className="bg-black text-white">
      <Hero />

      <section
        id="explore"
        className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
          Amirah Financial
        </p>
        <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Institutional-grade assets and predictive markets, brought on-chain.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
          We&apos;re building the infrastructure for an open economy — where
          anyone can access tokenized markets, forecast outcomes, and settle
          instantly, around the clock.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Tokenized Markets',
              body: 'Access real-world assets and yield products, fully on-chain and available 24/7.',
            },
            {
              title: 'Predictive Markets',
              body: 'Trade on the outcomes that move the world with transparent, on-chain settlement.',
            },
            {
              title: 'Instant Settlement',
              body: 'Mint and redeem in seconds with institutional-grade custody and compliance.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
