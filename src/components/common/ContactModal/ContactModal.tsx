'use client';

import { useState } from 'react';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutions = [
  { id: 'omnichannel', label: '一盘货运营' },
  { id: 'sales', label: '全渠道销售' },
  { id: 'merchandise', label: '商品运营智能' },
  { id: 'ecommerce', label: '电商运营智能' },
  { id: 'beauty', label: '大美丽行业方案' },
  { id: 'health', label: '大健康行业方案' },
  { id: 'life', label: '大生活行业方案' },
  { id: 'other', label: '其他需求' },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    solutions: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSolutionToggle = (solutionId: string) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(solutionId)
        ? prev.solutions.filter(id => id !== solutionId)
        : [...prev.solutions, solutionId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: '预约演示',
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', position: '', phone: '', email: '', solutions: [], message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2500);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2"/>
              <path d="M10 16l4 4 8-8" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#00f5ff"/>
                  <stop offset="1" stopColor="#00a8cc"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className={styles.title}>预约演示</h2>
          <p className={styles.subtitle}>期待与您携手，共创数智未来</p>
        </div>

        {submitStatus === 'success' ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="url(#successGradient)" strokeWidth="2"/>
                <path d="M20 32l8 8 16-16" stroke="url(#successGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="successGradient" x1="0" y1="0" x2="64" y2="64">
                    <stop stopColor="#00f5ff"/>
                    <stop offset="1" stopColor="#00c853"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className={styles.successTitle}>提交成功！</h3>
            <p className={styles.successText}>我们的顾问将在24小时内与您联系</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>姓名 <span className={styles.required}>*</span></label>
                <input
                  type="text"
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="您的姓名"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>职位</label>
                <input
                  type="text"
                  className={styles.input}
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="您的职位"
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>公司名称 <span className={styles.required}>*</span></label>
              <input
                type="text"
                className={styles.input}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                placeholder="您的公司名称"
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>手机号码 <span className={styles.required}>*</span></label>
                <input
                  type="tel"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="您的手机号码"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>电子邮箱 <span className={styles.required}>*</span></label>
                <input
                  type="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="您的邮箱地址"
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>您感兴趣的解决方案</label>
              <div className={styles.solutionGrid}>
                {solutions.map((solution) => (
                  <label
                    key={solution.id}
                    className={`${styles.solutionTag} ${formData.solutions.includes(solution.id) ? styles.solutionTagActive : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.solutions.includes(solution.id)}
                      onChange={() => handleSolutionToggle(solution.id)}
                      className={styles.checkbox}
                    />
                    <span>{solution.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>其他需求</label>
              <textarea
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="请描述您的具体需求或问题（可选）"
                rows={3}
              />
            </div>
            
            {submitStatus === 'error' && (
              <p className={styles.error}>提交失败，请稍后重试或直接联系我们：021-52231078</p>
            )}
            
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.loading}>
                  <svg className={styles.spinner} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                    <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  提交中...
                </span>
              ) : (
                '立即预约'
              )}
            </button>
            
            <p className={styles.privacy}>
              提交即表示您同意我们的隐私政策，我们承诺保护您的个人信息安全
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
