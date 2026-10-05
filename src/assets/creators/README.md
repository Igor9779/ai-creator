# MUSE creator assets

These are the four canonical MUSE AI identities: ALEX, RYAN, LUNA, and MIA. All portraits were generated with the built-in image generation tool. Names, biographies, statistics, and conversations are fictional local mock data in `src/data/creators.ts`; local content feeds live in `src/data/posts.ts`.

Each identity has two local web assets:

| Creator | Portrait | Avatar |
| --- | --- | --- |
| ALEX | `alex/portrait.webp` | `alex/avatar.webp` |
| RYAN | `ryan/portrait.webp` | `ryan/avatar.webp` |
| LUNA | `luna/portrait.webp` | `luna/avatar.webp` |
| MIA | `mia/portrait.webp` | `mia/avatar.webp` |

Portraits are 800 × 1200 pixels. Avatars are 256 × 256 face crops from the same source portrait, preserving identity. WebP assets are encoded with cwebp at quality 82 for portraits and 84 for avatars, using the photo preset, method 6, and sharp YUV conversion. The original generated PNG files are preserved outside the project. No remote image service is used at runtime.

Each creator's feed pairs a portrait post with a separate supporting photograph of their world. The four 960 × 640 supporting WebP assets and exact generation prompts are documented in [feed-photography.md](feed-photography.md).

## Final generation prompts

### ALEX

```text
Use case: photorealistic-natural
Primary request: ALEX, a 30-year-old male technology and business creator. Intelligent, confident, curious and ambitious, with short neatly styled black hair, a subtle close-trimmed beard, warm brown eyes, a defined angular jaw and light olive skin. A distinctive believable face, calm focused expression, looking slightly toward the camera. Premium dark charcoal fine-knit clothing and a clean modern black jacket, no accessories or visible devices.
Scene/backdrop: refined modern architectural interior, dark stone, glass walls and an understated unbranded technology workspace behind him, elegant geometric architecture without legible screens.
Lighting/mood: cinematic warm window side light and softly lit background, confident and composed, face clearly readable rather than swallowed in shadow.
Color palette: warm charcoal, black stone, muted ivory, natural olive skin and very subtle amber.
Asset type: one vertical 2:3 portrait photograph for the premium MUSE AI creator showcase, no graphic design.
Style/medium: professional editorial photography, believable human face and eyes, honest pores and subtle natural imperfections, fine 35mm film texture, realistic proportions, tasteful commercial art direction.
Composition/framing: head and upper torso, full head and hair visible, face in the upper central third with generous breathing room, eye level portrait lens with natural perspective. Suitable for mobile portrait covers and square avatar crops.
Constraints: only one adult person, clean believable anatomy, no extra limbs, no distorted facial features or eyes, no plastic skin, no text, logos, watermarks, borders, collages or UI.
Avoid: neon, blue or purple glow, sci-fi armor, artificial circuitry, exaggerated bokeh gradients, over-smoothed beauty filters, glossy stock-photo smiles.
```

### RYAN

```text
Use case: photorealistic-natural
Primary request: RYAN, a 27-year-old male travel, fitness and adventure creator. Athletic build, sun-tanned fair skin with a few natural freckles, medium-length sandy brown wavy hair moved lightly by a coastal breeze, clean-shaven face with a narrower jaw and an easy optimistic grin, clear blue-gray eyes. Energetic and spontaneous, relaxed natural posture. Wearing a premium off-white casual t-shirt with an open muted moss-green lightweight overshirt, realistic physique without exaggerated muscles.
Scene/backdrop: outdoors on a dramatic quiet coastal trail, soft blue-gray sea, rocky coast and distant mountains, believable travel environment, no tourist signs.
Lighting/mood: beautiful natural late-afternoon daylight, fresh open-air photography, optimistic, subtle warm sunlight and realistic shadows, no artificial cinema studio background.
Color palette: subdued coastal gray-green, muted stone, ivory, warm tanned skin.
Asset type: one vertical 2:3 portrait photograph for the premium MUSE AI creator showcase, no graphic design.
Style/medium: professional editorial photography, believable human face and eyes, honest pores and subtle natural imperfections, fine 35mm film texture, realistic proportions, tasteful commercial art direction.
Composition/framing: head and upper torso, full head and hair visible, face in the upper central third with generous breathing room, eye level portrait lens with natural perspective. Suitable for mobile portrait covers and square avatar crops.
Constraints: only one adult person, clean believable anatomy, no extra limbs, no distorted facial features or eyes, no plastic skin, no text, logos, watermarks, borders, collages or UI.
Avoid: neon, blue or purple glow, sci-fi armor, artificial circuitry, exaggerated bokeh gradients, over-smoothed beauty filters, glossy stock-photo smiles.
```

