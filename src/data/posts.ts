import alexArchitecture from '../assets/creators/alex/feed-architecture.webp'
import alexPortrait from '../assets/creators/alex/portrait.webp'
import ryanCoast from '../assets/creators/ryan/feed-coast.webp'
import ryanPortrait from '../assets/creators/ryan/portrait.webp'
import lunaEditorial from '../assets/creators/luna/feed-editorial.webp'
import lunaPortrait from '../assets/creators/luna/portrait.webp'
import miaVinyl from '../assets/creators/mia/feed-vinyl.webp'
import miaPortrait from '../assets/creators/mia/portrait.webp'
import type { CreatorId, Post } from '../types/creator'

// A recent local feed, distinct from each creator's fictional lifetime statistics.
export const postsByCreator: Readonly<Record<CreatorId, readonly Post[]>> = {
  alex: [
    {
      id: 'alex-built-future', creatorId: 'alex', kind: 'image', topic: 'Architecture',
      caption: "The future doesn't arrive. Someone builds it.",
      image: alexArchitecture, imageAlt: 'A sculptural concrete staircase and glass walls in a quiet research space, lit by warm morning sunlight.',
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T08:30:00Z', likes: 2840, comments: 142,
    },
    {
      id: 'alex-better-questions', creatorId: 'alex', kind: 'text', topic: 'Future thinking',
      caption: 'Good tools should give us better questions, not just faster answers.',
      createdAt: '2026-10-04T17:10:00Z', likes: 865, comments: 43,
    },
    {
      id: 'alex-quiet-workspace', creatorId: 'alex', kind: 'image', topic: 'Building log',
      caption: 'A quiet workspace. An ambitious idea. Back to building.',
      image: alexPortrait, imageAlt: 'Alex in a modern architectural workspace, wearing a dark jacket in warm window light.',
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T08:00:00Z', likes: 1240, comments: 68,
    },
    {
      id: 'alex-room-for-failure', creatorId: 'alex', kind: 'text', topic: 'Working notes',
      caption: 'My favourite part of a prototype is the moment it proves me wrong.',
      createdAt: '2026-10-02T11:15:00Z', likes: 1720, comments: 96,
    },
    {
      id: 'alex-small-decisions', creatorId: 'alex', kind: 'text', topic: 'Business',
      caption: 'Big ideas get all the attention. Small decisions do most of the work.',
      createdAt: '2026-10-01T20:10:00Z', likes: 1962, comments: 125,
    },
  ],
  ryan: [
    {
      id: 'ryan-time-forgotten', creatorId: 'ryan', kind: 'image', topic: 'Field notes',
      caption: 'Some places make you forget what time it is.',
      image: ryanCoast, imageAlt: 'A sunlit hiking path above a blue-green sea, with limestone cliffs and distant mountains.',
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T06:45:00Z', likes: 3820, comments: 192,
    },
    {
      id: 'ryan-the-detour', creatorId: 'ryan', kind: 'text', topic: 'On the road',
      caption: 'The best route is usually the one that leaves room for a detour.',
      createdAt: '2026-10-04T15:20:00Z', likes: 1135, comments: 57,
    },
    {
      id: 'ryan-coastal-trail', creatorId: 'ryan', kind: 'image', topic: 'Trail diary',
      caption: 'Fresh air, a longer trail, and absolutely no reason to rush home.',
      image: ryanPortrait, imageAlt: 'Ryan on a rocky coastal trail with the sea and distant mountains behind him.',
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T07:30:00Z', likes: 1820, comments: 92,
    },
    {
      id: 'ryan-small-habits', creatorId: 'ryan', kind: 'text', topic: 'Small habits',
      caption: "Twenty minutes outside counts. You don't have to turn every good habit into a competition.",
      createdAt: '2026-10-02T06:30:00Z', likes: 2413, comments: 120,
    },
    {
      id: 'ryan-next-stop', creatorId: 'ryan', kind: 'text', topic: 'Next stop',
      caption: "Tomorrow's plan: a cold swim, good coffee, and one road I haven't taken yet.",
      createdAt: '2026-10-01T21:15:00Z', likes: 1948, comments: 95,
    },
  ],
  luna: [
    {
      id: 'luna-a-little-chaos', creatorId: 'luna', kind: 'image', topic: 'Objects of desire',
      caption: 'A little fashion, a little chaos.',
      image: lunaEditorial, imageAlt: 'A charcoal blazer, black satin and delicate gold earrings in a softly lit limestone city apartment.',
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T17:45:00Z', likes: 5280, comments: 218,
    },
    {
      id: 'luna-your-own-mood', creatorId: 'luna', kind: 'text', topic: 'Personal style',
      caption: 'An outfit should change your mood before it changes anyone else’s opinion.',
      createdAt: '2026-10-04T19:15:00Z', likes: 1695, comments: 84,
    },
    {
      id: 'luna-city-light', creatorId: 'luna', kind: 'image', topic: 'After hours',
      caption: 'City light, black satin, and plans that can wait until tomorrow.',
      image: lunaPortrait, imageAlt: 'Luna in a sophisticated city apartment, wearing draped black satin in warm cinematic light.',
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T18:40:00Z', likes: 2460, comments: 118,
    },
    {
      id: 'luna-past-self', creatorId: 'luna', kind: 'text', topic: 'Wardrobe notes',
      caption: 'The best thing in my wardrobe? The jacket I keep borrowing from my past self.',
      createdAt: '2026-10-02T11:30:00Z', likes: 3720, comments: 169,
    },
    {
      id: 'luna-let-it-breathe', creatorId: 'luna', kind: 'text', topic: 'Less, but better',
      caption: 'One beautiful detail is usually enough. Let the rest breathe.',
      createdAt: '2026-10-01T22:10:00Z', likes: 2980, comments: 134,
    },
  ],
  mia: [
    {
      id: 'mia-unvisited-places', creatorId: 'mia', kind: 'image', topic: 'On repeat',
      caption: "Some songs feel like places you've never visited.",
      image: miaVinyl, imageAlt: 'A black vinyl record playing on a vintage turntable in a warm, quiet record-store listening corner.',
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T20:05:00Z', likes: 2195, comments: 128,
    },
    {
      id: 'mia-finish-the-thought', creatorId: 'mia', kind: 'text', topic: 'Gallery notes',
      caption: 'I like art that leaves a little room for you to finish the thought.',
      createdAt: '2026-10-04T15:45:00Z', likes: 1250, comments: 85,
    },
    {
      id: 'mia-on-record', creatorId: 'mia', kind: 'image', topic: 'Found in the city',
      caption: 'Looking for the record I didn’t know I needed.',
      image: miaPortrait, imageAlt: 'Mia in a warm independent record store, wearing a burgundy jacket with her copper bob and fringe.',
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T16:25:00Z', likes: 975, comments: 49,
    },
    {
      id: 'mia-blurry-memory', creatorId: 'mia', kind: 'text', topic: 'Through a lens',
      caption: 'A blurry photograph can remember an evening better than a perfect one.',
      createdAt: '2026-10-02T21:10:00Z', likes: 1540, comments: 96,
    },
    {
      id: 'mia-tonights-soundtrack', creatorId: 'mia', kind: 'text', topic: 'Listening notes',
      caption: "Tonight's soundtrack: a slow piano, an open window, and no reason to rush the ending.",
      createdAt: '2026-10-01T20:05:00Z', likes: 1784, comments: 98,
    },
  ],
}
