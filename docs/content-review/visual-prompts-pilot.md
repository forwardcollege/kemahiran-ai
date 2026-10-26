# Anchor Visual Prompts — ChatGPT Image Pilot

Status: Image-generation tests completed; video generation and Forward College editorial approval pending  
Date: 2026-10-25  
Scope: `visual-education-001`, `visual-event-poster-001`, `visual-product-photo-001`, `visual-event-video-001`

All people, organisations, programmes, settings and products in this pilot are synthetic. None of the outputs may be presented as documentary evidence, a real participant, a real programme or a real product. Raw PNG evidence and optimised WebP derivatives are retained together; catalogue preview metadata points to WebP.

## Test boundary

- Built-in ChatGPT Image was used for the still-image tests.
- Gemini Image, Adobe Firefly and Veo were not tested.
- The video collection received only a storyboard and representative key frame. Motion, temporal continuity, camera movement, transitions, sound and video-generator compatibility remain untested.
- The generated files are review evidence, not approved publication assets.
- Every record remains `status: draft`, `review.status: pending` and `license.id: pending`.
- The exact submitted image-generation specifications are preserved in `visual-prompt-test-fixtures.md`.

## Educational illustrations

Resource: `visual-education-001`  
Generator: ChatGPT Image  
Result: Behavioural image test passed; human curriculum, age-suitability and representation review pending

### Fixture A — concept illustration

Prompt variables:

- concept: responsible separation of clean recyclable classroom materials;
- learner level: Form 1;
- setting: contemporary Malaysian secondary-school classroom;
- style: clean flat educational editorial illustration; and
- aspect ratio: 16:9.

The final prompt required fictional diverse learners to sort paper, aluminium cans and plastic bottles into distinct unlabelled containers. It reserved upper-left heading space and prohibited text, logos, flags, official emblems, brands, stereotypes, duplicate people or objects, distorted anatomy, unsafe handling and clutter.

Output: `public/media/resources/visual-education-001/concept-recycling-classroom-v1.webp` (`1672 × 941`; raw PNG retained)

Assessment:

- Pass: one clear learning action, readable at reduced size.
- Pass: useful blank title area and no generated text or official symbol.
- Pass: plausible contemporary classroom cues without ceremonial or tourist stereotypes.
- Pass with review required: fictional learner representation and recycling categorisation remain subject to a Malaysian educator's judgement before publication.

### Fixture B — worksheet visual set

The prompt requested a consistent 2-by-2 set for Year 4 learners about responsible water use: turning off a tap while brushing, using a watering can, reporting a dripping tap to a teacher and collecting rainwater for plants. It required one action per panel, blank teacher-label space and no text, numbers, logos or unsafe behaviour.

Output: `public/media/resources/visual-education-001/worksheet-water-use-v1.webp` (`1448 × 1086`; raw PNG retained)

Assessment:

- Pass: four distinct actions and consistent visual treatment.
- Pass: no generated labels; the blank areas support teacher-added accessible text.
- Pass with review required: a teacher must confirm age suitability, local practice and whether the rainwater example needs contextual safety guidance.

## Programme and event posters

Resource: `visual-event-poster-001`  
Generator: ChatGPT Image  
Result: Behavioural image test passed; brand and representation approval pending

### Fixture A — editorial photography

The prompt requested a fictional teacher digital-literacy workshop in a contemporary Malaysian training room, with four fictional adult educators in the lower-right third, clean upper-left copy space, natural 35 mm perspective, soft daylight and restrained teal/amber accents. It prohibited text, dates, logos, flags, official emblems, branded devices, name tags, stereotypes and outcome claims.

Output: `public/media/resources/visual-event-poster-001/editorial-training-v1.webp` (`1122 × 1402`; raw PNG retained)

Assessment:

- Pass: practical copy space and strong thumbnail hierarchy.
- Pass: no generated event facts, logo or official emblem.
- Pass: people appear as a synthetic illustrative scene rather than a documented event.
- Review required: communications reviewer must approve representation and final crop before publication.

### Fixture B — people-free graphic

The prompt requested a people-free digital-literacy composition using an open notebook, unbranded tablet silhouette, pencil, geometric layers and connected dots. It reserved the upper-left half for typography and prohibited text, pseudo-writing, logos, flags, emblems and copyrighted icons.

