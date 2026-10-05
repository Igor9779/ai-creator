import { useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext } from './context'
import type { LanguageState } from './context'
import { isLanguage, languages, type Language } from './types'
import { translations } from './translations'

const STORAGE_KEY = 'muse.language'

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return isLanguage(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useLayoutEffect(() => {
    document.documentElement.lang = languages.find(({ id }) => id === language)!.htmlLang
    document.title = translations[language].pageTitle
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', translations[language].pageDescription)
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Selecting a language still works when browser storage is unavailable.
    }
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key, values) => translations[language][key].replace(/\{(\w+)\}/g, (match: string, name: string) => String(values?.[name] ?? match)),
    text: (content) => typeof content === 'string' ? content : content[language],
  } satisfies LanguageState), [language])

  return <LanguageContext value={value}>{children}</LanguageContext>
}
