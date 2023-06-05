import { prisma } from '@/lib/prisma'
import { compare } from 'bcrypt'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Only POST requests allowed' },
      {
        status: 405,
      },
    )
  }
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const body = await req.json()

  const { email, password } = bodySchema.parse(body)

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user || !user.password) {
    return NextResponse.json({ message: 'User not found' }, { status: 401 })
  }

  const validateHash = compare(password, user.password)

  console.log('Senhas conferem?', validateHash)

  return NextResponse.json({ user })
}
