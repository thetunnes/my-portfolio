import { ErrorKey, ErrorSignIn } from '@/components/ErrorSignIn'
import { MainText } from '../components/MainTextAnimate'
import FotoPerfil from './assets/foto-ccxp.jpg'
import Image from 'next/image'

interface HomeProps {
  searchParams: {
    error: ErrorKey
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { error } = searchParams

  return (
    <section className="flex h-full w-full items-start justify-center gap-4 small:flex-col">
      <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-1 ">
        <Image
          alt="Foto perfil"
          src={FotoPerfil}
          height={400}
          className="rounded-lg shadow-sm shadow-indigo-300"
          priority
        />
        <span className="w-full max-w-[360px] text-center text-sm text-zinc-600">
          * Foto tirada na CCXP 2022, evento Geek que ocorre todos os anos em
          São Paulo.
        </span>
      </div>

      <div className="flex h-full w-1/2 flex-1 flex-col justify-center gap-4 small:w-full">
        <MainText />
        <p className="text-justify text-lg">
          Olá mundo! Eu me chamo Cauê, tenho 23 anos e a alguns anos me aventuro
          no mundo da programação. Nas redes sociais também serei encontrado
          como{' '}
          <strong className="text-slate-800 dark:text-gray-300">
            “The Tunnes”
          </strong>
          , nasci e cresci em Volta Redonda - RJ e a uns 3 anos comecei meus
          estudos relacionado a Programação e Desenvolvimento Web. Dentre esses
          anos de estudo já adquiri um ótimo conhecimento na trindade da Web{' '}
          <strong className="text-slate-800 dark:text-gray-300">
            (HTML5, CSS3 e JS ES7+)
          </strong>
          , também venho adquirindo bons conhecimentos em{' '}
          <strong className="text-slate-800 dark:text-gray-300">ReactJS</strong>
          ,{' '}
          <strong className="text-slate-800 dark:text-gray-300">NodeJS</strong>,
          arquiteturas{' '}
          <strong className="text-slate-800 dark:text-gray-300">
            Front-end
          </strong>
          , Design Patters e Responsive Web Design.
        </p>
      </div>

      {error && <ErrorSignIn error={error} />}
    </section>
  )
}
