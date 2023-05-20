'use client'
import { Moon, Sun } from '@phosphor-icons/react'
import { NavLink } from '../NavLink'
import { AnimationText } from '../AnimationText'
import { useTheme } from 'next-themes'
import { MenuMobile } from '../MenuMobile'

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
  const { setTheme, theme } = useTheme()

  function handleChangeTheme(newTheme: 'light' | 'dark') {
    setTheme(newTheme)
  }

  return (
    <header className="fixed bottom-0 left-0 right-0 top-0 z-50 mx-6 flex h-20 items-center justify-between gap-5 border-b border-zinc-800 py-6 backdrop-blur dark:border-gray-200">
      <MenuMobile listMenus={listMenus} />
      <AnimationText className="z-50">The Dev Tunnes. </AnimationText>

      <nav className="absolute z-10 flex w-full flex-1 items-center justify-center gap-4 small:hidden">
        {listMenus.map((menu) => (
          <NavLink key={menu.text} text={menu.text} url={menu.url} />
        ))}
      </nav>

      {theme === 'light' ? (
        <Moon
          size={24}
          className="z-50 cursor-pointer transition-all duration-500 hover:text-green-600"
          onClick={() => handleChangeTheme('dark')}
        />
      ) : (
        <Sun
          size={24}
          className="z-50 cursor-pointer transition-all duration-500 hover:text-green-600"
          onClick={() => handleChangeTheme('light')}
        />
      )}
    </header>
  )
}
