'use client'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

type Props = {};

type Theme = "dark" | "light" | "system";

const ThemeSelector = (props: Props) => {
  const [ theme, setTheme] = useState<Theme>("system")

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setTheme("dark");
    else if (localStorage.getItem("theme") === "light") setTheme("light");
    else setTheme("system");
  }, [])

  const applySystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }

  const toggleTheme = (selectedTheme: string) => {
    if (selectedTheme === "system") {
      setTheme("system");
      localStorage.removeItem("theme");
      applySystemTheme();
    } else if (selectedTheme === "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (selectedTheme === "light") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className='flex gap-1 border border-violet-500 rounded-full p-1'>
      <MoonIcon
        className={`size-5 cursor-pointer hover:text-violet-500 hover:transition
          ${theme === "dark" ? 'text-violet-500' : 'opacity-50'}`}
        onClick={() => toggleTheme("dark")}
      />
      <SunIcon
        className={`size-5 cursor-pointer hover:text-violet-500 hover:transition
          ${theme === "light" ? 'text-violet-500' : 'opacity-50'}`}
        onClick={() => toggleTheme("light")}
      />
      <ComputerDesktopIcon
        className={`size-5 cursor-pointer hover:text-violet-500 hover:transition
          ${theme === "system" ? 'text-violet-500' : 'opacity-50'}`}
        onClick={() => toggleTheme("system")}
      />
    </div>
  )
}

export default ThemeSelector