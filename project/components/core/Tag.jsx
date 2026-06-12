import React from 'react';

/**
 * Prettily Popped — Tag
 * Soft pill chip in balloon hues. For categories, statuses, price labels.
 */
export function Tag({ tone = 'rose', size = 'md', solid = false, children, style = {}, ...rest }) {
  const tones = {
    rose:   { soft: 'var(--rose-100)',     ink: 'var(--berry-700)',  solidBg: 'var(--rose-500)' },
    gold:   { soft: 'var(--gold-100)',     ink: 'var(--gold-600)',   solidBg: 'var(--gold-500)' },
    sage:   { soft: '#E1EADF',             ink: '#4F6B4C',           solidBg: 'var(--balloon-sage)' },
    powder: { soft: '#E2EEF3',             ink: '#3E677A',           solidBg: 'var(--balloon-powder)' },
    lilac:  { soft: '#EEE6F2',             ink: '#6A4F7C',           solidBg: 'var(--balloon-lilac)' },
    plum:   { soft: 'var(--shell)',        ink: 'var(--plum-800)',   solidBg: 'var(--plum-800)' },
  };
  const t = tones[tone] || tones.rose;
  const sizes = {
    sm: { fontSize: '11px', padding: '3px 10px' },
    md: { fontSize: '12.5px', padding: '5px 13px' },
  };

  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1.2,
    background: solid ? t.solidBg : t.soft,
    color: solid ? '#fff' : t.ink,
    ...sizes[size],
    ...style,
  };

  return <span style={s} {...rest}>{children}</span>;
}
