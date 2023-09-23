import { prisma } from '@/lib/prisma'
import { FormNewTechnology } from './components/FormNewTechnology'

export default async function AddTechnologies() {
  const technologies = await prisma.technology.findMany()

  console.log('My techs', technologies)

  return (
    <div>
      <h2 className="small:self-auto small:text-center self-start text-xl font-semibold">
        Tecnologias em estudo
      </h2>

      <FormNewTechnology />
    </div>
  )
}
