import React from 'react';

/**
 * Prettily Popped — Button
 * Balloon-round, warm, tactile. Pill by default.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  pill = true,
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  as,
  href,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: '13px', padding: '8px 16px', gap: '7px' },
    md: { fontSize: '15px', padding: '12px 24px', gap: '8px' },
    lg: { fontSize: '17px', padding: '15px 32px', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--text-on-primary)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-rose)',
    },
    secondary: {
      background: 'var(--white-warm)',
      color: 'var(--berry-600)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)',
    },
    gold: {
      background: 'var(--gold-500)',
      color: '#fff',
      border: '1.5px solid transparent',
      boxShadow: '0 12px 30px rgba(168,126,51,0.28)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--berry-600)',
      border: '1.5px solid transparent',
      boxShadow: 'none',
    },
  };

  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.01em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth ? '100%' : 'auto',
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-buoyant), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--primary-hover)';
    if (variant === 'gold') e.currentTarget.style.background = 'var(--gold-600)';
    if (variant === 'secondary') e.currentTarget.style.background = 'var(--rose-50)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--rose-50)';
  };
  const hoverOut = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.background = variants[variant].background;
  };

  const Tag = as || (href ? 'a' : 'button');
  const extra = Tag === 'button' ? { disabled, type: rest.type || 'button' } : { href };

  return (
    <Tag style={base} onMouseEnter={hoverIn} onMouseLeave={hoverOut} {...extra} {...rest}>
      {leftIcon && <span style={{ display: 'inline-flex' }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display: 'inline-flex' }}>{rightIcon}</span>}
    </Tag>
  );
}
