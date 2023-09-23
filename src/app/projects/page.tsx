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

async function getRepositoriesGithub(): Promise<IRepos[] | Error> {
  const response = await fetch(
    `https://api.github.com/users/thetunnes/repos?sort=updated&type=public&per_page=10&page=1`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Projects Github.')
  }
  return response.json()
}
export default async function Projects() {
  const repos = await getRepositoriesGithub()

  if (repos instanceof Error) {
    return <p>ERROR</p>
  }

  return (
    <section className="space-y-3 px-6">
      <h2 className="small:self-auto small:text-center self-start text-xl font-semibold">
        Lista de projetos Github
      </h2>

      <ListProjects repos={repos} />
    </section>
  )
}
