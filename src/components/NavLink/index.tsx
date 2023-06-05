'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavLink {
  text: string
  url: string
}

export function NavLink({ text, url }: INavLink) {
  const pathName = usePathname()

  return (
    <Link
      href={url}
      className={`
    relative cursor-pointer transition-all  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-green-600
    ${
      pathName === url
        ? 'text-green-600 after:w-1/2'
        : 'after:w-0 after:duration-300 hover:text-green-600 hover:after:w-1/2 dark:text-gray-200 dark:hover:text-green-600'
    }
    `}
    >
      {text}
    </Link>
  )
}
