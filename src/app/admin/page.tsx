import { Metadata } from 'next';
import Dashboard from './Dashboard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '首页 - 比升演示管理后台',
};

export default function AdminPage() {
  return <Dashboard />;
}
