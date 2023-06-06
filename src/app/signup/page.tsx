'use client'
import { Button } from '@/components/Button'
import { InputText } from '@/components/InputText'
import { api } from '@/lib/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaSignUp = z.object({
  // Criar um regex para validar username
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpData = z.infer<typeof schemaSignUp>

export default function SignUp() {
  const { register, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(schemaSignUp),
  })

  async function handleSignUpUser(data: SignUpData) {
    try {
      const { email, name, password } = data
      await api.post(
        '/credentials/create',
        {
          name,
          email,
          password,
          auth: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Cadastrar um usuário</h2>
      <p className="text-sm">
        Em um futuro próximo, esse site conterá páginas apenas para usuários
        autenticados (e também para usuários específicos).{' '}
        <b className="text-xs text-red-800">Confie seus dados ao Tunnes 😈</b>
      </p>
      <form
        onSubmit={handleSubmit(handleSignUpUser)}
        className="flex w-full max-w-2xl flex-1 flex-col justify-center gap-3 self-center"
      >
        <InputText
          register={register}
          id="name"
          name="name"
          label="Seu nome social"
          placeholder="John Doe"
        />
        <InputText
          register={register}
          id="email"
          name="email"
          label="Seu melhor email"
          placeholder="johndoe@example.com"
        />
        <InputText
          register={register}
          id="password"
          name="password"
          type="password"
          label="Sua senha"
          placeholder="*********"
        />

        <Button type="submit" color="green" size="md" className="my-2">
          Cadastrar
        </Button>
      </form>
    </section>
  )
}
