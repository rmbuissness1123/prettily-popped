import React from 'react';

/**
 * Prettily Popped — Card
 * Warm-white surface with soft border + gentle shadow.
 * `interactive` adds a buoyant hover lift.
 */
export function Card({
  padding = 'md',
  interactive = false,
  tone = 'card',
  children,
  style = {},
  ...rest
}) {
  const pads = { none: '0', sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-7)' };
  const tones = {
    card:  { background: 'var(--surface-card)', border: '1.5px solid var(--border-soft)' },
    soft:  { background: 'var(--surface-soft)', border: '1.5px solid var(--rose-100)' },
    shell: { background: 'var(--surface-shell)', border: '1.5px solid transparent' },
    ink:   { background: 'var(--surface-ink)', border: '1.5px solid transparent' },
  };

  const s = {
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    padding: pads[padding],
    transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    color: tone === 'ink' ? 'var(--text-on-ink)' : 'var(--text-body)',
    ...tones[tone],
    ...style,
  };

  const onEnter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };

  return (
    <div style={s} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </div>
  );
}
