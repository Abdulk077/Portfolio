"use client"

import type React from "react"

import { useEffect, useState, createContext } from "react"

export const ThemeToggleContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({ isDark: false, toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference or localStorage
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (localStorage.getItem("theme") === null && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setIsDark(isDarkMode)
    applyTheme(isDarkMode)
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", dark ? "dark" : "light")
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
  }

  if (!mounted) return <>{children}</>

  return <ThemeToggleContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeToggleContext.Provider>
}
