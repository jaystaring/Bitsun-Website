import { Metadata } from 'next';
import HeroSection from '@/components/blocks/HeroSection';
import CapabilityGrid from '@/components/blocks/CapabilityGrid';
import AdvantageSection from '@/components/blocks/AdvantageSection';
import CTASection from '@/components/blocks/CTASection';
import { 
  getHeroContent, 
  getCapabilitiesContent, 
  getAdvantagesContent, 
  getCTAContent,
  getAllProducts 
} from '@/lib/content';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '比升技术 - AI时代企业数智服务商',
  description: '比升技术专注为企业提供AI时代数智化解决方案，包括星澜全渠道业务中台、星智AI智能底座等产品，服务安踏、特步、森马等头部品牌。',
  openGraph: {
    title: '比升科技 - 企业级全渠道运营解决方案',
    description: '比升科技专注为企业提供全渠道运营解决方案，服务安踏、特步、森马等头部品牌。',
  },
};

export default function Home() {
  const heroContent = getHeroContent();
  const capabilitiesContent = getCapabilitiesContent();
  const advantagesContent = getAdvantagesContent();
  const ctaContent = getCTAContent();
  const allProducts = getAllProducts();

  const xinglanProducts = allProducts.filter(p => 
    ['omc-oms', 'distribution', 'ecommerce', 'pos', 'ai'].includes(p.id)
  );

  const xingzhiProducts = allProducts.filter(p => 
    ['ai-platform', 'ai-agent'].includes(p.id)
  );

  const industries = [
    { 
      id: 'beauty', 
      title: '大美丽', 
      description: '多品牌、多品类、多渠道运营，实现全链路数字化', 
      highlights: ['SKU管理', '库存共享', '智能配补'],
      image: '/images/industries/industry-beauty.svg' 
    },
    { 
      id: 'health', 
      title: '大健康', 
      description: '效期管理、批次追溯、全渠道一盘货运营', 
      highlights: ['效期管控', '批次追溯', '渠道管控'],
      image: '/images/industries/industry-health.svg' 
    },
    { 
      id: 'life', 
      title: '大生活', 
      description: '大件物流、售后服务、全渠道订单履约', 
      highlights: ['一件代发', '统仓统配', '售后管理'],
      image: '/images/industries/industry-life.svg' 
    },
  ];

  const clientLogos = {
    beauty: [
      { id: 'ur', name: 'UR', src: '/images/clients/beauty/UR.png' },
      { id: 'zhongmian', name: '中免', src: '/images/clients/beauty/中免.png' },
      { id: 'anta', name: '安踏', src: '/images/clients/beauty/安踏.png' },
      { id: 'fila', name: '斐乐', src: '/images/clients/beauty/斐乐.png' },
      { id: 'senma', name: '森马', src: '/images/clients/beauty/森马.png' },
      { id: 'xtep', name: '特步', src: '/images/clients/beauty/特步.png' },
    ],
    health: [
      { id: 'guoyao', name: '国药', src: '/images/clients/health/国药.png' },
      { id: 'guangyao', name: '广药', src: '/images/clients/health/广药.png' },
      { id: 'hengchang', name: '恒昌医药', src: '/images/clients/health/恒昌医药.png' },
      { id: 'laiyifen', name: '来伊份', src: '/images/clients/health/来伊份.png' },
      { id: 'yingshi', name: '英氏', src: '/images/clients/health/英氏.png' },
    ],
    life: [
      { id: 'joyoung', name: '九阳', src: '/images/clients/life/九阳.png' },
      { id: 'liby', name: '立白', src: '/images/clients/life/立白.png' },
      { id: 'yingzi', name: '影子科技', src: '/images/clients/life/影子科技.png' },
      { id: 'yangxiang', name: '扬翔股份', src: '/images/clients/life/扬翔股份.png' },
    ],
  };

  const productImages: Record<string, string> = {
    'omc-oms': '/images/products/product-oms-hero.jpg',
    'distribution': '/images/products/product-distribution.svg',
    'ecommerce': '/images/products/product-ecommerce-hero.jpg',
    'pos': '/images/products/product-pos-hero.jpg',
    'ai': '/images/products/product-ai-hero.jpg',
    'ai-platform': '/images/products/product-ai-platform.png',
    'ai-agent': '/images/products/product-ai-agent.png',
  };

  return (
    <>
      <HeroSection content={heroContent} />
      
      <CapabilityGrid 
        title={capabilitiesContent.title}
        subtitle={capabilitiesContent.subtitle}
        items={capabilitiesContent.items}
        columns={4}
      />

      <section className={styles.industrySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>行业解决方案</h2>
            <p className={styles.sectionSubtitle}>深耕三大行业，提供端到端解决方案</p>
          </div>
          <div className={styles.industryGrid}>
            {industries.map((industry) => (
              <Link 
                key={industry.id} 
                href={`/solutions/industry/${industry.id}`}
                className={styles.industryCard}
              >
                <div className={styles.industryImage}>
                  <Image 
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className={styles.industryImg}
                  />
                  <div className={styles.industryOverlay}></div>
                </div>
                <div className={styles.industryContent}>
                  <h3 className={styles.industryTitle}>{industry.title}</h3>
                  <p className={styles.industryDesc}>{industry.description}</p>
                  <div className={styles.industryHighlights}>
                    {industry.highlights.map((h, i) => (
                      <span key={i} className={styles.highlightTag}>{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>产品亮点</h2>
            <p className={styles.sectionSubtitle}>覆盖全渠道运营的核心产品矩阵</p>
          </div>

          <div className={styles.productSeries}>
            <div className={styles.seriesHeader}>
              <div className={styles.seriesIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
              </div>
              <div className={styles.seriesInfo}>
                <h3 className={styles.seriesName}>星澜系列</h3>
                <p className={styles.seriesDesc}>企业级全渠道业务运营平台</p>
              </div>
            </div>
            <div className={styles.productGrid}>
              {xinglanProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image 
                      src={productImages[product.id] || '/images/products/product-oms-hero.jpg'}
                      alt={product.title}
                      fill
                      className={styles.productImg}
                    />
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.productHeader}>
                      <h3 className={styles.productTitle}>{product.title.replace('星澜', '')}</h3>
                      {product.tags?.includes('AI') && (
                        <span className={styles.aiTag}>AI</span>
                      )}
                    </div>
                    <p className={styles.productSubtitle}>{product.subtitle}</p>
                    <div className={styles.productHighlights}>
                      {product.highlights?.slice(0, 3).map((h, i) => (
                        <div key={i} className={styles.highlight}>
                          <span className={styles.highlightValue}>{h.metric}</span>
                          <span className={styles.highlightLabel}>{h.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.productSeries}>
            <div className={styles.seriesHeader}>
              <div className={styles.seriesIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                </svg>
              </div>
              <div className={styles.seriesInfo}>
                <h3 className={styles.seriesName}>星智系列</h3>
                <p className={styles.seriesDesc}>AI时代企业智能底座与场景能力</p>
              </div>
            </div>
            <div className={styles.productGrid}>
              {xingzhiProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image 
                      src={productImages[product.id] || '/images/products/product-ai-hero.jpg'}
                      alt={product.title}
                      fill
                      className={styles.productImg}
                    />
                  </div>
                  <div className={styles.productContent}>
                    <div className={styles.productHeader}>
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <span className={styles.comingSoonTag}>敬请期待</span>
                    </div>
                    <p className={styles.productSubtitle}>{product.subtitle}</p>
                    <div className={styles.comingSoonText}>
                      客户共创中，敬请期待
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.clientSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>客户信赖之选</h2>
            <p className={styles.sectionSubtitle}>头部客户的选择与信任</p>
          </div>
          
          <div className={styles.clientCategories}>
            <div className={styles.clientCategory}>
              <h3 className={styles.categoryTitle}>大美丽</h3>
              <div className={styles.logoGrid}>
                {clientLogos.beauty.map((logo) => (
                  <div key={logo.id} className={styles.logoCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className={styles.logoImage} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.clientCategory}>
              <h3 className={styles.categoryTitle}>大健康</h3>
              <div className={styles.logoGrid}>
                {clientLogos.health.map((logo) => (
                  <div key={logo.id} className={styles.logoCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className={styles.logoImage} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.clientCategory}>
              <h3 className={styles.categoryTitle}>大生活</h3>
              <div className={styles.logoGrid}>
                {clientLogos.life.map((logo) => (
                  <div key={logo.id} className={styles.logoCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={logo.src} alt={logo.name} className={styles.logoImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.clientMore}>
            <Link href="/cases" className={styles.moreLink}>
              查看更多客户
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <AdvantageSection 
        title={advantagesContent.title}
        subtitle={advantagesContent.subtitle}
        items={advantagesContent.items}
      />

      <CTASection content={ctaContent} />
    </>
  );
}
