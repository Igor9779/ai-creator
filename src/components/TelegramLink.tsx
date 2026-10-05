import type { ReactNode } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { TELEGRAM_URL } from '../data/site'
import { useLanguage } from '../i18n/context'
import './TelegramLink.css'

interface TelegramLinkProps {
  className?: string
  children?: ReactNode
  label?: string
  variant?: 'outline' | 'primary' | 'compact'
  showArrow?: boolean
}

export function TelegramLink({ className = '', children, label, variant = 'outline', showArrow = false }: TelegramLinkProps) {
  const { t } = useLanguage()
  const translatedLabel = label ?? t('openTelegram')
  return (
    <a
      href={TELEGRAM_URL}
      className={`telegram-link telegram-link--${variant} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={translatedLabel}
      title={t('telegramPreview')}
    >
      <Send className="telegram-link-icon" size={17} strokeWidth={1.6} aria-hidden="true" />
      <span className="telegram-link-label">{children ?? translatedLabel}</span>
      {showArrow && <ArrowUpRight className="telegram-link-arrow" size={17} strokeWidth={1.5} aria-hidden="true" />}
    </a>
  )
}
