"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect } from "react"
import Link from "next/link";
import { NavLink } from "../NavLink";
import { AnimationText } from "../AnimationText";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, theme } = useTheme();

  function handleChangeTheme(newTheme: "light" | "dark") {
    setTheme(newTheme);
  }

  return (
    <header className="h-20 relative flex items-center justify-between gap-5 py-6 mx-6 border-b border-zinc-800 dark:border-gray-200">
      <AnimationText className="z-50">The Dev Tunnes. </AnimationText>

      <nav className="z-10 absolute w-full flex flex-1 justify-center items-center gap-4">
        <NavLink text="Sobre mim" url="/" />
        <NavLink text="Experiências anteriores" url="/previous-experience" />
        <NavLink text="Projetos de estudo" url="/" />
      </nav>

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
