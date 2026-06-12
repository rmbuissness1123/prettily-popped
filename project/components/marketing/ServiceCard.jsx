import React from 'react';
import { Tag } from '../core/Tag.jsx';

/**
 * Prettily Popped — ServiceCard
 * Showcases a balloon service/product: photo, name, blurb, price.
 * Falls back to a soft balloon-hue placeholder when no image is given.
 */
export function ServiceCard({
  name,
  price,
  unit = '',
  blurb,
  image,
  tone = 'blush',
  badge,
  ctaLabel = 'Request this',
  onSelect,
  style = {},
  ...rest
}) {
  const placeholders = {
    blush:  'linear-gradient(135deg, #F7DCD9 0%, #EFC5C5 100%)',
    peach:  'linear-gradient(135deg, #F7E0CC 0%, #F3CBA8 100%)',
    gold:   'linear-gradient(135deg, #F6EAD0 0%, #E6CB8E 100%)',
    sage:   'linear-gradient(135deg, #E1EADF 0%, #AFC3AC 100%)',
    powder: 'linear-gradient(135deg, #E2EEF3 0%, #B7D2DD 100%)',
    lilac:  'linear-gradient(135deg, #EEE6F2 0%, #C9B6D6 100%)',
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1.5px solid var(--border-soft)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', background: placeholders[tone] || placeholders.blush }}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <span style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-script)', fontSize: '30px', color: 'rgba(58,34,48,0.32)',
          }}>Prettily Popped</span>
        )}
        {badge && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <Tag tone="gold" solid size="sm">{badge}</Tag>
          </div>
        )}
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: 600,
          color: 'var(--text-strong)', margin: 0, letterSpacing: '-0.01em',
        }}>{name}</h3>
        {blurb && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-body)',
            margin: 0, lineHeight: 1.5, flex: 1 }}>{blurb}</p>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          marginTop: '4px', paddingTop: '12px', borderTop: '1px solid var(--border-soft)' }}>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--berry-600)' }}>{price}</span>
            {unit && <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>{unit}</span>}
          </span>
          <button onClick={onSelect} style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
            color: 'var(--berry-600)', background: 'transparent', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>{ctaLabel} <span style={{ transition: 'transform var(--dur-fast)', transform: hover ? 'translateX(3px)' : 'none' }}>→</span></button>
        </div>
      </div>
    </div>
  );
}
