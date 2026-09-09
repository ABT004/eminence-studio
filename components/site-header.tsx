'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'About', href: '#about', color: 'var(--brand-teal)' },
  { label: 'Services', href: '#services', color: 'var(--brand-red)' },
  { label: 'Case Studies', href: '#work', color: 'var(--brand-yellow)' },
  { label: 'Contact', href: '#play', color: 'var(--brand-blue)' }
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="Eminence Studio home">
          <Image
            src="/eminence-logo.png"
            alt="Eminence Studio"
            width={240}
            height={96}
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -3, rotate: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              style={{ ['--hov' as string]: item.color }}
              className="font-display rounded-full px-4 py-2 text-base font-semibold text-foreground/70 transition-colors hover:[color:var(--hov)]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/message/O7Y36XLA6NSZI1"
            target="_blank"
            rel="noreferrer"
            className="font-display hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_6px_0_0] shadow-primary/30 transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:inline-block"
          >
            Let&apos;s work together
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-primary md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-3xl bg-background p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ ['--hov' as string]: item.color }}
              className="font-display block rounded-2xl px-4 py-3 text-lg font-semibold text-foreground/80 hover:bg-accent hover:[color:var(--hov)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/O7Y36XLA6NSZI1"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="font-display mt-1 block rounded-2xl bg-primary px-4 py-3 text-center text-lg font-bold text-primary-foreground"
          >
            Let&apos;s work together
          </a>
        </motion.nav>
      )}
    </motion.header>
  )
}
