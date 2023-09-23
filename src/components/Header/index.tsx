import { NavLink } from '../NavLink'
import { AnimationText } from '../AnimationText'
import { MenuMobile } from '../MenuMobile'
import { MenuLoginTheme } from './MenuLoginTheme'
import Link from 'next/link'

const listMenus = [
  {
    text: 'Sobre mim',
    url: '/',
  },
  {
    text: 'Experiências anteriores',
    url: '/previous-experience',
  },
  {
    text: 'Projetos de estudo',
    url: '/projects',
  },
]

export function Header() {
  return (
    <header className="fixed bottom-0 left-0 right-0 top-0 z-50 mx-6 flex h-20 items-center justify-between gap-5 border-b border-zinc-800 py-6 backdrop-blur dark:border-gray-200">
      <div className="flex items-center gap-3">
        <MenuMobile listMenus={listMenus} />
        <AnimationText className="xsmall:hidden z-50">
          <Link href="/">The Dev Tunnes.</Link>
        </AnimationText>
      </div>

      <nav className="small:hidden absolute z-10 flex w-full flex-1 items-center justify-center gap-4">
        {listMenus.map((menu) => (
          <NavLink key={menu.text} text={menu.text} url={menu.url} />
        ))}
      </nav>

      <MenuLoginTheme />
    </header>
  )
}
