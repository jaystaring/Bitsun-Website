'use client';

import Link from 'next/link';
import styles from './ProductMatrix.module.css';

interface Product {
  id: string;
  name: string;
  nameEn: string;
  href: string;
  description: string;
  status?: 'coming-soon' | 'active';
  tag?: string;
}

interface ProductSeries {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  products: Product[];
}

const productMatrix: ProductSeries[] = [
  {
    id: 'xinglan',
    name: '星澜系列',
    nameEn: 'Xinglan Series',
    description: '企业级全渠道业务运营平台',
    products: [
      {
        id: 'omc-oms',
        name: '全渠道业务中台',
        nameEn: 'OMC-OMS',
        href: '/products/omc-oms',
        description: '构建企业级商品资产中心，驱动多业态精细化运营',
        status: 'active'
      },
      {
        id: 'distribution',
        name: '分销管理系统',
        nameEn: 'Distribution',
        href: '/products/distribution',
        description: '连接品牌与渠道，构建高效分销网络',
        status: 'active'
      },
      {
        id: 'ecommerce',
        name: '电商管理系统',
        nameEn: 'E-commerce',
        href: '/products/ecommerce',
        description: '全平台电商运营一站式解决方案',
        status: 'active'
      },
      {
        id: 'pos',
        name: '门店管理系统',
        nameEn: 'POS',
        href: '/products/pos',
        description: '智慧门店运营，赋能零售终端',
        status: 'active'
      },
      {
        id: 'merchandise',
        name: '智能商品运营',
        nameEn: 'Merchandise',
        href: '/products/ai',
        description: 'AI驱动的商品全生命周期运营',
        status: 'active'
      }
    ]
  },
  {
    id: 'xingzhi',
    name: '星智系列',
    nameEn: 'Xingzhi Series',
    description: 'AI时代企业智能底座与场景能力',
    products: [
      {
        id: 'ai-platform',
        name: 'AI智能底座',
        nameEn: 'AI Platform',
        href: '/products/ai-platform',
        description: '企业级AI基础设施平台',
        status: 'coming-soon',
        tag: '敬请期待'
      },
      {
        id: 'ai-agent',
        name: '企业场景能力智能体',
        nameEn: 'AI Agent Suite',
        href: '/products/ai-agent',
        description: '面向企业复杂业务场景的AI Agent套件',
        status: 'coming-soon',
        tag: '敬请期待'
      }
    ]
  }
];

export default function ProductMatrix() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>产品矩阵</h2>
          <p className={styles.subtitle}>覆盖企业全链路数智化转型需求</p>
        </div>

        <div className={styles.matrix}>
          {productMatrix.map((series, seriesIndex) => (
            <div 
              key={series.id} 
              className={styles.series}
              style={{ animationDelay: `${seriesIndex * 0.1}s` }}
            >
              <div className={styles.seriesHeader}>
                <div className={styles.seriesIcon}>
                  {series.id === 'xinglan' ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                    </svg>
                  )}
                </div>
                <div className={styles.seriesInfo}>
                  <h3 className={styles.seriesName}>{series.name}</h3>
                  <span className={styles.seriesNameEn}>{series.nameEn}</span>
                </div>
                <p className={styles.seriesDesc}>{series.description}</p>
              </div>

              <div className={styles.productsGrid}>
                {series.products.map((product, productIndex) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={productIndex}
                  />
                ))}
              </div>

              {series.id === 'xingzhi' && (
                <div className={styles.comingSoonBadge}>
                  <span>客户共创中，敬请期待</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.connections}>
          <svg className={styles.connectionLine} viewBox="0 0 800 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 245, 255, 0.1)" />
                <stop offset="50%" stopColor="rgba(0, 245, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(0, 245, 255, 0.1)" />
              </linearGradient>
            </defs>
            <path 
              d="M0,50 Q200,20 400,50 T800,50" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none"
              className={styles.animatedPath}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isComingSoon = product.status === 'coming-soon';

  return (
    <div 
      className={`${styles.productCard} ${isComingSoon ? styles.comingSoon : ''}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {isComingSoon ? (
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <span className={styles.cardNameEn}>{product.nameEn}</span>
            {product.tag && <span className={styles.cardTag}>{product.tag}</span>}
          </div>
          <h4 className={styles.cardName}>{product.name}</h4>
          <p className={styles.cardDesc}>{product.description}</p>
          <div className={styles.cardStatus}>
            <span className={styles.statusDot}></span>
            <span>客户共创中</span>
          </div>
        </div>
      ) : (
        <Link href={product.href} className={styles.cardLink}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <span className={styles.cardNameEn}>{product.nameEn}</span>
            </div>
            <h4 className={styles.cardName}>{product.name}</h4>
            <p className={styles.cardDesc}>{product.description}</p>
            <div className={styles.cardArrow}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
