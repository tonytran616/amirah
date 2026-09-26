import { Reveal } from './reveal'
import content from '@/data/message.json'

function DottedGlobe() {
  const size = 400
  const cx = size / 2
  const cy = size / 2
  const radius = 188
  const step = 11
  const dots: { x: number; y: number; r: number; o: number }[] = []

  for (let y = step; y < size; y += step) {
    for (let x = step; x < size; x += step) {
      const dx = (x - cx) / radius
      const dy = (y - cy) / radius
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > 1) continue
      const shade = 0.5 + 0.5 * (dx * 0.7 + dy * 0.55)
      const o = Math.max(0.1, Math.min(0.92, (0.16 + 0.78 * shade) * (1 - 0.18 * dist)))
      const r = 1.7 + 0.9 * shade
      dots.push({ x, y, r, o })
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="h-full w-full"
      role="img"
      aria-label="A dotted globe representing global markets"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#171717" fillOpacity={d.o} />
      ))}
    </svg>
  )
}

export function Message() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-sm text-neutral-400">{content.eyebrow}</p>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-3 md:gap-4">
          <Reveal delay={60}>
            <h2 className="text-balance text-center text-4xl font-medium leading-[1.05] tracking-tight md:text-left md:text-6xl">
              We Believe In
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto aspect-square w-full max-w-xs md:max-w-sm">
              <DottedGlobe />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <h2 className="text-balance text-center text-4xl font-medium leading-[1.05] tracking-tight md:text-right md:text-6xl">
              Giving Back
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal delay={80}>
            <p className="max-w-md text-pretty text-base leading-relaxed text-neutral-600 md:text-lg">
              {content.body}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex items-center gap-2" aria-hidden="true">
              {['01', '02', '03'].map((n, i) => (
                <span
                  key={n}
                  className={`flex size-10 items-center justify-center rounded-full border text-xs font-medium ${
                    i === 0
                      ? 'border-neutral-900 text-neutral-900'
                      : 'border-neutral-300 text-neutral-400'
                  }`}
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
