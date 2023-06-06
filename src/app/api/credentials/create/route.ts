import { NextResponse } from 'next/server'
import { z } from 'zod'
import { hash } from 'bcrypt'
import { prisma } from '@/lib/prisma'

async function handlerPost(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Only POST requests allowed' },
      {
        status: 405,
      },
    )
  }
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    auth: z.boolean().default(false),
  })

  const body = await req.json()

  const { auth, email, name, password } = bodySchema.parse(body)

  const hashedPassword = await hash(password, 10)

  const userExists = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  })

  if (userExists) {
    return NextResponse.json(
      {
        message: 'Already exists a account with this e-mail',
      },
      {
        status: 400,
      },
    )
  }

  const prismaUser = await prisma.user.create({
    data: {
      name,
      email,
      auth,
      password: hashedPassword,
    },
  })

  return NextResponse.json({ user: prismaUser }, { status: 201 })
}

export { handlerPost as GET, handlerPost as POST }
