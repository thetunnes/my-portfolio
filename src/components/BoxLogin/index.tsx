'use client'
import { forwardRef, useEffect, useState } from 'react'
import { Github, LogOut, Mail, User2Icon } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FormCredentials } from './formCredentials'
import { Button } from '../Button'
import Image from 'next/image'

export const BoxLogin = forwardRef<HTMLDivElement>(function BoxLogin(
  props,
  ref,
) {
  const { data: session } = useSession()
  const [isOpenTab, setIsOpenTab] = useState(false)
  const [hasLoginWithEmail, setHasLoginWithEmail] = useState(false)

  function selectTypeLogin(type: string) {
    switch (type) {
      case 'credentials':
        return setHasLoginWithEmail(true)
      case 'github':
        return signIn('github')
      case 'logged': {
        setIsOpenTab(true)
        setHasLoginWithEmail(false)
        break
      }
      default:
        break
    }
  }

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (
        typeof ref === 'object' &&
        ref?.current &&
        !ref?.current.contains(event.target as Node)
      ) {
        setIsOpenTab(false)
        setHasLoginWithEmail(false)
      }
    }
    // Crio um evento para todo o meu document, onde sempre que houver clique (mousedown)
    // A função handleClickFora é acionada.
    document.addEventListener('mousedown', handleClickFora)
    //
    return () => {
      document.removeEventListener('mousedown', handleClickFora)
    }
  }, [])

  return (
    <>
      {session ? (
        <button
          onClick={() => selectTypeLogin('logged')}
          className="group relative z-50 flex cursor-pointer  flex-col items-center outline-white focus:outline-1"
        >
          {session.user?.image ? (
            <Image
              src={session.user?.image}
              width={28}
              height={28}
              alt=""
              className="rounded-full"
            />
          ) : (
            <User2Icon size={28} />
          )}
          <p className="text-xs font-semibold transition-colors duration-500 group-hover:text-green-600">
            {session.user?.name?.split(' ')[0]}
          </p>
        </button>
      ) : (
        <button
          className="group relative z-50 flex cursor-pointer  flex-col items-center outline-white focus:outline-1"
          onClick={() => setIsOpenTab((prev) => !prev)}
        >
          <User2Icon
            size={28}
            className="transition-colors duration-500 group-hover:text-green-600"
          />
          <p className="text-xs font-semibold transition-colors duration-500 group-hover:text-green-600">
            Entrar
          </p>
        </button>
      )}

      {isOpenTab ? (
        <div className="absolute right-9 top-full z-[100] -my-4 flex w-[240px] flex-col gap-2 rounded-lg border border-zinc-800 bg-gray-200 px-4 py-2 dark:border-gray-200 dark:bg-zinc-900">
          {session && (
            <Button color="red" onClick={() => signOut()} w="full">
              Sair <LogOut />
            </Button>
          )}

          {hasLoginWithEmail ? (
            <FormCredentials onPrevStage={() => setHasLoginWithEmail(false)} />
          ) : (
            !session && (
              <>
                <Button
                  size="sm"
                  className="group/icon w-11/12"
                  onClick={() => selectTypeLogin('credentials')}
                >
                  Login with{' '}
                  <Mail className="transition-all duration-[400ms] ease-out group-hover/icon:translate-x-2" />
                </Button>
                <Button
                  size="sm"
                  className="group/icon w-11/12"
                  onClick={() => selectTypeLogin('github')}
                >
                  Login with{' '}
                  <Github className="transition-all duration-[400ms] ease-out group-hover/icon:translate-x-2" />
                </Button>
              </>
            )
          )}
        </div>
      ) : null}
    </>
  )
})
