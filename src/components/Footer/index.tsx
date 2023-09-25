'use client'
import IconInstagram from '../Icons/IconInstagram'
import IconLinkedin from '../Icons/IconLinkedin'
import TooltipIcons from '../TooltipIcons'

export function Footer() {
  return (
    <footer className="flex items-center justify-evenly gap-2 rounded-xl border-t border-zinc-800 px-6 py-4 dark:border-gray-100">
      <TooltipIcons
        contentTooltip={<p className="text-xs">Caue&apos;s Linkedin</p>}
      >
        <a
          href="https://www.linkedin.com/in/caue-pani/"
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedin className="h-6 w-6 grayscale transition-all duration-500 hover:grayscale-0" />
        </a>
      </TooltipIcons>

      <div className="flex flex-col items-center justify-center">
        <p className="text-center">Web site para portfólio.</p>
        <p className="w-[540px] text-center text-xs small:w-auto">
          Junto dessa aplicação, foi desenvolvida uma simples documentação e
          para mostrar todo o meu trabalho,{' '}
          <a
            href="https://www.notion.so/project-development/Processo-de-cria-o-Portf-lio-Tunnes-84232317a7cd4b9d9c7dd3a82581b5b0"
            className="w-max underline transition-colors duration-500 hover:text-green-600"
          >
            a doc pode ser acessada aqui
          </a>
        </p>
      </div>
      <TooltipIcons
        contentTooltip={<p className="text-xs">Tunnes&apos;s Instagram</p>}
      >
        <a
          href="https://instagram.com/thetunnes"
          target="_blank"
          rel="noreferrer"
        >
          <IconInstagram className="h-6 w-6 grayscale transition-all duration-500 hover:grayscale-0" />
        </a>
      </TooltipIcons>
    </footer>
  )
}
