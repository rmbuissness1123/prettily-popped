import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Balloon-hue color. @default 'rose' */
  tone?: 'rose' | 'gold' | 'sage' | 'powder' | 'lilac' | 'plum';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Filled instead of soft-tinted. @default false */
  solid?: boolean;
  children?: React.ReactNode;
}

/**
 * Small pill chip in soft balloon hues — for categories, event types,
 * statuses, or inline labels. Default is a soft tint; `solid` fills it.
 */
export function Tag(props: TagProps): JSX.Element;
