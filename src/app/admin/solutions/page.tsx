import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: '交互式方案 - 比升演示管理后台',
};

export default function SolutionsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>交互式方案</h1>
      <div className={styles.placeholder}>
        <div className={styles.icon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <h2 className={styles.subtitle}>功能开发中</h2>
        <p className={styles.description}>
          此模块将用于管理和展示交互式产品演示方案。
          <br />
          未来支持上传HTML格式的演示方案，并生成分享链接。
        </p>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📁</span>
            <span>方案分类管理</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📄</span>
            <span>HTML方案上传</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🔗</span>
            <span>分享链接生成</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>👁️</span>
            <span>方案预览</span>
          </div>
        </div>
      </div>
    </div>
  );
}
