import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'

const STORAGE_KEY_PRIMARY = 'react-ui-demo-primary'
const STORAGE_KEY_THEME = 'react-ui-demo-theme'
const DEFAULT_PRIMARY = '#646cff'

export type ThemeMode = 'light' | 'dark'

type ThemeContextValue = {
  primaryColor: string
  setPrimaryColor: (color: string) => void
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function loadPrimary(): string {
  try {
    const s = localStorage.getItem(STORAGE_KEY_PRIMARY)
    if (s && s.trim()) return s.trim()
  } catch (_) {}
  return DEFAULT_PRIMARY
}

function loadTheme(): ThemeMode {
  try {
    const s = localStorage.getItem(STORAGE_KEY_THEME)
    if (s === 'dark' || s === 'light') return s
  } catch (_) {}
  return 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [primaryColor, setPrimaryState] = useState(loadPrimary)
  const [theme, setThemeState] = useState<ThemeMode>(loadTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setPrimaryColor = useCallback((color: string) => {
    const value = color.trim() || DEFAULT_PRIMARY
    setPrimaryState(value)
    try {
      localStorage.setItem(STORAGE_KEY_PRIMARY, value)
    } catch (_) {}
  }, [])

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY_THEME, next)
      document.documentElement.setAttribute('data-theme', next)
    } catch (_) {}
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(STORAGE_KEY_THEME, next)
        document.documentElement.setAttribute('data-theme', next)
      } catch (_) {}
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ primaryColor, setPrimaryColor, theme, setTheme, toggleTheme }),
    [primaryColor, setPrimaryColor, theme, setTheme, toggleTheme]
  )

  const wrapperStyle = useMemo(
    () =>
      ({
        '--primary': primaryColor,
        '--primary-hover': primaryColor,
      } as React.CSSProperties),
    [primaryColor]
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-root" data-theme={theme} style={wrapperStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
