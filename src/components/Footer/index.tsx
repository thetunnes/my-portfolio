export function Footer() {
  return (
    <footer className=" flex flex-col items-center justify-center gap-2 rounded-xl border-t border-gray-100 p-4">
      <p className="text-center">Todos os direitos reservados.</p>
      <p className="w-[520px] text-center text-xs">
        Junto dessa aplicação, foi desenvolvida uma simples documentação e para
        mostrar todo o meu trabalho,{' '}
        <a
          href="https://www.notion.so/project-development/Processo-de-cria-o-Portf-lio-Tunnes-84232317a7cd4b9d9c7dd3a82581b5b0"
          className="text-gray-100 underline transition-colors duration-500 hover:text-green-600"
        >
          a doc pode ser acessada aqui
        </a>
      </p>
    </footer>
  )
}
