import { ReactNode } from 'react'
import { Inter } from '@next/font/google'
// import { Session } from 'next-auth'
import { Providers } from './providers'
import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

interface LayoutProps {
  children: ReactNode
  // session: Session | null
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} h-full bg-slate-900 font-sans`}>
        <Providers>
          <Header />
          <main className="mt-20 h-full min-h-[calc(100vh-5rem)] p-6">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
