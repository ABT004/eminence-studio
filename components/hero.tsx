'use client'

import { motion } from 'framer-motion'
import { SparkleBits } from '@/components/sparkle-bits'

const LINE_1 = ['Make', 'your', 'brand']
const LINE_2 = ['impossible', 'to']
const LINE_3 = ['scroll', 'past.']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}
const word = {
  hidden: { opacity: 0, y: 28, rotate: -4 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 22 },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pt-28 pb-16"
    >
      <SparkleBits
        pieces={[
          { top: '20%', left: '13%', color: 'var(--brand-purple)', shape: 'ring', size: 1.6, rotate: 10 },
          { top: '16%', left: '80%', color: 'var(--brand-red)', shape: 'plus', size: 1.4, rotate: 12 },
          { top: '30%', left: '6%', color: 'var(--brand-yellow)', shape: 'triangle', size: 1.3, rotate: -18 },
          { top: '24%', left: '90%', color: 'var(--brand-teal)', shape: 'squiggle', size: 1.2, rotate: 8 },
          { top: '58%', left: '9%', color: 'var(--brand-blue)', shape: 'squiggle', size: 1.1, rotate: -12 },
          { top: '68%', left: '88%', color: 'var(--brand-yellow)', shape: 'ring', size: 1.3, rotate: -20 },
          { top: '74%', left: '16%', color: 'var(--brand-pink)', shape: 'plus', size: 1.2, rotate: 20 },
          { top: '62%', left: '82%', color: 'var(--brand-purple)', shape: 'triangle', size: 1.1, rotate: 24 },
          { top: '14%', left: '48%', color: 'var(--brand-teal)', shape: 'dot', size: 1.2 },
          { top: '82%', left: '52%', color: 'var(--brand-red)', shape: 'dot', size: 1.2 },
          { top: '44%', left: '3%', color: 'var(--brand-pink)', shape: 'dash', rotate: 60 },
          { top: '48%', left: '95%', color: 'var(--brand-blue)', shape: 'dash', rotate: -40 },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-secondary px-4 py-1.5 text-sm font-semibold text-primary"
        >
          <span className="size-2 rounded-full bg-brand-teal" />
          Social media & digital marketing, the fun way
        </motion.span>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          <span className="flex flex-wrap justify-center gap-x-4">
            {LINE_1.map((w) => (
              <motion.span key={w} variants={word} className="text-foreground">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="mt-2 flex flex-wrap justify-center gap-x-4">
            {LINE_2.map((w) => (
              <motion.span key={w} variants={word} className="text-foreground">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="mt-2 flex flex-wrap justify-center gap-x-4">
            {LINE_3.map((w) => (
              <motion.span key={w} variants={word} className="text-primary">
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mx-auto mt-7 max-w-xl text-pretty text-lg font-medium leading-relaxed text-muted-foreground"
        >
          You flourish. We work silently in the background — planning, posting and
          polishing so your brand blooms while you do what you love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://wa.me/message/O7Y36XLA6NSZI1"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_7px_0_0] shadow-primary/30 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Let&apos;s work together
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-foreground/10 bg-background px-7 py-3.5 text-base font-bold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            See what we do
          </a>
        </motion.div>
      </div>
    </section>
  )
}
