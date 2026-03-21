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

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  value: string;
}

interface Case {
  id: string;
  client: string;
  description: string;
  results: Array<{ value: string; label: string }>;
}

interface SolutionData {
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
  solutions: {
    title: string;
    subtitle: string;
    items: Solution[];
  };
  cases?: {
    title: string;
    subtitle: string;
    items: Case[];
  };
  specialTopics?: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      features: string[];
    }>;
  };
  clients?: {
    title: string;
    logos: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryButton?: string;
    secondaryButton?: string;
  };
}

export default function IndustrySolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const [data, setData] = useState<SolutionData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolvedId, setResolvedId] = useState<string>('');

  useEffect(() => {
    params.then((p) => {
      setResolvedId(p.id);
      fetch(`/api/solutions/${p.id}`)
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

      <section className={styles.solutions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{data.solutions.title}</h2>
            <p className={styles.sectionSubtitle}>{data.solutions.subtitle}</p>
          </div>
          <div className={styles.solutionGrid}>
            {data.solutions.items.map((solution) => (
              <div key={solution.id} className={styles.solutionCard}>
                <div className={styles.solutionHeader}>
                  <h3 className={styles.solutionTitle}>{solution.title}</h3>
                  <span className={styles.solutionSubtitle}>{solution.subtitle}</span>
                </div>
                <p className={styles.solutionDesc}>{solution.description}</p>
                <div className={styles.solutionFeatures}>
                  {solution.features.map((feature, i) => (
                    <span key={i} className={styles.featureTag}>{feature}</span>
                  ))}
                </div>
                <div className={styles.solutionValue}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{solution.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.specialTopics && (
        <section className={styles.specialTopics}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{data.specialTopics.title}</h2>
              <p className={styles.sectionSubtitle}>{data.specialTopics.subtitle}</p>
            </div>
            <div className={styles.topicGrid}>
              {data.specialTopics.items.map((topic) => (
                <div key={topic.id} className={styles.topicCard}>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <div className={styles.topicFeatures}>
                    {topic.features.map((feature, i) => (
                      <div key={i} className={styles.topicFeature}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.cases && (
        <section className={styles.cases}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{data.cases.title}</h2>
              <p className={styles.sectionSubtitle}>{data.cases.subtitle}</p>
            </div>
            <div className={styles.caseGrid}>
              {data.cases.items.map((caseItem) => (
                <div key={caseItem.id} className={styles.caseCard}>
                  <div className={styles.caseHeader}>
                    <h3 className={styles.caseClient}>{caseItem.client}</h3>
                    <p className={styles.caseDesc}>{caseItem.description}</p>
                  </div>
                  <div className={styles.caseResults}>
                    {caseItem.results.map((result, i) => (
                      <div key={i} className={styles.caseResult}>
                        <span className={styles.resultValue}>{result.value}</span>
                        <span className={styles.resultLabel}>{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              {data.cta.primaryButton || '预约演示'}
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
    inventory: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    channel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    operation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    system: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    efficiency: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    newbusiness: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    expiry: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    finance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    supply: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4"/>
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z"/>
        <path d="M16 14H8a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4z"/>
      </svg>
    ),
  };
  return icons[type] || icons.inventory;
}
