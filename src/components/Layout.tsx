import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Layout.css'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/mui', label: 'Material UI' },
  { to: '/antd', label: 'Ant Design' },
  { to: '/chakra', label: 'Chakra UI' },
  { to: '/mantine', label: 'Mantine' },
  { to: '/radix', label: 'Radix UI' },
]

export default function Layout() {
  const { primaryColor, setPrimaryColor, theme, setTheme } = useTheme()
  const [colorInput, setColorInput] = useState(primaryColor)

  const applyColor = () => {
    setPrimaryColor(colorInput)
  }

  return (
    <div className="layout">
      <header className="layout-header">
        <NavLink
          to="/"
          className="layout-logo"
          style={({ isActive }) => ({
            color: isActive ? 'var(--primary)' : 'inherit',
          })}
        >
          React UI Demo
        </NavLink>
        <nav className="layout-nav">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className="layout-nav-link"
              style={({ isActive }) => ({
                color: isActive ? 'var(--primary)' : 'inherit',
                background: isActive ? 'var(--primary-bg)' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="layout-controls">
          <div className="layout-color-row">
            <input
              type="color"
              className="layout-color-picker"
              value={primaryColor.startsWith('#') && primaryColor.length <= 7 ? primaryColor : '#646cff'}
              onChange={(e) => {
                setColorInput(e.target.value)
                setPrimaryColor(e.target.value)
              }}
              title="Выбор цвета"
            />
            <input
              type="text"
              className="layout-color-input"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              onBlur={applyColor}
              onKeyDown={(e) => e.key === 'Enter' && applyColor()}
              placeholder="#646cff или rgb(100,108,255)"
              title="Primary цвет (hex или rgb)"
            />
            <button type="button" className="layout-btn layout-btn-apply" onClick={applyColor}>
              Применить
            </button>
          </div>
          <div className="layout-theme-row">
            <span className="layout-theme-label">Тема:</span>
            <button
              type="button"
              className={`layout-theme-btn ${theme === 'light' ? 'layout-theme-btn-active' : ''}`}
              onClick={() => setTheme('light')}
              aria-pressed={theme === 'light'}
            >
              Светлая
            </button>
            <button
              type="button"
              className={`layout-theme-btn ${theme === 'dark' ? 'layout-theme-btn-active' : ''}`}
              onClick={() => setTheme('dark')}
              aria-pressed={theme === 'dark'}
            >
              Тёмная
            </button>
          </div>
        </div>
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
