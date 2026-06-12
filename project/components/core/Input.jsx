import React from 'react';

/**
 * Prettily Popped — Input
 * Soft, friendly text field with optional label & helper text.
 */
export function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  textarea = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focused, setFocused] = React.useState(false);

  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-strong)',
    width: '100%',
    padding: textarea ? '12px 16px' : '12px 18px',
    background: 'var(--white-warm)',
    border: `1.5px solid ${error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--border-strong)'}`,
    borderRadius: textarea ? 'var(--radius-md)' : 'var(--radius-pill)',
    outline: 'none',
    boxShadow: focused ? '0 0 0 4px var(--ring)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
    resize: textarea ? 'vertical' : undefined,
    minHeight: textarea ? '96px' : undefined,
    ...style,
  };

  const Field = textarea ? 'textarea' : 'input';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
          color: 'var(--text-strong)', letterSpacing: '0.01em', paddingLeft: '4px',
        }}>{label}</label>
      )}
      <Field
        id={inputId}
        type={textarea ? undefined : type}
        style={fieldStyle}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
      />
      {(helper || error) && (
        <span style={{
          fontSize: '12px', paddingLeft: '4px',
          color: error ? 'var(--error)' : 'var(--text-muted)',
        }}>{error || helper}</span>
      )}
    </div>
  );
}
