import { Reveal } from './reveal'

export function Leadership() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
            Our Leadership
          </p>
          <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            We Are the Right Team for the Job
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[24px] bg-white/5 md:max-w-4xl">
            <img
              src="/leadership.jpg"
              alt="Amirah Financial leadership team"
              width={602}
              height={1306}
              className="aspect-square w-full object-cover object-[center_70%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
