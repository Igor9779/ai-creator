import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/context'
import { languages } from '../i18n/types'
import './LanguageSelector.css'

export function LanguageSelector({ onOpen }: { onOpen: () => void }) {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closingRef = useRef(false)
  const menuId = useId()

  const close = useCallback((restoreFocus = false) => {
    const menu = menuRef.current
    if (!menu || closingRef.current) return
    closingRef.current = true
    if (restoreFocus) triggerRef.current?.focus({ preventScroll: true })
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOpen(false)
      return
    }
    const animation = menu.animate([
      { opacity: getComputedStyle(menu).opacity, transform: getComputedStyle(menu).transform },
      { opacity: 0, transform: 'translateY(-4px)' },
    ], { duration: 130, easing: 'ease-in', fill: 'forwards' })
    void animation.finished.then(() => setOpen(false)).catch(() => setOpen(false))
  }, [])

  useLayoutEffect(() => {
    if (!open) return
    const menu = menuRef.current
    menu?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus({ preventScroll: true })
    const outside = (event: Event) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) close()
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        close(true)
      }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('focusin', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('focusin', outside)
      document.removeEventListener('keydown', escape)
      menu?.getAnimations().forEach((animation) => animation.cancel())
    }
  }, [open, close])

  function showMenu() {
    closingRef.current = false
    onOpen()
    setOpen(true)
  }

  return (
    <div ref={rootRef} className="language-selector">
      <button
        ref={triggerRef}
        type="button"
        className="language-trigger"
        aria-label={`${t('language')}: ${language.toUpperCase()}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => open ? close() : showMenu()}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            if (!open) showMenu()
            else menuRef.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus()
          }
        }}
      >
        <span>{language.toUpperCase()}</span>
        <ChevronDown size={12} strokeWidth={1.5} aria-hidden="true" />
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          className="language-menu"
          role="menu"
          aria-label={t('chooseLanguage')}
          onKeyDown={(event) => {
            if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
            event.preventDefault()
            const options = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]'))
            const index = options.findIndex((option) => option === document.activeElement)
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length
            options[next]?.focus()
          }}
        >
          {languages.map((option) => (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={language === option.id}
              tabIndex={-1}
              onClick={() => { setLanguage(option.id); close(true) }}
            >
              <span className="language-code">{option.code}</span>
              <span lang={option.htmlLang}>{option.name}</span>
              <span className="language-active-dot" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
