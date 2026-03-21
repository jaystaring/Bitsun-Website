'use client';

import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  user: {
    id: string;
    username: string;
    name: string;
    role: string;
  };
}

export default function Header({ user }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>比升演示管理后台</div>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{user.name}</span>
          <span className={styles.userRole}>{user.role === 'admin' ? '管理员' : '用户'}</span>
        </div>
        <button onClick={handleLogout} className={styles.logout}>
          退出登录
        </button>
      </div>
    </header>
  );
}
