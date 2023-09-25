import { ListProjects } from './components/ListProjects'

export interface IRepos {
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

async function getRepositoriesGithub(page: string): Promise<IRepos[] | Error> {
  const response = await fetch(
    `https://api.github.com/users/thetunnes/repos?sort=updated&type=public&per_page=10&page=1`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Projects Github.')
  }
  return response.json()
}
interface Props {
  searchParams: {
    page: string
  }
}

export default async function Projects({ searchParams }: Props) {
  const { page } = searchParams
  const repos = await getRepositoriesGithub(page ?? '0')

  if (repos instanceof Error) {
    return <p>ERROR</p>
  }

  return (
    <section className="space-y-3 px-6">
      <h2 className="self-start text-xl font-semibold small:self-auto small:text-center">
        Lista de projetos Github
      </h2>

      <ListProjects repos={repos} />
    </section>
  )
}
