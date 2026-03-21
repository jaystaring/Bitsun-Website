'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface Logo {
  id: string;
  name: string;
  src: string;
}

interface CasesData {
  title: string;
  subtitle: string;
  categories: Array<{ id: string; title: string }>;
  logos: Record<string, Logo[]>;
  contact: {
    text: string;
    qrcode: string;
  };
  stats: {
    title: string;
    items: Array<{ value: string; label: string }>;
  };
}

import casesData from '../../../content/i18n/zh-CN/pages/cases/index.json';

export default function CasesPage() {
  const [activeCategory, setActiveCategory] = useState('beauty');
  const sliderRef = useRef<HTMLDivElement>(null);
  const data = casesData as CasesData;

  const currentLogos = data.logos[activeCategory] || [];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {data.stats.items.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.logos}>
        <div className={styles.container}>
          <div className={styles.categoryTabs}>
            {data.categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className={styles.sliderWrapper}>
            <button 
              className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
              onClick={() => scroll('left')}
              aria-label="向左滑动"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className={styles.slider} ref={sliderRef}>
              {currentLogos.map((logo) => (
                <div key={logo.id} className={styles.logoItem}>
                  <div className={styles.logoCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className={styles.logoImage}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button 
              className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
              onClick={() => scroll('right')}
              aria-label="向右滑动"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <p className={styles.contactText}>{data.contact.text}</p>
            <div className={styles.qrcodeWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={data.contact.qrcode} 
                alt="比升微信公众号" 
                className={styles.qrcode}
              />
            </div>
            <Link href="/contact/demo" className={styles.contactBtn}>
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
