'use client'

import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps, useEffect, useRef } from 'react'
import { IRepos } from '../page'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface Props extends ComponentProps<'a'> {
  repo: IRepos
  position: boolean
}

export function Project({ repo, position }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const projectRef = useRef<HTMLAnchorElement>(null)

  function onQueryParam(text: string) {
    const url = new URLSearchParams(Array.from(searchParams.entries()))

    url.set('page', text)
    const search = url.toString()
    console.log(search)
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  useEffect(() => {
    if (!projectRef?.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (position && entry.isIntersecting) {
        const page = searchParams.get('page')
        // const scroll = entry.target.scrollHeight
        onQueryParam(page ? (Number(page) + 1).toString() : '2')
        observer.unobserve(entry.target)
      }
    })

    observer.observe(projectRef.current)
  }, [position])

  return (
    <Link
      href={repo.html_url}
      ref={projectRef}
      className="flex flex-col items-start space-y-2 rounded-md border border-transparent px-2 py-3 transition-all duration-500 hover:border-zinc-600 dark:hover:border-gray-200"
    >
      <section className="flex w-full items-start justify-between gap-2">
        <div className="flex flex-1 items-start gap-2">
          <Image
            src={repo.owner.avatar_url}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs text-zinc-600 transition-colors hover:text-green-600">
              @{repo.owner.login}
            </p>
            <p className="text-sm">
              Projeto:{' '}
              <b className="capitalize">{repo.name.replace(/-/g, ' ')}</b>
            </p>
          </div>
        </div>

        <time className="flex items-center gap-1 text-xs text-zinc-600">
          <Calendar size={16} />
          {Intl.DateTimeFormat('pt-br').format(new Date(repo.updated_at))}
        </time>
      </section>
      <p className="ml-12 text-justify text-sm text-zinc-700 dark:text-gray-400">
        {repo.description}
      </p>
    </Link>
  )
}
