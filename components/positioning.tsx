import { Reveal } from './reveal'

export function Positioning() {
  return (
    <section id="explore" className="bg-black text-white">
      <div className="mx-auto max-w-[900px] px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Who we are
          </p>
          <p className="mt-8 text-pretty text-2xl font-medium leading-snug tracking-tight md:text-[32px] md:leading-[1.3]">
            At Amirah, we combine Human Intelligence (HI) with advanced
            technology to build institutional-grade fintech software for the
            global financial markets.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[900px] border-t border-white/10 px-6 py-28 text-center md:py-36">
        <Reveal>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            A New Standard
            <span className="block text-white/55">
              for Finance and Predictive Markets
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/60">
            We continuously invent software for the financial markets —
            transforming complexity into intelligent, institutional-grade
            solutions.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-white/90">
            Always innovating. Always evolving. Always one step ahead.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
