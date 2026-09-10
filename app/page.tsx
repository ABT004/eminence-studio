import { ConfettiCursor } from '@/components/confetti-cursor'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ServicesGrid } from '@/components/services-grid'
import { BackgroundMagic } from '@/components/background-magic'
import { CaseStudies } from '@/components/case-studies'
import { SiteFooter } from '@/components/site-footer'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eminence Studio',
  url: 'https://eminencestudio.xyz',
  logo: 'https://eminencestudio.xyz/eminence-logo.png',
  description:
    'Eminence Studio is a social media and digital marketing agency in Nepal helping brands grow with strategy, content, ads and storytelling.',
  areaServed: ['Nepal', 'Worldwide'],
  sameAs: [
    'https://instagram.com/eminencestudio.np',
    'https://facebook.com/eminencestudio.np',
    'https://www.tiktok.com/@eminencestudionepal',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'business inquiry',
      email: 'aagneya@eminencestudio.xyz',
      availableLanguage: ['English'],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="relative min-h-screen bg-background">
        <ConfettiCursor />
        <SiteHeader />
        <Hero />
        <ServicesGrid />
        <BackgroundMagic />
        <CaseStudies />
        <SiteFooter />
      </main>
    </>
  )
}
