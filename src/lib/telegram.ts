/** Small, typed boundary around Telegram's official Web App SDK.
 * Launch context controls presentation only; it never authenticates a user.
 * https://core.telegram.org/bots/webapps
 */
interface Insets {
  top: number
  bottom: number
  left: number
  right: number
}

type TelegramEvent = 'viewportChanged' | 'safeAreaChanged' | 'contentSafeAreaChanged' | 'themeChanged'

interface TelegramWebApp {
  platform: string
  initDataUnsafe?: { user?: { first_name?: unknown } }
  viewportHeight?: number
  viewportStableHeight?: number
  safeAreaInset?: Insets
  contentSafeAreaInset?: Insets
  ready: () => void
  expand: () => void
  isVersionAtLeast?: (version: string) => boolean
  setHeaderColor?: (color: string) => void
  setBackgroundColor?: (color: string) => void
  setBottomBarColor?: (color: string) => void
  hideKeyboard?: () => void
  onEvent?: (event: TelegramEvent, callback: () => void) => void
  offEvent?: (event: TelegramEvent, callback: () => void) => void
  BackButton?: {
    show: () => void
    hide: () => void
    onClick: (callback: () => void) => void
    offClick: (callback: () => void) => void
  }
  HapticFeedback?: { impactOccurred: (style: 'soft') => void }
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp }
    TelegramWebviewProxy?: { postEvent?: (event: string, data: string) => void }
  }
}

interface TelegramEnvironment {
  isTelegramMiniApp: boolean
  nativeBackSupported: boolean
  firstName?: string
}

let webApp: TelegramWebApp | undefined
let environment: Readonly<TelegramEnvironment> = { isTelegramMiniApp: false, nativeBackSupported: false }
let notifiedReady = false
const BACKGROUND = '#111210'
const SDK_URL = 'https://telegram.org/js/telegram-web-app.js?63'

export function getTelegramEnvironment(): Readonly<TelegramEnvironment> {
  return environment
}

function safely(action: () => void) {
  try { action() } catch {
    // Optional host capabilities must never prevent the frontend from working.
  }
}

function supports(version: string): boolean {
  try { return webApp?.isVersionAtLeast?.(version) === true } catch { return false }
}

function hasNativeBridge(): boolean {
  const external = window.external as External & { notify?: unknown }
  return typeof window.TelegramWebviewProxy?.postEvent === 'function' || typeof external?.notify === 'function'
}

function hasLaunchContext(): boolean {
  const params = new URLSearchParams(window.location.hash.slice(1))
  return !!params.get('tgWebAppVersion') && !!params.get('tgWebAppPlatform') && params.get('tgWebAppPlatform') !== 'unknown'
}

/** Run before React mounts so a Mini App never flashes the marketing layout. */
export async function prepareTelegram(): Promise<void> {
  // An ordinary URL, including ?telegram=true, never enables Mini App mode.
  const native = hasNativeBridge()
  const framedLaunch = window.parent !== window && hasLaunchContext()
  if (!native && !framedLaunch) return

  if (!window.Telegram?.WebApp) {
    await new Promise<void>((resolve) => {
      const script = document.createElement('script')
      script.src = SDK_URL
      const finish = () => { window.clearTimeout(timeout); resolve() }
      const timeout = window.setTimeout(() => { script.remove(); resolve() }, 5000)
      script.onload = finish
      // A blocked SDK falls back to the working standalone website.
      script.onerror = () => { script.remove(); finish() }
      document.head.append(script)
    })
  }

  const candidate = window.Telegram?.WebApp
  if (!candidate || !candidate.platform || candidate.platform === 'unknown' || typeof candidate.ready !== 'function' || typeof candidate.expand !== 'function') return
  webApp = candidate
  const firstName = candidate.initDataUnsafe?.user?.first_name
  environment = {
    isTelegramMiniApp: true,
    nativeBackSupported: supports('6.1') && !!candidate.BackButton,
    // Display-only, unvalidated data. React renders it as text, never markup.
    firstName: typeof firstName === 'string' ? firstName.trim().slice(0, 60) || undefined : undefined,
  }
  document.documentElement.dataset.telegramMiniApp = 'true'
  const viewportMeta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]')
  if (viewportMeta && !viewportMeta.content.includes('viewport-fit=')) {
    viewportMeta.content += ', viewport-fit=cover'
  }
  updateViewport()
}

