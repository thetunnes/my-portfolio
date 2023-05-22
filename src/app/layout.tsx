'use client'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Header />
          <main className=" mt-20 min-h-[calc(100vh-5rem)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
