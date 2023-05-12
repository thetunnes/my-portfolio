"use client";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimationText } from "../AnimationText";

interface IRenderPageProps {
  companyName: string
  urlSite: string

}

export function RenderPageHome({ companyName, urlSite }: IRenderPageProps) {
  const [isClosedIFrame, setIsClosedIFrame] = useState(true);

  return (
    <div className="w-full max-w-[1120px] flex flex-col items-center justify-start gap-2 py-4 m-8 mx-auto border-b border-b-zinc-800 dark:border-gray-200">
      <AnimationText
        className="self-start"
        onClick={() => setIsClosedIFrame((prev) => !prev)}
      >
        {companyName}

        <CaretDown className={`transition-all duration-500 ${isClosedIFrame ? "-rotate-180" : "rotate-0"}`} />
      </AnimationText>

      <iframe
        className={`bg-white w-full transition-[max-height] duration-500 rounded-md h-[600px] ${
          isClosedIFrame ? "max-h-0" : "max-h-[600px] border-2 border-zinc-800"
        }`}
        src={urlSite}
        // width={1120}
      ></iframe>
    </div>
  );
}
