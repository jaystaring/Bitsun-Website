'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface User {
  id: string;
  username: string;
  name: string;
  role: string;
  status: string;
  createdAt: string;
  lastLoginAt: string | null;
}

export default function AccountsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    role: 'user',
    status: 'active',
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('获取用户列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingUser) {
        const response = await fetch(`/api/admin/users/${editingUser.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          fetchUsers();
          closeModal();
        }
      } else {
        const response = await fetch('/api/admin/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (data.success) {
          fetchUsers();
          closeModal();
        }
      }
    } catch (error) {
      console.error('保存用户失败:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('确定要删除该用户吗？')) return;

    try {
      const response = await fetch(`/api/admin/users/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.success) {
        fetchUsers();
      }
    } catch (error) {
      console.error('删除用户失败:', error);
    }
  };

  const openModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        username: user.username,
        password: '',
        name: user.name,
        role: user.role,
        status: user.status,
      });
    } else {
      setEditingUser(null);
      setFormData({
        username: '',
        password: '',
        name: '',
        role: 'user',
        status: 'active',
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
  };

  if (loading) {
    return <div className={styles.loading}>加载中...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>账号管理</h1>
        <button onClick={() => openModal()} className={styles.addButton}>
          新增用户
        </button>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <span>账号</span>
          <span>姓名</span>
          <span>角色</span>
          <span>状态</span>
          <span>创建时间</span>
          <span>操作</span>
        </div>
        {users.map((user) => (
          <div key={user.id} className={styles.tableRow}>
            <span>{user.username}</span>
            <span>{user.name}</span>
            <span>
              <span className={`${styles.role} ${styles[user.role]}`}>
                {user.role === 'admin' ? '管理员' : '用户'}
              </span>
            </span>
            <span>
              <span className={`${styles.status} ${styles[user.status]}`}>
                {user.status === 'active' ? '启用' : '禁用'}
              </span>
            </span>
            <span>{new Date(user.createdAt).toLocaleDateString('zh-CN')}</span>
            <span className={styles.actions}>
              <button onClick={() => openModal(user)} className={styles.editBtn}>
                编辑
              </button>
              {user.username !== 'admin' && (
                <button onClick={() => handleDelete(user.id)} className={styles.deleteBtn}>
                  删除
                </button>
              )}
            </span>
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{editingUser ? '编辑用户' : '新增用户'}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label>账号</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  disabled={!!editingUser}
                  required
                />
              </div>
              <div className={styles.field}>
                <label>密码{editingUser && '（留空不修改）'}</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required={!editingUser}
                />
              </div>
              <div className={styles.field}>
                <label>姓名</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label>角色</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="user">用户</option>
                  <option value="admin">管理员</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>状态</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="active">启用</option>
                  <option value="inactive">禁用</option>
                </select>
              </div>
              <div className={styles.modalActions}>
                <button type="button" onClick={closeModal} className={styles.cancelBtn}>
                  取消
                </button>
                <button type="submit" className={styles.submitBtn}>
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
