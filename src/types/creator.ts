export type CreatorId = 'alex' | 'ryan' | 'luna' | 'mia'

export type CreatorCategory =
  | 'Technology / Business / Future'
  | 'Travel / Fitness / Adventure'
  | 'Fashion / Lifestyle'
  | 'Art / Music / Culture'

interface PostBase {
  id: string
  creatorId: CreatorId
  topic: string
  caption: string
  createdAt: string
  likes: number
  comments: number
}

export type Post = PostBase & (
  | { kind: 'text' }
  | { kind: 'image'; image: string; imageAlt: string; imageWidth: number; imageHeight: number; imagePosition?: string }
)

export interface ChatMessage {
  id: string
  creatorId: CreatorId
  role: 'creator' | 'user'
  content: string
  createdAt: string
}

export interface ChatPrompt {
  id: string
  label: string
  message: string
  response: string
  followUpIds?: readonly string[]
}

export interface MockConversation {
  greeting: string
  prompts: readonly ChatPrompt[]
  initialPromptIds: readonly string[]
  fallbackResponse: string
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
  bio: string
  personality: readonly string[]
  avatar: string
  avatarAlt: string
  coverImage: string
  coverImageAlt: string
  tags: readonly string[]
  stats: CreatorStats
  posts: readonly Post[]
  chat: MockConversation
}
