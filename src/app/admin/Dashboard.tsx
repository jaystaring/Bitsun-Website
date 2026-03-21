'use client';

import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

interface Demo {
  fileName: string;
  name: string;
  company: string;
  email: string;
  createdAt: string;
  status?: string;
}

interface Stats {
  totalDemos: number;
  pendingDemos: number;
  contactedDemos: number;
  convertedDemos: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentDemos, setRecentDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, demosRes] = await Promise.all([
          fetch('/api/admin/stats'),
          fetch('/api/admin/demos'),
        ]);

        const statsData = await statsRes.json();
        const demosData = await demosRes.json();

        if (statsData.success) {
          setStats(statsData);
        }
        if (demosData.success) {
          setRecentDemos(demosData.demos.slice(0, 5));
        }
      } catch (error) {
        console.error('获取数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        加载中...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>仪表盘</h1>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{stats?.totalDemos || 0}</div>
          <div className={styles.statLabel}>预约演示总数</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.pending}`}>{stats?.pendingDemos || 0}</div>
          <div className={styles.statLabel}>待处理</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.contacted}`}>{stats?.contactedDemos || 0}</div>
          <div className={styles.statLabel}>已联系</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statValue} ${styles.converted}`}>{stats?.convertedDemos || 0}</div>
          <div className={styles.statLabel}>已转化</div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>最近预约演示</h2>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>姓名</span>
            <span>公司</span>
            <span>邮箱</span>
            <span>状态</span>
          </div>
          {recentDemos.length > 0 ? (
            recentDemos.map((demo) => (
              <div key={demo.fileName} className={styles.tableRow}>
                <span>{demo.name}</span>
                <span>{demo.company}</span>
                <span>{demo.email}</span>
                <span>
                  <span className={`${styles.status} ${styles[demo.status || 'pending']}`}>
                    {demo.status === 'contacted' ? '已联系' : demo.status === 'converted' ? '已转化' : '待处理'}
                  </span>
                </span>
              </div>
            ))
          ) : (
            <div className={styles.empty}>暂无数据</div>
          )}
        </div>
      </div>

      <div className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>快捷操作</h2>
        <div className={styles.actions}>
          <a href="/admin/accounts" className={styles.actionBtn}>
            管理账号
          </a>
          <a href="/admin/demos" className={styles.actionBtn}>
            查看预约演示记录
          </a>
        </div>
      </div>
    </div>
  );
}
