const logos = [
  { name: 'NVIDIA', src: '/logos/nvidia.svg' },
  { name: 'Google', src: '/logos/google.svg' },
  { name: 'Apple', src: '/logos/apple.svg' },
  { name: 'Microsoft', src: '/logos/microsoft.svg' },
  { name: 'Bitcoin', src: '/logos/bitcoin.svg' },
  { name: 'Gold', src: null },
  { name: 'Silver', src: null },
] as const

function LogoItem({ name, src }: { name: string; src: string | null }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-8 md:px-12">
      {src ? (
        <>
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="h-6 w-6 object-contain opacity-90 md:h-7 md:w-7"
          />
          <span className="text-sm font-medium tracking-wide text-white/90 md:text-[15px]">
            {name}
          </span>
        </>
      ) : (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-[15px]">
          {name}
        </span>
      )}
    </div>
  )
}

export function LogoMarquee() {
  const track = [...logos, ...logos]

  return (
    <div
      className="relative w-full overflow-hidden py-6"
      aria-label="Markets covered"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black/50 to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black/50 to-transparent md:w-28" />

      <div className="flex w-max animate-marquee items-center">
        {track.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
        ))}
      </div>
    </div>
  )
}
