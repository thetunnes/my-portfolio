import { ReactNode } from 'react'
import { Inter } from '@next/font/google'
// import { Session } from 'next-auth'
import { Providers } from './providers'
import { Header } from '../components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

interface LayoutProps {
  children: ReactNode
  // session: Session | null
}

export const metadata: Metadata = {
  title: 'Home | The Tunnes Dev',
  description:
    'Essa aplicação web foi desenvolvida como portfólio de um Desenvolvedor Front-end, com o intuito de demonstrar algumas das principais habilidades que são utilizadas em uma aplicação Front-end.',
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} h-full bg-card font-sans`}>
        <Providers>
          <Header />
          <main className="mt-20 h-full min-h-[calc(100vh-5rem)] p-6">
            {children}
          </main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
