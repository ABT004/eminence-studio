'use client'

import { motion } from 'framer-motion'
import {
  Camera,
  Megaphone,
  PenTool,
  BarChart3,
  Palette,
  Sparkles,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Camera,
    title: 'Social Media Management',
    desc: 'Daily posting, community love and scroll-stopping content for brands in Nepal and across the world.',
    color: 'var(--brand-purple)',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Paid campaigns that convert with smarter targeting, efficient budgets and measurable growth.',
    color: 'var(--brand-blue)',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    desc: 'Reels, graphics and copy designed to help your audience stop, trust and take action.',
    color: 'var(--brand-red)',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'A brand look and voice that feels unmistakably you and memorable at first glance.',
    color: 'var(--brand-teal)',
  },
  {
    icon: BarChart3,
    title: 'Growth Analytics',
    desc: 'Clear reporting and strategy updates so your marketing decisions stay sharp and effective.',
    color: 'var(--brand-yellow)',
  },
  {
    icon: Sparkles,
    title: 'Influencer Magic',
    desc: 'Creator partnerships built around trust, culture and campaigns that actually resonate.',
    color: 'var(--brand-pink)',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-teal">
            What we do
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Social media and digital marketing services built to{' '}
            <span className="text-primary">grow your brand</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-foreground/8 bg-card p-7 shadow-[0_2px_20px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_18px_40px_rgb(0,0,0,0.1)]"
              >
                <span
                  className="absolute -right-8 -top-8 size-28 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
                  style={{ backgroundColor: s.color }}
                />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative mb-5 inline-flex size-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `color-mix(in oklch, ${s.color} 16%, white)` }}
                >
                  <Icon className="size-7" style={{ color: s.color }} />
                </motion.div>
                <h3 className="relative mb-2 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="relative text-[0.95rem] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
