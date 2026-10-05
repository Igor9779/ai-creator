import { useState } from 'react'
import { Asterisk } from 'lucide-react'
import { discoveryItems } from '../data/discovery'
import type { Creator } from '../types/creator'
import { CreatorCard } from './CreatorCard'
import { CreatorProfile } from './CreatorProfile'
import './CreatorDiscovery.css'

export function CreatorDiscovery() {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null)

  return (
    <section id="creators" className="creator-discovery page-container" aria-labelledby="discovery-title">
      <div className="discovery-heading" data-reveal>
        <div>
          <p className="eyebrow discovery-eyebrow"><span className="accent-dot" aria-hidden="true" />THE CREATOR EDIT / 01—04</p>
          <h2 id="discovery-title">Choose your <em>vibe.</em></h2>
          <p className="discovery-description">Four personalities. Four different worlds.</p>
        </div>
        <div className="discovery-note" aria-hidden="true">
          <Asterisk size={27} strokeWidth={1.2} />
          <span>A different voice.<br /><em>A familiar feeling.</em></span>
        </div>
      </div>

      <div className="discovery-grid">
        {discoveryItems.map((item) => (
          <CreatorCard key={item.creator.id} item={item} onViewProfile={setSelectedCreator} />
        ))}
      </div>
      <CreatorProfile creator={selectedCreator} onClose={() => setSelectedCreator(null)} />
    </section>
  )
}
