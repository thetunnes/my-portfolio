'use client'
import { BoxLogin } from '@/components/BoxLogin'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export function MenuLoginTheme() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  function handleChangeTheme(newTheme: 'light' | 'dark') {
    setTheme(newTheme)
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-start justify-center gap-3" ref={ref}>
      <BoxLogin ref={ref} />
      {mounted ? (
        theme === 'light' ? (
          <button
            className="group/theme z-50 flex cursor-pointer flex-col items-center"
            onClick={() => handleChangeTheme('dark')}
          >
            <Moon
              size={28}
              className="transition-colors duration-500 group-hover/theme:text-green-600"
            />
            <span className="text-xs font-semibold opacity-0 transition-all duration-500 group-hover/theme:text-green-600 group-hover/theme:opacity-100">
              Tema
            </span>
          </button>
        ) : (
          <button
            className="group/theme z-50 flex cursor-pointer flex-col items-center"
            onClick={() => handleChangeTheme('light')}
          >
            <Sun
              size={28}
              className="transition-colors duration-500 group-hover/theme:text-green-600"
            />
            <span className="text-xs font-semibold opacity-0 transition-all duration-500 group-hover/theme:text-green-600 group-hover/theme:opacity-100">
              Tema
            </span>
          </button>
        )
      ) : null}
    </div>
  )
}
