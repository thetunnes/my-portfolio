"use client"
import { useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header'
import { Providers } from './providers'
import { useTheme } from "next-themes"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
