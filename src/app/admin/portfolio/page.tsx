import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { TechnologyForm } from './components/TechnologyForm'

export default function AdminPortfolio() {
  const cookie = cookies().get('is-admin-portfolio')

  if (!cookie || cookie?.value !== process.env.NEXT_PUBLIC_SECRET_ADMIN) {
    redirect('/')
  }

  return (
    <section>
      <h1>Página Admin</h1>

      <TechnologyForm />
    </section>
  )
}
