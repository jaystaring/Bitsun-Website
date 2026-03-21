# 比升演示管理后台 - 任务清单

## 任务概览

| 任务ID | 任务名称 | 优先级 | 状态 | 预计时间 |
|--------|----------|--------|------|----------|
| T001 | 创建登录入口和认证系统 | P0 | 待开始 | 2h |
| T002 | 创建后台布局框架 | P0 | 待开始 | 1h |
| T003 | 实现账号管理模块 | P0 | 待开始 | 3h |
| T004 | 实现预约演示记录模块 | P0 | 待开始 | 2h |
| T005 | 创建交互式方案预留页面 | P1 | 待开始 | 1h |
| T006 | 测试和优化 | P0 | 待开始 | 1h |

---

## 详细任务

### T001: 创建登录入口和认证系统

**子任务**：
- [ ] T001-1: 在Header组件添加登录入口链接
- [ ] T001-2: 创建登录页面 `/login`
- [ ] T001-3: 创建登录表单组件
- [ ] T001-4: 实现认证API `/api/auth/login`
- [ ] T001-5: 创建认证上下文 AuthProvider
- [ ] T001-6: 实现Token存储和验证
- [ ] T001-7: 创建路由守卫

**产出文件**：
- `src/app/login/page.tsx`
- `src/app/api/auth/login/route.ts`
- `src/app/api/auth/logout/route.ts`
- `src/components/auth/LoginForm.tsx`
- `src/components/auth/AuthProvider.tsx`
- `src/lib/auth.ts`
- `data/admin/users.json`

---

### T002: 创建后台布局框架

**子任务**：
- [ ] T002-1: 创建后台布局组件
- [ ] T002-2: 创建侧边栏组件
- [ ] T002-3: 创建顶部导航组件
- [ ] T002-4: 创建后台首页仪表盘
- [ ] T002-5: 添加后台样式

**产出文件**：
- `src/app/admin/layout.tsx`
- `src/app/admin/page.tsx`
- `src/components/admin/Sidebar.tsx`
- `src/components/admin/Header.tsx`
- `src/styles/admin.module.css`

---

### T003: 实现账号管理模块

**子任务**：
- [ ] T003-1: 创建账号管理页面
- [ ] T003-2: 创建用户列表组件
- [ ] T003-3: 创建新增/编辑用户弹窗
- [ ] T003-4: 实现用户CRUD API
- [ ] T003-5: 实现角色权限控制

**产出文件**：
- `src/app/admin/accounts/page.tsx`
- `src/app/api/admin/users/route.ts`
- `src/components/admin/UserList.tsx`
- `src/components/admin/UserForm.tsx`

---

### T004: 实现预约演示记录模块

**子任务**：
- [ ] T004-1: 创建预约演示记录页面
- [ ] T004-2: 创建记录列表组件
- [ ] T004-3: 创建详情弹窗组件
- [ ] T004-4: 实现状态更新功能
- [ ] T004-5: 实现导出功能

**产出文件**：
- `src/app/admin/demos/page.tsx`
- `src/app/api/admin/demos/route.ts`
- `src/components/admin/DemoList.tsx`
- `src/components/admin/DemoDetail.tsx`

---

### T005: 创建交互式方案预留页面

**子任务**：
- [ ] T005-1: 创建交互式方案页面框架
- [ ] T005-2: 添加预留功能说明

**产出文件**：
- `src/app/admin/solutions/page.tsx`

---

### T006: 测试和优化

**子任务**：
- [ ] T006-1: 功能测试
- [ ] T006-2: 安全测试
- [ ] T006-3: 兼容性测试
- [ ] T006-4: 性能优化

---

## 依赖关系

```
T001 (登录认证) ──┬──> T002 (后台布局) ──> T003 (账号管理)
                  │
                  └──> T004 (预约演示记录)
                  
T002 ──> T005 (交互式方案)

T001~T005 ──> T006 (测试优化)
```

---

## 执行顺序

1. **Day 1 上午**：T001 登录认证系统
2. **Day 1 下午**：T002 后台布局 + T003 账号管理
3. **Day 2 上午**：T004 预约演示记录 + T005 交互式方案
4. **Day 2 下午**：T006 测试优化
