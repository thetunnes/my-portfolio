'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

interface IProvidersProps {
  children: ReactNode
  // session: Session | null
}

export function Providers({ children }: IProvidersProps) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  )
}
