import { z } from 'zod'
import { prisma } from '../../../lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const technologies = await prisma.technology.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return technologies
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const bodySchema = z.object({
    name: z.string(),
    icon: z.string(),
    studyStartDate: z.string().datetime(),
  })

  const { icon, name, studyStartDate } = bodySchema.parse(body)

  await prisma.technology.create({
    data: {
      icon,
      name,
      start_date: studyStartDate,
    },
  })
}
