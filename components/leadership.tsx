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
          {/* Placeholder team photo — replace src with the real 16:9 image. */}
          <div className="mt-12 overflow-hidden rounded-[24px] bg-white/5">
            <img
              src="/placeholder.svg?height=900&width=1600"
              alt="Amirah Financial leadership team"
              width={1600}
              height={900}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
