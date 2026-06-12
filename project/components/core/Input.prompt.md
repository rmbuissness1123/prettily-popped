A soft, friendly form field — pill-shaped single line or rounded textarea — with optional label, helper, and error states.

```jsx
<Input label="Your name" placeholder="Erin" />
<Input label="Email" type="email" helper="I'll reply within a day!" />
<Input label="Tell me about your event" textarea />
<Input label="Date" error="Please pick a date" />
```

Set `textarea` for multi-line. `error` turns the border red and replaces `helper`. Inherits all native input attributes.
