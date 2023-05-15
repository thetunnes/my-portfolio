import { Header } from "./components/Header";
import { MainText } from "./components/MainTextAnimate";
import FotoPerfil from "./assets/foto-ccxp.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[calc(100vh-5rem)] p-6 tall:flex-col w-full flex items-stretch justify-center gap-4">
      <div className="w-1/2 tall:w-full flex items-center justify-center">
        <Image alt="Foto perfil" src={FotoPerfil} height={450} className="rounded-lg shadow-sm shadow-indigo-300" />
      </div>

      <div className="w-2/5 tall:w-full h-full flex flex-col justify-center gap-4">
        <MainText />
        <p className="text-lg text-justify">
          Olá mundo! Eu me chamo Cauê, tenho 22 anos e a alguns anos
          me aventuro no mundo da programação. No mundo da internet também serei
          muito encontrado como “The Tunnes”, nasci e cresci em Volta Redonda -
          RJ e a uns 3 anos comecei meus estudos relacionado a Programação e
          Desenvolvimento Web. Dentre esses anos de estudo já adquiri um ótimo
          conhecimento na trindade da Web (HTML5, CSS3 e JS ES7+), também venho
          adquirindo bons conhecimentos em ReactJS, NodeJS, arquiteturas
          Front-end, Design Patters e Responsive Web Design.
        </p>
      </div>
    </main>
  );
}