### LUNA

```text
Use case: photorealistic-natural
Primary request: LUNA, a 25-year-old female fashion and lifestyle creator. Elegant, confident, slightly playful. Long straight dark brown hair with a center part, warm medium olive skin, almond-shaped deep brown eyes, striking high cheekbones, a refined oval face with a defined jaw and distinctive expressive eyebrows. Looking directly at the camera with a subtle knowing half-smile. Sophisticated draped black satin clothing and one small understated gold earring, natural minimal makeup.
Scene/backdrop: premium contemporary city apartment with warm limestone walls, sculptural furniture and a large window with a softly rendered urban skyline, no visible brands.
Lighting/mood: sophisticated cinematic fashion editorial photography, warm directional window light with gently graded shadows, fully believable facial texture and eyes.
Color palette: black satin, warm ivory limestone, muted city gray, warm olive skin and tiny gold accents.
Asset type: one vertical 2:3 portrait photograph for the premium MUSE AI creator showcase, no graphic design.
Style/medium: professional editorial photography, believable human face and eyes, honest pores and subtle natural imperfections, fine 35mm film texture, realistic proportions, tasteful commercial art direction.
Composition/framing: head and upper torso, full head and hair visible, face in the upper central third with generous breathing room, eye level portrait lens with natural perspective. Suitable for mobile portrait covers and square avatar crops.
Constraints: only one adult person, clean believable anatomy, no extra limbs, no distorted facial features or eyes, no plastic skin, no text, logos, watermarks, borders, collages or UI.
Avoid: neon, blue or purple glow, sci-fi armor, artificial circuitry, exaggerated bokeh gradients, over-smoothed beauty filters, glossy stock-photo smiles.
```

### MIA

```text
Use case: photorealistic-natural
Primary request: MIA, a 27-year-old female art, music and culture creator. Creative, thoughtful and slightly mysterious. A clearly different face from a sharp oval fashion model: softly rounded heart-shaped face, wider-set green-gray eyes, a small softly upturned nose, cool fair skin with light natural freckles, chin-length copper-auburn bob with short soft blunt fringe. Contemplative quiet expression, turned a little in three-quarter view toward the camera, individual alternative creative style. Wearing a faded charcoal tee and a textured dark burgundy vintage jacket with a tiny simple silver earring, no visible text or graphics.
Scene/backdrop: an intimate independent record store and photography workspace, warm shelves of vinyl sleeves without readable text, a restrained photographic print on the wall, tactile creative environment.
Lighting/mood: professional culture magazine portrait, soft natural window light blended with quiet amber practical light, intimate and atmospheric with a clearly visible face.
Color palette: warm charcoal, muted burgundy, copper hair, cool fair skin, subtle amber.
Asset type: one vertical 2:3 portrait photograph for the premium MUSE AI creator showcase, no graphic design.
Style/medium: professional editorial photography, believable human face and eyes, honest pores and subtle natural imperfections, fine 35mm film texture, realistic proportions, tasteful commercial art direction.
Composition/framing: head and upper torso, full head and hair visible, face in the upper central third with generous breathing room, eye level portrait lens with natural perspective. Suitable for mobile portrait covers and square avatar crops.
Constraints: only one adult person, clean believable anatomy, no extra limbs, no distorted facial features or eyes, no plastic skin, no text, logos, watermarks, borders, collages or UI.
Avoid: neon, blue or purple glow, sci-fi armor, artificial circuitry, exaggerated bokeh gradients, over-smoothed beauty filters, glossy stock-photo smiles.
```
