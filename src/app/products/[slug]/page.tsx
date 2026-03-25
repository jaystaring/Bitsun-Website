import { Metadata } from 'next';
import { getProductBySlug, getAllProducts } from '@/lib/content';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: '产品未找到 | 比升技术',
    };
  }

  return {
    title: `${product.title} | 比升技术`,
    description: product.subtitle || product.title,
    openGraph: {
      title: product.title,
      description: product.subtitle || '',
      images: product.heroImage ? [product.heroImage] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPageTemplate product={product} />;
}
