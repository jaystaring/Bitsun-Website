import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import styles from './page.module.css';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  highlights: string[];
}

interface SolutionsData {
  title: string;
  subtitle: string;
  industries: {
    title: string;
    subtitle: string;
    items: SolutionItem[];
  };
}

async function getSolutionsData(): Promise<SolutionsData> {
  const filePath = path.join(process.cwd(), 'content/i18n/zh-CN/pages/solutions/index.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

export default async function SolutionsPage() {
  const data = await getSolutionsData();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow}></div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <p className={styles.heroSubtitle}>{data.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.industries.title}</h2>
            <p className={styles.sectionSubtitle}>{data.industries.subtitle}</p>
          </div>
          <div className={styles.grid}>
            {data.industries.items.map((item) => (
              <Link key={item.id} href={item.href} className={styles.card}>
                <div className={styles.cardIcon}>
                  <IndustryIcon type={item.icon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <div className={styles.cardHighlights}>
                  {item.highlights.map((h, i) => (
                    <span key={i} className={styles.highlight}>{h}</span>
                  ))}
                </div>
                <div className={styles.cardArrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGlow}></div>
        </div>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>找不到适合的解决方案？</h2>
          <p className={styles.ctaDescription}>
            联系我们的专家，为您定制专属解决方案
          </p>
          <Link href="/contact/demo" className={styles.ctaButton}>
            <span>预约咨询</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

function IndustryIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    beauty: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    health: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.5 20.5L3.5 13.5a4.95 4.95 0 117-7l7 7a4.95 4.95 0 11-7 7z"/>
        <path d="M8.5 8.5l7 7"/>
      </svg>
    ),
    life: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  };
  return icons[type] || icons.beauty;
}
