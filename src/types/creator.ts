import type { Localized } from '../i18n/types'

export type CreatorId = 'alex' | 'ryan' | 'luna' | 'mia'

export type CreatorCategory = Localized<string>

interface PostBase {
  id: string
  creatorId: CreatorId
  topic: Localized<string>
  caption: Localized<string>
  createdAt: string
  likes: number
  comments: number
}

export type Post = PostBase & (
  | { kind: 'text' }
  | { kind: 'image'; image: string; imageAlt: Localized<string>; imageWidth: number; imageHeight: number; imagePosition?: string }
)

export interface ChatMessage {
  id: string
  creatorId: CreatorId
  role: 'creator' | 'user'
  /** Authored free text stays verbatim; prepared dialogue follows the UI language. */
  content: string | Localized<string>
  createdAt: string
}

export interface ChatPrompt {
  id: string
  label: Localized<string>
  message: Localized<string>
  response: Localized<string>
  followUpIds?: readonly string[]
}

export interface MockConversation {
  greeting: Localized<string>
  prompts: readonly ChatPrompt[]
  initialPromptIds: readonly string[]
  fallbackResponse: Localized<string>
}

/** Fictional lifetime totals; the local feed contains only recent posts. */
export interface CreatorStats {
  followers: number
  posts: number
  likes: number
}

export interface Creator {
  id: CreatorId
  name: string
  username: string
  gender: 'male' | 'female'
  age: number
  category: CreatorCategory
  bio: Localized<string>
  personality: Localized<readonly string[]>
  avatar: string
  avatarAlt: Localized<string>
  coverImage: string
  coverImageAlt: Localized<string>
  tags: Localized<readonly string[]>
  stats: CreatorStats
  posts: readonly Post[]
  chat: MockConversation
}
