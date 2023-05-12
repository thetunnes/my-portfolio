import Link from "next/link";
import { usePathname } from "next/navigation"

interface INavLink {
  text: string
  url: string
}

export function NavLink({ text, url }: INavLink) {

  const pathName = usePathname()

  return (
    <Link href={url} className={`
    cursor-pointer transition-all relative  after:h-[2px] after:bg-green-600 after:absolute after:bottom-0 after:left-0
    ${pathName === url ? 
      "text-green-600 after:w-1/2" 
      : "dark:text-gray-200 hover:text-green-600 dark:hover:text-green-600 after:w-0 after:duration-300 hover:after:w-1/2"
    }
    `}>
      {text}
    </Link>
  )
}