# MUSE feed photography

Four supporting photographs generated with the built-in image_gen tool for local creator posts. Each final asset is a 960 × 640 WebP at quality 82, using cwebp's photo preset, method 6, and sharp YUV conversion. Combined with the original identity portraits, they supply two photographic posts per creator. No image service is called at runtime.

| Creator | Final workspace asset | Scene |
| --- | --- | --- |
| ALEX | `alex/feed-architecture.webp` | Modern architecture and a quiet research space |
| RYAN | `ryan/feed-coast.webp` | A coastal hiking path |
| LUNA | `luna/feed-editorial.webp` | A fashion still life in a city apartment |
| MIA | `mia/feed-vinyl.webp` | A vinyl listening corner |

Paths above are relative to `src/assets/creators/`. Supporting photographs contain no people; portrait posts use the canonical creator assets, preserving their visual identities. The original generated PNGs remain in the built-in generation directory. All captions, topics, timestamps, and counters live in `src/data/posts.ts`.

## Final prompt set

### ALEX

Asset: `alex/feed-architecture.webp`

```text
Primary request: a quiet modern architecture and technology research space at early morning, a sculptural concrete staircase beside tall glass walls, charcoal stone, warm oak, geometric beams of sunlight, one understated unbranded worktable in the distance. The architecture feels ambitious and thoughtful, with strong vanishing lines and honest tactile materials. Warm ivory sunlight against dark neutral stone, a calm sense of building the future. Eye-level architectural magazine photography, 35mm lens, balanced perspective, no impossible structures.
Use case: photorealistic-natural. Asset type: one supporting image for a creator's editorial content feed in MUSE, a premium dark AI creator showcase. Composition: a single landscape 3:2 professional editorial photograph, full frame, no graphic design, no collage. Style: realistic materials, natural imperfections, restrained film grain, professional photography and physically credible lighting. No people or faces. No text, letters, legible screens, logos, watermarks, borders or UI. No purple/blue gradients, neon, sci-fi circuitry, plastic surfaces or oversaturated stock-photo treatment.
```

### RYAN

Asset: `ryan/feed-coast.webp`

```text
Primary request: an empty coastal hiking trail winding above a quiet blue-green sea, rugged sunlit limestone cliffs and distant soft mountains, small patches of muted moss-green coastal plants, crisp natural late-morning daylight. Energetic, optimistic travel photography with a generous open horizon and inviting path, believable natural terrain, subtle breeze suggested by grasses, realistic water, warm stone and restrained color. Professional adventure magazine photography from a hiker's viewpoint, 28mm lens, no tourist signs or buildings.
Use case: photorealistic-natural. Asset type: one supporting image for a creator's editorial content feed in MUSE, a premium dark AI creator showcase. Composition: a single landscape 3:2 professional editorial photograph, full frame, no graphic design, no collage. Style: realistic materials, natural imperfections, restrained film grain, professional photography and physically credible lighting. No people or faces. No text, letters, legible screens, logos, watermarks, borders or UI. No purple/blue gradients, neon, sci-fi circuitry, plastic surfaces or oversaturated stock-photo treatment.
```

### LUNA

Asset: `luna/feed-editorial.webp`

```text
Primary request: an intimate fashion editorial still life in a sophisticated city apartment: a finely tailored charcoal blazer loosely draped on a sculptural cream chair, black satin fabric, a small pair of understated gold earrings resting on a warm limestone console, a glass of water near a large window with a softly blurred city beyond. Elegant and slightly spontaneous rather than perfectly staged, tactile fabric weave and delicate reflections, soft late-afternoon window light and long shadows, warm off-white, black and muted gold. Premium fashion magazine photography, no brand marks or beauty products.
Use case: photorealistic-natural. Asset type: one supporting image for a creator's editorial content feed in MUSE, a premium dark AI creator showcase. Composition: a single landscape 3:2 professional editorial photograph, full frame, no graphic design, no collage. Style: realistic materials, natural imperfections, restrained film grain, professional photography and physically credible lighting. No people or faces. No text, letters, legible screens, logos, watermarks, borders or UI. No purple/blue gradients, neon, sci-fi circuitry, plastic surfaces or oversaturated stock-photo treatment.
```

### MIA

Asset: `mia/feed-vinyl.webp`

```text
Primary request: a close editorial photograph of a black vinyl record playing on a believable vintage turntable in a quiet independent record store listening corner, correct single tonearm and stylus resting on the record, warm timber shelves with plain abstract record sleeves softly out of focus, a small warm amber lamp, a burgundy paper sleeve partly visible. Thoughtful, intimate, a little mysterious, tactile grooves, dust and natural imperfections, quiet evening window light mixed with warm practical light. Professional music and culture magazine photography, 50mm lens, realistic turntable mechanics, no readable album artwork or labels.
Use case: photorealistic-natural. Asset type: one supporting image for a creator's editorial content feed in MUSE, a premium dark AI creator showcase. Composition: a single landscape 3:2 professional editorial photograph, full frame, no graphic design, no collage. Style: realistic materials, natural imperfections, restrained film grain, professional photography and physically credible lighting. No people or faces. No text, letters, legible screens, logos, watermarks, borders or UI. No purple/blue gradients, neon, sci-fi circuitry, plastic surfaces or oversaturated stock-photo treatment.
```
