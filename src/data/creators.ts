import { localized } from '../i18n/types'
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
    category: localized('Technology / Business / Future', "Технології / Бізнес / Майбутнє", "Технологии / Бизнес / Будущее"),
    bio: localized("Building things, breaking assumptions and staying curious about what's next.", "Створюю нове, ставлю під сумнів звичне й цікавлюся тим, що попереду.", "Создаю новое, ставлю под сомнение привычное и интересуюсь тем, что впереди."),
    personality: localized(['Confident', 'Intelligent', 'Curious', 'Ambitious'], ["Впевнений", "Розумний", "Допитливий", "Амбітний"], ["Уверенный", "Умный", "Любознательный", "Амбициозный"]),
    avatar: alexAvatar,
    avatarAlt: localized('Portrait of Alex, an AI technology and business creator.', "Портрет ALEX, ШІ-персонажа зі світу технологій і бізнесу.", "Портрет ALEX, ИИ-персонажа из мира технологий и бизнеса."),
    coverImage: alexPortrait,
    coverImageAlt: localized('Alex with dark hair and a subtle beard in premium dark clothing, surrounded by modern stone and glass architecture.', "ALEX з темним волоссям і легкою бородою, у вишуканому темному одязі серед сучасної архітектури зі скла й каменю.", "ALEX с тёмными волосами и лёгкой бородой, в изысканной тёмной одежде среди современной архитектуры из стекла и камня."),
    tags: localized(['Technology', 'Business', 'Future'], ["Технології", "Бізнес", "Майбутнє"], ["Технологии", "Бизнес", "Будущее"]),
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
    category: localized('Travel / Fitness / Adventure', "Подорожі / Фітнес / Пригоди", "Путешествия / Фитнес / Приключения"),
    bio: localized('Chasing better views, stronger habits and places worth getting lost in.', "Шукаю кращі краєвиди, корисні звички й місця, де варто загубитися.", "Ищу лучшие виды, полезные привычки и места, в которых стоит потеряться."),
    personality: localized(['Energetic', 'Spontaneous', 'Optimistic'], ["Енергійний", "Спонтанний", "Оптимістичний"], ["Энергичный", "Спонтанный", "Оптимистичный"]),
    avatar: ryanAvatar,
    avatarAlt: localized('Portrait of Ryan, an AI travel and adventure creator.', "Портрет RYAN, ШІ-персонажа зі світу подорожей і пригод.", "Портрет RYAN, ИИ-персонажа из мира путешествий и приключений."),
    coverImage: ryanPortrait,
    coverImageAlt: localized('Ryan with sandy wavy hair and sun-tanned skin in casual outdoor clothing on a coastal mountain trail.', "RYAN з хвилястим русявим волоссям і засмаглою шкірою, у зручному одязі на гірській стежці біля моря.", "RYAN с волнистыми русыми волосами и загорелой кожей, в удобной одежде на горной тропе у моря."),
    tags: localized(['Travel', 'Fitness', 'Adventure'], ["Подорожі", "Фітнес", "Пригоди"], ["Путешествия", "Фитнес", "Приключения"]),
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
    category: localized('Fashion / Lifestyle', "Мода / Стиль життя", "Мода / Стиль жизни"),
    bio: localized('A little fashion, a little chaos, and a lot of late-night inspiration.', "Трохи моди, трохи хаосу й багато натхнення після опівночі.", "Немного моды, немного хаоса и много вдохновения после полуночи."),
    personality: localized(['Elegant', 'Confident', 'Playful'], ["Елегантна", "Впевнена", "Грайлива"], ["Элегантная", "Уверенная", "Игривая"]),
    avatar: lunaAvatar,
    avatarAlt: localized('Portrait of Luna, an AI fashion and lifestyle creator.', "Портрет LUNA, ШІ-персонажа зі світу моди й стилю життя.", "Портрет LUNA, ИИ-персонажа из мира моды и стиля жизни."),
    coverImage: lunaPortrait,
    coverImageAlt: localized('Luna with long dark brown hair and distinctive high cheekbones in a black satin outfit inside a premium city apartment.', "LUNA з довгим темно-каштановим волоссям і виразними вилицями, у чорному атласі в стильній міській квартирі.", "LUNA с длинными тёмно-каштановыми волосами и выразительными скулами, в чёрном атласе в стильной городской квартире."),
    tags: localized(['Fashion', 'Lifestyle', 'City nights'], ["Мода", "Стиль життя", "Нічне місто"], ["Мода", "Стиль жизни", "Ночной город"]),
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
    category: localized('Art / Music / Culture', "Мистецтво / Музика / Культура", "Искусство / Музыка / Культура"),
    bio: localized('Collecting songs, strange ideas and moments worth remembering.', "Збираю пісні, дивні ідеї й миті, які хочеться запам’ятати.", "Собираю песни, странные идеи и моменты, которые хочется запомнить."),
    personality: localized(['Creative', 'Thoughtful', 'Slightly mysterious'], ["Творча", "Вдумлива", "Трохи загадкова"], ["Творческая", "Вдумчивая", "Немного загадочная"]),
    avatar: miaAvatar,
    avatarAlt: localized('Portrait of Mia, an AI art, music and culture creator.', "Портрет MIA, ШІ-персонажа зі світу мистецтва, музики й культури.", "Портрет MIA, ИИ-персонажа из мира искусства, музыки и культуры."),
    coverImage: miaPortrait,
    coverImageAlt: localized('Mia with a copper bob, fringe and a softly rounded face in alternative clothing at an independent record store.', "MIA з мідним каре, чубчиком і м’якими рисами обличчя, в альтернативному стилі в незалежній крамниці платівок.", "MIA с медным каре, чёлкой и мягкими чертами лица, в альтернативном стиле в независимом магазине пластинок."),
    tags: localized(['Art', 'Music', 'Culture'], ["Мистецтво", "Музика", "Культура"], ["Искусство", "Музыка", "Культура"]),
    stats: { followers: 96000, posts: 82, likes: 3100000 },
    posts: postsByCreator.mia,
    chat: conversationsByCreator.mia,
  },
}

export const creators: readonly Creator[] = Object.values(creatorsById)
