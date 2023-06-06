// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    avatar_url: string
    email: string
    username: string
    auth: boolean
  }
}
