import { api } from '@/lib/api'
import PrismaAdapter from '@/lib/auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { setCookie } from 'nookies'
import { v4 as uuidV4 } from 'uuid'

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

export function authOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  console.log(req?.url)
  // let userAccount: IUser | null = null
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
            const { data } = await api.post('/credentials/signin', {
              email: credentials?.email,
              password: credentials?.password,
            })

            const user = data.user as IUser

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
      async session({ session, user }) {
        return {
          user,
          admin: user.id === 'clikjji020000u700lbb87mow',
          expires: session.expires,
        }
      },
      async signIn({ user, account, profile, email, credentials }) {
        if (credentials) {
          // I need set cookie with session-token here
          const sessionToken = generateSessionToken()
          const sessionMaxAge = 60 * 60 * 24 * 30 // 30Daysconst sessionMaxAge = 60 * 60 * 24 * 30; //30Days
          const sessionExpiry = fromDate(sessionMaxAge)

          const { sessionToken: sessionSaved } = await PrismaAdapter(
            prisma,
          ).createSession({
            sessionToken,
            userId: user.id,
            expires: sessionExpiry,
          })

          setCookie(null, 'next-auth.session-token', sessionSaved, {
            maxAge: sessionMaxAge,
          })
        }
        return true
      },
    },
  }
}
async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions(req, res))
}

export { auth as GET, auth as POST, auth as PUT, auth as PATCH }
