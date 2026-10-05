import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react'
import { heroEditionLabel, heroPortraits } from '../data/hero'
import { TelegramLink } from './TelegramLink'

export function Hero() {
  return (
    <section id="discover" className="hero page-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="accent-dot" aria-hidden="true" />
          AI CREATORS <span className="eyebrow-divider" aria-hidden="true">/</span> 2026
        </p>
        <h1 id="hero-title" className="hero-title">
          <span>Meet the </span>
          <em>personalities </em>
          <span>you&apos;ve been </span>
          <span>looking for.</span>
        </h1>
        <p className="hero-description">
          Explore digital creators with stories, opinions and personalities of their own.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#creators">
            Explore creators
            <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </a>
          <TelegramLink className="hero-telegram" />
        </div>
        <div className="hero-footnote">
          <Asterisk className="text-accent" size={22} strokeWidth={1.3} aria-hidden="true" />
          <p>Artificial by nature. <span>Individual by design.</span></p>
        </div>
        <p className="hero-demo-note">Demo experience · Fictional creators and activity.</p>
      </div>

      <div className="hero-portraits" role="group" aria-label="Meet two MUSE digital personalities">
        <span className="portrait-coordinate" aria-hidden="true">MUSE / NEW VOICES</span>
        <div className="portrait-orbit" aria-hidden="true" />
        {heroPortraits.map((portrait) => (
          <figure key={portrait.creator.id} className={`hero-portrait portrait-${portrait.placement}`}>
            <div className="portrait-photo">
              <img
                src={portrait.creator.coverImage}
                alt={portrait.creator.coverImageAlt}
                width={800}
                height={1200}
                decoding="async"
                fetchPriority={portrait.placement === 'foreground' ? 'high' : 'auto'}
              />
            </div>
            <figcaption className="portrait-caption">
              <span className="portrait-label">{portrait.placement === 'foreground' ? 'AI PERSONALITY' : 'AI'} / {portrait.number}</span>
              <span className="portrait-name">{portrait.creator.name}<span className="portrait-name-dot" aria-hidden="true">.</span></span>
              <span className="portrait-description">{portrait.creator.category}</span>
            </figcaption>
          </figure>
        ))}
        <div className="portrait-note">
          <Asterisk size={19} strokeWidth={1.3} className="text-accent" aria-hidden="true" />
          <span>More than a face.<br /><em>A point of view.</em></span>
        </div>
        <span className="portrait-edition" aria-hidden="true">THE FIRST GENERATION — {heroEditionLabel}</span>
      </div>

      <div className="hero-bottomline">
        <a href="#creators" className="scroll-link">
          <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
          A new kind of connection
        </a>
        <span className="edition-label">DISTINCT VOICES. DIFFERENT WORLDS.</span>
      </div>
    </section>
  )
}
