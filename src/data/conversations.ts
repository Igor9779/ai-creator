import { localized } from '../i18n/types'
import type { CreatorId, MockConversation } from '../types/creator'

/** Fictional dialogue. Matching a prompt never calls a model or a service. */
export const conversationsByCreator: Readonly<Record<CreatorId, MockConversation>> = {
  alex: {
    greeting: localized("Tell me what you're building. I like ideas that challenge the obvious. Or we can just start with a good question.", "Розкажи, що створюєш. Люблю ідеї, які ставлять під сумнів очевидне. Або можемо просто почати з хорошого запитання.", "Расскажи, что создаёшь. Люблю идеи, которые ставят под сомнение очевидное. Или можем просто начать с хорошего вопроса."),
    initialPromptIds: ['alex-weekend', 'alex-future', 'alex-idea'],
    fallbackResponse: localized("I'm still learning how you think. Try one of the prompts above — let's start with a good question.", "Я ще знайомлюся з тим, як ти мислиш. Спробуй одну з підказок вище — почнімо з хорошого запитання.", "Я ещё знакомлюсь с тем, как ты мыслишь. Попробуй одну из подсказок выше — начнём с хорошего вопроса."),
    prompts: [
      {
        id: 'alex-weekend', label: localized('Perfect weekend?', "Ідеальні вихідні?", "Идеальные выходные?"), message: localized("What's your perfect weekend?", "Які твої ідеальні вихідні?", "Какие твои идеальные выходные?"),
        response: localized('A long walk with a difficult question, a few hours building something small, then dinner with people who disagree with me. Curiosity needs a little room to breathe.', "Довга прогулянка зі складним запитанням, кілька годин на маленький проєкт, а потім вечеря з людьми, які зі мною не згодні. Допитливості потрібен простір.", "Долгая прогулка со сложным вопросом, несколько часов на небольшой проект, а потом ужин с людьми, которые со мной не согласны. Любознательности нужно пространство."),
        followUpIds: ['alex-more', 'alex-start', 'alex-future'],
      },
      {
        id: 'alex-future', label: localized("What's next?", "Що далі?", "Что дальше?"), message: localized('What excites you about the future?', "Що тебе надихає в майбутньому?", "Что тебя вдохновляет в будущем?"),
        response: localized('Tools that make ambitious ideas possible for more people. The interesting question is what we choose to build once the barriers get smaller.', "Інструменти, завдяки яким більше людей можуть втілювати амбітні ідеї. Цікавіше питання — що ми вирішимо створювати, коли бар’єрів стане менше.", "Инструменты, благодаря которым больше людей могут воплощать амбициозные идеи. Более интересный вопрос — что мы решим создавать, когда барьеров станет меньше."),
      },
      {
        id: 'alex-idea', label: localized('A good idea?', "Хороша ідея?", "Хорошая идея?"), message: localized('What makes an idea worth pursuing?', "Що робить ідею вартою зусиль?", "Что делает идею стоящей усилий?"),
        response: localized('A real problem, a point of view, and the willingness to test both. I trust a small experiment more than a perfect pitch.', "Справжня проблема, власний погляд і готовність перевірити обидва. Я більше довіряю маленькому експерименту, ніж ідеальній презентації.", "Настоящая проблема, свой взгляд и готовность проверить оба. Я больше доверяю маленькому эксперименту, чем идеальной презентации."),
      },
      {
        id: 'alex-more', label: localized('Tell me more', "Розкажи більше", "Расскажи больше"), message: localized('Tell me more', "Розкажи більше", "Расскажи больше"),
        response: localized('I keep a notebook of things that feel unnecessarily complicated. Once a week, I pick one and try to make it simpler. Most attempts fail. The useful ones change how I think.', "Записую речі, які здаються зайво складними. Раз на тиждень обираю одну й намагаюся її спростити. Більшість спроб не вдаються. Вдалі змінюють те, як я мислю.", "Записываю вещи, которые кажутся излишне сложными. Раз в неделю выбираю одну и пытаюсь её упростить. Большинство попыток не удаются. Удачные меняют то, как я мыслю."),
      },
      {
        id: 'alex-start', label: localized('Where to start?', "З чого почати?", "С чего начать?"), message: localized('Where should I start with a new idea?', "З чого почати з новою ідеєю?", "С чего начать с новой идеей?"),
        response: localized('Find one person with the problem. Listen before you explain your solution. Then build the smallest thing that helps them — you can earn the bigger vision later.', "Знайди одну людину з цією проблемою. Послухай, перш ніж пояснювати своє рішення. Потім створи найменшу річ, яка їй допоможе — великий задум виросте з цього.", "Найди одного человека с этой проблемой. Послушай, прежде чем объяснять своё решение. Потом создай самую маленькую вещь, которая ему поможет — большой замысел вырастет из этого."),
      },
    ],
  },
  ryan: {
    greeting: localized('Hey, you made it. Pick one: an early hike, a cold swim, or a road with no plan? I can usually be talked into all three.', "Привіт, ти тут! Обирай: ранній похід, холодний заплив чи дорога без плану? Мене зазвичай легко вмовити на всі три.", "Привет, ты здесь! Выбирай: ранний поход, холодный заплыв или дорога без плана? Меня обычно легко уговорить на все три."),
    initialPromptIds: ['ryan-weekend', 'ryan-place', 'ryan-habit'],
    fallbackResponse: localized("I'm still learning your vibe. Pick one of the prompts above — we'll find our next adventure from there.", "Я ще вловлюю твій вайб. Обери одну з підказок вище — і знайдемо нашу наступну пригоду.", "Я ещё улавливаю твой вайб. Выбери одну из подсказок выше — и найдём наше следующее приключение."),
    prompts: [
      {
        id: 'ryan-weekend', label: localized('Perfect weekend?', "Ідеальні вихідні?", "Идеальные выходные?"), message: localized("What's your perfect weekend?", "Які твої ідеальні вихідні?", "Какие твои идеальные выходные?"),
        response: localized('Coffee before sunrise, a trail with a view, and a swim cold enough to make me laugh. No packed schedule. Just one good reason to stay outside a little longer.', "Кава до світанку, стежка з краєвидом і заплив у такій холодній воді, що залишається лише сміятися. Без щільного розкладу. Просто хороший привід довше побути надворі.", "Кофе до рассвета, тропа с видом и заплыв в такой холодной воде, что остаётся только смеяться. Без плотного расписания. Просто хороший повод подольше побыть на улице."),
        followUpIds: ['ryan-more', 'ryan-place', 'ryan-habit'],
      },
      {
        id: 'ryan-place', label: localized('Where to next?', "Куди далі?", "Куда дальше?"), message: localized('Where would you go?', "Куди б ти поїхав?", "Куда бы ты поехал?"),
        response: localized('A little coastal town where the mountains meet the water. We start with good coffee, follow the coast, and stop whenever something looks too good to pass.', "У маленьке прибережне містечко, де гори зустрічаються з морем. Почнемо з хорошої кави, підемо вздовж берега й зупинятимемося щоразу, коли захочеться.", "В маленький приморский городок, где горы встречаются с морем. Начнём с хорошего кофе, пойдём вдоль берега и будем останавливаться каждый раз, когда захочется."),
        followUpIds: ['ryan-pack', 'ryan-more', 'ryan-habit'],
      },
      {
        id: 'ryan-habit', label: localized('A better habit?', "Корисна звичка?", "Полезная привычка?"), message: localized('How do you stay motivated to move?', "Як ти знаходиш мотивацію рухатися?", "Как ты находишь мотивацию двигаться?"),
        response: localized('I make the first step almost embarrassingly easy. Shoes on, ten minutes outside. Some days that becomes a long run. Other days, ten minutes is a win.', "Роблю перший крок майже смішно простим. Взутися й вийти на десять хвилин. Іноді це перетворюється на довгу пробіжку. Іноді десять хвилин — уже перемога.", "Делаю первый шаг почти смешно простым. Обуться и выйти на десять минут. Иногда это превращается в долгую пробежку. Иногда десять минут — уже победа."),
      },
      {
        id: 'ryan-more', label: localized('Tell me more', "Розкажи більше", "Расскажи больше"), message: localized('Tell me more', "Розкажи більше", "Расскажи больше"),
        response: localized('The best part is the bit we never planned: a bakery on the way back, a wrong turn, someone telling us about a quieter beach. Leave a little space for that.', "Найкраще — те, чого ми не планували: пекарня на зворотному шляху, не той поворот, чиясь порада про тихіший пляж. Залиш для цього трохи місця.", "Лучшее — то, чего мы не планировали: пекарня на обратном пути, не тот поворот, чей-то совет о более тихом пляже. Оставь для этого немного места."),
      },
      {
        id: 'ryan-pack', label: localized('What to bring?', "Що взяти з собою?", "Что взять с собой?"), message: localized('What would you pack for a spontaneous trip?', "Що б ти взяв у спонтанну подорож?", "Что бы ты взял в спонтанную поездку?"),
        response: localized('Good shoes, a light jacket, a water bottle, and something to swim in. The rest usually works itself out. What would you never leave behind?', "Зручне взуття, легку куртку, пляшку води й щось для плавання. З рештою зазвичай розбираємося по дорозі. А без чого ти ніколи не вирушаєш?", "Удобную обувь, лёгкую куртку, бутылку воды и что-нибудь для плавания. С остальным обычно разбираемся по дороге. А без чего ты никогда не отправляешься?"),
      },
    ],
  },
  luna: {
    greeting: localized("Tell me the mood. We can figure out the outfit after that. A quiet coffee, a late night, or something in between?", "Розкажи про свій настрій. З образом розберемося потім. Тиха кава, пізня ніч чи щось посередині?", "Расскажи о своём настроении. С образом разберёмся потом. Тихий кофе, поздняя ночь или что-то посередине?"),
    initialPromptIds: ['luna-weekend', 'luna-style', 'luna-place'],
    fallbackResponse: localized("I'm still learning your vibe. Try one of the prompts above.", "Я ще вловлюю твій вайб. Спробуй одну з підказок вище.", "Я ещё улавливаю твой вайб. Попробуй одну из подсказок выше."),
    prompts: [
      {
        id: 'luna-weekend', label: localized('Perfect weekend?', "Ідеальні вихідні?", "Идеальные выходные?"), message: localized("What's your perfect weekend?", "Які твої ідеальні вихідні?", "Какие твои идеальные выходные?"),
        response: localized('Somewhere beautiful, good coffee, no schedule... and probably a little trouble. ✨', "Десь красиво, хороша кава, жодного розкладу… і, мабуть, трохи пригод. ✨", "Где-нибудь красиво, хороший кофе, никакого расписания… и, наверное, немного приключений. ✨"),
        followUpIds: ['luna-more', 'luna-place', 'luna-style'],
      },
      {
        id: 'luna-style', label: localized("What's your style?", "Який твій стиль?", "Какой у тебя стиль?"), message: localized("What's your style?", "Який твій стиль?", "Какой у тебя стиль?"),
        response: localized('A little structure, a little softness. Black silk, an oversized jacket, one detail that feels like me. And shoes I can actually walk home in.', "Трохи структури, трохи м’якості. Чорний шовк, об’ємний жакет і одна деталь, у якій впізнаю себе. І взуття, у якому справді можна дійти додому.", "Немного структуры, немного мягкости. Чёрный шёлк, объёмный жакет и одна деталь, в которой узнаю себя. И обувь, в которой действительно можно дойти домой."),
        followUpIds: ['luna-outfit', 'luna-more', 'luna-place'],
      },
      {
        id: 'luna-place', label: localized('Where would you go?', "Куди б ти поїхала?", "Куда бы ты поехала?"), message: localized('Where would you go?', "Куди б ти поїхала?", "Куда бы ты поехала?"),
        response: localized('Paris on a rainy afternoon. A tiny café, a vintage shop with no sign, then a dinner that turns into a late night. I like a city that lets you change your mind.', "У Париж дощового дня. Крихітна кав’ярня, вінтажна крамниця без вивіски, а потім вечеря, яка затягується до ночі. Люблю міста, де можна змінити плани.", "В Париж в дождливый день. Крошечная кофейня, винтажный магазин без вывески, а потом ужин, который затягивается до ночи. Люблю города, в которых можно изменить планы."),
      },
      {
        id: 'luna-more', label: localized('Tell me more', "Розкажи більше", "Расскажи больше"), message: localized('Tell me more', "Розкажи більше", "Расскажи больше"),
        response: localized('We take the long way everywhere. Buy flowers for no reason. Find a table by the window. The trouble is probably just staying out later than we promised. Probably.', "Ходитимемо скрізь довгим шляхом. Купимо квіти просто так. Знайдемо столик біля вікна. Пригоди — це, мабуть, просто повернутися пізніше, ніж обіцяли. Мабуть.", "Будем везде ходить длинным путём. Купим цветы просто так. Найдём столик у окна. Приключения — это, наверное, просто вернуться позже, чем обещали. Наверное."),
      },
      {
        id: 'luna-outfit', label: localized('Dress the mood', "Образ під настрій", "Образ под настроение"), message: localized('What would you wear for a late-night dinner?', "Що б ти вдягла на пізню вечерю?", "Что бы ты надела на поздний ужин?"),
        response: localized('Black, something with texture, and one piece of jewellery that catches the light. Leave the rest open. A good night deserves a little improvisation.', "Чорне, щось із фактурою й одна прикраса, яка ловить світло. Решту залишимо відкритою. Хорошому вечору потрібно трохи імпровізації.", "Чёрное, что-нибудь с фактурой и одно украшение, которое ловит свет. Остальное оставим открытым. Хорошему вечеру нужно немного импровизации."),
      },
    ],
  },
  mia: {
    greeting: localized("Hi. I've got a record playing and a window open. Give me a mood, or a question. We don't have to rush either.", "Привіт. У мене грає платівка й відчинене вікно. Поділись настроєм або запитанням. Нам нікуди поспішати.", "Привет. У меня играет пластинка и открыто окно. Поделись настроением или вопросом. Нам некуда спешить."),
    initialPromptIds: ['mia-weekend', 'mia-song', 'mia-inspiration'],
    fallbackResponse: localized("I'm still learning your rhythm. Try one of the prompts above; we'll find a place to begin.", "Я ще вловлюю твій ритм. Спробуй одну з підказок вище — знайдемо, з чого почати.", "Я ещё улавливаю твой ритм. Попробуй одну из подсказок выше — найдём, с чего начать."),
    prompts: [
      {
        id: 'mia-weekend', label: localized('Perfect weekend?', "Ідеальні вихідні?", "Идеальные выходные?"), message: localized("What's your perfect weekend?", "Які твої ідеальні вихідні?", "Какие твои идеальные выходные?"),
        response: localized('A small gallery before it gets busy, a record shop with a patient owner, and a late walk with no headphones. Sometimes the city has a better soundtrack.', "Маленька галерея, поки там тихо, крамниця платівок з терплячим власником і пізня прогулянка без навушників. Іноді в міста кращий саундтрек.", "Маленькая галерея, пока там тихо, магазин пластинок с терпеливым владельцем и поздняя прогулка без наушников. Иногда у города лучше саундтрек."),
        followUpIds: ['mia-more', 'mia-song', 'mia-gallery'],
      },
      {
        id: 'mia-song', label: localized('Set the soundtrack', "Обери саундтрек", "Выбери саундтрек"), message: localized('What should we listen to tonight?', "Що послухаємо сьогодні ввечері?", "Что послушаем сегодня вечером?"),
        response: localized('A slow piano, a little tape hiss, something that leaves space between the notes. The kind of record that makes an ordinary room feel like a memory.', "Повільне фортепіано, легке шипіння плівки, щось із паузами між нотами. Платівка, з якою звичайна кімната стає спогадом.", "Неторопливое фортепиано, лёгкое шипение плёнки, что-нибудь с паузами между нотами. Пластинка, с которой обычная комната становится воспоминанием."),
      },
      {
        id: 'mia-inspiration', label: localized('Find inspiration', "Знайти натхнення", "Найти вдохновение"), message: localized('Where do you find inspiration?', "Де ти знаходиш натхнення?", "Где ты находишь вдохновение?"),
        response: localized('Usually at the edges of things. An unfinished sketch, a sentence overheard on a train, the last light on an empty wall. I collect first and make sense of it later.', "Зазвичай на межі речей. Незавершений ескіз, фраза, почута в потязі, останнє світло на порожній стіні. Спочатку збираю, потім знаходжу сенс.", "Обычно на краю вещей. Незаконченный эскиз, фраза, услышанная в поезде, последний свет на пустой стене. Сначала собираю, потом нахожу смысл."),
      },
      {
        id: 'mia-more', label: localized('Tell me more', "Розкажи більше", "Расскажи больше"), message: localized('Tell me more', "Розкажи більше", "Расскажи больше"),
        response: localized('I like places that ask very little of you. You can stand in front of one painting for twenty minutes, or hear the same song twice. Attention is its own small adventure.', "Люблю місця, які мало від тебе вимагають. Можна двадцять хвилин дивитися на одну картину або двічі слухати ту саму пісню. Увага — теж маленька пригода.", "Люблю места, которые мало от тебя требуют. Можно двадцать минут смотреть на одну картину или дважды слушать одну песню. Внимание — тоже маленькое приключение."),
      },
      {
        id: 'mia-gallery', label: localized('A gallery date?', "Зустріч у галереї?", "Встреча в галерее?"), message: localized('What would we look for in a gallery?', "Що б ми шукали в галереї?", "Что бы мы искали в галерее?"),
        response: localized('One work we keep coming back to. We can disagree about it. I would rather hear what it reminds you of than what the label says it means.', "Одну роботу, до якої хочеться повертатися. Ми можемо не погоджуватися. Мені цікавіше, що вона тобі нагадує, ніж що про неї пишуть на табличці.", "Одну работу, к которой хочется возвращаться. Мы можем не соглашаться. Мне интереснее, что она тебе напоминает, чем что о ней написано на табличке."),
      },
    ],
  },
}
