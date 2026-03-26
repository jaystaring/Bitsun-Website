import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme as antdTheme } from 'antd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getSiteConfig, getNavigationConfig } from '@/lib/content';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bitsun-inc.com'),
  title: {
    default: '比升技术 - AI时代企业数智服务商',
    template: '%s | 比升技术',
  },
  description: '比升技术是AI时代企业数智服务商，全国领先的全渠道数智运营服务提供商。提供星澜全渠道业务中台、分销管理、电商管理、门店管理、星澜智能商品运营等产品，服务安踏、特步、森马、UR等头部品牌，助力企业实现销售最大化、成本最小化。',
  keywords: [
    '比升技术',
    'AI数智服务',
    '全渠道业务中台',
    'OMS订单管理',
    '分销管理系统',
    '电商管理系统',
    '门店管理系统',
    'AI智能商品运营',
    '一盘货运营',
    '全渠道销售',
    'DTC转型',
    '企业数字化转型',
    '消费品行业解决方案'
  ],
  authors: [{ name: '比升技术', url: 'https://www.bitsun-inc.com' }],
  creator: '比升技术',
  publisher: '上海比升互联网技术有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.bitsun-inc.com',
    siteName: '比升技术',
    title: '比升技术 - AI时代企业数智服务商',
    description: '比升技术是AI时代企业数智服务商，提供全渠道业务中台、AI智能商品运营等产品，服务安踏、特步、森马等头部品牌。',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '比升技术 - AI时代企业数智服务商',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '比升技术 - AI时代企业数智服务商',
    description: '比升技术是AI时代企业数智服务商，提供全渠道业务中台、AI智能商品运营等产品',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bitsun-inc.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const site = getSiteConfig();
  const navigation = getNavigationConfig();
  const productLinks = navigation.mainNav.find(n => n.id === 'products')?.children || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '比升技术',
    alternateName: 'Bitsun',
    url: 'https://www.bitsun-inc.com',
    logo: 'https://www.bitsun-inc.com/images/logo-light.svg',
    description: 'AI时代企业数智服务商，全国领先的全渠道数智运营服务提供商',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: '上海',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-021-52231078',
      contactType: 'sales',
      availableLanguage: ['Chinese', 'English'],
    },
    sameAs: [],
  };

  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#050810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              algorithm: antdTheme.darkAlgorithm,
              token: {
                colorPrimary: '#0066FF',
                colorBgContainer: '#111827',
                colorBgElevated: '#1F2937',
                colorBorder: '#374151',
                colorText: '#FFFFFF',
                colorTextSecondary: '#9CA3AF',
                borderRadius: 8,
              },
            }}
          >
            <Header navigation={navigation} site={site} />
            <main>
              {children}
            </main>
            <Footer site={site} productLinks={productLinks} />
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
