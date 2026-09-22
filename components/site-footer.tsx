const groups = [
  {
    heading: 'Product',
    links: ['Signals', 'Coverage', 'Integration', 'Onboarding'],
  },
  {
    heading: 'Company',
    links: ['About', 'Technology', 'Insights', 'Careers'],
  },
  {
    heading: 'Legal',
    links: ['Terms', 'Privacy', 'Disclosures'],
  },
  {
    heading: 'Social',
    links: ['LinkedIn', 'X', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-medium uppercase tracking-wide text-white/45">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
        <p className="select-none whitespace-nowrap px-2 text-center font-semibold leading-[0.8] tracking-tight text-white/[0.06] [font-size:23vw]">
          AMIRAH
        </p>
      </div>
    </footer>
  )
}
