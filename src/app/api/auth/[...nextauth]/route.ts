import { authOptions } from '@/lib/authOptions'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth/next'

async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions(req, res))
}

export { auth as GET, auth as POST }
