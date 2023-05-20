import { Header } from "../components/Header";
import { MainText } from "../components/MainTextAnimate";
import FotoPerfil from "./assets/foto-ccxp.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <section className="p-6 tall:flex-col w-full flex items-center justify-center gap-4">
      <div className="w-2/6 max-w-[400px] tall:w-full flex flex-col gap-1 items-center justify-center">
        <Image alt="Foto perfil" src={FotoPerfil} height={450} className="flex-1 rounded-lg shadow-sm shadow-indigo-300" />
        <span className="flex-1 text-zinc-600 text-sm text-center">* Foto tirada na CCXP 2022, evento Geek que ocorre todos os anos em São Paulo.</span>
      </div>

      <div className="flex-1 w-1/2 tall:w-full h-full flex flex-col justify-center gap-4">
        <MainText />
        <p className="text-lg text-justify">
          Olá mundo! Eu me chamo Cauê, tenho 22 anos e a alguns anos
          me aventuro no mundo da programação. No mundo da internet também serei
          muito encontrado como <strong className="dark:text-gray-300 text-slate-800">“The Tunnes”</strong>, nasci e cresci em Volta Redonda -
          RJ e a uns 3 anos comecei meus estudos relacionado a Programação e
          Desenvolvimento Web. Dentre esses anos de estudo já adquiri um ótimo
          conhecimento na trindade da Web <strong className="dark:text-gray-300 text-slate-800">(HTML5, CSS3 e JS ES7+)</strong>, também venho
          adquirindo bons conhecimentos em <strong className="dark:text-gray-300 text-slate-800">ReactJS</strong>, <strong className="dark:text-gray-300 text-slate-800">NodeJS</strong>, arquiteturas
          Front-end, Design Patters e Responsive Web Design.
        </p>
      </div>
    </section>
  );
}
