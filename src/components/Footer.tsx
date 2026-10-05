import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer page-container">
      <p>© {new Date().getFullYear()} MUSE</p>
      <span className="footer-note">A space for what comes next.</span>
      <a href="#" className="flex items-center gap-2">
        Back to top <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </footer>
  )
}
