'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = ['Products', 'Resources', 'Ecosystem', 'About']

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 w-full">
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
            Amirah
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
            href="#"
            className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 md:inline-flex"
          >
            Launch App
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
            href="#"
            className="mt-2 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black"
          >
            Launch App
          </a>
        </nav>
      </div>
    </header>
  )
}
