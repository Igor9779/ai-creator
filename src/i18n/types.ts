export type Language = 'en' | 'ua' | 'ru'

export type Localized<T> = Readonly<Record<Language, T>>

export const languages = [
  { id: 'en', code: 'EN', name: 'English', htmlLang: 'en' },
  { id: 'ua', code: 'UA', name: 'Українська', htmlLang: 'uk' },
  { id: 'ru', code: 'RU', name: 'Русский', htmlLang: 'ru' },
] as const satisfies readonly { id: Language; code: string; name: string; htmlLang: string }[]

export function isLanguage(value: string | null): value is Language {
  return languages.some(({ id }) => id === value)
}

/** Keep shared creator identity and assets separate from translated content. */
export function localized<T>(en: T, ua: T, ru: T): Localized<T> {
  return { en, ua, ru }
}
