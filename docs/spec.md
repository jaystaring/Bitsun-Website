# 比升官网 Spec 规范文档

> 版本: 1.2.0\
> 更新日期: 2026-03-17\
> 状态: 待确认

***

## 一、产品体系

### 1.1 产品矩阵概览

比升科技产品体系分为两大系列：**星澜** 和 **星智**。

```
比升产品体系
├── 星澜系列（企业级业务中台）
│   ├── 全渠道业务中台（核心）
│   │   ├── 商品中心
│   │   ├── 渠道中心
│   │   ├── 全渠道库存
│   │   ├── 全渠道订单履约
│   │   └── 全渠道结算
│   ├── 分销管理系统
│   │   ├── 采购在线支持
│   │   ├── 多业务模式分销
│   │   └── 精细化业务控制
│   ├── 电商管理系统
│   │   ├── 多平台电商连接
│   │   ├── 效率化电商链路
│   │   └── 业务风控提升
│   └── 门店管理系统
│       ├── 新零售业务场景
│       ├── 目标驱动型零售
│       └── 全渠道联动
└── 星智系列（AI智能运营）
    └── AI智能商品运营
        ├── 商品智能运营
        └── 可运营能力提升
```

### 1.2 星澜 - 全渠道业务中台

**产品定位**：构建企业级商品资产中心，驱动多业态精细化运营

**核心价值指标**：
- 库存周转提升20%
- 订单处理效率提升80%
- 渠道管理效率提升50%

#### 1.2.1 商品中心

| 功能亮点            | 描述                        | 解决痛点                |
| --------------- | ------------------------- | ------------------- |
| 多品类属性扩展引擎       | 支持医药、食品、美妆等行业特有的属性字段自定义扩展 | 通用系统无法适配垂直行业特殊属性    |
| SPU-SKC-SKU多级体系 | 建立从标准产品单元到库存量单位的完整层级      | 多品类企业管理层级混乱         |
| 一品多码/一码多品映射     | 灵活应对物流与销售视角的差异，支持新老品替换    | 新旧品切换断档，多条码管理混乱     |
| 复杂商品形态支持        | 原生支持物理组装、虚拟组套、多单位转换       | 组套商品成本核算难，财务税务合规风险高 |
| 全生命周期管理         | 自动化管理上市、在售、下架全流程          | 人工维护效率低，错过最佳销售窗口期   |
| 批次效期精细管控        | 专为食品、美妆、医药设计，支持先进先出、近效期预警 | 效期商品损耗大，合规风险高       |

#### 1.2.2 渠道中心

| 功能亮点      | 描述                       | 解决痛点            |
| --------- | ------------------------ | --------------- |
| 全渠道档案中心化  | 统一管理线上店铺与线下门店档案          | 多渠道数据分散，管理成本高   |
| 上下游伙伴全景视图 | 整合销售客户与采购商档案，实现360度管理    | 客户信息分散，缺乏统一管理体系 |
| 多维价格体系引擎  | 支持采购价、吊牌价、页面价、成交价等多维价格维护 | 价格体系混乱，利润管控失效   |

#### 1.2.3 全渠道库存

| 功能亮点       | 描述                  | 解决痛点                    |
| ---------- | ------------------- | ----------------------- |
| 多状态库存分层管理  | 细分为可销、预占、在途、冻结等状态   | 库存状态单一，导致超卖或库存积压        |
| 自动化货品分配模型  | 基于前置约定规则，实现入库即自动分配  | 人工分配效率低，响应慢             |
| 实时同步与智能预警  | 基于效期、库龄规则自动触发预警     | 库存问题发现滞后，呆滞库存增加         |
| 2B大客户预留锁定  | 支持大客户订单的库存锁定与平滑转移   | 大客户需求无法优先保障             |
| ATP可承诺库存应用 | 统筹计划、在制、在途库存，支持预售分配 | 库存visibility不足，无法准确承诺交期 |
| 差异化效期策略引擎  | 平衡销售端批次偏好与供应端最优利用   | 难以兼顾客户新鲜度要求与企业去库存目标     |

#### 1.2.4 全渠道订单履约

| 功能亮点       | 描述                     | 解决痛点              |
| ---------- | ---------------------- | ----------------- |
| 即时零售场景适配   | 原生支持O2O、小时达等即时零售业务模式   | 传统架构无法支撑高时效、高并发需求 |
| 2B/2C自动化审单 | 智能识别并自动化审核各类订单         | 人工审单效率低，大促期间订单积压  |
| 智能拆单合单策略   | 基于仓库分布、物流成本、商品属性等精细化策略 | 盲目拆单导致物流成本激增      |
| 白盒化可运营寻源   | 支持多指标配置与动态调整，透明化记录全过程  | 采购执行过程黑盒，难以追溯与管控  |

#### 1.2.5 全渠道结算

| 功能亮点    | 描述                  | 解决痛点            |
| ------- | ------------------- | --------------- |
| 多场景分润配置 | 灵活配置复杂的分润规则         | 分润规则复杂，人工计算易出错  |
| 多凭证自动生成 | 单笔销售订单自动还原生成多张结算凭证  | 业财数据不一致，财务工作量大  |
| 智能渠道对账  | 自动化完成渠道交易数据与财务数据的核对 | 渠道对账耗时耗力，差异难以查明 |

### 1.3 星澜 - 分销管理系统

**产品定位**：采购业务全程在线，实现供应链透明化管理

**核心价值指标**：
- 订单处理效率提升60%
- 合规成本降低50%
- 采购透明度提升100%

| 模块      | 功能亮点               | 解决痛点             |
| ------- | ------------------ | ---------------- |
| 采购在线支持  | 多级单据全链路管理、采购变更闭环管理 | 采购过程不透明，难以追溯问题根源 |
| 多业务模式分销 | 多组织多模式支撑、多资金账户体系   | 集团多组织业务模式复杂，管理割裂 |
| 精细化业务控制 | 渠道协议与控销、2B单据字段级管控  | 渠道窜货、乱价难以管控      |

