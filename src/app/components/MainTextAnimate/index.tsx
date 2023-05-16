"use client";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";


export function MainText() {
  var posWord = 0;
  const words = [
    "Dev. Front-end",
    "Dev. Back-end",
    "Dev. Full-Stack",
    "Dev. TypeScript",
  ] as const;
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [wordsRendered, setWordsRendered] = useState<Array<string>>([])

  const wordFinal = "The Tunnes é o Dev. ideal para sua empresa.";
  async function renderThisText() {
    setTimeout(() => {
      let i = 0;
    const intervalo: NodeJS.Timer = setInterval(() => {
      i++;
      setFinalText(wordFinal.substring(0, i));
      if (i >= wordFinal.length) return clearInterval(intervalo);
    }, 200);
    }, 2000)
  }

  function renderLetterText(wordToSplit: string) {
    if (!wordToSplit) {
      return renderThisText();
    }
    if (finalText.length) {
      return
    }

    let i = 0;
    const intervalo: NodeJS.Timer = setInterval(() => {
      i++;
      setText(wordToSplit.substring(0, i));
      if (posWord > words.length) return clearInterval(intervalo);
      
      if (i > wordToSplit.length) {
        posWord++;
        setWordsRendered((prev) => {
          prev.push(wordToSplit)
          return prev
        })
        clearInterval(intervalo);
        return renderLetterText(words[posWord]);
      }
    }, 200);
  }

  useEffect(() => {
    // posWord = 0
    setFinalText("")
    setWordsRendered([])
    renderLetterText(words[posWord]);
  }, []);

  return (
    <div className="w-max max-w-full">
       {finalText.length ? (
        <p className="text-4xl leading-7 font-mono font-semibold antialised tracking-wide after:content-[ ] after:w-[2px] after:inline-block after:h-8 after: after:ml-1 after:animate-pipeAnimate after:bg-slate-950 after:dark:bg-slate-100 ">
          {finalText}
        </p>
      ) : ( 
        <p className="flex flex-col relative items-start text-4xl leading-loose font-mono font-semibold antialised tracking-wide">
          <span className="self-start">The Tunnes is a</span>
          {wordsRendered.map((word) => (

          <span key={word} className=" mb-3 text-5xl text-shadow shadow-indigo-500 underline underline-offset-8 decoration-indigo-500">
            {word}
            {posWord < words.length ? <b className="text-indigo-500">,</b> : null}
          </span>
          ))}
          <span className="w-max text-5xl text-shadow shadow-indigo-500 underline underline-offset-8 decoration-indigo-500 relative after:content-[ ] after:w-[2px] after:ml-2 after:animate-pipeAnimate after:bg-slate-950 after:dark:bg-slate-100 after:absolute after:top-0 after:bottom-0 after:right-0">
            {text}
          </span>
        </p>
      )}
    </div>
  );
}
