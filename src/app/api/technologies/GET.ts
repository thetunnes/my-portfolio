import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const technologies = await prisma.technology.findMany()

  console.log(technologies)

  if (!technologies.length) {
    return NextResponse.json(
      { message: 'Não há tecnologias cadastradas.' },
      { status: 400 },
    )
  }

  return NextResponse.json({ technologies })
}
