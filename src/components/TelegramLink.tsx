import type { ReactNode } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { TELEGRAM_URL } from '../data/site'
import './TelegramLink.css'

interface TelegramLinkProps {
  className?: string
  children?: ReactNode
  label?: string
  variant?: 'outline' | 'primary' | 'compact'
  showArrow?: boolean
}

export function TelegramLink({ className = '', children, label = 'Open in Telegram', variant = 'outline', showArrow = false }: TelegramLinkProps) {
  return (
    <a
      href={TELEGRAM_URL}
      className={`telegram-link telegram-link--${variant} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title="Demo Telegram link"
    >
      <Send className="telegram-link-icon" size={17} strokeWidth={1.6} aria-hidden="true" />
      <span className="telegram-link-label">{children ?? label}</span>
      {showArrow && <ArrowUpRight className="telegram-link-arrow" size={17} strokeWidth={1.5} aria-hidden="true" />}
    </a>
  )
}
