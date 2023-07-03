'use client'
import { Button } from '@/components/Button'
import { InputFile } from '@/components/InputFile'
import { InputText } from '@/components/InputText'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  dateStart: z.string(),
  iconTech: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
})

type SchemaData = z.infer<typeof schema>

export function FormNewTechnology() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SchemaData>({
    resolver: zodResolver(schema),
  })

  console.log(errors)

  async function onSubmit(data: SchemaData) {
    console.log(data)
  }

  console.log(watch('iconTech'))

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 p-4"
    >
      <section className="flex w-full items-center justify-between gap-3">
        <InputText
          id="name"
          name="name"
          label="Nome da tecnologia"
          register={register}
        />

        <InputText
          type="date"
          id="dateStart"
          name="dateStart"
          label="Início dos estudos"
          register={register}
        />
      </section>
      <InputFile
        id="iconTech"
        name="iconTech"
        accept=".svg"
        label="Ícone da tecnologia"
        file={watch('iconTech')?.[0] ?? null}
        register={register}
        multiple={false}
      />
      <Button type="submit">Adicionar</Button>
    </form>
  )
}
