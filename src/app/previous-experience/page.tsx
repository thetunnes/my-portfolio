import TooltipIcons from '@/components/TooltipIcons'
import { ExperienceInCompany } from '../../components/ExperienceInCompany'

const arrayCompanies = [
  {
    companyName: 'Coinsure',
    urlSite: 'https://zeca.coinsure.com.br',
    description: (
      <>
        <p className="w-full flex-1 text-justify text-sm leading-relaxed">
          Fui contratado em <b>set/2021</b>, essa foi minha primeira
          experiência, uma startup pequena que tinha como principal produto a
          venda de seguros{' '}
          <TooltipIcons
            contentTooltip={<span>(Responsabilidade Cívil Profissional)</span>}
          >
            RCP.
          </TooltipIcons>{' '}
          Em 2021, ano que iniciei na empresa, tinha 5 Devs onde eu era o menos
          experiente, eu pegava pequenas tasks de layout ou bugs relacionados a
          Front-end. Iniciei o ano de 2022 assumindo mais responsabilidades,
          idealizando, arquitetando e implementando novas features na
          plataforma, definindo prazos, auxiliando no desenvolvimento da API,
          etc. Fiquei na empresa até <strong>out/2022</strong> trabalhando como
          Full-Stack, a{' '}
          <TooltipIcons
            contentTooltip={
              <span>
                Grupo de ferramentas utilizadas para desenvolvimento da
                aplicação
              </span>
            }
          >
            stack
          </TooltipIcons>{' '}
          principal utilizada pela empresa era:
          <strong>
            React, NodeJS (with Express), Knex, MySQL, Hook Form, Yup, Styled
            Components.
          </strong>
        </p>
      </>
    ),
  },
  {
    companyName: 'MaxCred',
    urlSite: 'https://app.maxcred.net/auth/login',
    description: (
      <p className="w-full flex-1 text-justify text-sm leading-relaxed">
        Iniciando meus projetos <strong>freelancer</strong> em{' '}
        <strong>nov/2022</strong>, entrei no desenvolvimento Front-end para a
        empresa Maxcred. Trabalho junto de outro Dev Back-end e desde o ínicio
        criamos uma boa stack JS para a aplicação, o Back-end foi desenvolvido
        com:{' '}
        <strong>NodeJS (with ExpressJS), TypeScript, MySQL, Prisma, Zod</strong>{' '}
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
      <p className="w-full flex-1 text-justify text-sm leading-relaxed">
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
      <h2 className="small:self-auto small:text-center self-start text-xl font-semibold">
        Lista de projetos desenvolvidos profissionalmente
      </h2>
      {arrayCompanies.map((company) => (
        <ExperienceInCompany
          companyName={company.companyName}
          urlSite={company.urlSite}
          key={company.companyName}
          description={company.description}
        />
      ))}
    </section>
  )
}
