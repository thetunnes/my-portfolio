// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface User {
    id: string
    name: string
    avatar_url: string
    email: string
    auth: boolean
    sessionToken?: string
  }

  export interface Session {
    id: string
    user: User
    admin: boolean
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  export interface JWT {
    sessionToken?: string
  }
}
