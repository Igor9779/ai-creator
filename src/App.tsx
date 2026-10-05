import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CreatorDiscovery } from './components/CreatorDiscovery'
import { Vision } from './components/Vision'
import { FinalConversation } from './components/FinalConversation'
import { useSectionReveal } from './hooks/useSectionReveal'

export default function App() {
  const mainRef = useSectionReveal()

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" ref={mainRef}>
        <Hero />
        <CreatorDiscovery />
        <Vision />
        <FinalConversation />
      </main>
      <Footer />
    </>
  )
}
