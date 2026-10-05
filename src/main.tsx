import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/dm-sans/wght.css'
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import './index.css'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'
import { prepareTelegram } from './lib/telegram'
import './telegram.css'

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider><App /></LanguageProvider>
    </StrictMode>,
  )
}

// Even an unavailable host SDK must leave the standalone app usable.
void prepareTelegram().then(renderApp, renderApp)
