'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const solutionLabels: Record<string, string> = {
  'omnichannel': '一盘货运营',
  'sales': '全渠道销售',
  'merchandise': '商品运营智能',
  'ecommerce': '电商运营智能',
  'beauty': '大美丽行业方案',
  'health': '大健康行业方案',
  'life': '大生活行业方案',
  'other': '其他需求',
};

interface Demo {
  fileName: string;
  name: string;
  company: string;
  position?: string;
  phone: string;
  email: string;
  solutions?: string[];
  message?: string;
  source: string;
  createdAt: string;
  status?: string;
}

export default function DemosPage() {
  const [demos, setDemos] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

  const fetchDemos = async () => {
    try {
      const response = await fetch('/api/admin/demos');
      const data = await response.json();
      if (data.success) {
        setDemos(data.demos);
      }
    } catch (error) {
      console.error('获取预约演示数据失败:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  const updateStatus = async (fileName: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/demos/${fileName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (data.success) {
        fetchDemos();
      }
    } catch (error) {
      console.error('更新状态失败:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSolutionsLabel = (solutions: string[] | undefined) => {
    if (!solutions || solutions.length === 0) return '-';
    return solutions.map(s => solutionLabels[s] || s).join('、');
  };

  if (loading) {
    return <div className={styles.loading}>加载中...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>预约演示记录</h1>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>姓名</span>
          <span>公司</span>
          <span>职位</span>
          <span>手机</span>
          <span>邮箱</span>
          <span>感兴趣方案</span>
          <span>提交时间</span>
          <span>状态</span>
          <span>操作</span>
        </div>
        {demos.map((demo) => (
          <div key={demo.fileName} className={styles.tableRow}>
            <span>{demo.name}</span>
            <span>{demo.company}</span>
            <span>{demo.position || '-'}</span>
            <span>{demo.phone}</span>
            <span>{demo.email}</span>
            <span className={styles.solutionsCell}>{getSolutionsLabel(demo.solutions)}</span>
            <span>{formatDate(demo.createdAt)}</span>
            <span>
              <select
                value={demo.status || 'pending'}
                onChange={(e) => updateStatus(demo.fileName, e.target.value)}
                className={`${styles.statusSelect} ${styles[demo.status || 'pending']}`}
              >
                <option value="pending">待处理</option>
                <option value="contacted">已联系</option>
                <option value="converted">已转化</option>
              </select>
            </span>
            <span>
              <button onClick={() => setSelectedDemo(demo)} className={styles.viewBtn}>
                查看
              </button>
            </span>
          </div>
        ))}
        {demos.length === 0 && (
          <div className={styles.empty}>暂无数据</div>
        )}
      </div>

      {selectedDemo && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>预约演示详情</h2>
            <div className={styles.detail}>
              <div className={styles.detailItem}>
                <span className={styles.label}>姓名：</span>
                <span>{selectedDemo.name}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>公司：</span>
                <span>{selectedDemo.company}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>职位：</span>
                <span>{selectedDemo.position || '-'}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>手机：</span>
                <span>{selectedDemo.phone}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>邮箱：</span>
                <span>{selectedDemo.email}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>感兴趣方案：</span>
                <span>{getSolutionsLabel(selectedDemo.solutions)}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>留言：</span>
                <span>{selectedDemo.message || '-'}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>来源：</span>
                <span>{selectedDemo.source}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>提交时间：</span>
                <span>{formatDate(selectedDemo.createdAt)}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>状态：</span>
                <span className={`${styles.status} ${styles[selectedDemo.status || 'pending']}`}>
                  {selectedDemo.status === 'contacted' ? '已联系' : selectedDemo.status === 'converted' ? '已转化' : '待处理'}
                </span>
              </div>
            </div>
            <button onClick={() => setSelectedDemo(null)} className={styles.closeBtn}>
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