**核心价值**：
- 订单处理效率提升60%
- 合规成本降低50%

### 1.4 星澜 - 电商管理系统

**产品定位**："可运营"电商中台，实现全链路自动化与风控

**核心价值指标**：
- 订单全链路自动化率90%
- 对账效率提升80%
- 异常响应能力提升95%

| 模块      | 功能亮点                      | 解决痛点                |
| ------- | ------------------------- | ------------------- |
| 多平台电商连接 | 可配置电商连接器，即插即用             | 对接开发周期长，成本高         |
| 效率化电商链路 | 全链路订单自动化、售后归因分析闭环、无头件智能匹配 | 人工操作环节多，效率低，错误率高    |
| 业务风控提升  | 自动化异常监控、库存共享防超卖、破价提醒与熔断   | 人工监控无法覆盖全量订单，异常发现滞后 |
| 电商对账自动化 | 账单格式化、科目匹配和自动核销、异常处理和分析   | 平台对账耗时耗力，财务压力大      |

### 1.5 星澜 - 门店管理系统

**产品定位**："精益零售运营"，赋能新零售场景与全渠道联动

**核心价值指标**：
- 门店运营效率提升40%
- 全渠道货通效率提升60%
- 销售目标达成率提升30%

| 模块      | 功能亮点                     | 解决痛点               |
| ------- | ------------------------ | ------------------ |
| 新零售业务场景 | 多场景业务支撑、丰富营销工具箱          | 门店系统功能单一，无法支撑新零售需求 |
| 目标驱动型零售 | 业务驱动销售管理，以目标为导向拆解任务      | 门店运营缺乏目标指引，执行力差    |
| 全渠道联动   | 全渠道货通联动，实现门店与线上库存、订单实时互通 | 线上线下库存割裂，资源浪费      |

### 1.6 星智 - AI智能商品运营

**产品定位**："可掌控"智能决策，驱动人机协同的商品运营

**核心价值指标**：
- 运营人效提升100%
- 人力节约80%
- 人均管理门店数翻倍

| 模块      | 功能亮点                        | 解决痛点            |
| ------- | --------------------------- | --------------- |
| 商品智能运营  | 多渠道智能分货、线下货品智能调整（铺补调退）      | 人工分货凭经验，准确性低    |
| 可运营能力提升 | 白盒化可运营配置、AI助理式人机交互、仿真模拟推演引擎 | 黑盒算法难以信任，无法灵活调整 |

### 1.7 技术与架构特色

| 能力领域    | 功能亮点                  | 解决痛点             |
| ------- | --------------------- | ---------------- |
| 精细化权限管理 | 行列字段级数据&动态角色权限        | 权限颗粒度粗，存在数据泄露风险  |
| 性能管理    | 高并发高性能支撑，海量数据与高并发访问保障 | 系统性能瓶颈明显，大促期间易宕机 |
| AI原生架构  | 内嵌AI能力的云原生架构          | 传统架构难以融合AI，改造成本高 |

***

## 二、项目概述

### 1.1 项目背景

比升技术深耕消费品行业，为企业提供全渠道大商品运营一站式解决方案。本官网作为品牌展示和线索获取的核心入口，需要体现：

- **专业性**：企业级新一代业务平台产品定位
- **科技感**：AI驱动的智能化能力
- **行业深度**：消费品行业深耕经验

### 1.2 项目目标

| 目标   | 描述                 | 衡量指标          |
| ---- | ------------------ | ------------- |
| 品牌展示 | 展示公司核心价值和产品能力      | 访问时长 > 2分钟    |
| 线索获取 | 通过演示预约、白皮书下载获取销售线索 | 转化率 > 3%      |
| 产品认知 | 让访客快速了解产品矩阵和价值     | 产品页访问占比 > 40% |
| 可维护性 | 内容和样式可方便调整，支持多语言   | 内容更新时间 < 1小时  |

### 1.3 MVP范围

| 页面          | 优先级 | 说明            |
| ----------- | --- | ------------- |
| 首页          | P0  | 核心入口，展示公司价值主张 |
| 产品总览页       | P0  | 产品矩阵概览        |
| 星澜全渠道OMS详情页 | P0  | 核心产品详细介绍      |
| 星澜门店零售页     | P1  | 第二优先级产品       |
| 星智AI详情页     | P1  | AI能力亮点展示      |

***

## 二、技术架构

### 2.1 技术栈选型

| 层面   | 技术选型               | 版本   | 说明                    |
| ---- | ------------------ | ---- | --------------------- |
| 框架   | Next.js            | 14.x | App Router, SSG/SSR支持 |
| 语言   | TypeScript         | 5.x  | 类型安全                  |
| UI组件 | Ant Design         | 5.x  | 企业级组件库                |
| 样式   | Tailwind CSS       | 3.x  | 原子化CSS                |
| 内容管理 | Gray Matter + MDX  | -    | Markdown解析            |
| 国际化  | next-intl          | 3.x  | 多语言支持                 |
| 图表   | ECharts / Recharts | -    | 数据可视化                 |
| 动画   | Framer Motion      | -    | 微动效                   |
| 部署   | Vercel / 静态导出      | -    | CDN分发                 |

### 2.2 项目结构

