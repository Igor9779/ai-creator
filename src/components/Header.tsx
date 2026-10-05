import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/site'
import { TelegramLink } from './TelegramLink'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('pointerdown', closeOutside)
    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('pointerdown', closeOutside)
      desktopQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])

  return (
    <header ref={headerRef} className="site-header">
      <div className="header-inner page-container">
        <a href="#discover" className="wordmark" aria-label="MUSE home" onClick={() => setMenuOpen(false)}>
          MUSE<span className="wordmark-dot" aria-hidden="true">.</span>
        </a>

        <nav aria-label="Main navigation" className="desktop-navigation hidden md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <TelegramLink className="header-telegram" variant="compact">
            <span><span className="hidden sm:inline">Open in </span>Telegram</span>
          </TelegramLink>

          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button menu-button md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={21} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-navigation md:hidden"
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
        <p className="eyebrow">NEW PERSPECTIVES. REAL PERSONALITY.</p>
      </nav>
    </header>
  )
}
