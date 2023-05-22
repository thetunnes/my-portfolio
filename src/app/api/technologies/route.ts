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
  const technologies = await prisma.technology.findMany({
    orderBy: {
      name: 'asc',
    },
  })

  return technologies
}
