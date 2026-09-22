import {
  Landmark,
  TrendingUp,
  Building2,
  Bitcoin,
  Briefcase,
  UserRound,
  Users,
} from 'lucide-react'
import { Reveal } from './reveal'

const partners = [
  { icon: Landmark, label: 'Banks' },
  { icon: TrendingUp, label: 'Hedge Funds' },
  { icon: Building2, label: 'Brokerage Firms' },
  { icon: Bitcoin, label: 'Crypto Exchange' },
  { icon: Briefcase, label: 'Private Equities' },
  { icon: UserRound, label: 'High Net Worth Individuals' },
  { icon: Users, label: 'Wealth Management Groups' },
]

function Circle({
  icon: Icon,
  label,
}: {
  icon: (typeof partners)[number]['icon']
  label: string
}) {
  return (
    <div className="flex size-28 flex-col items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white p-3 text-center md:size-44 md:gap-3 md:p-6">
      <Icon
        className="size-6 text-neutral-900 md:size-8"
        strokeWidth={1.25}
        aria-hidden="true"
      />
      <span className="text-[10px] font-medium leading-tight text-neutral-700 md:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Partners() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-center text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Our Partners
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16 flex flex-col items-center gap-y-3">
            <div className="flex justify-center">
              {partners.slice(0, 4).map((p, i) => (
                <div key={p.label} className={i > 0 ? '-ml-3 md:-ml-6' : ''}>
                  <Circle icon={p.icon} label={p.label} />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {partners.slice(4).map((p, i) => (
                <div key={p.label} className={i > 0 ? '-ml-3 md:-ml-6' : ''}>
                  <Circle icon={p.icon} label={p.label} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
