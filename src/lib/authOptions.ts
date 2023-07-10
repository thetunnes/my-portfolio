import { decode, encode } from 'next-auth/jwt'
import PrismaAdapter from './auth/prisma-adapter'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { v4 as uuidV4 } from 'uuid'
import { NextAuthOptions } from 'next-auth'
import { prisma } from './prisma'
import { fetchWrapper } from './fetch'

interface IUser {
  id: string
  name: string
  email: string
  avatar_url: string
  auth: boolean
}

const generateSessionToken = () => uuidV4()
const fromDate = (time: number, date = Date.now()) =>
  new Date(date + time * 1000)

export function authOptions(): NextAuthOptions {
  const adapter = PrismaAdapter(prisma)
  return {
    secret: process.env.NEXT_PUBLIC_SECRET_NEXT,
    adapter,
    session: {
      strategy: 'database',
      maxAge: 30 * 24 * 60 * 60, // 30 days

      updateAge: 24 * 60 * 60, // 24 hours
      generateSessionToken,
    },
    jwt: {
      encode: async ({ token, secret, maxAge }) => {
        if (
          // req?.url?.includes('callback') &&
          // req?.url?.includes('credentials') &&
          // req?.method === 'POST' &&
          token
        ) {
          const sessionTokenId = token.sessionToken

          if (sessionTokenId) return sessionTokenId
          // else return ''
        }
        return encode({ token, secret, maxAge }) // <<<<<<   This needed to be wrapped with braces
      },
      decode: async ({ token, secret }) => {
        // if (
        //   req?.url?.includes('callback') &&
        //   req?.url?.includes('credentials') &&
        //   req?.method === 'POST'
        // ) {
        //   return null
        // }
        return decode({ token, secret }) //  <<<<<  This needed to be wrapped with braces
      },
    },
    providers: [
      GithubProvider({
        clientId: String(process.env.NEXT_PUBLIC_GH_CLIENT_ID),
        clientSecret: String(process.env.NEXT_PUBLIC_GH_CLIENT_SECRET),
      }),
      Credentials({
        credentials: {
          email: { label: 'E-mail', type: 'email', placeholder: 'thetunnes' },
          password: { label: 'Password', type: 'Password' },
        },
        async authorize(credentials) {
          // Inside `credentials` props has infos from login, e-mail/username and password.
          try {
            const data = await fetchWrapper<{ user: IUser }>(
              'credentials/signin',
              {
                body: JSON.stringify({
                  email: credentials?.email,
                  password: credentials?.password,
                }),
                method: 'POST',
              },
            )

            const user = data.user

            return user
          } catch (err: any) {
            console.log('Error returned', err.response.data.message)
            return null
          }
        },
      }),
    ],
    // logger: {
    //   error(code, metadata) {
    //     console.log({ type: 'inside error logger', code, metadata })
    //   },
    //   // warn(code) {
    //   //   console.log({ type: 'inside warn logger', code })
    //   // },
    //   debug(code, metadata) {
    //     console.log({ type: 'inside debug logger', code, metadata })
    //   },
    // },
    callbacks: {
      async session({ session, user, token }) {
        if (token) {
          session.id = token.id as string
        }
        return {
          ...session,
          user,
          admin: user.auth,
        }
      },
      async signIn({ user, credentials }) {
        if (credentials) {
          // I need set cookie with session-token here
          const sessionToken = generateSessionToken()
          const sessionMaxAge = 60 * 60 * 24 * 30 // 30Daysconst sessionMaxAge = 60 * 60 * 24 * 30; //30Days
          const sessionExpiry = fromDate(sessionMaxAge)

          const newSessionToken = await PrismaAdapter(prisma).createSession({
            sessionToken,
            userId: user.id,
            expires: sessionExpiry,
          })
          user.sessionToken = newSessionToken.sessionToken
        }
        return true
      },
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id
        }
        return { ...token, ...user }
      },
    },
  }
}
