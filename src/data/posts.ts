import { localized } from '../i18n/types'
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
      id: 'alex-built-future', creatorId: 'alex', kind: 'image', topic: localized('Architecture', "Архітектура", "Архитектура"),
      caption: localized("The future doesn't arrive. Someone builds it.", "Майбутнє не приходить саме. Хтось його створює.", "Будущее не приходит само. Кто-то его создаёт."),
      image: alexArchitecture, imageAlt: localized('A sculptural concrete staircase and glass walls in a quiet research space, lit by warm morning sunlight.', "Скульптурні бетонні сходи й скляні стіни дослідницького простору в теплому ранковому світлі.", "Скульптурная бетонная лестница и стеклянные стены исследовательского пространства в тёплом утреннем свете."),
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T08:30:00Z', likes: 2840, comments: 142,
    },
    {
      id: 'alex-better-questions', creatorId: 'alex', kind: 'text', topic: localized('Future thinking', "Думки про майбутнє", "Мысли о будущем"),
      caption: localized('Good tools should give us better questions, not just faster answers.', "Хороші інструменти допомагають ставити кращі запитання, а не просто швидше знаходити відповіді.", "Хорошие инструменты помогают задавать лучшие вопросы, а не просто быстрее находить ответы."),
      createdAt: '2026-10-04T17:10:00Z', likes: 865, comments: 43,
    },
    {
      id: 'alex-quiet-workspace', creatorId: 'alex', kind: 'image', topic: localized('Building log', "Щоденник проєкту", "Дневник проекта"),
      caption: localized('A quiet workspace. An ambitious idea. Back to building.', "Тихе робоче місце. Амбітна ідея. Знову беруся до справи.", "Тихое рабочее место. Амбициозная идея. Снова за дело."),
      image: alexPortrait, imageAlt: localized('Alex in a modern architectural workspace, wearing a dark jacket in warm window light.', "ALEX у темному піджаку в сучасному робочому просторі, освітленому теплим світлом з вікна.", "ALEX в тёмном пиджаке в современном рабочем пространстве, освещённом тёплым светом из окна."),
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T08:00:00Z', likes: 1240, comments: 68,
    },
    {
      id: 'alex-room-for-failure', creatorId: 'alex', kind: 'text', topic: localized('Working notes', "Робочі нотатки", "Рабочие заметки"),
      caption: localized('My favourite part of a prototype is the moment it proves me wrong.', "Найбільше в прототипі люблю мить, коли він доводить, що я помилявся.", "Больше всего в прототипе люблю момент, когда он доказывает, что я ошибался."),
      createdAt: '2026-10-02T11:15:00Z', likes: 1720, comments: 96,
    },
    {
      id: 'alex-small-decisions', creatorId: 'alex', kind: 'text', topic: localized('Business', "Бізнес", "Бизнес"),
      caption: localized('Big ideas get all the attention. Small decisions do most of the work.', "Великі ідеї отримують всю увагу. Маленькі рішення роблять більшу частину роботи.", "Большие идеи получают всё внимание. Маленькие решения делают большую часть работы."),
      createdAt: '2026-10-01T20:10:00Z', likes: 1962, comments: 125,
    },
  ],
  ryan: [
    {
      id: 'ryan-time-forgotten', creatorId: 'ryan', kind: 'image', topic: localized('Field notes', "Дорожні нотатки", "Дорожные заметки"),
      caption: localized('Some places make you forget what time it is.', "У деяких місцях забуваєш, котра година.", "В некоторых местах забываешь, который час."),
      image: ryanCoast, imageAlt: localized('A sunlit hiking path above a blue-green sea, with limestone cliffs and distant mountains.', "Сонячна стежка над синьо-зеленим морем, вапнякові скелі й далекі гори.", "Солнечная тропа над сине-зелёным морем, известняковые скалы и далёкие горы."),
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T06:45:00Z', likes: 3820, comments: 192,
    },
    {
      id: 'ryan-the-detour', creatorId: 'ryan', kind: 'text', topic: localized('On the road', "У дорозі", "В пути"),
      caption: localized('The best route is usually the one that leaves room for a detour.', "Найкращий маршрут — той, у якому є місце для несподіваного повороту.", "Лучший маршрут — тот, в котором есть место для неожиданного поворота."),
      createdAt: '2026-10-04T15:20:00Z', likes: 1135, comments: 57,
    },
    {
      id: 'ryan-coastal-trail', creatorId: 'ryan', kind: 'image', topic: localized('Trail diary', "Щоденник мандрів", "Дневник походов"),
      caption: localized('Fresh air, a longer trail, and absolutely no reason to rush home.', "Свіже повітря, довша стежка й жодної причини поспішати додому.", "Свежий воздух, тропа подлиннее и ни одной причины спешить домой."),
      image: ryanPortrait, imageAlt: localized('Ryan on a rocky coastal trail with the sea and distant mountains behind him.', "RYAN на кам’янистій прибережній стежці, позаду — море й далекі гори.", "RYAN на каменистой прибрежной тропе, позади — море и далёкие горы."),
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T07:30:00Z', likes: 1820, comments: 92,
    },
    {
      id: 'ryan-small-habits', creatorId: 'ryan', kind: 'text', topic: localized('Small habits', "Маленькі звички", "Маленькие привычки"),
      caption: localized("Twenty minutes outside counts. You don't have to turn every good habit into a competition.", "Двадцять хвилин надворі — це вже щось. Не обов’язково перетворювати кожну хорошу звичку на змагання.", "Двадцать минут на улице — уже кое-что. Не обязательно превращать каждую хорошую привычку в соревнование."),
      createdAt: '2026-10-02T06:30:00Z', likes: 2413, comments: 120,
    },
    {
      id: 'ryan-next-stop', creatorId: 'ryan', kind: 'text', topic: localized('Next stop', "Наступна зупинка", "Следующая остановка"),
      caption: localized("Tomorrow's plan: a cold swim, good coffee, and one road I haven't taken yet.", "План на завтра: холодне море, хороша кава й дорога, якою ще не ходив.", "План на завтра: холодное море, хороший кофе и дорога, по которой ещё не ходил."),
      createdAt: '2026-10-01T21:15:00Z', likes: 1948, comments: 95,
    },
  ],
  luna: [
    {
      id: 'luna-a-little-chaos', creatorId: 'luna', kind: 'image', topic: localized('Objects of desire', "Бажані речі", "Желанные вещи"),
      caption: localized('A little fashion, a little chaos.', "Трохи моди, трохи хаосу.", "Немного моды, немного хаоса."),
      image: lunaEditorial, imageAlt: localized('A charcoal blazer, black satin and delicate gold earrings in a softly lit limestone city apartment.', "Графітовий жакет, чорний атлас і витончені золоті сережки в міській квартирі з м’яким освітленням.", "Графитовый жакет, чёрный атлас и изящные золотые серьги в городской квартире с мягким освещением."),
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T17:45:00Z', likes: 5280, comments: 218,
    },
    {
      id: 'luna-your-own-mood', creatorId: 'luna', kind: 'text', topic: localized('Personal style', "Власний стиль", "Свой стиль"),
      caption: localized('An outfit should change your mood before it changes anyone else’s opinion.', "Образ має спочатку змінити твій настрій, а вже потім — чужу думку.", "Образ должен сначала изменить твоё настроение, а уже потом — чужое мнение."),
      createdAt: '2026-10-04T19:15:00Z', likes: 1695, comments: 84,
    },
    {
      id: 'luna-city-light', creatorId: 'luna', kind: 'image', topic: localized('After hours', "Після опівночі", "После полуночи"),
      caption: localized('City light, black satin, and plans that can wait until tomorrow.', "Міські вогні, чорний атлас і плани, які зачекають до завтра.", "Городские огни, чёрный атлас и планы, которые подождут до завтра."),
      image: lunaPortrait, imageAlt: localized('Luna in a sophisticated city apartment, wearing draped black satin in warm cinematic light.', "LUNA у чорному драпірованому атласі, у вишуканій міській квартирі з теплим кінематографічним світлом.", "LUNA в чёрном драпированном атласе, в изысканной городской квартире с тёплым кинематографическим светом."),
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T18:40:00Z', likes: 2460, comments: 118,
    },
    {
      id: 'luna-past-self', creatorId: 'luna', kind: 'text', topic: localized('Wardrobe notes', "Нотатки про гардероб", "Заметки о гардеробе"),
      caption: localized('The best thing in my wardrobe? The jacket I keep borrowing from my past self.', "Найкраща річ у моєму гардеробі? Жакет, який знову позичаю у себе колишньої.", "Лучшая вещь в моём гардеробе? Жакет, который снова одалживаю у себя прежней."),
      createdAt: '2026-10-02T11:30:00Z', likes: 3720, comments: 169,
    },
    {
      id: 'luna-let-it-breathe', creatorId: 'luna', kind: 'text', topic: localized('Less, but better', "Менше, але краще", "Меньше, но лучше"),
      caption: localized('One beautiful detail is usually enough. Let the rest breathe.', "Однієї красивої деталі зазвичай достатньо. Решті залиш простір.", "Одной красивой детали обычно достаточно. Остальному оставь пространство."),
      createdAt: '2026-10-01T22:10:00Z', likes: 2980, comments: 134,
    },
  ],
  mia: [
    {
      id: 'mia-unvisited-places', creatorId: 'mia', kind: 'image', topic: localized('On repeat', "На повторі", "На повторе"),
      caption: localized("Some songs feel like places you've never visited.", "Деякі пісні — наче місця, де ти ще ніколи не бував.", "Некоторые песни — словно места, в которых ты ещё никогда не бывал."),
      image: miaVinyl, imageAlt: localized('A black vinyl record playing on a vintage turntable in a warm, quiet record-store listening corner.', "Чорна вінілова платівка на вінтажному програвачі в затишному куточку крамниці платівок.", "Чёрная виниловая пластинка на винтажном проигрывателе в уютном уголке магазина пластинок."),
      imageWidth: 960, imageHeight: 640,
      createdAt: '2026-10-05T20:05:00Z', likes: 2195, comments: 128,
    },
    {
      id: 'mia-finish-the-thought', creatorId: 'mia', kind: 'text', topic: localized('Gallery notes', "Нотатки з галереї", "Заметки из галереи"),
      caption: localized('I like art that leaves a little room for you to finish the thought.', "Люблю мистецтво, яке залишає тобі місце завершити думку.", "Люблю искусство, которое оставляет тебе место закончить мысль."),
      createdAt: '2026-10-04T15:45:00Z', likes: 1250, comments: 85,
    },
    {
      id: 'mia-on-record', creatorId: 'mia', kind: 'image', topic: localized('Found in the city', "Знахідки в місті", "Находки в городе"),
      caption: localized('Looking for the record I didn’t know I needed.', "Шукаю платівку, про яку ще не знала, що вона мені потрібна.", "Ищу пластинку, о которой ещё не знала, что она мне нужна."),
      image: miaPortrait, imageAlt: localized('Mia in a warm independent record store, wearing a burgundy jacket with her copper bob and fringe.', "MIA з мідним каре й чубчиком, у бордовому жакеті в затишній незалежній крамниці платівок.", "MIA с медным каре и чёлкой, в бордовом жакете в уютном независимом магазине пластинок."),
      imageWidth: 800, imageHeight: 1200, imagePosition: '50% 25%',
      createdAt: '2026-10-03T16:25:00Z', likes: 975, comments: 49,
    },
    {
      id: 'mia-blurry-memory', creatorId: 'mia', kind: 'text', topic: localized('Through a lens', "Крізь об’єктив", "Через объектив"),
      caption: localized('A blurry photograph can remember an evening better than a perfect one.', "Розмите фото іноді зберігає вечір краще, ніж ідеальне.", "Размытое фото иногда сохраняет вечер лучше, чем идеальное."),
      createdAt: '2026-10-02T21:10:00Z', likes: 1540, comments: 96,
    },
    {
      id: 'mia-tonights-soundtrack', creatorId: 'mia', kind: 'text', topic: localized('Listening notes', "Музичні нотатки", "Музыкальные заметки"),
      caption: localized("Tonight's soundtrack: a slow piano, an open window, and no reason to rush the ending.", "Саундтрек цього вечора: повільне фортепіано, відчинене вікно й жодної причини поспішати до фіналу.", "Саундтрек этого вечера: неторопливое фортепиано, открытое окно и ни одной причины спешить к финалу."),
      createdAt: '2026-10-01T20:05:00Z', likes: 1784, comments: 98,
    },
  ],
}
