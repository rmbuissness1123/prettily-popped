import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Muted helper text below the field. */
  helper?: string;
  /** Error message — turns the field red and overrides helper. */
  error?: string;
  /** Render a multi-line textarea instead. @default false */
  textarea?: boolean;
}

/**
 * A soft, friendly form field. Pill-shaped for single-line inputs and
 * soft-rounded for textareas. Pairs label + helper/error text. Used across
 * the contact & quote-request forms.
 */
export function Input(props: InputProps): JSX.Element;
