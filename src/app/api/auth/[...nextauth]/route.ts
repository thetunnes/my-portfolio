import { api } from '@/lib/api'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: String(process.env.NEXT_PUBLIC_GH_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_GH_CLIENT_SECRET),
    }),
    Credentials({
      id: 'auth-default',
      name: 'Credentials',
      credentials: {
        email: { label: 'E-mail', type: 'email', placeholder: 'thetunnes' },
        password: { label: 'Password', type: 'Password' },
      },
      async authorize(credentials) {
        // Inside `credentials` props has infos from login, e-mail/username and password.
        const response = await api.post('/credentials/signin', {
          email: credentials?.email,
          password: credentials?.password,
        })
        console.log(response)

        const user = response.data.user

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        user,
        admin: user.name === 'Tunnes',
        expires: session.expires,
      }
    },
  },
}

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions)
}

export { auth as GET, auth as POST }
