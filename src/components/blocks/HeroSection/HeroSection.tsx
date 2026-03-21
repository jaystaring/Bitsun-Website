'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroContent } from '@/types';
import ContactModal from '@/components/common/ContactModal/ContactModal';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Hero Background" 
          fill 
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
        <div className={styles.gridPattern}></div>
        <div className={styles.flowingLights}></div>
        <div className={styles.particles}></div>
      </div>

      <div className={styles.aiCore}>
        <div className={styles.coreGlow}></div>
        <div className={styles.cubeContainer}>
          <div className={styles.cube}>
            <div className={styles.cubeFace}></div>
            <div className={styles.cubeFace}></div>
            <div className={styles.cubeFace}></div>
            <div className={styles.cubeFace}></div>
            <div className={styles.cubeFace}></div>
            <div className={styles.cubeFace}></div>
          </div>
        </div>
        <div className={styles.dataLines}>
          <div className={styles.dataLine}></div>
          <div className={styles.dataLine}></div>
          <div className={styles.dataLine}></div>
          <div className={styles.dataLine}></div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>{content.title}</span>
          </h1>
          <p className={styles.subtitle}>{content.subtitle}</p>
          
          {content.coreTags && content.coreTags.length > 0 && (
            <div className={styles.coreTags}>
              {content.coreTags.map((tag, index) => (
                <div key={index} className={styles.tagCard}>
                  <div className={styles.tagIcon}>
                    {tag.icon === 'platform' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                      </svg>
                    )}
                    {tag.icon === 'consulting' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                      </svg>
                    )}
                    {tag.icon === 'ai' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
                      </svg>
                    )}
                  </div>
                  <div className={styles.tagContent}>
                    <span className={styles.tagTitle}>{tag.title}</span>
                    <span className={styles.tagSubtitle}>{tag.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className={styles.cta}>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className={styles.primaryButton}
            >
              {content.cta.primary.text}
            </button>
            {content.cta.secondary && (
              <Link href={content.cta.secondary.href} className={styles.secondaryButton}>
                {content.cta.secondary.text}
              </Link>
            )}
          </div>

          {content.highlights && (
            <div className={styles.highlights}>
              {content.highlights.map((item, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.highlightValue}>{item.value}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
