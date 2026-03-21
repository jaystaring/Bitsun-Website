import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { SiteConfig, NavigationConfig, ThemeConfig, Product, Case, HeroContent, CapabilitiesSection, Advantage, CTASection } from '@/types';

const contentDir = path.join(process.cwd(), 'content');

export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDir, 'config', 'site.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getNavigationConfig(): NavigationConfig {
  const filePath = path.join(contentDir, 'config', 'navigation.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getThemeConfig(): ThemeConfig {
  const filePath = path.join(contentDir, 'config', 'theme.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getHeroContent(locale: string = 'zh-CN'): HeroContent {
  const filePath = path.join(contentDir, 'i18n', locale, 'pages', 'home', 'hero.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getCapabilitiesContent(locale: string = 'zh-CN'): CapabilitiesSection {
  const filePath = path.join(contentDir, 'i18n', locale, 'pages', 'home', 'capabilities.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getAdvantagesContent(locale: string = 'zh-CN'): { title: string; subtitle?: string; items: Advantage[] } {
  const filePath = path.join(contentDir, 'i18n', locale, 'pages', 'home', 'advantages.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getCTAContent(locale: string = 'zh-CN'): CTASection {
  const filePath = path.join(contentDir, 'i18n', locale, 'pages', 'home', 'cta.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export function getProductSlugs(locale: string = 'zh-CN'): string[] {
  const productsDir = path.join(contentDir, 'i18n', locale, 'products');
  if (!fs.existsSync(productsDir)) {
    return [];
  }
  return fs.readdirSync(productsDir).filter(file => file.endsWith('.md'));
}

export function getProductBySlug(slug: string, locale: string = 'zh-CN'): Product | null {
  const filePath = path.join(contentDir, 'i18n', locale, 'products', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    ...data,
    content,
  } as Product;
}

export function getAllProducts(locale: string = 'zh-CN'): Product[] {
  const orderedSlugs = ['omc-oms', 'distribution', 'ecommerce', 'pos', 'ai', 'ai-platform', 'ai-agent'];
  return orderedSlugs
    .map(slug => getProductBySlug(slug, locale))
    .filter((product): product is Product => product !== null);
}

export function getCaseSlugs(locale: string = 'zh-CN'): string[] {
  const casesDir = path.join(contentDir, 'i18n', locale, 'cases');
  if (!fs.existsSync(casesDir)) {
    return [];
  }
  return fs.readdirSync(casesDir).filter(file => file.endsWith('.md'));
}

export function getCaseBySlug(slug: string, locale: string = 'zh-CN'): Case | null {
  const filePath = path.join(contentDir, 'i18n', locale, 'cases', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  
  return {
    ...data,
    content,
  } as Case;
}

export function getAllCases(locale: string = 'zh-CN'): Case[] {
  const slugs = getCaseSlugs(locale);
  return slugs
    .map(slug => getCaseBySlug(slug.replace('.md', ''), locale))
    .filter((c): c is Case => c !== null);
}
