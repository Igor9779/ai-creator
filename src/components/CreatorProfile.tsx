import { useLanguage } from '../i18n/context'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MessageCircle, X } from 'lucide-react'
import type { Creator } from '../types/creator'
import { CreatorPosts } from './CreatorPosts'
import { CreatorConversation } from './CreatorConversation'
import { TelegramLink } from './TelegramLink'
import { ActivityStatus } from './ActivityStatus'
import { getTelegramEnvironment, telegramHaptic } from '../lib/telegram'
import { useTelegramBack } from '../hooks/useTelegramBack'
import './CreatorProfile.css'

interface CreatorProfileProps {
  creator: Creator | null
  onClose: () => void
}

const countFormatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })

export function CreatorProfile({ creator, onClose }: CreatorProfileProps) {
  const { t } = useLanguage()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closingRef = useRef(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!creator || !dialog) return

    const scrollY = window.scrollY
    const body = document.body
    const previousStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    }
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`
    }
    body.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'
    closingRef.current = false
    dialog.showModal()

    return () => {
      Object.assign(body.style, previousStyles)
      window.scrollTo({ top: scrollY, behavior: 'instant' })
      dialog.getAnimations().forEach((animation) => animation.cancel())
    }
  }, [creator])

  function closeProfile() {
    const dialog = dialogRef.current
    if (!dialog?.open || closingRef.current) return
    closingRef.current = true

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close()
      return
    }

    const desktop = window.matchMedia('(min-width: 960px)').matches
    const currentStyle = getComputedStyle(dialog)
    const animation = dialog.animate(
      [
        { opacity: currentStyle.opacity, transform: currentStyle.transform },
        { opacity: desktop ? 0 : 1, transform: desktop ? 'translateY(10px) scale(.99)' : 'translateY(100%)' },
      ],
      { duration: 240, easing: 'cubic-bezier(.4, 0, 1, 1)', fill: 'forwards' },
    )
    void animation.finished.then(() => {
      dialog.close()
      animation.cancel()
    }).catch(() => {
      if (dialog.open) dialog.close()
    })
  }

  return (
    <dialog
      ref={dialogRef}
      className="creator-profile"
      aria-label={creator?.name}
      aria-describedby="profile-bio"
      onClose={onClose}
      onCancel={(event) => { event.preventDefault(); closeProfile() }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]'))
          .filter((control) => control.getClientRects().length > 0)
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          closeProfile()
        }
      }}
    >
      <span className="profile-handle" aria-hidden="true" />
      <button type="button" className="profile-close icon-button" aria-label={t('closeProfile')} autoFocus onClick={closeProfile}>
        <X size={22} strokeWidth={1.4} aria-hidden="true" />
      </button>
      {creator && <ProfileContent key={creator.id} creator={creator} onRequestClose={closeProfile} />}
    </dialog>
  )
}

function ProfileContent({ creator, onRequestClose }: { creator: Creator; onRequestClose: () => void }) {
  const { language, t, text } = useLanguage()
  const [conversationOpen, setConversationOpen] = useState(false)
  const [conversationStarted, setConversationStarted] = useState(false)
  const [likedPostIds, setLikedPostIds] = useState<ReadonlySet<string>>(() => new Set())
  const [contextVisible, setContextVisible] = useState(false)
  const startRef = useRef<HTMLButtonElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const identityRef = useRef<HTMLElement>(null)
  const { isTelegramMiniApp } = getTelegramEnvironment()
  useTelegramBack(() => {
    if (conversationOpen) setConversationOpen(false)
    else onRequestClose()
  })

  useEffect(() => {
    const scroll = scrollRef.current
    const identity = identityRef.current
    if (!scroll || !identity) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setContextVisible(!entry.isIntersecting && entry.boundingClientRect.top < scroll.getBoundingClientRect().top)
    }, { root: scroll, rootMargin: '-76px 0px 0px 0px', threshold: 0 })
    observer.observe(identity)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!conversationOpen && conversationStarted) startRef.current?.focus({ preventScroll: true })
  }, [conversationOpen, conversationStarted])

  return (
    <>
      <div className="profile-view" hidden={conversationOpen}>
        <div className="profile-context" data-visible={contextVisible} aria-hidden="true">
          <img src={creator.avatar} alt="" width={256} height={256} />
          <div><span className="profile-context-name">{creator.name}</span><span className="profile-context-username">@{creator.username}</span></div>
        </div>
        <div ref={scrollRef} className="profile-scroll" tabIndex={0} role="region" aria-label={t('profileContent')}>
          <figure className="profile-visual">
            <img src={creator.coverImage} alt={text(creator.coverImageAlt)} width={800} height={1200} decoding="async" />
            <figcaption className="profile-photo-caption">
              <p className="eyebrow"><span className="accent-dot" />{t('museOriginal')} / {creator.name}</p>
              <p className="profile-photo-line">{t('ownMind')}<br /><em>{t('ofTheirOwn')}</em></p>
            </figcaption>
            <span className="profile-photo-edition" aria-hidden="true">{t('firstGeneration')} / 2026</span>
          </figure>

          <div className="profile-body">
            <header ref={identityRef} className="profile-identity">
              <img className="profile-avatar" src={creator.avatar} alt="" width={256} height={256} decoding="async" />
              <p className="eyebrow profile-category">{text(creator.category)}</p>
              <div className="profile-name-row">
                <h2 id="profile-title" tabIndex={-1}>{creator.name}<span aria-hidden="true">.</span></h2>
                <span className="profile-username">@{creator.username}</span>
              </div>
              <ActivityStatus className="profile-activity" />
              <p id="profile-bio" className="profile-bio">{text(creator.bio)}</p>
            </header>

            <ul className="profile-personality" aria-label={t('personality')}>
              {creator.personality[language].map((trait) => <li key={trait}>{trait}</li>)}
            </ul>

            <dl className="profile-stats">
              <div><dt>{t('followers')}</dt><dd>{countFormatter.format(creator.stats.followers)}</dd></div>
              <div><dt>{t('posts')}</dt><dd>{countFormatter.format(creator.stats.posts)}</dd></div>
              <div><dt>{t('likes')}</dt><dd>{countFormatter.format(creator.stats.likes)}</dd></div>
            </dl>
            <p className="profile-stats-note">{t('demoCounts')}</p>

            <CreatorPosts
              posts={creator.posts}
              likedPostIds={likedPostIds}
              onToggleLike={(postId) => setLikedPostIds((current) => {
                const next = new Set(current)
                if (next.has(postId)) next.delete(postId)
                else next.add(postId)
                return next
              })}
            />

            <div className="profile-interests">
              <span className="eyebrow">{t('theirWorld')}</span>
              <ul aria-label={t('interests')}>{creator.tags[language].map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="profile-actions">
          <button
            type="button"
            ref={startRef}
            className="primary-link profile-start-conversation"
            aria-expanded={conversationOpen}
            aria-controls={conversationStarted ? 'creator-chat' : undefined}
            onClick={() => { telegramHaptic(); setConversationStarted(true); setConversationOpen(true) }}
          >
            <MessageCircle size={17} strokeWidth={1.5} aria-hidden="true" />
            <span>{t('startConversation')}</span>
            <ArrowUpRight className="profile-action-arrow" size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
          {!isTelegramMiniApp && <TelegramLink className="profile-telegram" showArrow />}
        </div>
      </div>
      {conversationStarted && <CreatorConversation creator={creator} active={conversationOpen} onBack={() => setConversationOpen(false)} />}
    </>
  )
}
