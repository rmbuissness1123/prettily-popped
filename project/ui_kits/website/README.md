# Website UI Kit — Prettily Popped

An interactive recreation of the Prettily Popped marketing site, built entirely
from the design-system components.

## Run it
Open `index.html`. It loads the compiled `_ds_bundle.js` and composes the screens.

## Screens
| File | Screen | Notes |
|------|--------|-------|
| `Home.jsx` | Landing | Hero, how-it-works, services preview, about teaser, CTA band |
| `Services.jsx` | Services & pricing | Filterable grid of `ServiceCard`s by category |
| `Gallery.jsx` | Gallery | Masonry of placeholder tiles (swap for real photos) |
| `About.jsx` | About Erin | Owner story (real copy from the live site) + values |
| `Contact.jsx` | Contact / quote | Form with `Input` + occasion `Tag` picker + success state |
| `Nav.jsx` / `Footer.jsx` | Chrome | Sticky nav + dark footer |
| `data.js` | Content | Services, prices, event types, steps |

## Components used
`Button`, `Tag`, `Input`, `Card` (core) · `ServiceCard`, `SectionHeading` (marketing).

## Notes
- **Imagery is placeholder.** All photos are soft balloon-hue gradient blocks labelled
  "your photo here". Replace with Erin's real event photography (the live site has these).
- Prices and the owner's story are taken from the real site (prettilypopped.com).
- Navigation is client-side state; every screen scrolls to top on change.
