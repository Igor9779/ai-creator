import { DEMO_ACTIVITY_LABEL } from '../data/site'
import './ActivityStatus.css'

export function ActivityStatus({ className = '' }: { className?: string }) {
  return (
    <p className={`activity-status ${className}`.trim()}>
      <span className="accent-dot" aria-hidden="true" />
      {DEMO_ACTIVITY_LABEL}
    </p>
  )
}
