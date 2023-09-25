'use client'
import { useEffect, useRef, useState } from 'react'
import { IRepos } from '../page'
import { Project } from './Project'
import { useSearchParams } from 'next/navigation'

interface Props {
  repos: IRepos[]
}

export function ListProjects({ repos }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const [allRepos, setAllRepos] = useState<IRepos[]>(repos)
  const page = searchParams.get('page')

  function scrollList() {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: 200,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (repos.length && !allRepos.some((repo) => repo.id === repos[0].id)) {
      setAllRepos((prev) => [...prev, ...repos])
      scrollList()
    }
  }, [repos, page])

  return (
    <div
      ref={wrapperRef}
      className="mx-auto flex w-full max-w-5xl flex-col justify-center space-y-3 px-3"
    >
      {!!allRepos?.length &&
        allRepos.map((repo, index) => (
          <Project
            position={index === allRepos.length - 1}
            repo={repo}
            key={repo.id}
            id="test"
          />
        ))}

      {!allRepos.length && (
        <p className="mt-6 text-center text-sm">
          Não foram encontrados projetos aqui
        </p>
      )}
    </div>
  )
}