function positive(value: number | undefined): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : undefined
}

function updateViewport() {
  if (!webApp) return
  const root = document.documentElement
  const stable = positive(webApp.viewportStableHeight) ?? window.innerHeight
  const viewport = window.visualViewport
  const editable = document.activeElement instanceof HTMLTextAreaElement || document.activeElement instanceof HTMLInputElement
  const visible = Math.min(positive(webApp.viewportHeight) ?? stable, viewport?.height ?? window.innerHeight)
  // Stable height avoids jumping with expansion gestures. A focused keyboard
  // can shrink the visible area before Telegram reports a new stable height.
  const height = editable && stable - visible > 100 ? visible : stable
  root.style.setProperty('--muse-tg-height', `${height}px`)
  for (const side of ['top', 'bottom', 'left', 'right'] as const) {
    const device = supports('8.0') ? webApp.safeAreaInset?.[side] ?? 0 : 0
    const content = supports('8.0') ? webApp.contentSafeAreaInset?.[side] ?? 0 : 0
    root.style.setProperty(`--muse-tg-${side}`, `max(env(safe-area-inset-${side}, 0px), ${Math.max(0, device) + Math.max(0, content)}px)`)
  }
}

function applyColors() {
  if (!webApp) return
  // Keep MUSE's palette independent of the user's Telegram theme.
  if (supports('6.1')) safely(() => webApp?.setBackgroundColor?.(BACKGROUND))
  if (supports('6.9')) safely(() => webApp?.setHeaderColor?.(BACKGROUND))
  if (supports('7.10')) safely(() => webApp?.setBottomBarColor?.(BACKGROUND))
}

/** Subscribe once at the app root; React StrictMode cleanup is symmetrical. */
export function mountTelegram(): () => void {
  if (!webApp) return () => {}
  const app = webApp
  updateViewport()
  applyColors()
  if (!notifiedReady) {
    if (environment.nativeBackSupported) safely(() => app.BackButton?.hide())
    safely(() => app.expand())
    safely(() => app.ready())
    notifiedReady = true
  }
  const events: readonly TelegramEvent[] = supports('8.0')
    ? ['viewportChanged', 'safeAreaChanged', 'contentSafeAreaChanged'] : ['viewportChanged']
  for (const event of events) safely(() => app.onEvent?.(event, updateViewport))
  safely(() => app.onEvent?.('themeChanged', applyColors))
  const viewport = window.visualViewport
  viewport?.addEventListener('resize', updateViewport)
  viewport?.addEventListener('scroll', updateViewport)
  window.addEventListener('resize', updateViewport)
  document.addEventListener('focusin', updateViewport)
  document.addEventListener('focusout', updateViewport)
  return () => {
    for (const event of events) safely(() => app.offEvent?.(event, updateViewport))
    safely(() => app.offEvent?.('themeChanged', applyColors))
    viewport?.removeEventListener('resize', updateViewport)
    viewport?.removeEventListener('scroll', updateViewport)
    window.removeEventListener('resize', updateViewport)
    document.removeEventListener('focusin', updateViewport)
    document.removeEventListener('focusout', updateViewport)
  }
}

export function bindTelegramBack(onBack: () => void): () => void {
  const back = webApp?.BackButton
  if (!environment.nativeBackSupported || !back) return () => {}
  const handleBack = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    if (supports('9.1')) safely(() => webApp?.hideKeyboard?.())
    onBack()
  }
  safely(() => { back.onClick(handleBack); back.show() })
  return () => safely(() => { back.offClick(handleBack); back.hide() })
}

export function telegramHaptic(): void {
  if (supports('6.1')) safely(() => webApp?.HapticFeedback?.impactOccurred('soft'))
}
