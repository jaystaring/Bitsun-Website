import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export type CardVariant = 'default' | 'glass' | 'gradient';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
  className?: string;
}

export type SectionBackground = 'primary' | 'secondary' | 'gradient' | 'none';
export type SectionPadding = 'sm' | 'md' | 'lg' | 'xl';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: SectionBackground;
  padding?: SectionPadding;
  container?: boolean;
}

export interface HeroSectionProps {
  content: import('./content').HeroContent;
}

export interface CapabilityGridProps {
  title: string;
  subtitle?: string;
  items: import('./content').Capability[];
  columns?: 2 | 3 | 4;
}

export interface ProductShowcaseProps {
  title: string;
  subtitle?: string;
  products: import('./content').Product[];
  layout?: 'grid' | 'carousel';
}
