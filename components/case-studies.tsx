'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const CASES = [
  {
    img: '/case-bloom-cafe.png',
    tag: 'Social Media Management',
    tagColor: 'var(--brand-red)',
    title: 'Save Mountain',
    stat: '',
    statLabel: 'Brand Management ',
  },
  {
    img: '/case-skincare.png',
    tag: 'Ecommerce',
    tagColor: 'var(--brand-pink)',
    title: 'Custom Shinobi',
    stat: '4x  ',
    statLabel: 'Better ROAS - Meta Ads',
  },
  {
    img: '/case-fitness.png',
    tag: 'Clothing',
    tagColor: 'var(--brand-teal)',
    title: 'Shinobi Wears',
    stat: '',
    statLabel: 'Brand Design ',
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-pink">
              Case studies
            </p>
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Brands we helped flourish
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {CASES.map((c, i) => (
            <motion.a
              href="#play"
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative block overflow-hidden rounded-3xl border border-foreground/8 bg-card"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={c.img || '/placeholder.svg'}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: c.tagColor }}
                >
                  {c.tag}
                </span>
              </div>
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.statLabel}</p>
                </div>
                <span className="font-display text-2xl font-bold text-primary">{c.stat}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
