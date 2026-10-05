import { useLanguage } from '../i18n/context'
import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Creator } from '../types/creator'
import type { DiscoveryItem } from '../data/discovery'

interface CreatorCardProps {
  item: DiscoveryItem
  onViewProfile: (creator: Creator) => void
}

export function CreatorCard({ item, onViewProfile }: CreatorCardProps) {
  const { t, text } = useLanguage()
  const { creator, layout, number, imagePosition } = item
  const titleId = `discovery-${creator.id}`
  const imageStyle = { '--creator-image-position': imagePosition } as CSSProperties

  return (
    <article className={`creator-card creator-card--${layout}`} aria-labelledby={titleId} data-reveal>
      <button
        type="button"
        className="creator-card-image"
        style={imageStyle}
        aria-label={t('openProfile', { name: creator.name })}
        aria-haspopup="dialog"
        onClick={() => onViewProfile(creator)}
      >
        <img
          src={creator.coverImage}
          alt={text(creator.coverImageAlt)}
          width={800}
          height={1200}
          loading="lazy"
          decoding="async"
        />
        <span className="creator-card-number" aria-hidden="true">{number}</span>
        <span className="creator-image-corner" aria-hidden="true">
          <ArrowUpRight size={18} strokeWidth={1.4} />
        </span>
      </button>

      <div className="creator-card-details">
        <div className="creator-card-heading">
          <h3 id={titleId}>{creator.name}<span aria-hidden="true">.</span></h3>
          <span className="creator-card-username">@{creator.username}</span>
        </div>
        <p className="creator-card-category">{text(creator.category)}</p>
        <p className="creator-card-bio">{text(creator.bio)}</p>
        <button
          type="button"
          className="creator-profile-link"
          aria-label={t('viewNamedProfile', { name: creator.name })}
          aria-haspopup="dialog"
          onClick={() => onViewProfile(creator)}
        >
          {t('viewProfile')}
          <ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
