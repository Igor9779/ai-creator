import { useLanguage } from '../i18n/context'
import { useState } from 'react'
import { Asterisk } from 'lucide-react'
import { discoveryItems } from '../data/discovery'
import type { Creator } from '../types/creator'
import { CreatorCard } from './CreatorCard'
import { CreatorProfile } from './CreatorProfile'
import { getTelegramEnvironment, telegramHaptic } from '../lib/telegram'
import './CreatorDiscovery.css'

export function CreatorDiscovery() {
  const { t } = useLanguage()
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null)
  const { isTelegramMiniApp, firstName } = getTelegramEnvironment()

  function viewProfile(creator: Creator) {
    telegramHaptic()
    setSelectedCreator(creator)
  }

  return (
    <section id="creators" className="creator-discovery page-container" aria-labelledby="discovery-title">
      <div className="discovery-heading" data-reveal>
        <div>
          {isTelegramMiniApp && firstName && <p className="mini-welcome">{t('telegramWelcome', { name: firstName })}</p>}
          <p className="eyebrow discovery-eyebrow"><span className="accent-dot" aria-hidden="true" />{t('creatorEdit')} / 01—04</p>
          <h2 id="discovery-title">{t('chooseVibe')} <em>{t('vibe')}</em></h2>
          <p className="discovery-description">{t('discoveryDescription')}</p>
          {isTelegramMiniApp && <p className="mini-demo-note">{t('heroDemo')}</p>}
        </div>
        <div className="discovery-note" aria-hidden="true">
          <Asterisk size={27} strokeWidth={1.2} />
          <span>{t('differentVoice')}<br /><em>{t('familiarFeeling')}</em></span>
        </div>
      </div>

      <div className="discovery-grid">
        {discoveryItems.map((item) => (
          <CreatorCard key={item.creator.id} item={item} onViewProfile={viewProfile} />
        ))}
      </div>
      <CreatorProfile creator={selectedCreator} onClose={() => setSelectedCreator(null)} />
    </section>
  )
}
