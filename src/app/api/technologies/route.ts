import { NextResponse } from 'next/server'
import { z } from 'zod'

async function handler(req: Request) {
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
    icon: z.string().includes('svg'),
    startDateStudy: z.string().datetime(),
  })

  const body = await req.json()

  const { name, icon, startDateStudy } = bodySchema.parse(body)

  console.log(name, icon, startDateStudy)
}

export { handler as POST }
