'use client'

import { motion } from 'framer-motion'
import { Cog, Settings } from 'lucide-react'

const STEPS = [
  { n: '01', label: 'Listen', text: 'We learn your brand, your voice and your dreams.' },
  { n: '02', label: 'Plan', text: 'A quiet, clever strategy runs behind the scenes.' },
  { n: '03', label: 'Create', text: 'Content and campaigns roll out like clockwork.' },
  { n: '04', label: 'Flourish', text: 'You show up, your numbers grow, we keep turning.' },
]

export function BackgroundMagic() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-primary px-4 py-28 text-primary-foreground"
    >
      {/* silent rotating gears at low opacity */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <Cog className="animate-spin-slow absolute -left-16 top-8 size-64 text-white/10" />
        <Settings className="animate-spin-slow-reverse absolute -right-20 bottom-0 size-80 text-white/10" />
        <Cog className="animate-spin-slow absolute right-1/3 top-1/2 size-40 text-white/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
            <Cog className="size-4 animate-spin-slow" />
            Flourish Engineering
          </span>
          <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The magic runs quietly in the background
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            While you bloom out front, our little engine keeps turning — steady,
            silent and always working.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-3 font-display text-3xl font-bold text-white/40">{s.n}</div>
              <h3 className="mb-1.5 font-display text-xl font-semibold">{s.label}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
