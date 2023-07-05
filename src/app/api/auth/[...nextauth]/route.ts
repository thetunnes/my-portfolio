import { authOptions } from '@/lib/authOptions'
// import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'

// async function auth(req: Request, res: Request) {
//   return await NextAuth(req, res, authOptions())
// }

const auth = NextAuth(authOptions())

export { auth as GET, auth as POST }
