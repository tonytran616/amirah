export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-8">
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amirah Financial. All rights reserved.</p>
          <nav className="flex gap-6" aria-label="Legal">
            <a href="#" className="transition-colors hover:text-white/80">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Disclosures
            </a>
          </nav>
        </div>
      </div>

      <div aria-hidden="true" className="overflow-hidden">
        <p className="select-none whitespace-nowrap px-2 text-center font-semibold leading-[0.8] tracking-tight text-white [font-size:23vw]">
          AMIRAH
        </p>
      </div>
    </footer>
  )
}
