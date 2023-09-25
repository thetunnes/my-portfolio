import { IRepos } from '../page'
import { Project } from './Project'

interface Props {
  repos: IRepos[]
}

export function ListProjects({ repos }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col justify-center space-y-3 px-3">
      {!!repos?.length &&
        repos.map((repo, index) => (
          <Project
            data-lastPosition={index === repos.length - 3}
            repo={repo}
            key={repo.id}
          />
        ))}
    </div>
  )
}