```
bisheng-official-website/
├── app/                              # Next.js App Router
│   ├── [locale]/                     # 国际化路由
│   │   ├── layout.tsx                # 语言布局
│   │   ├── page.tsx                  # 首页
│   │   ├── products/                 # 产品模块
│   │   │   ├── page.tsx              # 产品总览
│   │   │   ├── omc-oms/              # 星澜全渠道OMS
│   │   │   ├── pos/                  # 星澜门店零售
│   │   │   └── ai/                   # 星智AI
│   │   ├── solutions/                # 解决方案（预留）
│   │   ├── cases/                    # 客户案例（预留）
│   │   ├── resources/                # 资源中心（预留）
│   │   └── about/                    # 关于我们（预留）
│   ├── layout.tsx                    # 根布局
│   └── globals.css                   # 全局样式
├── components/                       # 组件目录
│   ├── ui/                           # 基础UI组件
│   │   ├── Button/                   # 按钮组件
│   │   │   ├── index.tsx
│   │   │   ├── Button.tsx
│   │   │   └── styles.module.css
│   │   ├── Card/                     # 卡片组件
│   │   ├── Section/                  # 区块容器
│   │   ├── Icon/                     # 图标组件
│   │   └── Image/                    # 图片组件
│   ├── layout/                       # 布局组件
│   │   ├── Header/                   # 头部导航
│   │   ├── Footer/                   # 页脚
│   │   ├── Navigation/               # 导航菜单
│   │   └── Container/                # 容器组件
│   └── blocks/                       # 业务区块组件
│       ├── HeroSection/              # 首屏区块
│       ├── CapabilityGrid/           # 能力网格
│       ├── IndustrySection/          # 行业区块
│       ├── ProductShowcase/          # 产品展示
│       ├── CaseSection/              # 案例区块
│       ├── AdvantageSection/         # 优势区块
│       └── CTASection/               # CTA区块
├── content/                          # 内容文件
│   ├── i18n/                         # 多语言内容
│   │   ├── zh-CN/                    # 简体中文
│   │   │   ├── pages/                # 页面内容
│   │   │   ├── products/             # 产品内容
│   │   │   └── common.json           # 公共文案
│   │   └── en-US/                    # 英文（预留）
│   └── config/                       # 全局配置
│       ├── navigation.json           # 导航配置
│       ├── site.json                 # 站点配置
│       ├── theme.json                # 主题配置
│       └── seo.json                  # SEO配置
├── lib/                              # 工具函数
│   ├── content.ts                    # 内容解析
│   ├── i18n.ts                       # 国际化工具
│   └── utils.ts                      # 通用工具
├── public/                           # 静态资源
│   ├── images/                       # 图片资源
│   │   ├── hero/                     # 首屏图片
│   │   ├── icons/                    # 图标
│   │   ├── industries/               # 行业图片
│   │   ├── products/                 # 产品图片
│   │   └── cases/                    # 案例图片
│   ├── fonts/                        # 字体文件
│   └── favicon.ico                   # 网站图标
├── styles/                           # 样式文件
│   ├── variables.css                 # CSS变量
│   └── components/                   # 组件样式
├── types/                            # TypeScript类型
│   ├── index.ts                      # 类型导出
│   ├── content.ts                    # 内容类型
│   └── components.ts                 # 组件类型
├── docs/                             # 文档目录
│   ├── spec.md                       # 本文档
│   ├── tasks.md                      # 任务清单
│   └── checklist.md                  # 验收清单
├── next.config.js                    # Next.js配置
├── tailwind.config.js                # Tailwind配置
├── tsconfig.json                     # TypeScript配置
└── package.json                      # 项目配置
```

### 2.3 架构设计原则

#### 2.3.1 内容与表现分离

```
┌─────────────────────────────────────────────────────────┐
│                    内容层 (Content)                      │
│  Markdown/JSON文件 → 独立于代码，可由非技术人员维护        │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    数据层 (Data Layer)                   │
│  lib/content.ts → 解析内容，提供类型安全的数据访问         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    组件层 (Components)                   │
│  UI组件 + 业务区块组件 → 接收数据，负责渲染               │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                    页面层 (Pages)                        │
│  Next.js页面 → 组合组件，定义页面结构                     │
└─────────────────────────────────────────────────────────┘
```

#### 2.3.2 组件设计原则

- **原子化**：基础组件（Button、Card）可独立使用
- **可组合**：业务区块由基础组件组合而成
- **可配置**：通过props控制样式和行为
- **可扩展**：预留扩展点，支持自定义

***

## 三、设计规范

### 3.1 品牌色系

```css
:root {
  /* 主色 */
  --color-primary: #0066FF;
  --color-primary-light: #3385FF;
  --color-primary-dark: #0052CC;
  
  /* 辅助色 */
  --color-secondary: #00C2FF;
  --color-accent: #10B981;
  
  /* 背景色（深色主题） */
  --color-bg-primary: #0A0F1C;
  --color-bg-secondary: #111827;
  --color-bg-tertiary: #1F2937;
  --color-bg-card: #1A2332;
  
  /* 文字色 */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #9CA3AF;
  --color-text-tertiary: #6B7280;
  
  /* 边框色 */
  --color-border: #374151;
  --color-border-light: #1F2937;
  
  /* 渐变 */
  --gradient-primary: linear-gradient(135deg, #0066FF 0%, #00C2FF 100%);
  --gradient-hero: linear-gradient(180deg, #0A0F1C 0%, #111827 100%);
  --gradient-card: linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(0, 194, 255, 0.1) 100%);
}
```

### 3.2 字体规范

```css
:root {
  /* 字体族 */
  --font-family-sans: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  /* 字号 */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */
  
  /* 行高 */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* 字重 */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### 3.3 间距规范

```css
:root {
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */
}
```

### 3.4 圆角规范

```css
:root {
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;  /* 圆形 */
}
```

### 3.5 阴影规范

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  --shadow-glow: 0 0 20px rgba(0, 102, 255, 0.3);
  --shadow-glow-strong: 0 0 40px rgba(0, 102, 255, 0.5);
}
```

### 3.6 动效规范

