import { Metadata } from 'next';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/content';
import ProductMatrix from '@/components/blocks/ProductMatrix';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '产品 - 比升技术',
  description: '比升技术产品矩阵：星澜全渠道业务中台、分销管理系统、电商管理系统、门店管理系统、智能商品运营，星智AI智能底座、企业AI场景能力智能体，提供全渠道大商品运营一站式解决方案',
};

const products = [
  {
    id: 'omc-oms',
    title: '星澜全渠道业务中台',
    subtitle: '构建企业级商品资产中心，驱动多业态精细化运营',
    description: '通过商品中心、渠道中心、全渠道库存、全渠道订单履约四大模块，帮助企业实现"一盘货"运营。',
    tag: { text: '核心', type: 'primary' },
    highlights: [
      { metric: '20%', label: '库存周转提升' },
      { metric: '80%', label: '订单处理效率提升' },
      { metric: '50%', label: '渠道管理效率提升' },
    ],
    features: ['商品中心', '渠道中心', '全渠道库存', '订单履约'],
    link: '/products/omc-oms',
  },
  {
    id: 'distribution',
    title: '星澜分销管理系统',
    subtitle: '采购业务全程在线，实现供应链透明化管理',
    description: '支持多业务模式分销管控，帮助企业实现供应链透明化管理，保障渠道政策落地。',
    tag: null,
    highlights: [
      { metric: '60%', label: '订单处理效率提升' },
      { metric: '50%', label: '合规成本降低' },
      { metric: '100%', label: '采购透明度提升' },
    ],
    features: ['分销商管理', '采购管理', '销售管理', '库存管理', '结算管理'],
    link: '/products/distribution',
  },
  {
    id: 'ecommerce',
    title: '星澜电商管理系统',
    subtitle: '全平台电商运营一站式解决方案',
    description: '支持天猫、京东、抖音、拼多多等主流电商平台，实现多平台统一管理。',
    tag: null,
    highlights: [
      { metric: '90%', label: '订单全链路自动化率' },
      { metric: '80%', label: '对账效率提升' },
      { metric: '95%', label: '异常响应能力提升' },
    ],
    features: ['多平台订单', '智能履约', '电商对账', '仓储协同'],
    link: '/products/ecommerce',
  },
  {
    id: 'pos',
    title: '星澜门店管理系统',
    subtitle: '精益零售运营，赋能新零售场景与全渠道联动',
    description: '支持即时零售、O2O、代发等新兴业务模式，帮助门店实现数字化转型。',
    tag: null,
    highlights: [
      { metric: '40%', label: '门店运营效率提升' },
      { metric: '60%', label: '全渠道货通效率提升' },
      { metric: '30%', label: '销售目标达成率提升' },
    ],
    features: ['新零售业务场景', '目标驱动型零售', '全渠道联动'],
    link: '/products/pos',
  },
  {
    id: 'merchandise',
    title: '星澜智能商品运营',
    subtitle: '"可掌控"智能决策，驱动人机协同的商品运营',
    description: '基于AI的智能分货、补货、调货决策，帮助商品人员从繁琐操作中解放。',
    tag: { text: 'AI', type: 'accent' },
    highlights: [
      { metric: '100%', label: '运营人效提升' },
      { metric: '80%', label: '人力节约' },
      { metric: '16→30', label: '人均管理门店数' },
    ],
    features: ['多渠道智能分货', '铺补调智能决策', 'AI助理式交互', '仿真模拟推演'],
    link: '/products/ai',
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>产品矩阵</h1>
          <p className={styles.heroSubtitle}>
            星澜系列 + 星智系列，覆盖全渠道运营的核心产品
            <br />
            助力企业实现销售最大化、成本最小化
          </p>
        </div>
      </section>

      <ProductMatrix />

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.productSeries}>
            <h2 className={styles.seriesTitle}>星澜系列</h2>
            <p className={styles.seriesDesc}>企业级业务中台，构建全渠道运营底座</p>
          </div>
          
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link key={product.id} href={product.link} className={styles.productCard}>
                <div className={styles.productHeader}>
                  <div className={styles.productIcon}>
                    <div className={styles.iconPlaceholder}>
                      {product.title.charAt(2)}
                    </div>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.productTitleRow}>
                      <h3 className={styles.productTitle}>{product.title.replace('星澜', '')}</h3>
                      {product.tag && (
                        <span className={`${styles.productTag} ${styles[`tag-${product.tag.type}`]}`}>
                          {product.tag.text}
                        </span>
                      )}
                    </div>
                    <p className={styles.productSubtitle}>{product.subtitle}</p>
                  </div>
                </div>
                
                <p className={styles.productDescription}>{product.description}</p>
                
                <div className={styles.productFeatures}>
                  {product.features.map((feature, index) => (
                    <span key={index} className={styles.featureTag}>{feature}</span>
                  ))}
                </div>
                
                <div className={styles.productHighlights}>
                  {product.highlights.map((highlight, index) => (
                    <div key={index} className={styles.highlightItem}>
                      <span className={styles.highlightMetric}>{highlight.metric}</span>
                      <span className={styles.highlightLabel}>{highlight.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className={styles.productCta}>
                  <span className={styles.ctaText}>了解详情</span>
                  <svg className={styles.ctaArrow} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>开启数智化转型之旅</h2>
          <p className={styles.ctaDesc}>联系我们，获取定制化解决方案</p>
          <Link href="/contact/demo" className={styles.ctaButton}>
            预约演示
          </Link>
        </div>
      </section>
    </div>
  );
}
