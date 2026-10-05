import type { CreatorId, MockConversation } from '../types/creator'

/** Fictional dialogue. Matching a prompt never calls a model or a service. */
export const conversationsByCreator: Readonly<Record<CreatorId, MockConversation>> = {
  alex: {
    greeting: "Tell me what you're building. I like ideas that challenge the obvious. Or we can just start with a good question.",
    initialPromptIds: ['alex-weekend', 'alex-future', 'alex-idea'],
    fallbackResponse: "I'm still learning how you think. Try one of the prompts above — let's start with a good question.",
    prompts: [
      {
        id: 'alex-weekend', label: 'Perfect weekend?', message: "What's your perfect weekend?",
        response: 'A long walk with a difficult question, a few hours building something small, then dinner with people who disagree with me. Curiosity needs a little room to breathe.',
        followUpIds: ['alex-more', 'alex-start', 'alex-future'],
      },
      {
        id: 'alex-future', label: "What's next?", message: 'What excites you about the future?',
        response: 'Tools that make ambitious ideas possible for more people. The interesting question is what we choose to build once the barriers get smaller.',
      },
      {
        id: 'alex-idea', label: 'A good idea?', message: 'What makes an idea worth pursuing?',
        response: 'A real problem, a point of view, and the willingness to test both. I trust a small experiment more than a perfect pitch.',
      },
      {
        id: 'alex-more', label: 'Tell me more', message: 'Tell me more',
        response: 'I keep a notebook of things that feel unnecessarily complicated. Once a week, I pick one and try to make it simpler. Most attempts fail. The useful ones change how I think.',
      },
      {
        id: 'alex-start', label: 'Where to start?', message: 'Where should I start with a new idea?',
        response: 'Find one person with the problem. Listen before you explain your solution. Then build the smallest thing that helps them — you can earn the bigger vision later.',
      },
    ],
  },
  ryan: {
    greeting: 'Hey, you made it. Pick one: an early hike, a cold swim, or a road with no plan? I can usually be talked into all three.',
    initialPromptIds: ['ryan-weekend', 'ryan-place', 'ryan-habit'],
    fallbackResponse: "I'm still learning your vibe. Pick one of the prompts above — we'll find our next adventure from there.",
    prompts: [
      {
        id: 'ryan-weekend', label: 'Perfect weekend?', message: "What's your perfect weekend?",
        response: 'Coffee before sunrise, a trail with a view, and a swim cold enough to make me laugh. No packed schedule. Just one good reason to stay outside a little longer.',
        followUpIds: ['ryan-more', 'ryan-place', 'ryan-habit'],
      },
      {
        id: 'ryan-place', label: 'Where to next?', message: 'Where would you go?',
        response: 'A little coastal town where the mountains meet the water. We start with good coffee, follow the coast, and stop whenever something looks too good to pass.',
        followUpIds: ['ryan-pack', 'ryan-more', 'ryan-habit'],
      },
      {
        id: 'ryan-habit', label: 'A better habit?', message: 'How do you stay motivated to move?',
        response: 'I make the first step almost embarrassingly easy. Shoes on, ten minutes outside. Some days that becomes a long run. Other days, ten minutes is a win.',
      },
      {
        id: 'ryan-more', label: 'Tell me more', message: 'Tell me more',
        response: 'The best part is the bit we never planned: a bakery on the way back, a wrong turn, someone telling us about a quieter beach. Leave a little space for that.',
      },
      {
        id: 'ryan-pack', label: 'What to bring?', message: 'What would you pack for a spontaneous trip?',
        response: 'Good shoes, a light jacket, a water bottle, and something to swim in. The rest usually works itself out. What would you never leave behind?',
      },
    ],
  },
  luna: {
    greeting: "Tell me the mood. We can figure out the outfit after that. A quiet coffee, a late night, or something in between?",
    initialPromptIds: ['luna-weekend', 'luna-style', 'luna-place'],
    fallbackResponse: "I'm still learning your vibe. Try one of the prompts above.",
    prompts: [
      {
        id: 'luna-weekend', label: 'Perfect weekend?', message: "What's your perfect weekend?",
        response: 'Somewhere beautiful, good coffee, no schedule... and probably a little trouble. ✨',
        followUpIds: ['luna-more', 'luna-place', 'luna-style'],
      },
      {
        id: 'luna-style', label: "What's your style?", message: "What's your style?",
        response: 'A little structure, a little softness. Black silk, an oversized jacket, one detail that feels like me. And shoes I can actually walk home in.',
        followUpIds: ['luna-outfit', 'luna-more', 'luna-place'],
      },
      {
        id: 'luna-place', label: 'Where would you go?', message: 'Where would you go?',
        response: 'Paris on a rainy afternoon. A tiny café, a vintage shop with no sign, then a dinner that turns into a late night. I like a city that lets you change your mind.',
      },
      {
        id: 'luna-more', label: 'Tell me more', message: 'Tell me more',
        response: 'We take the long way everywhere. Buy flowers for no reason. Find a table by the window. The trouble is probably just staying out later than we promised. Probably.',
      },
      {
        id: 'luna-outfit', label: 'Dress the mood', message: 'What would you wear for a late-night dinner?',
        response: 'Black, something with texture, and one piece of jewellery that catches the light. Leave the rest open. A good night deserves a little improvisation.',
      },
    ],
  },
  mia: {
    greeting: "Hi. I've got a record playing and a window open. Give me a mood, or a question. We don't have to rush either.",
    initialPromptIds: ['mia-weekend', 'mia-song', 'mia-inspiration'],
    fallbackResponse: "I'm still learning your rhythm. Try one of the prompts above; we'll find a place to begin.",
    prompts: [
      {
        id: 'mia-weekend', label: 'Perfect weekend?', message: "What's your perfect weekend?",
        response: 'A small gallery before it gets busy, a record shop with a patient owner, and a late walk with no headphones. Sometimes the city has a better soundtrack.',
        followUpIds: ['mia-more', 'mia-song', 'mia-gallery'],
      },
      {
        id: 'mia-song', label: 'Set the soundtrack', message: 'What should we listen to tonight?',
        response: 'A slow piano, a little tape hiss, something that leaves space between the notes. The kind of record that makes an ordinary room feel like a memory.',
      },
      {
        id: 'mia-inspiration', label: 'Find inspiration', message: 'Where do you find inspiration?',
        response: 'Usually at the edges of things. An unfinished sketch, a sentence overheard on a train, the last light on an empty wall. I collect first and make sense of it later.',
      },
      {
        id: 'mia-more', label: 'Tell me more', message: 'Tell me more',
        response: 'I like places that ask very little of you. You can stand in front of one painting for twenty minutes, or hear the same song twice. Attention is its own small adventure.',
      },
      {
        id: 'mia-gallery', label: 'A gallery date?', message: 'What would we look for in a gallery?',
        response: 'One work we keep coming back to. We can disagree about it. I would rather hear what it reminds you of than what the label says it means.',
      },
    ],
  },
}
