import { Metadata } from 'next';
import LoginForm from '@/components/auth/LoginForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '登录 - 比升演示管理后台',
  description: '比升演示管理后台登录页面',
};

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.loginCard}>
        <div className={styles.logo}>
          <span className={styles.logoText}>比升技术</span>
        </div>
        <h1 className={styles.title}>比升演示管理后台</h1>
        <p className={styles.subtitle}>内部管理系统</p>
        <LoginForm />
      </div>
    </div>
  );
}
