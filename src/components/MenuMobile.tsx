'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IMenuMobileProps {
  listMenus: Array<{ text: string; url: string }>
}

export function MenuMobile({ listMenus }: IMenuMobileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState('')

  useEffect(() => {
    const indexMenu = listMenus.findIndex(
      (menu) => menu.url === window.location.pathname,
    )
    if (indexMenu >= 0) {
      setColor(`${listMenus[indexMenu].text}|text-green-400`)
    }
  }, [listMenus])

  return (
    <div className="tall:hidden relative" id="Menu-Mobile">
      <button
        id="nav-icon2"
        className="small:block group relative hidden h-5 w-6 rotate-0 cursor-pointer transition"
        onClick={() => setIsOpen((bool) => !bool)}
      >
        <span
          className={`absolute left-0 top-0 h-0.5 rotate-0 rounded-lg bg-slate-800 opacity-100 transition-all duration-500 group-hover:bg-green-600 dark:bg-slate-100 ${
            isOpen ? `left-1/2 top-4 w-0` : `w-full`
          }`}
        ></span>
        <span
          className={`absolute left-0 top-2 h-0.5 w-full rounded-lg bg-slate-800 opacity-100 transition-all duration-500 group-hover:bg-green-600 dark:bg-slate-100 ${
            isOpen ? `rotate-45` : `rotate-0`
          }`}
        ></span>
        <span
          className={`absolute left-0 top-2 h-0.5 w-full rounded-lg bg-slate-800 opacity-100 transition-all duration-500 group-hover:bg-green-600 dark:bg-slate-100 ${
            isOpen ? `-rotate-45` : `rotate-0`
          }`}
        ></span>
        <span
          className={`absolute left-0 top-4 h-0.5 rotate-0 rounded-lg bg-slate-800 opacity-100 transition-all duration-500 group-hover:bg-green-600 dark:bg-slate-100 ${
            isOpen ? `left-1/2 top-4 w-0` : `w-full`
          }`}
        ></span>
      </button>

      <nav
        className={`absolute top-full my-2 flex h-auto w-auto flex-col items-stretch overflow-hidden rounded bg-zinc-200 transition-[max-height] duration-500 dark:bg-zinc-800 ${
          isOpen ? 'max-h-[180px] ' : 'max-h-0'
        }`}
      >
        {listMenus.map((menu) => (
          <Link
            key={menu.text}
            href={menu.url}
            className={`w-max px-2 pt-1 transition-colors last:pb-2 hover:text-green-400 ${
              color.split('|')[0] === menu.text ? color.split('|')[1] : ''
            }`}
          >
            {menu.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
