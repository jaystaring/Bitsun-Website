import Link from 'next/link';
import { SiteConfig, NavigationItem } from '@/types';
import styles from './Footer.module.css';

interface FooterProps {
  site: SiteConfig;
  productLinks: NavigationItem[];
}

export default function Footer({ site, productLinks }: FooterProps) {
  const flattenedProductLinks: NavigationItem[] = [];
  productLinks.forEach(item => {
    if (item.children) {
      item.children.forEach(child => {
        if (child.href) {
          flattenedProductLinks.push(child);
        }
      });
    } else if (item.href) {
      flattenedProductLinks.push(item);
    }
  });

  const footerLinks = [
    {
      title: '产品',
      links: flattenedProductLinks,
    },
    {
      title: '解决方案',
      links: [
        { id: 'sales', label: '全渠道销售', href: '/solutions/scenario/sales' },
        { id: 'omnichannel', label: '一盘货运营', href: '/solutions/scenario/omnichannel' },
        { id: 'merchandise', label: '商品运营智能', href: '/solutions/scenario/merchandise' },
        { id: 'ecommerce', label: '电商运营智能', href: '/solutions/scenario/ecommerce' },
      ],
    },
    {
      title: '行业方案',
      links: [
        { id: 'beauty', label: '大美丽', href: '/solutions/industry/beauty' },
        { id: 'health', label: '大健康', href: '/solutions/industry/health' },
        { id: 'life', label: '大生活', href: '/solutions/industry/life' },
      ],
    },
    {
      title: '资源',
      links: [
        { id: 'cases', label: '客户案例', href: '/cases' },
        { id: 'resources', label: '资源中心', href: '/resources' },
        { id: 'about', label: '关于我们', href: '/about' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>{site.name}</span>
            </Link>
            <p className={styles.description}>{site.description}</p>
            {(site as any).slogan && (
              <p className={styles.slogan}>{(site as any).slogan}</p>
            )}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>生态合作：marketing@bitsun-inc.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>商务联系：021-52231078</span>
              </div>
            </div>
          </div>

          <div className={styles.links}>
            {footerLinks.map((section) => (
              <div key={section.title} className={styles.linkSection}>
                <h4 className={styles.linkTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href || '#'} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Copyright © 2020 上海比升互联网技术有限公司 All Rights Reserved
          </p>
          <div className={styles.icpInfo}>
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.icpLink}
            >
              沪ICP备18023095号-1
            </a>
            <span className={styles.divider}>|</span>
            <span>备案号：31011202008526</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
