# Prettily Popped — Design System

> Custom balloon decor & event styling, handmade in Fredericton, New Brunswick.
> Owned and operated by **Erin**. *"Let's make your next event POP!"*

This is the brand & product design system for **Prettily Popped** (legally *Prettily
Made Events*). It captures the voice, colour, type, components and screens needed to
design on-brand materials — marketing pages, social posts, quotes, decks and mocks.

---

## Sources

There is **no codebase or Figma** for this brand. The system was derived from the
live website and the owner's own words:

- **Website:** https://www.prettilypopped.com/ (built on Webador — a generic template,
  so the visual identity here is an original, considered interpretation of the brand spirit,
  not a copy of the template).
- **About copy:** https://www.prettilypopped.com/about (Erin's story — used verbatim)
- **Services & pricing:** https://www.prettilypopped.com/services-available
- **Gallery:** https://www.prettilypopped.com/gallery (real event photography — not yet
  copied in; see Caveats)

**The business:** organic balloon garlands (6–16 ft), balloon stacks/centrepieces,
towers/columns, and a signature "Golden Arch" — with delivery and installation included
in the Fredericton area (and a small mileage fee beyond).

---

## Content fundamentals

The voice is **Erin's voice** — a real person who loves what she does. Warm, personal,
genuinely excited, never corporate.

- **First person, singular.** "I", "my", "by my own two hands" — never "we" or "our team".
  This is a one-woman business and the copy should feel like it.
- **Emphatic, joyful caps** for emphasis on a single word: "a role that I **LOVE**",
  "make your next event **POP**", "SO many gatherings". Used sparingly, on one word — not whole sentences.
- **Exclamation points** are welcome but measured — about one per short paragraph, not stacked ("!!!").
- **You-focused warmth.** Speaks directly to the reader: "thank you for being here",
  "I'd love to bring your vision to life", "big or small".
- **Conversational asides** with em-dashes and ellipses: "I thought: hey, I just might have
  something here… And so, Prettily Popped was born."
- **No emoji** in headlines or formal copy. (The brand is pretty and elegant, not 🎈🎉.)
  A balloon-dot motif carries the playfulness instead.
- **Canadian spelling:** colour, favourite, centre.
- **Signature sign-offs** in script: "— Erin", "Thanks for being here".

**Sample lines that are on-brand:**
- "Let's make your next event truly *pop*."
- "I take such pride in my work and simply love seeing a vision come to life by my own two hands."
- "Big or small, I'd love to bring your vision to life."
- "No question is too big or too small!"

---

## Visual foundations

The identity is **celebratory-yet-elegant** — "prettily" (refined, feminine, hand-crafted)
balanced with "popped" (joyful, round, playful). Think a beautifully styled dessert table:
soft, warm, and a little glamorous.

- **Colour.** A warm **cream** paper (`--cream #FBF4EF`) ground, a **dusty-rose** primary
  (`--rose-500 #CC7585`), **deep plum** ink (`--plum-900 #3A2230`, a warm near-black with a
  berry cast — never pure black), and a **golden-arch** accent (`--gold-500 #C79A45`) for
  celebratory/booking moments. A set of soft **"balloon" hues** (blush, peach, gold, sage,
  powder, lilac) brings colourful variety to tags, placeholders and the gallery. Everything
  is warm-toned; avoid cool greys and pure white (use `--white-warm #FFFCFA` for cards).
- **Type.** Display is **Bodoni Moda** — an elegant, high-contrast serif, often italicised on
  the word being emphasised ("*pop*"). Body/UI is **Hanken Grotesk**, warm and friendly.
  **Parisienne** script appears *sparingly* for signature moments (eyebrows like "Hello & welcome",
  sign-offs, the tagline) — never for body or headings. See Caveats re: font substitution.
- **Shape & radius.** Generous, **balloon-soft** rounding. Buttons and tags are full **pills**
  (`--radius-pill`); cards use `--radius-lg` (24px); hero/feature blocks `--radius-xl` (32px).
  Sharp corners are off-brand.
