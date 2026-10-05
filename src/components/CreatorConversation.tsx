import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import type { ChatMessage, Creator } from '../types/creator'
import { TelegramLink } from './TelegramLink'
import { ActivityStatus } from './ActivityStatus'
import './CreatorConversation.css'

interface CreatorConversationProps {
  creator: Creator
  active: boolean
  onBack: () => void
}

const timeFormatter = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', hour12: false })
const REPLY_DELAY_MS = 1100
const MESSAGE_LIMIT = 500

export function CreatorConversation({ creator, active, onBack }: CreatorConversationProps) {
  const [messages, setMessages] = useState<readonly ChatMessage[]>(() => [{
    id: `${creator.id}-greeting`, creatorId: creator.id, role: 'creator',
    content: creator.chat.greeting, createdAt: new Date().toISOString(),
  }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [promptIds, setPromptIds] = useState(creator.chat.initialPromptIds)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const replyTimerRef = useRef<number | null>(null)
  const pendingRef = useRef(false)
  const sequenceRef = useRef(0)
  const atBottomRef = useRef(true)
  const wasActiveRef = useRef(false)
  const hasReply = messages.some((message) => message.role === 'creator' && message.id !== `${creator.id}-greeting`)
  const displayName = `${creator.name.charAt(0)}${creator.name.slice(1).toLowerCase()}`

  useEffect(() => () => {
    if (replyTimerRef.current !== null) window.clearTimeout(replyTimerRef.current)
  }, [])

  useEffect(() => {
    const justOpened = active && !wasActiveRef.current
    wasActiveRef.current = active
    if (!active) return
    if (justOpened) headingRef.current?.focus({ preventScroll: true })
    const frame = requestAnimationFrame(() => {
      const transcript = transcriptRef.current
      if (transcript && atBottomRef.current) transcript.scrollTop = transcript.scrollHeight
    })
    return () => cancelAnimationFrame(frame)
  }, [active, messages, typing])

  useEffect(() => {
    const input = inputRef.current
    if (!input || !active) return
    input.style.height = '0px'
    input.style.height = `${Math.min(input.scrollHeight, 104)}px`
  }, [draft, active])

  // Keep the composer inside the visible viewport when a mobile keyboard opens.
  useEffect(() => {
    const viewport = window.visualViewport
    const dialog = transcriptRef.current?.closest('dialog')
    if (!active || !viewport || !dialog) return
    let frame: number | null = null
    function updateViewport() {
      if (!dialog || !viewport) return
      if (window.innerWidth < 960 && window.innerHeight - viewport.height > 100) {
        dialog.style.setProperty('--profile-height', `${Math.floor(viewport.height - 8)}px`)
        dialog.style.setProperty('--profile-bottom', `${Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)}px`)
      } else {
        dialog.style.removeProperty('--profile-height')
        dialog.style.removeProperty('--profile-bottom')
      }
      if (frame !== null) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const transcript = transcriptRef.current
        if (transcript && atBottomRef.current) transcript.scrollTop = transcript.scrollHeight
      })
    }
    updateViewport()
    viewport.addEventListener('resize', updateViewport)
    viewport.addEventListener('scroll', updateViewport)
    return () => {
      viewport.removeEventListener('resize', updateViewport)
      viewport.removeEventListener('scroll', updateViewport)
      if (frame !== null) cancelAnimationFrame(frame)
      dialog.style.removeProperty('--profile-height')
      dialog.style.removeProperty('--profile-bottom')
    }
  }, [active])

  function sendMessage(content: string) {
    const text = content.trim()
    if (!text || text.length > MESSAGE_LIMIT || pendingRef.current) return
    const prompt = creator.chat.prompts.find((item) => item.message.toLowerCase() === text.toLowerCase())
    pendingRef.current = true
    atBottomRef.current = true
    const exchangeId = `${creator.id}-${++sequenceRef.current}`
    setMessages((current) => [...current, {
      id: `${exchangeId}-user`, creatorId: creator.id, role: 'user',
      content: text, createdAt: new Date().toISOString(),
    }])
    setDraft('')
    setTyping(true)
    replyTimerRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, {
        id: `${exchangeId}-creator`, creatorId: creator.id, role: 'creator',
        content: prompt?.response ?? creator.chat.fallbackResponse, createdAt: new Date().toISOString(),
      }])
      if (prompt?.followUpIds) setPromptIds(prompt.followUpIds)
      setTyping(false)
      pendingRef.current = false
      replyTimerRef.current = null
    }, REPLY_DELAY_MS)
  }

  return (
    <section id="creator-chat" className="creator-conversation" hidden={!active} aria-labelledby="conversation-title">
      <figure className="chat-visual">
        <img src={creator.coverImage} alt="" width={800} height={1200} decoding="async" />
        <figcaption>
          <p className="eyebrow"><span className="accent-dot" />MUSE / A NEW CONNECTION</p>
          <p className="chat-visual-line">A little<br /><em>closer.</em></p>
          <p className="chat-visual-name">{creator.name} <span>/ @{creator.username}</span></p>
        </figcaption>
      </figure>

      <div className="chat-pane">
        <header className="chat-header">
          <button type="button" className="chat-back icon-button" aria-label="Back to profile" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.4} aria-hidden="true" />
          </button>
          <img src={creator.avatar} alt="" width={256} height={256} />
          <div className="chat-identity">
            <h2 id="conversation-title" ref={headingRef} tabIndex={-1}>{creator.name}</h2>
            <ActivityStatus />
          </div>
        </header>

        <div
          ref={transcriptRef}
          className="chat-transcript"
          role="log"
          aria-label={`Conversation with ${creator.name}`}
          aria-live="polite"
          aria-relevant="additions"
          tabIndex={0}
          onScroll={(event) => {
            const node = event.currentTarget
            atBottomRef.current = node.scrollHeight - node.scrollTop - node.clientHeight < 80
          }}
        >
          <div className="chat-introduction">
            <p className="eyebrow">AI COMPANION / MUSE ORIGINAL</p>
            <p>A first hello.<br /><em>See where it takes you.</em></p>
            <span className="chat-day">Today</span>
          </div>
          <ol className="chat-messages">
            {messages.map((message) => (
              <li key={message.id} className={`chat-message chat-message--${message.role}`}>
                <span className="sr-only">{message.role === 'creator' ? creator.name : 'You'}: </span>
                <p className="chat-bubble">{message.content}</p>
                <time dateTime={message.createdAt}>{timeFormatter.format(new Date(message.createdAt))}</time>
              </li>
            ))}
          </ol>
          {typing && (
            <div className="chat-typing" role="status">
              <span className="chat-typing-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>{creator.name} is typing</span>
            </div>
          )}
        </div>

        <div className="chat-composer">
          <div className="chat-prompts" role="group" aria-label="Quick replies">
            {promptIds.map((id) => {
              const prompt = creator.chat.prompts.find((item) => item.id === id)
              return prompt && (
                <button type="button" key={prompt.id} disabled={typing} onClick={() => {
                  sendMessage(prompt.message)
                  transcriptRef.current?.focus({ preventScroll: true })
                }}>
                  {prompt.label}
                </button>
              )
            })}
          </div>
          <form onSubmit={(event) => {
            event.preventDefault()
            sendMessage(draft)
            inputRef.current?.focus({ preventScroll: true })
          }} aria-label="Send a message">
            <div className="chat-input-wrap">
              <textarea
                ref={inputRef}
                aria-label={`Message ${creator.name}`}
                placeholder={`Message ${displayName}…`}
                rows={1}
                enterKeyHint="send"
                maxLength={MESSAGE_LIMIT}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
                    event.preventDefault()
                    sendMessage(draft)
                  }
                }}
              />
              <button type="submit" className="chat-send icon-button" aria-label="Send message" disabled={!draft.trim() || typing}>
                <ArrowUp size={20} strokeWidth={1.6} aria-hidden="true" />
              </button>
            </div>
          </form>
          <div className="chat-next-step" data-ready={hasReply}>
            <p className="chat-next-copy">{hasReply ? `Keep talking with ${displayName}.` : 'Take the conversation further.'}</p>
            <TelegramLink className="chat-telegram" label="Continue in Telegram" variant={hasReply ? 'primary' : 'outline'} showArrow />
            <p className="chat-demo-note">Demo conversation · Telegram link preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}
