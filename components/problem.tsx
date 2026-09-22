import { Reveal } from './reveal'

export function Problem() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Most desks are flying blind
          </h2>
        </Reveal>
        <Reveal delay={80} className="flex items-center">
          <p className="text-pretty text-lg leading-relaxed text-neutral-600 md:text-xl">
            Sophisticated investors manage serious portfolios, yet most rely on
            fragmented data, delayed signals, or subjective analysis — leading
            to unnecessary exposure to risk.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
