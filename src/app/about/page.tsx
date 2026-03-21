'use client';

import { useState, useEffect } from 'react';
import ContactModal from '@/components/common/ContactModal/ContactModal';
import styles from './page.module.css';

interface AboutData {
  id: string;
  title: string;
  hero: {
    title: string;
    subtitle: string;
    slogan: string;
    corePhilosophy: string;
  };
  introduction: {
    title: string;
    values: Array<{ title: string; description: string }>;
    achievements: Array<{ value: string; label: string }>;
    industries: string;
  };
  leader: {
    title: string;
    name: string;
    alias: string;
    position: string;
    image: string;
    introduction: string;
    credentials: string[];
    books: {
      image: string;
      titles: string[];
      achievement: string;
    };
    experience: string;
  };
  milestones: {
    title: string;
    items: Array<{ year: string; phase: string; description: string }>;
  };
  advantages: {
    title: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}

export default function AboutPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/pages/about')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

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
          <div className={styles.heroParticles}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>{data.hero.slogan}</span>
            <h1 className={styles.heroTitle}>{data.hero.title}</h1>
            <p className={styles.heroSubtitle}>{data.hero.subtitle}</p>
            <div className={styles.corePhilosophy}>
              <span className={styles.philosophyText}>{data.hero.corePhilosophy}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.introduction.title}</h2>
          <div className={styles.valuesGrid}>
            {data.introduction.values.map((value, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.achievementsGrid}>
            {data.introduction.achievements.map((item, idx) => (
              <div key={idx} className={styles.achievementCard}>
                <span className={styles.achievementValue}>{item.value}</span>
                <span className={styles.achievementLabel}>{item.label}</span>
              </div>
            ))}
          </div>
          <p className={styles.industriesText}>{data.introduction.industries}</p>
        </div>
      </section>

      <section className={styles.leader}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.leader.title}</h2>
          <div className={styles.leaderContent}>
            <div className={styles.leaderImageWrapper}>
              <img src={data.leader.image} alt={data.leader.name} className={styles.leaderImage} />
              <div className={styles.leaderImageGlow}></div>
            </div>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderHeader}>
                <h3 className={styles.leaderName}>{data.leader.name}</h3>
                <span className={styles.leaderAlias}>（{data.leader.alias}）</span>
                <span className={styles.leaderPosition}>{data.leader.position}</span>
              </div>
              <p className={styles.leaderIntro}>{data.leader.introduction}</p>
              <div className={styles.credentialsList}>
                {data.leader.credentials.map((cred, idx) => (
                  <div key={idx} className={styles.credentialItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
              <div className={styles.booksSection}>
                <img src={data.leader.books.image} alt="著作" className={styles.bookImage} />
                <div className={styles.booksInfo}>
                  <h4 className={styles.booksTitle}>著作</h4>
                  <div className={styles.bookTitles}>
                    {data.leader.books.titles.map((title, idx) => (
                      <span key={idx} className={styles.bookTitle}>{title}</span>
                    ))}
                  </div>
                  <p className={styles.bookAchievement}>{data.leader.books.achievement}</p>
                </div>
              </div>
              <p className={styles.leaderExperience}>{data.leader.experience}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.milestones}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.milestones.title}</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            {data.milestones.items.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelinePhase}>{item.phase}</h4>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{data.advantages.title}</h2>
          <div className={styles.advantagesGrid}>
            {data.advantages.items.map((item, idx) => (
              <div key={idx} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>
                  {item.icon === 'verified' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  )}
                  {item.icon === 'team' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  )}
                  {item.icon === 'solution' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  )}
                  {item.icon === 'ai' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  )}
                </div>
                <h3 className={styles.advantageTitle}>{item.title}</h3>
                <p className={styles.advantageDesc}>{item.description}</p>
              </div>
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
          <button 
            onClick={() => setIsModalOpen(true)}
            className={styles.ctaButton}
          >
            {data.cta.button}
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
