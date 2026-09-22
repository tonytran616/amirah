import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { SiteHeader } from './site-header'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <Image
        src="/hero-skyline.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-30">
        <SiteHeader />
      </div>

      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 pb-24 text-center">
        <h1 className="max-w-5xl text-balance text-4xl font-medium leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl">
          Welcome to the future of finance and predictive markets
        </h1>

        <a
          href="#explore"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
        >
          Scroll to explore
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
