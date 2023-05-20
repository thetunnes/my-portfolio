import { ReactNode } from 'react'

interface IAnimationText {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function AnimationText({
  children,
  className,
  onClick,
}: IAnimationText) {
  return (
    <h2
      onClick={onClick}
      className={`animateTitle bg-text flex cursor-pointer items-center gap-2 whitespace-nowrap bg-clip-text text-xl font-semibold hover:animate-textColor small:leading-6 ${
        className && className
      }`}
    >
      {children}
    </h2>
  )
}
