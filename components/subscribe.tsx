'use client'

import { useState, type FormEvent } from 'react'

type Asset = { name: string; src?: string; label?: string; tone?: string }

const assets: Asset[] = [
  { name: 'NVIDIA', src: '/logos/nvidia.svg' },
  { name: 'Apple', src: '/logos/apple.svg' },
  { name: 'Microsoft', src: '/logos/microsoft.svg' },
  { name: 'Google', src: '/logos/google.svg' },
  { name: 'Bitcoin', src: '/logos/bitcoin.svg' },
  { name: 'Gold', label: 'Au', tone: 'bg-amber-300 text-amber-900' },
  { name: 'Silver', label: 'Ag', tone: 'bg-neutral-200 text-neutral-700' },
]

function Badge({ asset, size = 'md' }: { asset: Asset; size?: 'sm' | 'md' }) {
  const box = size === 'sm' ? 'size-10 md:size-11' : 'size-12 md:size-14'
  const img = size === 'sm' ? 'size-5 md:size-6' : 'size-6 md:size-7'
  return (
    <span
      className={`flex ${box} items-center justify-center rounded-full shadow-lg ring-1 ring-black/5 ${
        asset.tone ?? 'bg-white'
      }`}
    >
      {asset.src ? (
        <img src={asset.src} alt="" aria-hidden="true" className={`${img} object-contain`} />
      ) : (
        <span className="text-xs font-bold md:text-sm">{asset.label}</span>
      )}
    </span>
  )
}

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  const cluster = [...assets, ...assets, ...assets]

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-44 pt-24 text-center md:pb-56 md:pt-32">
        <div className="mb-8 flex items-center justify-center -space-x-3">
          {assets.slice(0, 4).map((a) => (
            <Badge key={a.name} asset={a} size="sm" />
          ))}
        </div>

        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Leverage Is a Mindset.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-xl leading-snug text-white/50 md:text-3xl">
          Subscribe for the Latest Updates, Insights, and News.
        </p>

        {done ? (
          <p className="mt-10 text-base text-white/70">
            Thanks — you&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-2xl bg-white/5 p-2 ring-1 ring-white/10"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex flex-wrap items-end justify-center gap-2 px-4 pb-5 md:gap-3"
      >
        {cluster.map((a, i) => (
          <span
            key={`${a.name}-${i}`}
            className={i % 3 === 1 ? '-translate-y-3' : i % 3 === 2 ? '-translate-y-1.5' : ''}
          >
            <Badge asset={a} />
          </span>
        ))}
      </div>
    </section>
  )
}