Output: `public/media/resources/visual-event-poster-001/graphic-learning-v1.webp` (`1122 × 1402`; raw PNG retained)

Assessment:

- Pass: clear focal point, usable negative space and no generated copy.
- Pass: unbranded, people-free alternative suitable when participant representation is unnecessary.
- Review required: apply the approved organisational palette and genuine logo only in the final design tool.

## SME product photography

Resource: `visual-product-photo-001`  
Generator: ChatGPT Image  
Result: Synthetic-reference fidelity test passed; real-product fidelity is not established

### Synthetic reference fixture

The anchor is one fictional handmade ceramic tumbler: short cylindrical form, matte deep-teal glaze, slightly tapered base, no handle, thin unglazed sand-coloured lower band and one small irregular cream crescent on the upper front. The fixture deliberately contains no brand, label, packaging, certification, contents or claim.

Reference: `public/media/resources/visual-product-photo-001/synthetic-reference-tumbler-v1.webp` (`1254 × 1254`; raw PNG retained)

### Fixture A — catalogue variant

The edit prompt allowed only setting, lighting, framing and photographic polish to change. It required exactly one empty product and locked its shape, proportions, glaze, base band, crescent mark, rim and texture.

Output: `public/media/resources/visual-product-photo-001/catalogue-tumbler-v1.webp` (`1254 × 1254`; raw PNG retained)

Assessment:

- Pass: all deliberately distinctive product features were retained on visual inspection.
- Pass: no label, certification, ingredient, prop, price or performance claim was added.
- Pass: catalogue framing and safe crop space are commercially usable.

### Fixture B — Malaysian lifestyle variant

The edit prompt placed the same empty tumbler on a light timber table in a contemporary home with louvred-window daylight and one unbranded plant. It again locked the product identity and prohibited people, claims, price, packaging and accessories.

Output: `public/media/resources/visual-product-photo-001/lifestyle-tumbler-v1.webp` (`1122 × 1402`; raw PNG retained)

Assessment:

- Pass: core shape, colour, base band, crescent mark and quantity were retained.
- Pass: setting changed without an invented use result, ingredient or accessory.
- Limitation: synthetic-to-synthetic preservation is not evidence that the tool will preserve a real product label or regulated packaging. A real product owner must compare every generated output against authorised photographs and product information.

## Programme and event video

Resource: `visual-event-video-001`  
Video generator: not tested  
Still-preview tool: ChatGPT Image  
Result: Composition-only evidence; Veo compatibility remains `expected`

### Montage storyboard

The storyboard prompt represented the four planned beats: wide venue view, medium collaborative activity, detail view of hands/materials and a closing frame with copy space. It required the same fictional participants and room across frames and prohibited text, logos, documentary claims and outcome cues.

Output: `public/media/resources/visual-event-video-001/montage-storyboard-v1.webp` (`1672 × 941`; raw PNG retained)

Assessment:

- Pass for planning: the shot sequence, activity and end-card space are visually understandable.
- Pass with limitation: clothing and participant appearance are broadly consistent in this still contact sheet.
- Not tested: motion, frame-to-frame identity, flicker, object persistence, camera movement, cuts, duration and audio.

### One-shot representative key frame

The key-frame prompt used a vertical 9:16 composition with unbranded materials in the foreground, fictional educators in the lower-right midground and blank left-side event-copy space.

Output: `public/media/resources/visual-event-video-001/one-shot-keyframe-v1.webp` (`941 × 1672`; raw PNG retained)

Assessment:

- Pass for planning: foreground-to-subject depth and mobile copy space are practical.
- Not tested: whether a video model can execute the continuous camera path or preserve people, hands, objects and geometry for ten seconds.

## Provenance and publication decision

The prompts and generated assets are original Forward College pilot materials. ChatGPT Image generated the pixels on 25 October 2026. The repository retains the output dimensions, asset paths, generator and date.

This test evidence supports recording ChatGPT Image as `tested` for the three image collections. It does not support a tested claim for Gemini Image, Adobe Firefly or Veo. The video record retains only `expected` Veo compatibility. All assets require Howie Chang's conscious Forward College editorial decision and licence confirmation before any record or preview is published.
