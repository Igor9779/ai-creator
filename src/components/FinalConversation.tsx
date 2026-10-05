import { useLanguage } from '../i18n/context'
import { creators } from '../data/creators'
import { TelegramLink } from './TelegramLink'
import './FinalConversation.css'

export function FinalConversation() {
  const { t } = useLanguage()
  return (
    <section className="final-conversation page-container" aria-labelledby="final-conversation-title">
      <div className="final-conversation-copy" data-reveal>
        <p className="eyebrow"><span className="accent-dot" aria-hidden="true" />{t('nextChapter')}</p>
        <h2 id="final-conversation-title">{t('yourNext')} <em>{t('conversation')}</em> {t('isWaiting')}</h2>
        <p>{t('finalDescription')}</p>
      </div>
      <div className="final-conversation-action" data-reveal>
        <div className="final-conversation-creators">
          <ul aria-label={t('fourCreators')}>
            {creators.map((creator) => (
              <li key={creator.id}><img src={creator.avatar} alt={creator.name} width={256} height={256} loading="lazy" decoding="async" /></li>
            ))}
          </ul>
          <span>{t('fourVoices')}</span>
        </div>
        <TelegramLink label={t('continueTelegram')} variant="primary" showArrow />
        <p className="final-conversation-note">{t('telegramDemo')}</p>
      </div>
    </section>
  )
}
