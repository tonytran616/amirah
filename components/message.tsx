import { Reveal } from './reveal'
import content from '@/data/message.json'

export function Message() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-sm text-neutral-400">{content.eyebrow}</p>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mx-auto max-w-4xl text-balance text-center text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            {content.headline}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="max-w-md text-pretty text-base leading-relaxed text-neutral-600 md:text-lg">
            {content.body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
