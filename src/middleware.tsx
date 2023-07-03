import { getSession } from 'next-auth/react'
import { NextRequest, NextResponse } from 'next/server'
export async function middleware(req: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie') ?? undefined,
    },
  }
  const session = await getSession({ req: requestForNextAuth })

  if (session?.admin) {
    return NextResponse.next()
  }

  return NextResponse.redirect('http://localhost:3000')
}

export const config = {
  matcher: ['/jadesayuri', '/technologies'],
}
