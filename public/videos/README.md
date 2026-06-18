# Hero background video

`hero-loop.mp4` is the calm, looping clip used in the homepage hero
(`components/home/HomeHero.tsx`). It plays muted, autoplay, looped, and falls
back to the poster image (`/images/source/hero-wellness-portrait.jpg`) while
loading or if the file is missing.

## Current clip
- **File:** `hero-loop.mp4` (1280x720, ~3.8 MB)
- **Content:** Rotating, electrically-charged human brain glowing on black, a
  literal "neural" hero. Compressed from a 1080p source for web.
- **Source:** Client-supplied clip (rotating-human-brain-electrically-charged_1622898).

## Testimonial background video
- **File:** `testimonial-bg.mp4` (1280x720, ~3.0 MB)
- **Content:** Soft green forest canopy with gentle light through the leaves,
  used as a soothing, low-visibility backdrop behind the "Real Words from CTHC
  Patients" section (`components/home/HomeTestimonial.tsx`), under a brand-green
  wash for legibility.
- **Source:** Pexels video #4328514 (Pexels License, free to use, no
  attribution required). https://www.pexels.com/video/4328514/

## Replacing it
Drop a new `hero-loop.mp4` here (same filename) to swap the footage. For best
results keep it subtle and slow-moving (soft b-roll: hands, nature, clinic
ambience), muted, 8–15s seamless loop, 1080p H.264, under ~6–9 MB.

Optionally add `hero-loop.webm` (VP9) for a smaller alternate and re-add the
matching `<source>` line in the hero component.

