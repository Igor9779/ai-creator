import { useEffect, useRef } from 'react'

export function useSectionReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        (entry.target as HTMLElement).dataset.revealed = 'true'
        observer.unobserve(entry.target)
      }
    }, { rootMargin: '0px 0px -32px 0px', threshold: 0 })

    const sections = root.querySelectorAll<HTMLElement>('[data-reveal]')
    sections.forEach((section) => {
      // Content already on screen stays visible, including restored scroll positions.
      if (section.getBoundingClientRect().top < window.innerHeight) return
      section.dataset.revealed = 'false'
      observer.observe(section)
    })

    function revealFocusedContent(event: FocusEvent) {
      const section = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-reveal]') : null
      if (!section) return
      section.dataset.revealed = 'true'
      observer.unobserve(section)
    }
    root.addEventListener('focusin', revealFocusedContent)
    return () => {
      observer.disconnect()
      root.removeEventListener('focusin', revealFocusedContent)
      sections.forEach((section) => delete section.dataset.revealed)
    }
  }, [])

  return ref
}
