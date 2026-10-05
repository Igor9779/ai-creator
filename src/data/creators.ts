import alexAvatar from '../assets/creators/alex/avatar.webp'
import alexPortrait from '../assets/creators/alex/portrait.webp'
import ryanAvatar from '../assets/creators/ryan/avatar.webp'
import ryanPortrait from '../assets/creators/ryan/portrait.webp'
import lunaAvatar from '../assets/creators/luna/avatar.webp'
import lunaPortrait from '../assets/creators/luna/portrait.webp'
import miaAvatar from '../assets/creators/mia/avatar.webp'
import miaPortrait from '../assets/creators/mia/portrait.webp'
import type { Creator, CreatorId } from '../types/creator'
import { postsByCreator } from './posts'
import { conversationsByCreator } from './conversations'

// These four fictional identities are the canonical local MUSE creator data.
export const creatorsById: Readonly<Record<CreatorId, Creator>> = {
  alex: {
    id: 'alex',
    name: 'ALEX',
    username: 'alex.next',
    gender: 'male',
    age: 30,
    category: 'Technology / Business / Future',
    bio: "Building things, breaking assumptions and staying curious about what's next.",
    personality: ['Confident', 'Intelligent', 'Curious', 'Ambitious'],
    avatar: alexAvatar,
    avatarAlt: 'Portrait of Alex, an AI technology and business creator.',
    coverImage: alexPortrait,
    coverImageAlt: 'Alex with dark hair and a subtle beard in premium dark clothing, surrounded by modern stone and glass architecture.',
    tags: ['Technology', 'Business', 'Future'],
    stats: { followers: 128000, posts: 94, likes: 4900000 },
    posts: postsByCreator.alex,
    chat: conversationsByCreator.alex,
  },
  ryan: {
    id: 'ryan',
    name: 'RYAN',
    username: 'ryan.roams',
    gender: 'male',
    age: 27,
    category: 'Travel / Fitness / Adventure',
    bio: 'Chasing better views, stronger habits and places worth getting lost in.',
    personality: ['Energetic', 'Spontaneous', 'Optimistic'],
    avatar: ryanAvatar,
    avatarAlt: 'Portrait of Ryan, an AI travel and adventure creator.',
    coverImage: ryanPortrait,
    coverImageAlt: 'Ryan with sandy wavy hair and sun-tanned skin in casual outdoor clothing on a coastal mountain trail.',
    tags: ['Travel', 'Fitness', 'Adventure'],
    stats: { followers: 164000, posts: 148, likes: 6200000 },
    posts: postsByCreator.ryan,
    chat: conversationsByCreator.ryan,
  },
  luna: {
    id: 'luna',
    name: 'LUNA',
    username: 'luna.afterhours',
    gender: 'female',
    age: 25,
    category: 'Fashion / Lifestyle',
    bio: 'A little fashion, a little chaos, and a lot of late-night inspiration.',
    personality: ['Elegant', 'Confident', 'Playful'],
    avatar: lunaAvatar,
    avatarAlt: 'Portrait of Luna, an AI fashion and lifestyle creator.',
    coverImage: lunaPortrait,
    coverImageAlt: 'Luna with long dark brown hair and distinctive high cheekbones in a black satin outfit inside a premium city apartment.',
    tags: ['Fashion', 'Lifestyle', 'City nights'],
    stats: { followers: 238000, posts: 216, likes: 8700000 },
    posts: postsByCreator.luna,
    chat: conversationsByCreator.luna,
  },
  mia: {
    id: 'mia',
    name: 'MIA',
    username: 'mia.onrecord',
    gender: 'female',
    age: 27,
    category: 'Art / Music / Culture',
    bio: 'Collecting songs, strange ideas and moments worth remembering.',
    personality: ['Creative', 'Thoughtful', 'Slightly mysterious'],
    avatar: miaAvatar,
    avatarAlt: 'Portrait of Mia, an AI art, music and culture creator.',
    coverImage: miaPortrait,
    coverImageAlt: 'Mia with a copper bob, fringe and a softly rounded face in alternative clothing at an independent record store.',
    tags: ['Art', 'Music', 'Culture'],
    stats: { followers: 96000, posts: 82, likes: 3100000 },
    posts: postsByCreator.mia,
    chat: conversationsByCreator.mia,
  },
}

export const creators: readonly Creator[] = Object.values(creatorsById)
