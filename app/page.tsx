import { ConfettiCursor } from '@/components/confetti-cursor'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesGrid } from '@/components/services-grid'
import { BackgroundMagic } from '@/components/background-magic'
import { CaseStudies } from '@/components/case-studies'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <ConfettiCursor />
      <SiteHeader />
      <Hero />
      <ServicesGrid />
      <BackgroundMagic />
      <CaseStudies />
      <SiteFooter />
    </main>
  )
}
