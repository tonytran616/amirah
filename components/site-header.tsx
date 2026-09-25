'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = ['']

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 w-full">
      <a
        href="#explore"
        className="group relative flex w-full items-center justify-center bg-white/10 px-5 py-2.5 text-center text-[13px] leading-snug text-white/90 backdrop-blur-md transition-colors hover:bg-white/[0.14] hover:text-white sm:px-8 sm:text-sm"
      >
        <span className="max-w-[min(100%,42rem)] text-balance">
          Trade 24/7 with Amirah Financial fintech software.
        </span>
        <span className="absolute right-5 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 text-sm font-medium text-white/90 transition-colors group-hover:text-white md:right-8 md:inline-flex">
          Learn more
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </span>
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Amirah Financial home">
          <Image
            src="/logo.svg"
            alt="Amirah Financial"
            width={34}
            height={34}
            className="size-8 brightness-0 invert md:size-9"
            priority
          />
          <span className="text-xl font-semibold tracking-tight text-white">
            Amirah Financial
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 md:inline-flex"
          >
            Book a demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-white md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'mx-4 overflow-hidden rounded-2xl bg-black/80 backdrop-blur-md transition-all md:hidden',
          open ? 'mb-3 max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  )
}
