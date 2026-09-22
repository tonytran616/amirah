const partners = [
  'Meridian',
  'Northwind Capital',
  'Solstice',
  'Aster',
  'Vantage',
  'Halcyon',
  'Continuum',
]

export function PartnersStrip() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 md:justify-between md:gap-x-6">
        {partners.map((name) => (
          <span
            key={name}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white/90 md:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
