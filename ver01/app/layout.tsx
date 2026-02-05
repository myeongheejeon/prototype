import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: '--font-noto-sans-kr' });

export const metadata: Metadata = {
  title: 'Gelato - AI-Powered Fashion Search',
  description: 'Find your perfect style with AI-powered recommendations',
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={notoSansKR.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
