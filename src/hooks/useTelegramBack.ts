import { useEffect, useEffectEvent } from 'react'
import { bindTelegramBack } from '../lib/telegram'

/** One native back handler follows the profile's current view without rebinding. */
export function useTelegramBack(onBack: () => void) {
  const handleBack = useEffectEvent(onBack)
  useEffect(() => bindTelegramBack(() => handleBack()), [])
}
