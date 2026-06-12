The pill-shaped call-to-action for Prettily Popped — use it for any clickable action, from "Book a consult" to "View the gallery".

```jsx
<Button variant="primary" size="lg">Let's make it pop</Button>
<Button variant="gold" rightIcon={<ArrowIcon/>}>Request a quote</Button>
<Button variant="secondary">View gallery</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

Variants: `primary` (rose, main CTA), `gold` (celebratory/booking), `secondary` (warm-white outline), `ghost` (text only).
Sizes: `sm` · `md` · `lg`. `pill` is on by default — set `pill={false}` for a soft-rounded rectangle. Renders as `<a>` when `href` is set.
