import { Reveal } from './reveal'

export function ClosingCta() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            See it run on your own book.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            Thirty days, free, with dedicated coaching — on the assets you
            already trade.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Book a demo
            </a>
            <a
              href="mailto:hello@amirahfinancial.com"
              className="text-sm text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              or email us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
