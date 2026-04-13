import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '产品 - 比升技术',
  description: '比升技术产品矩阵：星澜全渠道业务中台、分销管理系统、电商管理系统、门店管理系统、智能商品运营，星智AI智能底座、企业AI场景能力智能体，提供全渠道大商品运营一站式解决方案',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