- **The balloon-dot motif.** Three small balloon-shaped dots (blush, rose, gold) sit above the
  wordmark and in the nav — the system's one piece of decorative iconography.
- **Backgrounds.** Mostly flat warm fills. Soft **vertical gradients** from `--rose-50` to
  `--cream` open hero/section areas. A **dark plum** (`--surface-ink`) anchors the footer and
  CTA bands for contrast. No busy patterns or textures.
- **Imagery.** Photography is the star (real event photos) — warm, bright, colourful, joyful.
  Where photos aren't available the system uses **soft balloon-hue gradient placeholders**
  with a script "your photo here" label, framed in `--radius-xl`. Images sit in rounded frames
  with `--shadow-lg`.
- **Shadows.** Soft and **warm plum-tinted** (never neutral-grey or harsh), like gentle party
  lighting — `--shadow-sm` for resting cards, `--shadow-lg` on hover/feature imagery, and a
  rose-tinted `--shadow-rose` lift under the primary button.
- **Borders.** Hairline `1.5px` in warm tones (`--border-soft #ECDAD3`). Cards favour a soft
  border + soft shadow together.
- **Motion.** Gentle and **buoyant** — a slight balloon bounce on button hover
  (`--ease-buoyant`, `translateY(-2px)`), a soft settle elsewhere (`--ease-soft`). Cards lift
  4px on hover. Durations 140–420ms. Nothing flashy, no infinite loops.
- **Hover states.** Buttons darken one step (rose-500 → rose-600) and lift; secondary/ghost
  fill with `--rose-50`; cards lift and deepen their shadow; nav links gain a soft rose pill.
- **Press / focus.** Inputs show a 4px rose focus ring (`--ring`) plus a rose border. Press
  states settle the lift back to 0.
- **Layout.** Centered `--container-max 1200px` with 28px gutters; generous vertical rhythm
  (64–80px section padding). Headings left-aligned by default; centered for hero CTAs.

---

## Iconography

Prettily Popped is **deliberately icon-light** — the brand leans on photography, type and the
balloon-dot motif rather than a dense icon set.

- **Balloon-dot motif (primary mark).** Three small CSS balloon shapes (blush / rose / gold)
  above the wordmark and in the nav. This is the signature graphic device — reach for it before
  any icon.
- **Unicode arrows** (`→`) for "see more" / CTA affordances, animated to nudge on hover.
- **No emoji** in brand copy (see Content fundamentals).
- **When functional icons are genuinely needed** (e.g. an app or richer dashboard), use
  **[Lucide](https://lucide.dev)** — its rounded caps and friendly 2px stroke match the
  balloon-soft aesthetic. Load from CDN and colour with `--berry-600` / `--text-muted`.
  *This is a recommended substitution — the brand has no icon set of its own.* Keep usage minimal.

---

## What's inside (index / manifest)

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** — design tokens (`@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**`components/`** — reusable React primitives (compiled into `_ds_bundle.js`)
- `core/` — **Button**, **Tag**, **Card**, **Input**
- `marketing/` — **ServiceCard**, **SectionHeading**

**`guidelines/`** — foundation specimen cards (Design System tab)
- Colours (primary, neutrals, accent/balloon) · Type (display, body, script, scale)
  · Spacing (scale, radius, shadow) · Brand (wordmark, voice)

**`ui_kits/website/`** — interactive recreation of the marketing site
- `index.html` (start here) + `Home/Services/Gallery/About/Contact/Nav/Footer.jsx` + `data.js`

**`assets/`** — logos, imagery (see Caveats — real photography still needed)

---

## Caveats

- **Fonts are substitutes.** Bodoni Moda + Hanken Grotesk + Parisienne (Google Fonts) were
  chosen to fit the brand spirit; the business has no licensed typeface. Swap if a brand font exists.
- **Imagery is placeholder.** Real event photos from the live gallery have not been copied in;
  all photo areas use branded gradient placeholders. **Please provide real photography & a logo.**
- **Colour palette is an original interpretation** — the live site uses a generic template with
  no defined brand colours. Confirm the dusty-rose / gold direction or steer it.
