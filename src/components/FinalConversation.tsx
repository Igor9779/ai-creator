import { creators } from '../data/creators'
import { TelegramLink } from './TelegramLink'
import './FinalConversation.css'

export function FinalConversation() {
  return (
    <section className="final-conversation page-container" aria-labelledby="final-conversation-title">
      <div className="final-conversation-copy" data-reveal>
        <p className="eyebrow"><span className="accent-dot" aria-hidden="true" />THE NEXT CHAPTER</p>
        <h2 id="final-conversation-title">Your next <em>conversation</em> is waiting.</h2>
        <p>Meet the creators you won&apos;t find anywhere else.</p>
      </div>
      <div className="final-conversation-action" data-reveal>
        <div className="final-conversation-creators">
          <ul aria-label="The four MUSE creators">
            {creators.map((creator) => (
              <li key={creator.id}><img src={creator.avatar} alt={creator.name} width={256} height={256} loading="lazy" decoding="async" /></li>
            ))}
          </ul>
          <span>Four voices. Find yours.</span>
        </div>
        <TelegramLink label="Continue in Telegram" variant="primary" showArrow />
        <p className="final-conversation-note">Demo experience · Telegram link preview</p>
      </div>
    </section>
  )
}
