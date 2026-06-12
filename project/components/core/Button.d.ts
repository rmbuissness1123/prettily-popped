import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost';
  /** Size. @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded pill shape. @default true */
  pill?: boolean;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Render as a different element (e.g. 'a'). */
  as?: any;
  /** When set, renders an anchor. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * The primary call-to-action for Prettily Popped. Pill-shaped and tactile,
 * with a buoyant hover lift. Use `primary` for the main action, `gold` for
 * celebratory/booking moments, `secondary`/`ghost` for supporting actions.
 *
 * @startingPoint section="Core" subtitle="Pill buttons in 4 variants & 3 sizes" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
