export interface SiteConfig {
  name: string;
  nameEn: string;
  description: string;
  url: string;
  logo: {
    light: string;
    dark: string;
  };
  contact: ContactInfo;
  social: SocialLinks;
  footer: FooterConfig;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLinks {
  wechat: string;
  linkedin: string;
  weibo: string;
}

export interface FooterConfig {
  copyright: string;
  icp: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  tag?: {
    text: string;
    type: 'primary' | 'secondary' | 'accent';
  };
  children?: NavigationItem[];
}

export interface NavigationConfig {
  mainNav: NavigationItem[];
  ctaNav: Array<{
    id: string;
    label: string;
    href: string;
    type: 'primary' | 'secondary' | 'ghost';
  }>;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  mode: 'dark' | 'light';
  fontFamily: {
    sans: string[];
  };
}

export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: 'core-product' | 'solution' | 'ai-product';
  tags?: string[];
  icon?: string;
  heroImage?: string;
  features?: Feature[];
  highlights?: MetricHighlight[];
  industries?: string[];
  relatedCases?: string[];
  content: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface MetricHighlight {
  metric: string;
  label: string;
  trend?: 'up' | 'down';
}

export interface Case {
  id: string;
  client: string;
  industry: string;
  logo?: string;
  challenge: string;
  solution: string;
  results: MetricHighlight[];
  tags: string[];
  content: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  clients: string[];
  challenges: string[];
  solutions: string[];
}

export interface CoreTag {
  title: string;
  subtitle: string;
  icon: string;
}

export interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  coreTags?: CoreTag[];
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
  highlights?: Array<{
    value: string;
    label: string;
  }>;
  background: {
    type: 'image' | 'video' | 'gradient';
    src?: string;
    alt?: string;
    overlay?: boolean;
  };
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface CapabilitiesSection {
  title: string;
  subtitle?: string;
  items: Capability[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights?: string[];
}

export interface CTASection {
  title: string;
  description?: string;
  buttons: Array<{
    text: string;
    href: string;
    type: 'primary' | 'secondary' | 'ghost';
  }>;
}
