import TooltipIcons from '@/components/TooltipIcons'
import { RenderPageHome } from '../../components/RenderPageHome'

const arrayCompanies = [
  {
    companyName: 'Coinsure',
    urlSite: 'https://zeca.coinsure.com.br',
    description: (
      <p>
        Fui contratado em <b>set/2021</b>, essa foi minha primeira experiência,
        uma startup pequena que tinha como principal produto a democratização de
        seguros{' '}
        <TooltipIcons contentTooltip={<span>RCP</span>}>
          (Responsabilidade Cívil Profissional)
        </TooltipIcons>
        . Em 2021, ano que iniciei na empresa, tinha 5 Devs onde eu era o menos
        experiente, eu pegava pequenas tasks de layout ou bugs relacionados a
        Front-end. Iniciei o ano de 2022 assumindo mais responsabilidades,
        idealizando, arquitetando e implementando novas features na plataforma.
        Fiquei na empresa até <b>out/2022</b> onde meu contrato chegou ao fim.
      </p>
    ),
  },
  {
    companyName: 'MaxCred',
    urlSite: 'https://app.maxcred.net',
    description: (
      <p>
        Iniciando meus projetos <strong>freelancer</strong> em{' '}
        <strong>nov/2022</strong>, entrei no desenvolvimento Front-end para a
        empresa Maxcred. Trabalho junto de outro Dev Back-end e desde o ínicio
        criamos uma boa stack JS para a aplicação, inciando no Back-end com:
        <strong>
          NodeJS (with ExpressJS), TypeScript, MySQL, Prisma, Zod
        </strong>{' '}
        e no Front-end utilizamos <strong>React</strong> utilizando{' '}
        <strong>Vite</strong>, com{' '}
        <strong>
          TypeScript, Styled-Components (e alguns componentes com TailwindCSS),
          Zod, Hook Form, Router DOM, Axios, ESLint e Prettier
        </strong>
        .
      </p>
    ),
  },
  {
    companyName: 'Tibia Project',
    urlSite: 'https://tibiaproject.com',
    description: (
      <p>
        Fui chamado para fazer parte da equipe de desenvolvimento da aplicação
        Web de um servidor do jogo <strong>Tibia</strong>, entrei na equipe em
        fev/2023. A aplicação não foi iniciada por mim, mas foi criada
        utilizando{' '}
        <strong>ReactJS, NodeJS com Express, Styled Components, SQL</strong>{' '}
        rodando em uma{' '}
        <TooltipIcons contentTooltip={<span>VPS</span>}>
          Virtual Private Server
        </TooltipIcons>
        . Eu sugeri que utilizássemos um <strong>Headless CMS</strong> para
        fazer a publicação de postagens diárias, o <strong>Prismic</strong>{' '}
        facilita na criação de Posts no estilo Blog e fazer requisições ao
        Prismic é muito simples e fácil. Está sendo uma ótima experiência, nunca
        trabalhei com telas responsivas com tantas imagens e isso foi um ótimo
        desafio para aprender um pouco mais sobre CSS3.
      </p>
    ),
  },
]

export default function PreviousExperience() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-6">
      <h2 className="self-start text-xl font-semibold small:self-auto small:text-center">
        Lista de projetos desenvolvidos profissionalmente
      </h2>
      {arrayCompanies.map((company) => (
        <RenderPageHome
          companyName={company.companyName}
          urlSite={company.urlSite}
          key={company.companyName}
          description={company.description}
        />
      ))}
    </section>
  )
}
