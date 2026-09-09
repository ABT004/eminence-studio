'use client'

import { motion } from 'framer-motion'

type Piece = {
  top: string
  left: string
  color: string
  shape: 'dot' | 'dash' | 'ring' | 'plus' | 'triangle' | 'squiggle'
  rotate?: number
  delay?: number
  size?: number
}

function shapeStyle(p: Piece): React.CSSProperties {
  const s = p.size ?? 1
  switch (p.shape) {
    case 'dot':
      return { width: 12 * s, height: 12 * s, borderRadius: 999, backgroundColor: p.color }
    case 'dash':
      return { width: 22 * s, height: 7 * s, borderRadius: 999, backgroundColor: p.color }
    case 'ring':
      return {
        width: 26 * s,
        height: 26 * s,
        borderRadius: 999,
        border: `${5 * s}px solid ${p.color}`,
        backgroundColor: 'transparent',
      }
    case 'triangle':
      return {
        width: 0,
        height: 0,
        borderLeft: `${13 * s}px solid transparent`,
        borderRight: `${13 * s}px solid transparent`,
        borderBottom: `${22 * s}px solid ${p.color}`,
      }
    default:
      return {}
  }
}

/** Scatter of the logo's confetti shapes, gently floating. */
export function SparkleBits({ pieces }: { pieces: Piece[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => {
        const s = p.size ?? 1
        const float = {
          animate: { y: [0, -14, 0], opacity: [0.7, 1, 0.7], rotate: [p.rotate ?? 0, (p.rotate ?? 0) + 8, p.rotate ?? 0] },
          transition: {
            duration: 4 + (i % 4),
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut' as const,
            delay: p.delay ?? i * 0.3,
          },
        }

        if (p.shape === 'plus') {
          return (
            <motion.span
              key={i}
              className="absolute block"
              style={{ top: p.top, left: p.left, width: 24 * s, height: 24 * s, color: p.color, rotate: `${p.rotate ?? 0}deg` }}
              animate={float.animate}
              transition={float.transition}
            >
              <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full" style={{ width: 6 * s, height: '100%', backgroundColor: p.color }} />
              <span className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full" style={{ height: 6 * s, width: '100%', backgroundColor: p.color }} />
            </motion.span>
          )
        }

        if (p.shape === 'squiggle') {
          return (
            <motion.svg
              key={i}
              className="absolute block"
              style={{ top: p.top, left: p.left, rotate: `${p.rotate ?? 0}deg` }}
              width={46 * s}
              height={16 * s}
              viewBox="0 0 46 16"
              fill="none"
              animate={float.animate}
              transition={float.transition}
            >
              <path d="M2 8c4-8 8 8 12 0s8-8 12 0 8 8 12 0" stroke={p.color} strokeWidth="4" strokeLinecap="round" />
            </motion.svg>
          )
        }

        return (
          <motion.span
            key={i}
            className="absolute block"
            style={{ top: p.top, left: p.left, rotate: `${p.rotate ?? 0}deg`, ...shapeStyle(p) }}
            animate={float.animate}
            transition={float.transition}
          />
        )
      })}
    </div>
  )
}
