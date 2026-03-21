import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ASADA Calle Concha | Agua potable para nuestra comunidad',
  description: 'Sitio oficial de ASADA Calle Concha. Consulta tu factura, solicita servicios, descarga formularios y mantente informado sobre el servicio de agua potable en nuestra comunidad.',
  keywords: ['ASADA', 'Calle Concha', 'agua potable', 'Costa Rica', 'Guanacaste', 'servicio público', 'acueducto'],
  authors: [{ name: 'ASADA Calle Concha' }],
  openGraph: {
    title: 'ASADA Calle Concha | Agua potable para nuestra comunidad',
    description: 'Consulta tu factura, solicita servicios y mantente informado sobre el servicio de agua potable.',
    type: 'website',
    locale: 'es_CR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B4F8A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
