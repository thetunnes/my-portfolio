'use client'
import { CaretDown } from '@phosphor-icons/react'
import { ReactNode, Suspense, useState } from 'react'
import { AnimationText } from '../AnimationText'

interface IRenderPageProps {
  companyName: string
  urlSite: string
  description: ReactNode
}

export function ExperienceInCompany({
  companyName,
  urlSite,
  description,
}: IRenderPageProps) {
  const [isClosedIFrame, setIsClosedIFrame] = useState(true)

  return (
    <div className="m-8 mx-auto flex w-full max-w-[1120px] flex-col items-center justify-start gap-2 border-b border-b-zinc-800 py-4 dark:border-gray-200">
      <AnimationText
        className="self-start"
        onClick={() => setIsClosedIFrame((prev) => !prev)}
      >
        {companyName}

        <CaretDown
          className={`transition-all duration-500 ${
            isClosedIFrame ? '-rotate-180' : 'rotate-0'
          }`}
        />
      </AnimationText>

      <Suspense>
        <iframe
          className={`h-[calc(100vh-140px)] w-full rounded-md bg-white transition-[max-height] duration-500 ${
            isClosedIFrame
              ? 'max-h-0'
              : 'max-h-[calc(100vh-140px)] border-2 border-zinc-800'
          }`}
          src={urlSite}
          // width={1120}
        />
      </Suspense>
      {description}
    </div>
  )
}