```css
:root {
  /* 过渡时长 */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* 缓动函数 */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 3.7 响应式断点

```css
/* Tailwind配置 */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',    /* 手机横屏 */
      'md': '768px',    /* 平板竖屏 */
      'lg': '1024px',   /* 平板横屏/小笔记本 */
      'xl': '1280px',   /* 桌面 */
      '2xl': '1536px',  /* 大屏 */
    },
  },
}
```

***

## 四、内容管理规范

### 4.1 内容文件格式

#### 4.1.1 页面内容 (JSON)

```json
// content/i18n/zh-CN/pages/home/hero.json
{
  "id": "hero",
  "title": "AI时代企业数智服务商",
  "subtitle": "提供全渠道大商品运营一站式解决方案，助力企业实现销售最大化、成本最小化",
  "cta": {
    "primary": {
      "text": "预约演示",
      "href": "/contact/demo"
    },
    "secondary": {
      "text": "了解更多",
      "href": "/products"
    }
  },
  "background": {
    "type": "image",
    "src": "/images/hero/bg-main.jpg",
    "alt": "科技感背景"
  },
  "highlights": [
    { "value": "20%", "label": "库存周转提升" },
    { "value": "150%", "label": "缺货销售增长" },
    { "value": "30+", "label": "行业头部客户" }
  ]
}
```

#### 4.1.2 产品内容 (Markdown)

```markdown
---
id: omc-oms
title: 星澜全渠道OMS
subtitle: 面向企业运营智能化的"可运营OMS"
category: core-product
tags: [OMS, 全渠道, 订单管理]
icon: omc-oms
heroImage: /images/products/oms-hero.jpg
features:
  - id: channel-access
    title: 全平台电商接入
    description: 覆盖天猫、京东、抖音、拼多多、私域、即时零售、跨境等主流平台
    icon: channel
  - id: inventory-sync
    title: 全渠道库存同步
    description: 库存分层运营，实现全局库存可视与智能调度
    icon: inventory
  - id: order-fulfillment
    title: 订单智能履约
    description: 链路多主体货品接入及灵活结算，实现订单最优履约
    icon: order
  - id: sourcing
    title: 全渠道寻源
    description: 基于策略的智能寻源，实现销售最大化、成本最小化
    icon: sourcing
highlights:
  - metric: 90%
    label: 调补配效率提升
  - metric: 150%
    label: 缺货销售收入增长
  - metric: 100%
    label: 订单自动化审核
industries: [fashion, fmcg, home, beauty, pharma]
relatedCases: [case-anta, case-ur, case-babycare]
---

## 产品概述

星澜全渠道OMS是面向消费品行业的一体化订单管理系统，支持电商、分销、零售全渠道场景，实现线上线下库存融合与智能调度。

## 核心价值

### 红利机会把握
快速接入新兴渠道，把握市场红利机会

### 商品运营全链路增强
从订单到履约的全链路智能化运营

### 业务自动化和精细控制
策略驱动的自动化流程，精细化的业务管控

## 功能架构

[产品架构图]

## 适用场景

- 多平台电商运营
- 线上线下融合
- 分销与零售一体化
- 全渠道一盘货
```

#### 4.1.3 全局配置

```json
// content/config/navigation.json
{
  "mainNav": [
    { "id": "home", "label": "首页", "href": "/" },
    {
      "id": "products",
      "label": "产品",
      "href": "/products",
      "children": [
        { 
          "id": "omc-oms", 
          "label": "星澜全渠道OMS", 
          "href": "/products/omc-oms",
          "tag": { "text": "核心", "type": "primary" }
        },
        { "id": "pos", "label": "星澜门店零售", "href": "/products/pos" },
        { 
          "id": "ai", 
          "label": "星智AI", 
          "href": "/products/ai",
          "tag": { "text": "AI", "type": "accent" }
        }
      ]
    },
    {
      "id": "solutions",
      "label": "解决方案",
      "href": "/solutions",
      "children": [
        {
          "id": "by-industry",
          "label": "按行业",
          "children": [
            { "id": "beauty", "label": "大美丽", "href": "/solutions/industry/beauty" },
            { "id": "health", "label": "大健康", "href": "/solutions/industry/health" },
            { "id": "life", "label": "大生活", "href": "/solutions/industry/life" }
          ]
        },
        {
          "id": "by-scenario",
          "label": "按场景",
          "children": [
            { "id": "omnichannel", "label": "全渠道一盘货", "href": "/solutions/scenario/omnichannel" },
            { "id": "sales", "label": "全渠道销售", "href": "/solutions/scenario/sales" },
            { "id": "merchandise", "label": "商品运营智能", "href": "/solutions/scenario/merchandise" },
            { "id": "ecommerce", "label": "电商运营智能", "href": "/solutions/scenario/ecommerce" }
          ]
        }
      ]
    },
    { "id": "cases", "label": "客户案例", "href": "/cases" },
    { "id": "resources", "label": "资源中心", "href": "/resources" },
    { "id": "about", "label": "关于我们", "href": "/about" }
  ],
  "ctaNav": [
    { "id": "demo", "label": "预约演示", "href": "/contact/demo", "type": "primary" }
  ]
}
```

```json
// content/config/site.json
{
  "name": "比升科技",
  "nameEn": "Bitsun",
  "description": "深耕消费品行业，提供全渠道大商品运营一站式解决方案",
  "url": "https://www.bitsun-inc.com",
  "logo": {
    "light": "/images/logo-light.svg",
    "dark": "/images/logo-dark.svg"
  },
  "contact": {
    "email": "marketing@bitsun-inc.com",
    "phone": "",
    "address": ""
  },
  "social": {
    "wechat": "/images/qrcode-wechat.jpg",
    "linkedin": "",
    "weibo": ""
  },
  "footer": {
    "copyright": "© 2026 比升科技 版权所有",
    "icp": ""
  }
}
```

```json
// content/config/theme.json
{
  "colors": {
    "primary": "#0066FF",
    "secondary": "#00C2FF",
    "accent": "#10B981"
  },
  "mode": "dark",
  "fontFamily": {
    "sans": ["Inter", "PingFang SC", "Microsoft YaHei", "sans-serif"]
  }
}
```

### 4.2 内容更新流程

```
┌─────────────────────────────────────────────────────────┐
│  1. 编辑内容文件                                          │
│     - 修改 content/i18n/{locale}/ 下的 JSON/MD 文件       │
│     - 无需修改代码                                        │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│  2. 本地预览验证                                          │
│     - npm run dev 启动开发服务器                          │
│     - 检查内容显示是否正确                                 │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│  3. 提交更新                                              │
│     - git commit 提交内容变更                             │
│     - 触发自动部署                                        │
└─────────────────────────────────────────────────────────┘
```

***

## 五、多语言支持方案

### 5.1 国际化架构

```
app/
├── [locale]/                    # 动态语言路由
│   ├── layout.tsx               # 语言布局（设置lang属性）
│   └── ...pages

