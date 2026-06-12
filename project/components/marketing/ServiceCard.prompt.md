A product/service tile for the services grid — photo, name, blurb, price, and a request CTA.

```jsx
<ServiceCard
  name="10 ft Organic Garland"
  price="CA$120"
  blurb="A lush, hand-built garland in your colours — delivered & installed."
  badge="Most popular"
  tone="blush"
  image="/assets/garland.jpg"
  onSelect={() => openQuote()}
/>
```

Omit `image` to show a branded balloon-hue placeholder (`tone`: blush/peach/gold/sage/powder/lilac). `badge` shows a gold ribbon. Composes `Tag` internally.
