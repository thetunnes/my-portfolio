'use client'
import { ListProjects } from './components/ListProjects'
import { useRouter } from 'next/navigation'

export default function Projects() {
  const router = useRouter()

  return (
    <section className="space-y-3 px-6">
      <h2 className="self-start text-xl font-semibold small:self-auto small:text-center">
        Lista de projetos Github
      </h2>

      {/* @ts-expect-error Async Server Component */}
      <ListProjects navigate={(string) => router(string)} />
    </section>
  )
}