content/
├── i18n/
│   ├── zh-CN/                   # 简体中文
│   │   ├── pages/
│   │   ├── products/
│   │   └── common.json
│   └── en-US/                   # 英文（预留）
│       ├── pages/
│       ├── products/
│       └── common.json
```

### 5.2 语言切换机制

```typescript
// lib/i18n.ts
export const locales = ['zh-CN', 'en-US'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'zh-CN';

export const localeNames: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
};
```

### 5.3 URL结构

| 语言       | URL示例           |
| -------- | --------------- |
| 简体中文（默认） | `/` 或 `/zh-CN/` |
| 英文       | `/en-US/`       |

***

## 六、页面详细规格

### 6.1 首页 (Home)

#### 6.1.1 页面结构

```
首页
├── Header（全局导航）
├── Hero Section（首屏）
├── Core Capabilities（核心能力）
├── Industry Solutions（行业解决方案）
├── Product Highlights（产品亮点）
├── Customer Cases（客户案例）
├── Core Advantages（核心优势）
├── CTA Section（行动召唤）
└── Footer（页脚）
```

#### 6.1.2 模块规格

##### Hero Section

| 属性 | 值         |
| -- | --------- |
| ID | hero      |
| 高度 | 100vh（最小） |
| 背景 | 渐变 + 图片叠加 |
| 对齐 | 居中        |

**内容结构：**

```typescript
interface HeroContent {
  title: string;           // 主标题
  subtitle: string;        // 副标题
  cta: {
    primary: CTAButton;
    secondary?: CTAButton;
  };
  highlights?: Array<{
    value: string;
    label: string;
  }>;
  background: {
    type: 'image' | 'video' | 'gradient';
    src?: string;
    overlay?: boolean;
  };
}
```

**设计要点：**

- 标题使用 5xl-6xl 字号，字重 bold
- 副标题使用 xl 字号，颜色为 text-secondary
- CTA按钮使用渐变背景，带光效hover
- 背景使用深色渐变 + 科技感图片叠加

##### Core Capabilities

| 属性 | 值            |
| -- | ------------ |
| ID | capabilities |
| 布局 | 4列网格（响应式）    |
| 背景 | 深色           |

**内容结构：**

```typescript
interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;           // 图标名称
  link?: string;          // 跳转链接
}

interface CapabilitiesSection {
  title: string;
  subtitle?: string;
  items: Capability[];
}
```

**设计要点：**

- 卡片使用半透明背景 + 边框
- 图标使用品牌色渐变
- hover时卡片发光效果

##### Industry Solutions

| 属性 | 值          |
| -- | ---------- |
| ID | industries |
| 布局 | 5列网格（响应式）  |
| 背景 | 深色渐变       |

**内容结构：**

```typescript
interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  clients?: string[];     // 代表客户
}

interface IndustrySection {
  title: string;
  subtitle?: string;
  items: Industry[];
}
```

##### Product Highlights

| 属性 | 值         |
| -- | --------- |
| ID | products  |
| 布局 | 3列卡片（响应式） |
| 背景 | 深色        |

**内容结构：**

```typescript
interface ProductHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;          // 产品截图
  link: string;
  highlights: Array<{
    metric: string;
    label: string;
  }>;
  tag?: {
    text: string;
    type: 'primary' | 'accent' | 'secondary';
  };
}
```

##### Customer Cases

| 属性 | 值     |
| -- | ----- |
| ID | cases |
| 布局 | 轮播/网格 |
| 背景 | 深色渐变  |

**内容结构：**

```typescript
interface CaseCard {
  id: string;
  client: string;         // 客户名称（可脱敏）
  industry: string;       // 行业
  logo?: string;          // 客户logo
  challenge: string;      // 挑战/痛点
  solution: string;       // 解决方案
  results: Array<{
    metric: string;
    label: string;
  }>;
  link: string;
}
```

##### Core Advantages

| 属性 | 值          |
| -- | ---------- |
| ID | advantages |
| 布局 | 3列（响应式）    |
| 背景 | 深色         |

**内容结构：**

```typescript
interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights?: string[];
}
```

##### CTA Section

| 属性 | 值       |
| -- | ------- |
| ID | cta     |
| 布局 | 居中      |
| 背景 | 渐变 + 光效 |

**内容结构：**

```typescript
interface CTASection {
  title: string;
  description?: string;
  buttons: Array<{
    text: string;
    href: string;
    type: 'primary' | 'secondary' | 'ghost';
  }>;
}
```

### 6.2 产品总览页

#### 6.2.1 页面结构

```
产品总览页
├── Hero（产品矩阵介绍）
├── 产品卡片导航（三大产品）
├── 核心能力对比
└── CTA（选择适合的产品）
```

### 6.3 星澜全渠道OMS详情页

#### 6.3.1 页面结构

```
星澜全渠道OMS详情页
├── Hero（产品定位）
├── 核心价值（四大价值）
├── 功能架构图
├── 核心功能详解
│   ├── 平台接入
│   ├── 库存同步
│   ├── 订单管理
│   └── 全渠道寻源
├── 数据成果展示
├── 相关案例
└── CTA
```

#### 6.3.2 产品详情页设计规范

##### Hero区域

| 属性 | 值           |
| -- | ----------- |
| 高度 | 60vh（最小）    |
| 背景 | 产品图片 + 渐变叠加 |
| 对齐 | 左对齐         |

##### 数据指标区

| 属性 | 值      |
| -- | ------ |
| 布局 | 3-4列网格 |
| 背景 | 深色渐变   |
| 卡片 | 玻璃态效果  |

**设计要点：**

- 数字使用渐变色，大字号(3rem)
- 卡片带光效边框
- hover时卡片微微上浮

##### 产品概述区

| 属性 | 值        |
| -- | -------- |
| 布局 | 左右分栏（图文） |
| 背景 | 深色       |

**内容结构：**

```typescript
interface ProductOverview {
  title: string;
  description: string;
  image?: string;
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}
```

**设计要点：**

- 标题带渐变下划线装饰
- 描述文字使用次级颜色
- 右侧配图带圆角和阴影

##### 核心模块展示

| 属性 | 值           |
| -- | ----------- |
| 布局 | 2列网格（模块卡片）  |
| 背景 | 渐变深色        |
| 卡片 | 带图标、标题、功能列表 |

**内容结构：**

```typescript
interface CoreModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: Array<{
    name: string;
    description: string;
    highlight?: boolean;
  }>;
}
```

**设计要点：**

- 卡片使用玻璃态背景
- 图标使用渐变色填充
- 功能列表带勾选图标
- hover时卡片发光效果
- 关键功能高亮显示

##### 功能详情卡片

```css
.moduleCard {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.08) 0%, rgba(0, 194, 255, 0.05) 100%);
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.moduleCard:hover {
  border-color: rgba(0, 102, 255, 0.5);
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.15);
  transform: translateY(-4px);
}

