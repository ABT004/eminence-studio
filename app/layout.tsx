import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eminencestudio.xyz'),
  title: {
    default: 'Eminence Studio | Social Media & Digital Marketing Agency in Nepal',
    template: '%s | Eminence Studio',
  },
  description:
    'Eminence Studio is a creative social media and digital marketing agency in Nepal helping brands grow with strategy, content, ads and storytelling that converts.',
  applicationName: 'Eminence Studio',
  keywords: [
    'social media agency Nepal',
    'digital marketing agency Nepal',
    'brand strategy Nepal',
    'content creation agency',
    'marketing agency for small businesses',
    'social media marketing agency',
    'Eminence Studio',
  ],
  authors: [{ name: 'Eminence Studio' }],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://eminencestudio.xyz',
    title: 'Eminence Studio | Social Media & Digital Marketing Agency in Nepal',
    description:
      'Creative social media and digital marketing support for brands in Nepal and beyond.',
    siteName: 'Eminence Studio',
    locale: 'en_US',
    images: [
      {
        url: '/eminence-logo.png',
        width: 1200,
        height: 630,
        alt: 'Eminence Studio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eminence Studio | Social Media & Digital Marketing Agency in Nepal',
    description:
      'Creative social media and digital marketing support for brands in Nepal and beyond.',
    images: ['/eminence-logo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
