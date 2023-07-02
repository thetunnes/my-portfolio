// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    avatar_url: string
    email: string
    auth: boolean
  }

  export interface Session {
    id: string
    user: User
    admin: boolean
  }
}