.moduleIcon {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.moduleTitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.featureItem {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.featureItem:last-child {
  border-bottom: none;
}

.featureCheck {
  width: 20px;
  height: 20px;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.featureHighlight {
  background: rgba(0, 102, 255, 0.1);
  border-left: 3px solid var(--color-primary);
  padding-left: 16px;
  margin-left: -8px;
}
```

##### 数据成果展示

| 属性 | 值       |
| -- | ------- |
| 布局 | 横向滚动/网格 |
| 背景 | 深色      |

**设计要点：**

- 使用对比色突出数字
- 添加趋势箭头图标
- 客户logo展示

##### CTA区域

| 属性 | 值       |
| -- | ------- |
| 布局 | 居中      |
| 背景 | 渐变 + 光效 |

***

## 七、组件规范

### 7.1 基础UI组件

#### Button

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
}
```

#### Card

```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}
```

#### Section

```typescript
interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'primary' | 'secondary' | 'gradient' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
}
```

### 7.2 业务区块组件

#### HeroSection

```typescript
interface HeroSectionProps {
  content: HeroContent;
}
```

#### CapabilityGrid

```typescript
interface CapabilityGridProps {
  title: string;
  subtitle?: string;
  items: Capability[];
  columns?: 2 | 3 | 4;
}
```

#### ProductShowcase

```typescript
interface ProductShowcaseProps {
  title: string;
  subtitle?: string;
  products: ProductHighlight[];
  layout?: 'grid' | 'carousel';
}
```

***

## 八、数据结构规范

### 8.1 TypeScript类型定义

```typescript
// types/content.ts

export interface SiteConfig {
  name: string;
  nameEn: string;
  description: string;
  url: string;
  logo: {
    light: string;
    dark: string;
  };
  contact: ContactInfo;
  social: SocialLinks;
  footer: FooterConfig;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  tag?: {
    text: string;
    type: 'primary' | 'secondary' | 'accent';
  };
  children?: NavigationItem[];
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'core-product' | 'solution';
  tags: string[];
  icon: string;
  heroImage: string;
  features: Feature[];
  highlights: MetricHighlight[];
  industries: string[];
  relatedCases: string[];
  content: string;  // Markdown body
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface MetricHighlight {
  metric: string;
  label: string;
  trend?: 'up' | 'down';
}

export interface Case {
  id: string;
  client: string;
  industry: string;
  logo?: string;
  challenge: string;
  solution: string;
  results: MetricHighlight[];
  tags: string[];
  content: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  clients: string[];
  challenges: string[];
  solutions: string[];
}
```

***

## 九、SEO规范

### 9.1 元数据配置

```typescript
// 每个页面的metadata
export const metadata: Metadata = {
  title: '页面标题 | 比升ji sh',
  description: '页面描述，150字以内',
  keywords: ['关键词1', '关键词2'],
  openGraph: {
    title: '页面标题',
    description: '页面描述',
    images: ['/og-image.jpg'],
  },
};
```

### 9.2 结构化数据

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "比升科技",
  "url": "https://www.bitsun-inc.com",
  "logo": "https://www.bitsun-inc.com/images/logo.svg",
  "description": "深耕消费品行业，提供全渠道大商品运营一站式解决方案",
  "sameAs": []
}
```

***

## 十、性能规范

### 10.1 性能目标

| 指标                             | 目标值     |
| ------------------------------ | ------- |
| LCP (Largest Contentful Paint) | < 2.5s  |
| FID (First Input Delay)        | < 100ms |
| CLS (Cumulative Layout Shift)  | < 0.1   |
| TTI (Time to Interactive)      | < 3.5s  |

### 10.2 优化策略

- **图片优化**：使用Next.js Image组件，自动WebP转换，响应式图片
- **代码分割**：动态导入大型组件
- **静态生成**：所有页面使用SSG预渲染
- **字体优化**：使用next/font，预加载关键字体
- **缓存策略**：静态资源长期缓存，HTML短期缓存

***

## 十一、图片素材需求清单

### 11.1 首页图片

| 图片ID                 | 用途         | 尺寸        | 描述词                                  |
| -------------------- | ---------- | --------- | ------------------------------------ |
| hero-bg              | Hero背景     | 1920x1080 | 深色科技风背景，蓝色渐变光效，几何网格线条，抽象数据流动，3D立方体元素 |
| capability-icon-1    | 全渠道销售图标    | 120x120   | 立方体+多方向箭头，蓝色发光边缘                     |
| capability-icon-2    | 商品运营智能图标   | 120x120   | 大脑轮廓+电路纹理，AI紫蓝渐变                     |
| capability-icon-3    | 门店零售智能图标   | 120x120   | 店铺轮廓+购物车/会员卡环绕，绿色科技光效                |
| capability-icon-4    | 电商运营智能图标   | 120x120   | 电商购物袋+平台符号，橙蓝渐变                      |
| industry-fashion     | 鞋服时尚背景     | 400x300   | 时尚服装轮廓，流动光线连接门店，时尚动感                 |
| industry-fmcg        | 食品快消背景     | 400x300   | 食品包装盒+货架+配送车辆，数据流动线条                 |
| industry-home        | 家居家电背景     | 400x300   | 家电产品轮廓+智能家居图标，网格连接                   |
| industry-beauty      | 日化美妆背景     | 400x300   | 化妆品瓶罐+门店货架，柔和粉蓝渐变                    |
| industry-pharma      | 医药流通背景     | 400x300   | 医药胶囊+医院图标+配送网络，绿色科技光效                |
| product-oms          | 星澜全渠道OMS截图 | 1200x800  | 订单管理仪表盘，订单列表+库存热力图+履约状态看板            |
| product-pos          | 星澜门店零售截图   | 1200x800  | 门店运营中心，销售数据+会员分析+库存预警                |
| product-ai           | 星智AI助理截图   | 1200x800  | AI对话工作台，AI对话窗口+策略推荐+数据图表，AI区域紫蓝光效    |
| advantage-lighthouse | 灯塔客户插图     | 300x300   | 灯塔建筑+光束照射，深色星空背景，金色光芒                |
| advantage-platform   | 平台架构插图     | 300x300   | 六边形蜂窝结构，数据流动光效，蓝色科技光效                |
| advantage-deep       | 行业深耕插图     | 300x300   | 树根深入地下，地上行业图标生长，绿色生命光效               |
| cta-bg               | CTA背景      | 1920x400  | 深色渐变，中心发散光束，数据粒子汇聚                   |

### 11.2 产品页图片

| 图片ID                  | 用途       | 尺寸       | 描述词                             |
| --------------------- | -------- | -------- | ------------------------------- |
| oms-architecture      | OMS产品架构图 | 1200x800 | 全渠道接入层+核心能力层+数据底座，流动数据线条，蓝色科技光效 |
| oms-feature-channel   | 平台接入功能图  | 800x600  | 多平台图标矩阵，连接线条，数据流入效果             |
| oms-feature-inventory | 库存同步功能图  | 800x600  | 多仓库图标，库存流动动画，实时同步效果             |
| oms-feature-order     | 订单管理功能图  | 800x600  | 订单流程图，状态节点，自动化箭头                |
| oms-feature-sourcing  | 智能寻源功能图  | 800x600  | 订单与仓库匹配网络，最优路径高亮                |

***

## 十二、附录

### 12.1 参考网站

- ServiceNow: <https://www.servicenow.com>
- Salesforce: <https://www.salesforce.com>
- Atlassian: <https://www.atlassian.com>
- Notion: <https://www.notion.so>

### 12.2 版本历史

| 版本    | 日期         | 变更内容                      |
| ----- | ---------- | ------------------------- |
| 1.0.0 | 2026-03-02 | 初始版本                      |
| 1.1.0 | 2026-03-03 | 完善产品详情页设计规范               |
| 1.2.0 | 2026-03-17 | 行业分类重组、客户案例改为Logo墙、首页布局调整 |

***

## 十三、v1.2.0 需求变更说明

### 13.1 行业分类重组

#### 13.1.1 新行业分类体系

原五大行业分类重组为三大板块：

```
行业分类体系（新）
├── 大美丽
│   ├── 鞋服时尚（原）
│   └── 日化美妆（原）
├── 大健康
│   ├── 食品快消（原）
│   └── 医药流通（原）
└── 大生活
    └── 家居家电（原）
```

#### 13.1.2 行业描述

| 行业板块 | 包含原行业     | 核心特点                  |
| ---- | --------- | --------------------- |
| 大美丽  | 鞋服时尚、日化美妆 | 多品牌、多品类、多渠道运营，SKU管理复杂 |
| 大健康  | 食品快消、医药流通 | 效期管理、批次追溯、GSP合规       |
| 大生活  | 家居家电      | 大件物流、售后服务、全渠道订单履约     |

### 13.2 客户案例模块重构

#### 13.2.1 展示形式变更

**原设计**：详细案例卡片展示

- 客户名称、行业、挑战描述、解决方案、成果数据

**新设计**：客户Logo墙展示

| 属性 | 值                 |
| -- | ----------------- |
| ID | client-logos      |
| 布局 | 三大行业分区 + 左右滑动     |
| 交互 | 支持左右滑动浏览各行业客户Logo |

#### 13.2.2 内容结构

```typescript
interface ClientLogoSection {
  title: string;                    // "客户信赖之选"
  subtitle?: string;                // "头部客户的选择与信任"
  categories: Array<{
    id: string;                     // 'beauty' | 'health' | 'life'
    title: string;                  // '大美丽' | '大健康' | '大生活'
    logos: Array<{
      id: string;
      name: string;                 // 客户名称（不显示）
      src: string;                  // Logo图片路径
      alt: string;                  // Alt文本
    }>;
  }>;
  contact: {
    text: string;                   // "需了解更多内容，请联系我们或添加比升微信公众号"
    qrcode: string;                 // 公众号二维码图片路径
  };
}
```

#### 13.2.3 客户Logo清单

**大美丽行业客户**：

- UR、中免、安正、安踏、斐乐、森马、焦内、爱唯、特步、赢家、颖通

**大健康行业客户**：

- 国药、广药、恒昌医药、扬子江、来伊份、正大天晴、绿叶科技、英氏、鑫荣懋、麦趣尔

**大生活行业客户**：

- 九阳、凤凰新华、南方电网、影子科技、扬翔股份、福建中烟、立白、麦克英孚

#### 13.2.4 底部联系引导

```
┌─────────────────────────────────────────────────────────┐
│  需了解更多内容，请联系我们或添加比升微信公众号          │
│                                                         │
│  ┌─────────┐                                            │
│  │ 公众号  │                                            │
│  │ 二维码  │                                            │
│  │         │                                            │
│  └─────────┘                                            │
└─────────────────────────────────────────────────────────┘
```

### 13.3 首页布局调整

#### 13.3.1 核心能力区域

**变更说明**：

- Logo/图标重新设计，采用透明背景适配现有蓝色背景
- 保持现有布局结构

#### 13.3.2 客户案例区域

**变更说明**：

- 移除原详细案例卡片
- 替换为客户Logo墙（同13.2设计）
- 按三大行业板块分组
- Logo下方标签不显示客户名称

#### 13.3.3 行业解决方案区域

**变更说明**：

- 更新为三大板块布局（大美丽、大健康、大生活）
- 保持现有卡片样式
- 调整内容描述

### 13.4 解决方案页面调整

#### 13.4.1 页面结构

```
解决方案页
├── Hero（标题介绍）
├── 行业解决方案（三大板块）
│   ├── 大美丽
│   ├── 大健康
│   └── 大生活
└── CTA（联系咨询）
```

#### 13.4.2 行业解决方案内容

```typescript
interface SolutionCategory {
  id: string;                       // 'beauty' | 'health' | 'life'
  title: string;                    // '大美丽' | '大健康' | '大生活'
  description: string;              // 行业描述
  highlights: string[];             // 核心能力标签
  products: string[];               // 推荐产品ID
}
```

### 13.5 图片资源清单

#### 13.5.1 客户Logo

| 分类  | 文件名         | 说明        |
| --- | ----------- | --------- |
| 大美丽 | UR.png      | UR品牌Logo  |
| 大美丽 | 中免.png      | 中免集团Logo  |
| 大美丽 | 安正.png      | 安正集团Logo  |
| 大美丽 | 安踏.png      | 安踏集团Logo  |
| 大美丽 | 斐乐.png      | FILA Logo |
| 大美丽 | 森马.png      | 森马集团Logo  |
| 大美丽 | 焦内.png      | 焦内品牌Logo  |
| 大美丽 | 爱唯.png      | 爱唯品牌Logo  |
| 大美丽 | 特步.png      | 特步集团Logo  |
| 大美丽 | 赢家-左右结构.png | 赢家时尚Logo  |
| 大美丽 | 颖通.png      | 颖通集团Logo  |
| 大健康 | 国药.png      | 国药集团Logo  |
| 大健康 | 广药.png      | 广药集团Logo  |
| 大健康 | 恒昌医药.png    | 恒昌医药Logo  |
| 大健康 | 扬子江.png     | 扬子江药业Logo |
| 大健康 | 来伊份.png     | 来伊份Logo   |
| 大健康 | 正大天晴.png    | 正大天晴Logo  |
| 大健康 | 绿叶科技.png    | 绿叶科技Logo  |
| 大健康 | 英氏.png      | 英氏品牌Logo  |
| 大健康 | 鑫荣懋.png     | 鑫荣懋Logo   |
| 大健康 | 麦趣尔.png     | 麦趣尔Logo   |
| 大生活 | 九阳.png      | 九阳股份Logo  |
| 大生活 | 凤凰新华.png    | 凤凰新华Logo  |
| 大生活 | 南方电网.png    | 南方电网Logo  |
| 大生活 | 影子科技.png    | 影子科技Logo  |
| 大生活 | 扬翔股份.png    | 扬翔股份Logo  |
| 大生活 | 福建中烟.png    | 福建中烟Logo  |
| 大生活 | 立白.png      | 立白集团Logo  |
| 大生活 | 麦克英孚.png    | 麦克英孚Logo  |

#### 13.5.2 公众号二维码

| 文件名       | 用途       | 路径                        |
| --------- | -------- | ------------------------- |
| 比升二维码.png | 微信公众号二维码 | /images/qrcode-wechat.png |

### 13.6 导航菜单更新

#### 13.6.1 解决方案下拉菜单

```json
{
  "id": "solutions",
  "label": "解决方案",
  "href": "/solutions",
  "children": [
    {
      "id": "by-industry",
      "label": "按行业",
      "children": [
        { "id": "beauty", "label": "大美丽", "href": "/solutions/industry/beauty" },
        { "id": "health", "label": "大健康", "href": "/solutions/industry/health" },
        { "id": "life", "label": "大生活", "href": "/solutions/industry/life" }
      ]
    },
    {
      "id": "by-scenario",
      "label": "按场景",
      "children": [
        { "id": "omnichannel", "label": "全渠道一盘货", "href": "/solutions/scenario/omnichannel" },
        { "id": "sales", "label": "全渠道销售", "href": "/solutions/scenario/sales" },
        { "id": "merchandise", "label": "商品运营智能", "href": "/solutions/scenario/merchandise" },
        { "id": "ecommerce", "label": "电商运营智能", "href": "/solutions/scenario/ecommerce" }
      ]
    }
  ]
}
```

***

> **下一步**：请确认本规范文档，确认后将更新 tasks.md 和 checklist.md 并开始实施

