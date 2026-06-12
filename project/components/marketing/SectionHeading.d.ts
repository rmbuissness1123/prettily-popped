import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase eyebrow above the title. */
  eyebrow?: string;
  /** Main display title (Bodoni). */
  title: React.ReactNode;
  /** Optional script-font accent appended inline to the title. */
  script?: string;
  /** Supporting lead paragraph below. */
  lead?: string;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** Recolor for dark/ink backgrounds. @default false */
  onDark?: boolean;
}

/**
 * The signature section heading lockup — uppercase eyebrow, Bodoni display
 * title with an optional Parisienne script accent, and a lead paragraph.
 * Used to open every marketing section.
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
