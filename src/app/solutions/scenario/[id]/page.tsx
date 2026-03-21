'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactModal from '@/components/common/ContactModal/ContactModal';
import styles from './page.module.css';

interface Stat {
  value: string;
  label: string;
}

interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Layer {
  name: string;
  description: string;
  items: string[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  features: string[];
  value: string;
}

interface Industry {
  id: string;
  name: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  href: string;
}

interface ScenarioData {
  id: string;
  title: string;
  subtitle: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: Stat[];
  };
  painPoints: {
    title: string;
    subtitle: string;
    items: PainPoint[];
  };
  architecture: {
    title: string;
    subtitle: string;
    layers: Layer[];
  };
  features: {
    title: string;
    subtitle: string;
    items: Feature[];
  };
  industries: {
    title: string;
    items: Industry[];
  };
  products: {
    title: string;
    items: Product[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton: string;
  };
}

export default function ScenarioSolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const [data, setData] = useState<ScenarioData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolvedId, setResolvedId] = useState<string>('');

  useEffect(() => {
    params.then((p) => {
      setResolvedId(p.id);
      fetch(`/api/solutions/scenario/${p.id}`)
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    });
  }, [params]);

  if (!data) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow}></div>
          <div className={styles.gridPattern}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>{data.hero.subtitle}</span>
            <h1 className={styles.heroTitle}>{data.hero.title}</h1>
            <p className={styles.heroDescription}>{data.hero.description}</p>
            <div className={styles.heroStats}>
              {data.hero.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem} style={{ animationDelay: `${idx * 0.1}s` }}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.painPoints}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.painPoints.title}</h2>
            <p className={styles.sectionSubtitle}>{data.painPoints.subtitle}</p>
          </div>
          <div className={styles.painGrid}>
            {data.painPoints.items.map((item) => (
              <div key={item.id} className={styles.painCard}>
                <div className={styles.painIcon}>
                  <PainIcon type={item.icon} />
                </div>
                <h3 className={styles.painTitle}>{item.title}</h3>
                <p className={styles.painDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.architecture.title}</h2>
            <p className={styles.sectionSubtitle}>{data.architecture.subtitle}</p>
          </div>
          <div className={styles.archDiagram}>
            {data.architecture.layers.map((layer, idx) => (
              <div key={idx} className={styles.archLayer}>
                <div className={styles.layerHeader}>
                  <span className={styles.layerIndex}>{idx + 1}</span>
                  <h3 className={styles.layerName}>{layer.name}</h3>
                </div>
                <p className={styles.layerDesc}>{layer.description}</p>
                <div className={styles.layerItems}>
                  {layer.items.map((item, i) => (
                    <span key={i} className={styles.layerItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.features.title}</h2>
            <p className={styles.sectionSubtitle}>{data.features.subtitle}</p>
          </div>
          <div className={styles.featureGrid}>
            {data.features.items.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureHeader}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                </div>
                <p className={styles.featureDesc}>{feature.description}</p>
                <div className={styles.featureTags}>
                  {feature.features.map((f, i) => (
                    <span key={i} className={styles.featureTag}>{f}</span>
                  ))}
                </div>
                <div className={styles.featureValue}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{feature.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.industries}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.industries.title}</h2>
          </div>
          <div className={styles.industryGrid}>
            {data.industries.items.map((industry) => (
              <div key={industry.id} className={styles.industryCard}>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDesc}>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.products.title}</h2>
          </div>
          <div className={styles.productLinks}>
            {data.products.items.map((product) => (
              <Link key={product.id} href={product.href} className={styles.productLink}>
                <span>{product.name}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
          <h2 className={styles.ctaTitle}>{data.cta.title}</h2>
          <p className={styles.ctaDescription}>{data.cta.description}</p>
          <div className={styles.ctaButtons}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className={styles.ctaPrimary}
            >
              {data.cta.primaryButton}
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

function PainIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    channel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    price: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    policy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4"/>
      </svg>
    ),
    market: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    inventory: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    stock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    turnover: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    allocation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    manual: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
      </svg>
    ),
    efficiency: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    blackbox: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
        <circle cx="15" cy="15" r="2"/>
      </svg>
    ),
    trust: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    platform: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    process: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    risk: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <path d="M12 9v4M12 17h.01"/>
      </svg>
    ),
    sales: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    reconcile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 15H15M9 21h6"/>
        <path d="M15 15h6v-6l-4 2"/>
        <path d="M12 9v3h3v6l-3 3"/>
      </svg>
    ),
  };
  return icons[type] || icons.channel;
}
