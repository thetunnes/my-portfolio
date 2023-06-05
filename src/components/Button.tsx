import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'red' | 'green' | 'yellow' | 'default'
  w?: string
  children: ReactNode
}

export function Button({
  size = 'md',
  color = 'default',
  w,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={`
      ${w ? `w-${w}` : 'w-max'}
      flex items-center justify-center gap-2
    ${
      (size === 'xs' && 'rounded-full px-1 py-1 text-xs') ||
      (size === 'sm' && 'rounded px-2 py-2 text-sm') ||
      (size === 'md' && 'rounded-lg px-3 py-2.5 text-base') ||
      (size === 'lg' && 'rounded-lg px-3 py-2.5 text-lg')
    }
    ${
      (color === 'red' &&
        'border border-transparent bg-red-500 text-gray-200 transition-colors duration-500 hover:bg-red-600 disabled:border-red-500 disabled:bg-transparent disabled:text-zinc-500') ||
      (color === 'green' &&
        'border border-transparent bg-green-500 text-gray-200 transition-colors duration-500 hover:bg-green-600 disabled:border-green-500 disabled:bg-transparent disabled:text-zinc-500') ||
      (color === 'yellow' &&
        'border border-transparent bg-yellow-500 text-gray-200 transition-colors duration-500 hover:bg-yellow-600 disabled:border-yellow-500 disabled:bg-transparent disabled:text-zinc-500') ||
      (color === 'default' &&
        'border border-solid border-zinc-800 bg-zinc-800 px-4 py-2 text-sm font-semibold text-gray-200 outline-none transition-all duration-150 ease-linear hover:bg-zinc-200 hover:text-zinc-800 focus:outline-none active:bg-zinc-500 dark:border-zinc-200 dark:bg-zinc-200 dark:text-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-zinc-200')
    }
    mx-auto
    ${props.className}
  `}
    >
      {children}
    </button>
  )
}
