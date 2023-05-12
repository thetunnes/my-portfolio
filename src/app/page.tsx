import { Header } from "./components/Header";
import { MainText } from "./components/MainTextAnimate";


export default function Home() {

  return (
    <main className="h-[calc(100vh-5rem)] w-full flex items-stretch justify-center gap-4">
      <div className="w-1/2">
        <p>Teste</p>
      </div>

      <div className="w-2/5 flex flex-col justify-center gap-4">
      <MainText />
      <p className="text-lg">Olá para todo mundo, eu me chamo Cauê, tenho 22 anos e a alguns anos me aventuro no mundo da programação. Na internet também serei muito encontrado como “The Tunnes”, nasci e vivi em Volta Redonda - RJ e a uns 3 anos comecei meus estudos relacionado a Programação e Desenvolvimento Web.</p>
      </div>
    </main>
  )
}