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

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userExists) {
    const updatedUser = await prisma.user.update({
      data: {
        name,
        email,
        auth,
        password: hashedPassword,
        avatar_url: userExists.avatar_url ?? '',
      },
      where: {
        id: userExists.id,
      },
      include: {
        accounts: true,
      },
    })

    if (
      !updatedUser.accounts.some(
        (account) => account.provider === 'credentials',
      )
    ) {
      await prisma.account.create({
        data: {
          user_id: userExists.id,
          type: 'credentials',
          provider: 'credentials',
          provider_account_id: userExists.id,
        },
      })
    }

    return NextResponse.json({}, { status: 201 })
  }

  const prismaUser = await prisma.user.create({
    data: {
      name,
      email,
      auth,
      password: hashedPassword,
      avatar_url: '',
    },
  })

  await prisma.account.create({
    data: {
      user_id: prismaUser.id,
      type: 'credentials',
      provider: 'credentials',
      provider_account_id: prismaUser.id,
    },
  })

  return NextResponse.json({ user: prismaUser }, { status: 201 })
}

export { handlerPost as GET, handlerPost as POST }
