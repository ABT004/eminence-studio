'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SparkleBits } from '@/components/sparkle-bits'

export function SiteFooter() {
  return (
    <footer id="play" className="relative overflow-hidden px-4 pb-10 pt-24">
      <SparkleBits
        pieces={[
          { top: '20%', left: '14%', color: 'var(--brand-blue)', shape: 'dash', rotate: 25 },
          { top: '30%', left: '82%', color: 'var(--brand-yellow)', shape: 'dot' },
          { top: '58%', left: '20%', color: 'var(--brand-pink)', shape: 'dot' },
          { top: '18%', left: '60%', color: 'var(--brand-teal)', shape: 'dash', rotate: -30 },
          { top: '48%', left: '74%', color: 'var(--brand-red)', shape: 'dash', rotate: 50 },
          { top: '38%', left: '6%', color: 'var(--brand-yellow)', shape: 'dot' },
          { top: '64%', left: '90%', color: 'var(--brand-purple)', shape: 'dot' },
        ]}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Ready to <span className="text-primary">bloom?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-lg font-medium text-muted-foreground">
          We build social media and digital marketing systems for ambitious brands in Nepal and
          beyond — thoughtful, playful, and built for growth.
        </p>

        <motion.a
          href="https://wa.me/message/O7Y36XLA6NSZI1"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.97 }}
          className="mt-9 inline-block rounded-full bg-primary px-12 py-5 font-display text-xl font-bold text-primary-foreground shadow-[0_9px_0_0] shadow-primary/30"
        >
          Let&apos;s work together
        </motion.a>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href="https://instagram.com/eminencestudio.np"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-primary/25 bg-background px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:bg-accent"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/eminencestudio.np"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-primary/25 bg-background px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:bg-accent"
          >
            Facebook
          </a>
          <a
            href="mailto:aagneya@eminencestudio.xyz"
            className="rounded-full border-2 border-primary/25 bg-background px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:bg-accent"
          >
            Email us
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
        <Image
          src="/eminence-logo.png"
          alt="Eminence Studio logo"
          width={150}
          height={60}
          className="h-9 w-auto"
        />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Eminence Studio. Social media & digital marketing agency in Nepal.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm font-semibold text-muted-foreground">
          <a
            href="https://instagram.com/eminencestudio.np"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/10 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@eminencestudionepal"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/10 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
          >
            TikTok
          </a>
          <a
            href="https://facebook.com/eminencestudio.np"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/10 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
          >
            Facebook
          </a>
          <a
            href="mailto:aagneya@eminencestudio.xyz"
            className="rounded-full border border-foreground/10 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://wa.me/message/O7Y36XLA6NSZI1"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-foreground/10 px-3 py-1.5 transition-colors hover:border-primary/30 hover:bg-accent hover:text-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
