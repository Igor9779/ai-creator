import { useLanguage } from '../i18n/context'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer page-container">
      <p>© {new Date().getFullYear()} MUSE</p>
      <span className="footer-note">{t('footerNote')}</span>
      <a href="#" className="flex items-center gap-2">
        {t('backToTop')} <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </footer>
  )
}
