import { useLanguage } from '../i18n/context'
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'
import { heroEditionLabel, heroPortraits } from '../data/hero'
import { TelegramLink } from './TelegramLink'

export function Hero() {
  const { t, text } = useLanguage()
  return (
    <section id="discover" className="hero page-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="accent-dot" aria-hidden="true" />
          {t('heroEyebrow')} <span className="eyebrow-divider" aria-hidden="true">/</span> 2026
        </p>
        <h1 id="hero-title" className="hero-title">
          <span>{t('heroLine1')} </span>
          <em>{t('heroLine2')} </em>
          <span>{t('heroLine3')} </span>
          <span>{t('heroLine4')}</span>
        </h1>
        <p className="hero-description">
          {t('heroDescription')}
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#creators">
            <span>{t('exploreCreators')}</span>
            <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
          <TelegramLink className="hero-telegram" />
        </div>
        <div className="hero-footnote">
          <Asterisk className="text-accent" size={22} strokeWidth={1.3} aria-hidden="true" />
          <p>{t('artificial')} <span>{t('individual')}</span></p>
        </div>
        <p className="hero-demo-note">{t('heroDemo')}</p>
      </div>

      <div className="hero-portraits" role="group" aria-label={t('heroPortraits')}>
        <span className="portrait-coordinate" aria-hidden="true">MUSE / {t('newVoices')}</span>
        <div className="portrait-orbit" aria-hidden="true" />
        {heroPortraits.map((portrait) => (
          <figure key={portrait.creator.id} className={`hero-portrait portrait-${portrait.placement}`}>
            <div className="portrait-photo">
              <img
                src={portrait.creator.coverImage}
                alt={text(portrait.creator.coverImageAlt)}
                width={800}
                height={1200}
                decoding="async"
                fetchPriority={portrait.placement === 'foreground' ? 'high' : 'auto'}
              />
            </div>
            <figcaption className="portrait-caption">
              <span className="portrait-label">{t(portrait.placement === 'foreground' ? 'aiPersonality' : 'ai')} / {portrait.number}</span>
              <span className="portrait-name">{portrait.creator.name}<span className="portrait-name-dot" aria-hidden="true">.</span></span>
              <span className="portrait-description">{text(portrait.creator.category)}</span>
            </figcaption>
          </figure>
        ))}
        <div className="portrait-note">
          <Asterisk size={19} strokeWidth={1.3} className="text-accent" aria-hidden="true" />
          <span>{t('moreThanFace')}<br /><em>{t('pointOfView')}</em></span>
        </div>
        <span className="portrait-edition" aria-hidden="true">{t('firstGeneration')} — {heroEditionLabel}</span>
      </div>

      <div className="hero-bottomline">
        <a href="#creators" className="scroll-link">
          <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
          {t('newConnection')}
        </a>
        <span className="edition-label">{t('differentWorlds')}</span>
      </div>
    </section>
  )
}
