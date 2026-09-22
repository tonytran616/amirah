import { Reveal } from './reveal'

// Mock OHLC price-action data — clearly-marked placeholder, not real market data.
const CANDLES = [
  { o: 100, h: 103, l: 99, c: 102 },
  { o: 102, h: 104, l: 100, c: 101 },
  { o: 101, h: 106, l: 100, c: 105 },
  { o: 105, h: 109, l: 104, c: 108 },
  { o: 108, h: 110, l: 106, c: 107 },
  { o: 107, h: 112, l: 106, c: 111 },
  { o: 111, h: 116, l: 110, c: 115 },
  { o: 115, h: 117, l: 112, c: 113 },
  { o: 113, h: 119, l: 112, c: 118 },
  { o: 118, h: 123, l: 117, c: 122 },
  { o: 122, h: 124, l: 119, c: 120 },
  { o: 120, h: 122, l: 117, c: 119 },
  { o: 119, h: 125, l: 118, c: 124 },
  { o: 124, h: 130, l: 123, c: 128 },
  { o: 128, h: 129, l: 125, c: 126 },
  { o: 126, h: 133, l: 125, c: 131 },
  { o: 131, h: 137, l: 130, c: 136 },
  { o: 136, h: 138, l: 133, c: 134 },
  { o: 134, h: 141, l: 133, c: 139 },
  { o: 139, h: 145, l: 138, c: 144 },
  { o: 144, h: 146, l: 141, c: 142 },
  { o: 142, h: 150, l: 141, c: 148 },
  { o: 148, h: 154, l: 147, c: 153 },
  { o: 153, h: 155, l: 150, c: 151 },
  { o: 151, h: 159, l: 150, c: 157 },
  { o: 157, h: 165, l: 156, c: 163 },
  { o: 163, h: 166, l: 160, c: 161 },
  { o: 161, h: 170, l: 160, c: 168 },
]

// Entry (white) / exit (red) signal markers along the price path.
const SIGNALS: { i: number; type: 'entry' | 'exit' }[] = [
  { i: 2, type: 'entry' },
  { i: 9, type: 'exit' },
  { i: 12, type: 'entry' },
  { i: 19, type: 'exit' },
  { i: 24, type: 'entry' },
  { i: 27, type: 'exit' },
]

const paragraphs = [
  'Amirah Financial builds advanced trading tools for global financial markets, with a commitment to precision, adaptability, and performance',
  'Our proprietary software delivers accurate entry & exit signals across all major asset classes—including stocks, cryptocurrencies, futures, commodities, forex, and other tradable instruments',
  'Designed for institutional-grade execution, our platform integrates real-time market data and dynamic analytics to support confident trades in fast-moving environments',
]

const W = 640
const H = 384
const PAD = { top: 46, right: 58, bottom: 26, left: 16 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom
const MIN_P = 94
const MAX_P = 176
const slot = plotW / CANDLES.length
const bodyW = slot * 0.52

const cx = (i: number) => PAD.left + slot * (i + 0.5)
const py = (p: number) =>
  PAD.top + (1 - (p - MIN_P) / (MAX_P - MIN_P)) * plotH

const priceLevels = [100, 120, 140, 160]
const closeLine = CANDLES.map((d, i) => `${cx(i)},${py(d.c)}`).join(' ')
const lastClose = CANDLES[CANDLES.length - 1].c

function TradingPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Illustrative trading terminal showing an upward price trend with entry and exit signal markers"
      >
        {/* toolbar strip */}
        <rect x="0" y="0" width={W} height="34" rx="8" fill="#131313" />
        <circle cx="18" cy="17" r="3.5" fill="#ef4444" />
        <text x="30" y="21" fill="#e5e5e5" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="600">
          AMRH / USD
        </text>
        <text x="126" y="21" fill="#22c55e" fontSize="11" fontFamily="ui-monospace, monospace">
          +6.14%
        </text>
        {['1m', '5m', '15m', '1H', '1D'].map((t, i) => (
          <text
            key={t}
            x={W - 190 + i * 38}
            y="21"
            fill={t === '1H' ? '#e5e5e5' : '#6b7280'}
            fontSize="11"
            fontFamily="ui-monospace, monospace"
          >
            {t}
          </text>
        ))}

        {/* horizontal grid + price scale */}
        {priceLevels.map((p) => (
          <g key={p}>
            <line
              x1={PAD.left}
              y1={py(p)}
              x2={W - PAD.right}
              y2={py(p)}
              stroke="#ffffff"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
            <text
              x={W - PAD.right + 8}
              y={py(p) + 4}
              fill="#6b7280"
              fontSize="11"
              fontFamily="ui-monospace, monospace"
            >
              {p.toFixed(1)}
            </text>
          </g>
        ))}

        {/* vertical grid */}
        {CANDLES.map((_, i) =>
          i % 4 === 0 ? (
            <line
              key={`v-${i}`}
              x1={cx(i)}
              y1={PAD.top}
              x2={cx(i)}
              y2={H - PAD.bottom}
              stroke="#ffffff"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          ) : null,
        )}

        {/* faint close line to emphasize the uptrend */}
        <polyline
          points={closeLine}
          fill="none"
          stroke="#e5e5e5"
          strokeOpacity="0.35"
          strokeWidth="1.25"
        />

        {/* candles */}
        {CANDLES.map((d, i) => {
          const up = d.c >= d.o
          const color = up ? '#d4d4d4' : '#6b7280'
          const bodyTop = py(Math.max(d.o, d.c))
          const bodyBottom = py(Math.min(d.o, d.c))
          return (
            <g key={i}>
              <line
                x1={cx(i)}
                y1={py(d.h)}
                x2={cx(i)}
                y2={py(d.l)}
                stroke={color}
                strokeWidth="1"
              />
              <rect
                x={cx(i) - bodyW / 2}
                y={bodyTop}
                width={bodyW}
                height={Math.max(1, bodyBottom - bodyTop)}
                fill={color}
              />
            </g>
          )
        })}

        {/* last price tag */}
        <line
          x1={PAD.left}
          y1={py(lastClose)}
          x2={W - PAD.right}
          y2={py(lastClose)}
          stroke="#e5e5e5"
          strokeOpacity="0.4"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
        <rect
          x={W - PAD.right}
          y={py(lastClose) - 9}
          width="50"
          height="18"
          rx="3"
          fill="#e5e5e5"
        />
        <text
          x={W - PAD.right + 25}
          y={py(lastClose) + 4}
          fill="#0a0a0a"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
          textAnchor="middle"
        >
          {lastClose.toFixed(1)}
        </text>

        {/* entry / exit signal markers */}
        {SIGNALS.map(({ i, type }) => {
          const entry = type === 'entry'
          const anchorY = entry ? py(CANDLES[i].l) + 14 : py(CANDLES[i].h) - 14
          const fill = entry ? '#ffffff' : '#ef4444'
          const tri = entry
            ? `${cx(i)},${anchorY - 6} ${cx(i) - 5},${anchorY + 3} ${cx(i) + 5},${anchorY + 3}`
            : `${cx(i)},${anchorY + 6} ${cx(i) - 5},${anchorY - 3} ${cx(i) + 5},${anchorY - 3}`
          return (
            <g key={`sig-${i}`}>
              <polygon points={tri} fill={fill} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export function Performance() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Performance
          </p>
          <div className="mt-6 space-y-5">
            {paragraphs.map((p) => (
              <p key={p} className="text-pretty text-lg leading-relaxed text-neutral-600">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <TradingPanel />
        </Reveal>
      </div>
    </section>
  )
}
