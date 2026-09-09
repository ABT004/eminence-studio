'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const COLORS = [
  'var(--brand-purple)',
  'var(--brand-blue)',
  'var(--brand-red)',
  'var(--brand-yellow)',
  'var(--brand-teal)',
  'var(--brand-pink)',
]

type Bit = {
  id: number
  x: number
  y: number
  color: string
  shape: 'dot' | 'dash'
  rotate: number
  dx: number
  dy: number
}

export function ConfettiCursor() {
  const [bits, setBits] = useState<Bit[]>([])
  const idRef = useRef(0)
  const lastRef = useRef(0)

  useEffect(() => {
    // Respect reduced motion + skip touch devices
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const onMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastRef.current < 45) return
      lastRef.current = now

      const id = idRef.current++
      const bit: Bit = {
        id,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[id % COLORS.length],
        shape: id % 2 === 0 ? 'dot' : 'dash',
        rotate: Math.random() * 180 - 90,
        dx: Math.random() * 40 - 20,
        dy: Math.random() * 30 + 20,
      }
      setBits((prev) => [...prev.slice(-18), bit])
      window.setTimeout(() => {
        setBits((prev) => prev.filter((b) => b.id !== id))
      }, 850)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {bits.map((b) => (
          <motion.span
            key={b.id}
            initial={{ opacity: 1, scale: 1, x: b.x, y: b.y }}
            animate={{
              opacity: 0,
              scale: 0.4,
              x: b.x + b.dx,
              y: b.y + b.dy,
              rotate: b.rotate,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="absolute left-0 top-0"
            style={{
              width: b.shape === 'dot' ? 8 : 14,
              height: b.shape === 'dot' ? 8 : 5,
              borderRadius: 999,
              backgroundColor: b.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
