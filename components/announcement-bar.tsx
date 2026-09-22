import { ChevronRight } from 'lucide-react'

export function AnnouncementBar() {
  return (
    <div className="relative z-30 w-full bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-sm text-white/90">
        <span className="font-medium">
          Amirah Financial launches 24/7 access to tokenized predictive markets
        </span>
        <a
          href="#"
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-white transition-opacity hover:opacity-80"
        >
          Learn More
          <ChevronRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
