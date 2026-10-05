import { useLanguage } from '../i18n/context'
export function Vision() {
  const { t } = useLanguage()
  return (
    <section id="vision" className="vision page-container" aria-labelledby="vision-title">
      <div className="vision-label">
        <span className="eyebrow">{t('visionEyebrow')}</span>
        <span className="vision-index" aria-hidden="true">01 — ∞</span>
      </div>
      <div className="vision-copy" data-reveal>
        <h2 id="vision-title">{t('distinctVoices')} <em>{t('newPerspectives')}</em></h2>
        <p>
          {t('visionDescription')}
        </p>
      </div>
    </section>
  )
}
