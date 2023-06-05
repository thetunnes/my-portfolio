import { MainText } from '../components/MainTextAnimate'
import FotoPerfil from './assets/foto-ccxp.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex w-full items-start justify-center gap-4 small:flex-col">
      <div className="mx-auto flex w-max flex-1 flex-col items-center justify-center gap-1 ">
        <Image
          alt="Foto perfil"
          src={FotoPerfil}
          height={450}
          sizes="450px"
          className="rounded-lg shadow-sm shadow-indigo-300"
          priority
        />
        <span className="w-3/4 text-center text-sm text-zinc-600">
          * Foto tirada na CCXP 2022, evento Geek que ocorre todos os anos em
          São Paulo.
        </span>
      </div>

      <div className="flex h-full w-1/2 flex-1 flex-col justify-center gap-4 small:w-full">
        <MainText />
        <p className="text-justify text-lg">
          Olá mundo! Eu me chamo Cauê, tenho 22 anos e a alguns anos me aventuro
          no mundo da programação. Dentro da internet{' '}
          <strong className="text-slate-800 dark:text-gray-300">
            (nas redes sociais)
          </strong>{' '}
          também serei muito encontrado como{' '}
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
    </section>
  )
}
