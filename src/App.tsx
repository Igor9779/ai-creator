import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CreatorDiscovery } from './components/CreatorDiscovery'
import { Vision } from './components/Vision'
import { FinalConversation } from './components/FinalConversation'
import { useSectionReveal } from './hooks/useSectionReveal'
import { useLanguage } from './i18n/context'
import { getTelegramEnvironment, mountTelegram } from './lib/telegram'

export default function App() {
  const { t } = useLanguage()
  const mainRef = useSectionReveal()
  const { isTelegramMiniApp } = getTelegramEnvironment()
  useEffect(() => mountTelegram(), [])

  return (
    <>
      <a href="#main" className="skip-link" onClick={isTelegramMiniApp ? (event) => {
        event.preventDefault()
        mainRef.current?.focus()
      } : undefined}>{t('skipContent')}</a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={isTelegramMiniApp ? -1 : undefined}>
        {!isTelegramMiniApp && <Hero />}
        <CreatorDiscovery />
        {!isTelegramMiniApp && <><Vision /><FinalConversation /></>}
      </main>
      {!isTelegramMiniApp && <Footer />}
    </>
  )
}
