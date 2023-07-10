import { prisma } from '@/lib/prisma'
import { compare } from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(req: NextRequest) {
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

  const validateHash = await compare(password, user.password)

  if (!validateHash) {
    return NextResponse.json(
      { message: 'Password not match.' },
      { status: 401 },
    )
  }

  const response = NextResponse.json({ user })

  return response
}
