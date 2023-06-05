'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface IProvidersProps {
  children: ReactNode
  session: Session | null
}

export function Providers({ children, session }: IProvidersProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </SessionProvider>
  )
}
