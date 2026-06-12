import React from 'react';

/**
 * Prettily Popped — SectionHeading
 * Eyebrow + display title (+ optional script accent & lead).
 * The signature heading lockup used across marketing sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  script,
  lead,
  align = 'left',
  onDark = false,
  style = {},
  ...rest
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '10px',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '640px' : undefined,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style,
    }} {...rest}>
      {eyebrow && (
        <span style={{
          fontFamily: 'var(--font-body)', textTransform: 'uppercase',
          letterSpacing: '0.18em', fontSize: '11px', fontWeight: 700,
          color: onDark ? 'var(--gold-400)' : 'var(--primary)',
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 600, margin: 0,
        fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.02em',
        color: onDark ? 'var(--text-on-ink)' : 'var(--text-strong)',
      }}>
        {title}
        {script && (
          <span style={{
            fontFamily: 'var(--font-script)', fontWeight: 400,
            color: onDark ? 'var(--gold-400)' : 'var(--primary)',
            fontSize: '0.78em', marginLeft: '0.2em', letterSpacing: 0,
          }}>{script}</span>
        )}
      </h2>
      {lead && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: 1.6, margin: '4px 0 0',
          color: onDark ? 'var(--text-on-ink)' : 'var(--text-body)', maxWidth: '52ch',
          opacity: onDark ? 0.85 : 1,
        }}>{lead}</p>
      )}
    </div>
  );
}
