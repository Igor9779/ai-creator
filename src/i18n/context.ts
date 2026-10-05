import { createContext, useContext } from 'react'
import type { Language, Localized } from './types'
import type { TranslationKey } from './translations'

export interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey, values?: Readonly<Record<string, string | number>>) => string
  text: (value: Localized<string> | string) => string
}

export const LanguageContext = createContext<LanguageState | null>(null)

export function useLanguage(): LanguageState {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
