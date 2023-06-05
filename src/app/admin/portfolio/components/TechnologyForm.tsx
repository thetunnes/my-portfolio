'use client'
import { useForm } from 'react-hook-form'
import { InputFile } from '@/components/InputFile'
import { InputText } from '@/components/InputText'
import { useToasts } from '@/hooks/useToasts'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string(),
  icon: z.instanceof(FileList),
  startStudyDate: z.string().datetime(),
})

type IFormSchema = z.infer<typeof formSchema>

export function TechnologyForm() {
  const { notifyError, notifySuccess } = useToasts()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  console.log(errors)

  async function handleSubmitTech(data: IFormSchema) {
    console.log(data)
    try {
      // const iconTechnology = formData.get('icon')

      // console.log(iconTechnology)
      // if (!iconTechnology) {
      //   console.log('test')
      //   return notifyError('Um ícone deve ser adicionado')
      // }

      notifySuccess('Adicionado com sucesso!')
    } catch (err) {
      console.log(err)
    }
  }

  console.log(getValues('icon'))
  return (
    <form
      className="flex flex-1 flex-col items-center justify-center gap-2"
      onSubmit={handleSubmit(handleSubmitTech)}
    >
      <InputFile
        id="icon-tech"
        name="icon"
        label="Adicione o ícone"
        accept=".svg"
        register={register}
        file={getValues('icon')}
      />

      <InputText
        label="Nome da tecnologia"
        id="name-tech"
        name="name"
        placeholder="Insira um nome"
      />
      <InputText
        label="Data de ínicio dos estudos"
        id="date-start"
        name="startStudyDate"
        type="date"
      />

      <button className="not:disabled:cursor-pointer rounded-md border border-green-600 bg-green-600 px-3 py-2 hover:bg-green-500 hover:transition-colors disabled:bg-transparent ">
        Adicionar
      </button>
    </form>
  )
}
