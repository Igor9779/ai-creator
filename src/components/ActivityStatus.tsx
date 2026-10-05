import { useLanguage } from '../i18n/context'
import './ActivityStatus.css'

export function ActivityStatus({ className = '' }: { className?: string }) {
  const { t } = useLanguage()
  return (
    <p className={`activity-status ${className}`.trim()}>
      <span className="accent-dot" aria-hidden="true" />
      {t('activity')}
    </p>
  )
}
