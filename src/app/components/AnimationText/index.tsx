import { ReactNode } from "react"

interface IAnimationText {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export function AnimationText({children, className, onClick}: IAnimationText) {

  return (
    <h2
    onClick={onClick} 
    className={`animateTitle bg-text bg-clip-text font-semibold whitespace-nowrap hover:animate-textColor text-xl flex items-center gap-2 cursor-pointer ${className && className}`}>
      {children}
    </h2>
  )
}