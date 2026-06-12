import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding. @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Adds a buoyant hover lift. @default false */
  interactive?: boolean;
  /** Surface tone. @default 'card' */
  tone?: 'card' | 'soft' | 'shell' | 'ink';
  children?: React.ReactNode;
}

/**
 * A warm-white surface container with soft border and gentle shadow —
 * the base for service cards, panels, and content blocks. Use `ink` for
 * dark feature sections and `interactive` for clickable cards.
 */
export function Card(props: CardProps): JSX.Element;
