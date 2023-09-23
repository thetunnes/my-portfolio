'use client'
import { ChevronLeft, LogIn } from 'lucide-react'
import { InputText } from '../InputText'
import { Button } from '../Button'
import Link from 'next/link'
import TooltipIcons from '../TooltipIcons'
import { signIn } from 'next-auth/react'
import { FormEvent, useState } from 'react'
import { useToast } from '../ui/use-toast'
import { ErrorKey, errors } from '../ErrorSignIn'

interface IFormProps {
  onPrevStage: () => void
}

export function FormCredentials({ onPrevStage }: IFormProps) {
  const { toast } = useToast()
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  })
  async function handleSignIn(e: FormEvent) {
    e.preventDefault()
    const logged = await signIn('credentials', {
      email: dataLogin.email,
      password: dataLogin.password,
      redirect: false,
    })

    if (logged) {
      const { error, ok } = logged

      error &&
        toast({
          title: 'Testando erros ao logar',
          description: errors[logged.error as ErrorKey],
        })

      ok && toast({ title: 'Login efetuado com sucesso!' })
    }
  }
  return (
    <>
      <TooltipIcons contentTooltip={<span>Voltar</span>}>
        <ChevronLeft
          size={16}
          onClick={() => onPrevStage()}
          className="transition-all group-hover/back:-translate-x-1 group-hover/back:opacity-80"
        />
      </TooltipIcons>

      <form className="flex flex-col gap-2" onSubmit={handleSignIn}>
        <InputText
          id="email"
          name="email"
          label="Digite seu e-mail"
          placeholder="email@example.com"
          onChange={({ target }) =>
            setDataLogin((prev) => ({
              ...prev,
              email: target.value,
            }))
          }
          value={dataLogin.email}
        />
        <InputText
          id="password"
          name="password"
          type="password"
          label="Digite sua senha"
          placeholder="********"
          onChange={({ target }) =>
            setDataLogin((prev) => ({
              ...prev,
              password: target.value,
            }))
          }
          value={dataLogin.password}
        />

        <Button
          size="sm"
          color="green"
          disabled={!dataLogin.email.length || !dataLogin.password.length}
        >
          Entrar <LogIn size={16} />
        </Button>
        <Link
          href="/signup"
          className="mx-auto w-max cursor-pointer text-xs transition-all hover:text-gray-500 hover:underline"
        >
          Cadastre-se
        </Link>
      </form>
    </>
  )
}
