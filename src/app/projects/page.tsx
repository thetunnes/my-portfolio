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

async function getRepositoriesGithub(): Promise<IRepos[]> {
  const response = await fetch(
    `https://api.github.com/users/thetunnes/repos/?sort=updated&type=public&per_page=10&page=1`,
    {
      method: 'GET',
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Projects Github.')
  }
  return response.json()
}
export default async function Projects() {
  const repos = await getRepositoriesGithub()

  return (
    <section className="space-y-3 px-6">
      <h2 className="self-start text-xl font-semibold small:self-auto small:text-center">
        Lista de projetos Github
      </h2>

      {/* @ts-expect-error Async Server Component */}
      <ListProjects repos={repos} />
    </section>
  )
}
