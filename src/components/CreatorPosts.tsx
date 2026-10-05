import { useLanguage } from '../i18n/context'
import { useEffect, useRef, type CSSProperties } from 'react'
import { Heart, MessageCircle } from 'lucide-react'
import type { Post } from '../types/creator'
import './CreatorPosts.css'

const countFormatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })

interface CreatorPostsProps {
  posts: readonly Post[]
  likedPostIds: ReadonlySet<string>
  onToggleLike: (postId: string) => void
}

export function CreatorPosts({ posts, likedPostIds, onToggleLike }: CreatorPostsProps) {
  const { language, t, text } = useLanguage()
  const dateFormatter = new Intl.DateTimeFormat(language === 'ua' ? 'uk' : language, {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'UTC',
  })
  const feedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const feed = feedRef.current
    if (!feed || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.entered = 'true'
          observer.unobserve(entry.target)
        }
      }
    }, { root: feed.closest('.profile-scroll'), rootMargin: '0px 0px -96px 0px', threshold: 0.08 })

    feed.querySelectorAll<HTMLElement>('.profile-post').forEach((post) => {
      post.dataset.entered = 'false'
      observer.observe(post)
    })
    return () => observer.disconnect()
  }, [posts])

  return (
    <section id="profile-content" className="profile-content" aria-labelledby="profile-content-title">
      <div className="profile-section-heading">
        <div>
          <p className="eyebrow">{t('recentNotes')}</p>
          <h3 id="profile-content-title">{t('insideWorld')}</h3>
        </div>
        <span className="profile-content-count">{String(posts.length).padStart(2, '0')} / {t('notes')}</span>
      </div>
      <div ref={feedRef} className="profile-posts">
        {posts.map((post, index) => {
          const liked = likedPostIds.has(post.id)
          const likes = countFormatter.format(post.likes + (liked ? 1 : 0))
          const captionId = `post-${post.id}-caption`
          const imageStyle = post.kind === 'image' ? { '--post-image-position': post.imagePosition ?? '50% 50%' } as CSSProperties : undefined

          return (
            <article key={post.id} className={`profile-post profile-post--${post.kind}`} aria-labelledby={captionId}>
              <header className="profile-post-header">
                <div className="profile-post-topic"><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{text(post.topic)}</div>
                <time dateTime={post.createdAt} title={`${dateFormatter.format(new Date(post.createdAt))} UTC`}>{dateFormatter.format(new Date(post.createdAt))}</time>
              </header>
              {post.kind === 'image' ? (
                <>
                  <div className="profile-post-photo" style={imageStyle}>
                    <img src={post.image} alt={text(post.imageAlt)} width={post.imageWidth} height={post.imageHeight} loading="lazy" decoding="async" />
                  </div>
                  <p id={captionId} className="profile-post-caption">{text(post.caption)}</p>
                </>
              ) : (
                <p id={captionId} className="profile-post-quote"><span aria-hidden="true">“</span>{text(post.caption)}<span aria-hidden="true">”</span></p>
              )}
              <footer className="profile-post-footer">
                <button
                  type="button"
                  className="profile-post-like"
                  aria-pressed={liked}
                  aria-label={t(liked ? 'unlikePost' : 'likePost', { count: likes })}
                  aria-describedby={captionId}
                  title={t('likeCount', { count: (post.likes + (liked ? 1 : 0)).toLocaleString('en') })}
                  onClick={() => onToggleLike(post.id)}
                >
                  <Heart size={17} strokeWidth={1.5} fill={liked ? 'currentColor' : 'none'} aria-hidden="true" />{likes}
                </button>
                <span className="profile-post-comments"><MessageCircle size={16} strokeWidth={1.5} aria-hidden="true" />{post.comments}<span className="profile-comments-label"> {t('comments')}</span></span>
              </footer>
            </article>
          )
        })}
      </div>
    </section>
  )
}
