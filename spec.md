# 比升官网修复规格说明

## 问题描述

### 问题1：产品页面预约演示404
**现状**：产品页面模板 (`ProductPageTemplate.tsx`) 中的"预约演示"按钮链接到 `/contact/demo` 路径，但该页面不存在，导致404错误。

**期望**：点击"预约演示"按钮应打开预约演示弹窗 (`ContactModal`)，而不是跳转到不存在的页面。

### 问题2：顶部下拉菜单换行
**现状**：Header 组件的下拉菜单宽度 (`min-width: 220px`) 不足，导致"企业场景能力智能体-敬请期待"文本换行，影响美观。

**期望**：增加下拉菜单宽度，确保文本不换行。

---

## 修复方案

### 方案1：预约演示弹窗集成

#### 修改文件
- `src/components/templates/ProductPageTemplate/ProductPageTemplate.tsx`

#### 修改内容
1. 将组件改为客户端组件（添加 `'use client'`）
2. 引入 `useState` 管理弹窗状态
3. 引入 `ContactModal` 组件
4. 将 `<Link href="/contact/demo">` 改为 `<button onClick={() => setIsModalOpen(true)}>`
5. 添加 ContactModal 组件渲染

#### 代码变更

```tsx
// 文件头部添加
'use client';

import { useState } from 'react';
import ContactModal from '@/components/common/ContactModal/ContactModal';

// 组件内部添加状态
const [isModalOpen, setIsModalOpen] = useState(false);

// Hero区域CTA按钮修改
<button 
  onClick={() => setIsModalOpen(true)} 
  className={styles.primaryButton}
>
  <span>预约演示</span>
  <svg>...</svg>
</button>

// CTA区域按钮修改
<button 
  onClick={() => setIsModalOpen(true)} 
  className={styles.ctaPrimary}
>
  <span>预约演示</span>
  <svg>...</svg>
</button>

// 组件末尾添加弹窗
<ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
```

---

### 方案2：下拉菜单宽度调整

#### 修改文件
- `src/components/layout/Header/Header.module.css`

#### 修改内容
将 `.dropdownMenu` 的 `min-width` 从 `220px` 增加到 `280px`

#### 代码变更

```css
.dropdownMenu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 280px;  /* 从 220px 增加到 280px */
  padding: 8px;
  /* ... 其他样式保持不变 */
}
```

---

## 影响范围

| 文件 | 影响范围 | 风险等级 |
|------|----------|----------|
| ProductPageTemplate.tsx | 所有产品页面 | 低 |
| Header.module.css | 顶部导航下拉菜单 | 低 |

---

## 验证清单

- [ ] 产品页面"预约演示"按钮点击后打开弹窗
- [ ] 弹窗可以正常关闭
- [ ] 弹窗表单可以正常提交
- [ ] 顶部下拉菜单文本不换行
- [ ] 其他页面预约演示功能正常
