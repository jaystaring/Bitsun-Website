'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CTASection as CTASectionType } from '@/types';
import ContactModal from '@/components/common/ContactModal/ContactModal';
import styles from './CTASection.module.css';

interface CTASectionProps {
  content: CTASectionType;
}

export default function CTASection({ content }: CTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (button: { text: string; href: string; type: string }, e: React.MouseEvent) => {
    if (button.href === '/contact/demo' || button.text === '预约演示') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image 
          src="/images/cta/cta-bg.jpg" 
          alt="CTA Background" 
          fill
          className={styles.bgImage}
        />
        <div className={styles.glow}></div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        {content.description && (
          <p className={styles.description}>{content.description}</p>
        )}
        <div className={styles.buttons}>
          {content.buttons.map((button, index) => (
            button.href === '/contact/demo' || button.text === '预约演示' ? (
              <button
                key={index}
                onClick={() => setIsModalOpen(true)}
                className={`${styles.button} ${styles[button.type]}`}
              >
                {button.text}
              </button>
            ) : (
              <a
                key={index}
                href={button.href}
                className={`${styles.button} ${styles[button.type]}`}
              >
                {button.text}
              </a>
            )
          ))}
        </div>
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
