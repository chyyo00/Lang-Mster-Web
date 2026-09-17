import { NavLink } from 'react-router-dom'
import { LANGUAGES } from '../data/languages'
import { cn } from '../lib/utils'

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--bg-elevated)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-[var(--text-h)]">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--accent)] text-white">
            L
          </span>
          <span>Lang Master</span>
        </NavLink>
        <nav className="flex items-center gap-1">
          {LANGUAGES.map((lang) => (
            <NavLink
              key={lang.id}
              to={`/${lang.id}`}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[var(--accent-bg)] text-[var(--accent)]'
                    : 'text-[var(--text)] hover:bg-[var(--code-bg)] hover:text-[var(--text-h)]',
                )
              }
            >
              {lang.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
