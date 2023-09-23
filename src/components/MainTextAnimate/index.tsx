'use client'
import { useEffect, useState } from 'react'

export function MainText() {
  let posWord = 0
  const words = [
    'Dev. Front-end',
    'Dev. Full-Stack',
    'Dev. TypeScript',
  ] as const
  const [text, setText] = useState('')
  const [finalText, setFinalText] = useState('')
  const [wordsRendered, setWordsRendered] = useState<Array<string>>([])

  const wordFinal = 'The Tunnes is best Developer for your Business.'
  async function renderThisText() {
    setTimeout(() => {
      let i = 0
      const intervalo: any = setInterval(() => {
        i++
        setFinalText(wordFinal.substring(0, i))
        if (i >= wordFinal.length) return clearInterval(intervalo)
      }, 200)
    }, 2000)
  }

  function renderLetterText(wordToSplit: string) {
    if (!wordToSplit) {
      return renderThisText()
    }
    if (finalText.length) {
      return
    }

    let i = 0
    const intervalo: any = setInterval(() => {
      i++
      setText(wordToSplit.substring(0, i))
      if (posWord > words.length) return clearInterval(intervalo)

      if (i > wordToSplit.length) {
        posWord++
        setWordsRendered((prev) => {
          prev.push(wordToSplit)
          return prev
        })
        clearInterval(intervalo)
        return renderLetterText(words[posWord])
      }
    }, 200)
  }

  useEffect(() => {
    // posWord = 0
    setFinalText('')
    setWordsRendered([])
    renderLetterText(words[posWord])
  }, [])

  return (
    <div className="w-max max-w-full">
      {finalText.length ? (
        <p className="antialised after:content-[ ] after: after:animate-pipeAnimate font-mono text-3xl font-semibold leading-normal tracking-wider after:ml-1 after:inline-block after:h-8 after:w-[2px] after:bg-slate-950 after:dark:bg-slate-100 ">
          {finalText}
        </p>
      ) : (
        <p className="antialised relative flex flex-col items-start font-mono font-semibold leading-normal tracking-wider">
          <span className="self-start text-3xl">The Tunnes is a</span>
          {wordsRendered.map((word, i) => (
            <span
              key={word}
              className=" text-shadow mb-3 text-4xl tracking-wider underline decoration-indigo-500 underline-offset-8 shadow-indigo-500"
            >
              {word}
              {i < words.length ? <b className="text-indigo-500">,</b> : null}
            </span>
          ))}
          <span className="after:content-[ ] text-shadow after:animate-pipeAnimate relative w-max text-4xl leading-normal tracking-wider underline decoration-indigo-500 underline-offset-8 shadow-indigo-500 after:absolute after:bottom-0 after:right-0 after:top-0 after:ml-2 after:w-[2px] after:bg-slate-950 after:dark:bg-slate-100">
            {text}
            {text.includes(words[words.length - 1]) ? (
              <b className="text-indigo-500">.</b>
            ) : null}
          </span>
        </p>
      )}
    </div>
  )
}
