import { Advantage } from '@/types';
import styles from './AdvantageSection.module.css';

interface AdvantageSectionProps {
  title: string;
  subtitle?: string;
  items: Advantage[];
}

const fallbackIcons: Record<string, React.ReactNode> = {
  lighthouse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M8 6h8l-1 14H9L8 6z" />
      <path d="M6 20h12M10 10h4M10 14h4" />
      <path d="M12 2l3-1M12 2l-3-1" />
    </svg>
  ),
  platform: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22,8.5 12,15.5 2,8.5" />
    </svg>
  ),
  deep: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22V8M12 8c-3 0-6 3-6 6M12 8c3 0 6 3 6 6" />
      <circle cx="12" cy="5" r="3" />
      <path d="M6 19h12" />
    </svg>
  ),
};

export default function AdvantageSection({ title, subtitle, items }: AdvantageSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                  {fallbackIcons[item.icon] || fallbackIcons.platform}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              {item.highlights && (
                <div className={styles.tags}>
                  {item.highlights.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
