'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavigationConfig, SiteConfig } from '@/types';
import ContactModal from '@/components/common/ContactModal/ContactModal';
import styles from './Header.module.css';

interface HeaderProps {
  navigation: NavigationConfig;
  site: SiteConfig;
}

export default function Header({ navigation, site }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/logo-light.png" 
              alt={site.name} 
              className={styles.logoImage}
            />
          </Link>

          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
            {navigation.mainNav.map((item) => (
              <div key={item.id} className={styles.navItem}>
                {item.children ? (
                  <div className={styles.dropdown}>
                    {item.href ? (
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                        <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </Link>
                    ) : (
                      <span className={styles.navLink}>
                        {item.label}
                        <svg className={styles.dropdownArrow} width="12" height="12" viewBox="0 0 12 12">
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </span>
                    )}
                    <div className={styles.dropdownMenu}>
                      {item.children.map((child) => (
                        <div key={child.id}>
                          {child.children ? (
                            <>
                              <div className={styles.dropdownGroupTitle}>{child.label}</div>
                              {child.children.map((subChild) => (
                                <Link key={subChild.id} href={subChild.href || '#'} className={styles.dropdownLink}>
                                  {subChild.label}
                                  {subChild.tag && (
                                    <span className={`${styles.tag} ${styles[`tag-${subChild.tag.type}`]}`}>
                                      {subChild.tag.text}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </>
                          ) : (
                            <Link href={child.href || '#'} className={styles.dropdownLink}>
                              {child.label}
                              {child.tag && (
                                <span className={`${styles.tag} ${styles[`tag-${child.tag.type}`]}`}>
                                  {child.tag.text}
                                </span>
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href || '#'} className={styles.navLink}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.cta}>
            <Link href="/login" className={styles.loginLink}>
              登录
            </Link>
            {navigation.ctaNav.map((cta) => (
              cta.label === '预约演示' ? (
                <button 
                  key={cta.id} 
                  onClick={() => setIsModalOpen(true)} 
                  className={styles.ctaButton}
                >
                  {cta.label}
                </button>
              ) : (
                <Link key={cta.id} href={cta.href || '#'} className={styles.ctaButton}>
                  {cta.label}
                </Link>
              )
            ))}
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          </button>
        </div>
      </header>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
