import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

interface IRepos {
  id: number
  name: string
  html_url: string
  owner: {
    avatar_url: string
    login: string
    html_url: string
  }
  description: string | null
  created_at: string
  updated_at: string
}

export async function ListProjects({
  navigate,
}: {
  navigate: (url: string) => void
}) {
  const response = await axios
    .get(`https://api.github.com/users/thetunnes/repos`, {
      params: {
        sort: 'updated',
        type: 'public',
        per_page: 10,
        page: 1,
      },
    })
    .catch(() => navigate('/'))

  const repos = response?.data as Array<IRepos>

  if (!repos) {
    return (
      <p className="text-center text-sm">Não foi possível listar projetos</p>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col justify-center space-y-3 px-3">
      {!!repos?.length &&
        repos.map((repo) => (
          <Link
            href={repo.html_url}
            key={repo.id}
            className="space-y-2 rounded-md border border-transparent px-2 py-3 transition-all duration-500 hover:border-gray-200"
          >
            <header className="flex items-start justify-between gap-2">
              <div className="flex flex-1 items-start gap-2">
                <Image
                  src={repo.owner.avatar_url}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href={repo.owner.html_url}
                    className="text-xs text-zinc-600 transition-colors hover:text-green-600"
                  >
                    @{repo.owner.login}
                  </Link>
                  <p className="text-sm">
                    Projeto:{' '}
                    <b className="capitalize">{repo.name.replace(/-/g, ' ')}</b>
                  </p>
                </div>
              </div>

              <time className="flex items-center gap-1 text-xs text-zinc-600">
                <Calendar size={16} />
                {Intl.DateTimeFormat('pt-br').format(new Date(repo.created_at))}
              </time>
            </header>
            <p className="text-sm text-zinc-700 dark:text-gray-400">
              {repo.description}
            </p>
          </Link>
        ))}
    </div>
  )
}
