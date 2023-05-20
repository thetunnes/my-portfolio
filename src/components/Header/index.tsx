"use client";
import { List, Moon, Sun } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";
import { NavLink } from "../NavLink";
import { AnimationText } from "../AnimationText";
import { useTheme } from "next-themes";

const listMenus = [
  {
    text: "Sobre mim",
    url: "/",
  },
  {
    text: "Experiências anteriores",
    url: "/previous-experience",
  },
  {
    text: "Projetos de estudo",
    url: "/projects",
  },
];

export function Header() {
  const { setTheme, theme } = useTheme();

  function handleChangeTheme(newTheme: "light" | "dark") {
    setTheme(newTheme);
  }

  console.log(window.location.pathname === listMenus[0].url)
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <header className="h-20 z-50 backdrop-blur fixed top-0 bottom-0 left-0 right-0 flex items-center justify-between gap-5 py-6 mx-6 border-b border-zinc-800 dark:border-gray-200">
      <List
        size={24}
        className=" cursor-pointer hover:text-green-600 transition-all duration-500 hidden tall:block"
        onClick={() => setIsOpenMobileMenu((bool) => !bool)}
      />

      <AnimationText className="z-50">The Dev Tunnes. </AnimationText>

      <nav className="tall:hidden z-10 absolute w-full flex flex-1 justify-center items-center gap-4">
        {listMenus.map((menu) => (
          <NavLink key={menu.text} text={menu.text} url={menu.url} />
        ))}
      </nav>

      {isOpenMobileMenu && (
        <nav className=" absolute top-full my-2 flex flex-col invisible h-0 w-0 tall:h-auto tall:w-auto tall:visible bg-gray-800 border border-green-400 rounded p-2 items-stretch gap-2">
          {listMenus.map((menu) => (
            <Link key={menu.text} href={menu.url} className={`${window.location.pathname === menu.url && 'text-green-400'} hover:text-green-400 transition-colors`}>
              {menu.text}
            </Link>
          ))}
        </nav>
      )}

      {theme === "light" ? (
        <Moon
          size={24}
          className="z-50 cursor-pointer hover:text-green-600 transition-all duration-500"
          onClick={() => handleChangeTheme("dark")}
        />
      ) : (
        <Sun
          size={24}
          className="z-50 cursor-pointer hover:text-green-600 transition-all duration-500"
          onClick={() => handleChangeTheme("light")}
        />
      )}
    </header>
  );
}
