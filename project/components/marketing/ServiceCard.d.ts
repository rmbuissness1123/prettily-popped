import * as React from 'react';

export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Service/product name, e.g. "10 ft Organic Garland". */
  name: string;
  /** Price string, e.g. "CA$120". */
  price: string;
  /** Small unit suffix, e.g. "/ garland". */
  unit?: string;
  /** One- or two-line description. */
  blurb?: string;
  /** Photo URL. When omitted, a soft balloon-hue placeholder is shown. */
  image?: string;
  /** Placeholder tint when no image. @default 'blush' */
  tone?: 'blush' | 'peach' | 'gold' | 'sage' | 'powder' | 'lilac';
  /** Corner ribbon label, e.g. "Most popular". */
  badge?: string;
  /** CTA text. @default 'Request this' */
  ctaLabel?: string;
  onSelect?: () => void;
}

/**
 * A product/service tile for the Prettily Popped services grid — photo,
 * name, blurb, price, and a request CTA. Composes Tag for the badge and
 * falls back to a branded placeholder when no photo is supplied.
 *
 * @startingPoint section="Marketing" subtitle="Balloon service product tile" viewport="360x420"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
