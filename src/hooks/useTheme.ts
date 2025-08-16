import { useState, useEffect } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(isDarkMode ? "dark" : "light")

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [theme])

  return { theme }
}