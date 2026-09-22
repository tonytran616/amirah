'use client'

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { Reveal } from './reveal'

// Mock performance data — swap with real trailing-12-month accuracy figures.
const PERFORMANCE_DATA = [
  { month: 'Oct', accuracy: 89.4 },
  { month: 'Nov', accuracy: 90.1 },
  { month: 'Dec', accuracy: 90.8 },
  { month: 'Jan', accuracy: 91.3 },
  { month: 'Feb', accuracy: 91.9 },
  { month: 'Mar', accuracy: 92.2 },
  { month: 'Apr', accuracy: 92.8 },
  { month: 'May', accuracy: 93.1 },
  { month: 'Jun', accuracy: 93.5 },
  { month: 'Jul', accuracy: 93.8 },
  { month: 'Aug', accuracy: 94.0 },
  { month: 'Sep', accuracy: 94.2 },
]

export function Performance() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <div className="h-[320px] w-full md:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={PERFORMANCE_DATA}
                margin={{ top: 8, right: 8, bottom: 0, left: -16 }}
              >
                <CartesianGrid
                  stroke="#e5e5e5"
                  strokeWidth={1}
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={{ stroke: '#e5e5e5' }}
                  tick={{
                    fill: '#737373',
                    fontSize: 12,
                    fontFamily: 'ui-monospace, monospace',
                  }}
                  dy={8}
                />
                <YAxis
                  domain={[88, 96]}
                  ticks={[88, 90, 92, 94, 96]}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: '#737373',
                    fontSize: 12,
                    fontFamily: 'ui-monospace, monospace',
                  }}
                  tickFormatter={(v) => `${v}%`}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#059669"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: '#059669' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono text-6xl font-medium tracking-tight tabular-nums md:text-7xl">
            94.2%
          </p>
          <p className="mt-4 max-w-sm text-lg leading-relaxed text-neutral-600">
            Blended signal accuracy, trailing 12 months.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
