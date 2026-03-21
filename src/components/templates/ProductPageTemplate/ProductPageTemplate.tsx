import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import styles from './ProductPageTemplate.module.css';

interface ProductPageTemplateProps {
  product: Product;
}

interface Module {
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

const productModules: Record<string, Module[]> = {
  'omc-oms': [
    {
      id: 'product-center',
      title: '商品中心',
      icon: 'package',
      description: '构建企业级商品资产中心',
      features: [
        { name: '多品类属性扩展引擎', description: '支持医药、食品、美妆等行业特有属性自定义扩展' },
        { name: 'SPU-SKC-SKU多级体系', description: '建立从标准产品单元到库存量单位的完整层级', highlight: true },
        { name: '一品多码/一码多品映射', description: '灵活应对物流与销售视角的差异' },
        { name: '全生命周期管理', description: '自动化管理上市、在售、下架全流程' },
      ]
    },
    {
      id: 'channel-center',
      title: '渠道中心',
      icon: 'network',
      description: '全渠道档案统一管理',
      features: [
        { name: '全渠道档案中心化', description: '统一管理线上店铺与线下门店档案' },
        { name: '上下游伙伴全景视图', description: '整合销售客户与采购商档案', highlight: true },
        { name: '多维价格体系引擎', description: '支持采购价、吊牌价、成交价等多维价格维护' },
      ]
    },
    {
      id: 'inventory',
      title: '全渠道库存',
      icon: 'database',
      description: '库存分层运营与智能调度',
      features: [
        { name: '多状态库存分层管理', description: '细分为可销、预占、在途、冻结等状态' },
        { name: '自动化货品分配模型', description: '基于规则实现入库即自动分配', highlight: true },
        { name: 'ATP可承诺库存应用', description: '统筹计划、在制、在途库存' },
        { name: '差异化效期策略引擎', description: '平衡销售端偏好与供应端最优利用' },
      ]
    },
    {
      id: 'order',
      title: '订单履约',
      icon: 'workflow',
      description: '智能订单处理与履约',
      features: [
        { name: '即时零售场景适配', description: '原生支持O2O、小时达等即时零售业务' },
        { name: '2B/2C自动化审单', description: '智能识别并自动化审核各类订单', highlight: true },
        { name: '智能拆单合单策略', description: '基于仓库分布、物流成本精细化策略' },
        { name: '白盒化可运营寻源', description: '支持多指标配置与动态调整' },
      ]
    },
  ],
  'distribution': [
    {
      id: 'distributor',
      title: '分销商管理',
      icon: 'network',
      description: '多级分销体系管理',
      features: [
        { name: '多级分销体系', description: '支持多级分销商管理，实现渠道网络可视化' },
        { name: '分销商档案中心化', description: '统一管理分销商资质、信用、合作协议', highlight: true },
        { name: '信用额度管控', description: '实时监控分销商信用额度，预警超限风险' },
      ]
    },
    {
      id: 'procurement',
      title: '采购管理',
      icon: 'shopping-cart',
      description: '采购业务全程在线',
      features: [
        { name: '多级单据全链路管理', description: '采购订单全流程可视化追踪' },
        { name: '采购变更闭环管理', description: '采购变更全程可追溯', highlight: true },
        { name: '供应商协同', description: '供应商门户实现订单、发货、对账协同' },
      ]
    },
    {
      id: 'sales',
      title: '销售管理',
      icon: 'share',
      description: '灵活的分销业务支撑',
      features: [
        { name: '多业务模式支撑', description: '支持经销、代销、常规、直发等多种模式' },
        { name: '渠道协议与控销', description: '防止渠道窜货、乱价', highlight: true },
        { name: '2B单据字段级管控', description: '精细化的权限和数据管控' },
      ]
    },
    {
      id: 'inventory',
      title: '库存管理',
      icon: 'database',
      description: '多仓库库存统一管理',
      features: [
        { name: '多仓库库存管理', description: '支持多仓库、多货主的库存统一管理' },
        { name: '库存预警机制', description: '基于安全库存、效期规则自动预警' },
        { name: '库存调拨优化', description: '智能推荐调拨方案，降低物流成本', highlight: true },
      ]
    },
    {
      id: 'settlement',
      title: '结算管理',
      icon: 'calculator',
      description: '多场景分润与智能对账',
      features: [
        { name: '多场景分润配置', description: '灵活配置复杂的分润规则，支持多级分销分润' },
        { name: '多凭证自动生成', description: '单笔销售订单自动还原生成多张结算凭证', highlight: true },
        { name: '智能渠道对账', description: '自动化完成渠道交易数据与财务数据的核对' },
        { name: '多资金账户体系', description: '内置信用、返利等多账户管理' },
      ]
    },
  ],
  'ecommerce': [
    {
      id: 'connection',
      title: '多平台电商连接',
      icon: 'link',
      description: '即插即用的平台对接',
      features: [
        { name: '可配置电商连接器', description: '快速对接主流电商平台' },
        { name: '统一订单管理', description: '多平台订单统一处理', highlight: true },
        { name: '实时数据同步', description: '库存订单实时同步' }
      ]
    },
    {
      id: 'efficiency',
      title: '效率化电商链路',
      icon: 'zap',
      description: '全链路自动化',
      features: [
        { name: '全链路订单自动化', description: '减少人工操作环节' },
        { name: '售后归因分析闭环', description: '售后问题自动归因分析', highlight: true },
        { name: '无头件智能匹配', description: '自动匹配无头件订单' }
      ]
    },
    {
      id: 'risk',
      title: '业务风控提升',
      icon: 'alert-triangle',
      description: '智能风险监控',
      features: [
        { name: '自动化异常监控', description: '实时监控订单异常' },
        { name: '库存共享防超卖', description: '多渠道库存实时同步', highlight: true },
        { name: '破价提醒与熔断', description: '价格异常自动预警' }
      ]
    },
    {
      id: 'reconciliation',
      title: '电商对账自动化',
      icon: 'calculator',
      description: '平台对账自动化，减轻财务压力',
      features: [
        { name: '账单格式化', description: '多平台账单自动解析与标准化处理' },
        { name: '科目匹配和自动核销', description: '智能匹配科目规则，自动完成核销对账', highlight: true },
        { name: '异常处理和分析', description: '自动识别异常账目，提供差异分析' }
      ]
    },
  ],
  'pos': [
    {
      id: 'retail',
      title: '新零售业务场景',
      icon: 'store',
      description: '多场景业务支撑',
      features: [
        { name: '多场景业务支撑', description: '支持多种零售业务场景' },
        { name: '丰富营销工具箱', description: '多样化的营销工具支持', highlight: true },
        { name: '会员一体化管理', description: '会员积分、储值一体化' }
      ]
    },
    {
      id: 'target',
      title: '目标驱动型零售',
      icon: 'target',
      description: '以目标为导向的运营',
      features: [
        { name: '业务驱动销售管理', description: '销售目标可视化管理' },
        { name: '目标拆解与追踪', description: '任务目标层层分解', highlight: true },
        { name: '业绩实时看板', description: '销售业绩实时展示' }
      ]
    },
    {
      id: 'omnichannel',
      title: '全渠道联动',
      icon: 'refresh-cw',
      description: '线上线下融合',
      features: [
        { name: '全渠道货通联动', description: '门店与线上库存实时互通' },
        { name: '订单智能路由', description: '最优履约路径自动选择', highlight: true },
        { name: '门店自提与配送', description: '灵活的履约方式选择' }
      ]
    },
  ],
  'ai': [
    {
      id: 'intelligent',
      title: 'AI智能体',
      icon: 'cpu',
      description: 'AI驱动的智能运营',
      features: [
        { name: '多渠道智能分货', description: '基于AI的智能分货策略' },
        { name: '铺补调智能决策', description: 'AI驱动的铺补调退决策', highlight: true },
        { name: 'AI助理式交互', description: '自然语言交互操作' }
      ]
    },
    {
      id: 'capability',
      title: '可运营能力提升',
      icon: 'settings',
      description: '人机协同的运营模式',
      features: [
        { name: '白盒化可运营配置', description: 'AI决策过程透明可控' },
        { name: 'AI助理式人机交互', description: '自然语言交互操作', highlight: true },
        { name: '仿真模拟推演引擎', description: '策略效果预演验证' }
      ]
    },
    {
      id: 'control',
      title: '运营控制塔',
      icon: 'activity',
      description: '全局运营监控与决策',
      features: [
        { name: '运营指标监控', description: '关键运营指标实时监控' },
        { name: '异常预警与处理', description: '运营异常自动预警', highlight: true },
        { name: '决策行动闭环', description: '从数据分析到行动执行' }
      ]
    },
  ],
  'ai-platform': [
    {
      id: 'sdd-framework',
      title: 'SDD开发框架',
      icon: 'cpu',
      description: '场景驱动开发框架',
      features: [
        { name: '场景化开发范式', description: '以业务场景为中心的开发模式，降低AI应用开发门槛' },
        { name: '可视化编排工具', description: '拖拽式场景编排，无需编码即可构建AI应用' },
        { name: '组件化能力复用', description: '沉淀可复用的场景能力组件，加速应用构建', highlight: true },
        { name: '多模型接入支持', description: '支持接入多种大模型，灵活切换最优方案' },
      ]
    },
    {
      id: 'runtime-monitor',
      title: '场景能力运行监控',
      icon: 'activity',
      description: 'AI应用全生命周期监控',
      features: [
        { name: '实时运行监控', description: '实时监控AI应用运行状态，及时发现异常' },
        { name: '性能指标分析', description: '分析响应时间、成功率、资源消耗等关键指标' },
        { name: '调用链路追踪', description: '完整记录AI应用调用链路，支持问题排查', highlight: true },
        { name: '告警与预警', description: '智能告警策略，异常情况及时通知' },
      ]
    },
    {
      id: 'ontology',
      title: '比升"本体论"',
      icon: 'book',
      description: '企业知识建模方法论',
      features: [
        { name: '企业知识建模', description: '将企业业务知识结构化建模，形成知识图谱' },
        { name: '语义化知识表示', description: '统一的语义表示框架，实现知识的互联互通' },
        { name: '知识推理引擎', description: '基于知识图谱的推理能力，支持智能决策', highlight: true },
        { name: '知识持续进化', description: '支持知识的动态更新和版本管理' },
      ]
    },
    {
      id: 'simulation-engine',
      title: '仿真推演引擎',
      icon: 'workflow',
      description: 'AI决策仿真验证',
      features: [
        { name: '决策仿真验证', description: '在虚拟环境中验证AI决策效果' },
        { name: '多场景对比分析', description: '支持多种决策方案的对比分析' },
        { name: '风险预警评估', description: '评估决策可能带来的风险', highlight: true },
        { name: '效果预测报告', description: '生成决策效果预测报告' },
      ]
    },
  ],
  'ai-agent': [
    {
      id: 'merchandise-agent',
      title: '商品运营智能体',
      icon: 'cpu',
      description: 'AI驱动的商品运营决策',
      features: [
        { name: '智能分货决策', description: '基于历史销售、库存状况、渠道特性，自动生成最优分货方案' },
        { name: '智能补货建议', description: '实时监控库存水位，结合销售预测，智能触发补货建议', highlight: true },
        { name: '智能调拨优化', description: '跨渠道、跨仓库的智能调拨决策，优化库存结构' },
        { name: '自然语言交互', description: '通过对话式交互，快速查询数据、下达指令' },
      ]
    },
    {
      id: 'finance-agent',
      title: '财务对账智能体',
      icon: 'calculator',
      description: 'AI驱动的财务对账自动化',
      features: [
        { name: '多渠道自动对账', description: '自动拉取各渠道账单，完成交易数据与财务数据的核对' },
        { name: '智能差异分析', description: '自动识别对账差异，分析差异原因并生成报告', highlight: true },
        { name: '凭证自动生成', description: '根据对账结果，自动生成财务凭证' },
        { name: '异常预警提醒', description: '实时监控对账进度，异常情况自动预警' },
      ]
    },
  ],
};

const iconComponents: Record<string, React.ReactNode> = {
  'package': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  'network': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v5m-5.5 4.5L11 13m7.5 3.5L13 13" />
    </svg>
  ),
  'database': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'workflow': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a3 3 0 003 3h0m6-6v3a3 3 0 01-3 3h0" />
    </svg>
  ),
  'calculator': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <rect x="8" y="6" width="8" height="4" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" />
      <circle cx="8" cy="18" r="1" fill="currentColor" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <circle cx="16" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  'shopping-cart': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  'share': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.96" />
    </svg>
  ),
  'shield': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'link': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  ),
  'zap': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'alert-triangle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  'store': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  'target': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  'refresh-cw': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  ),
  'cpu': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3m6-3v3M9 20v3m6-3v3M20 9h3m-3 6h3M1 9h3m-3 6h3" />
    </svg>
  ),
  'settings': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  'activity': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  'book': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  'users': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

const productScenarios: Record<string, Array<{ title: string; description: string }>> = {
  'omc-oms': [
    { title: '多平台电商运营', description: '统一管理多平台订单，智能履约' },
    { title: '线上线下融合', description: '打通O2O场景，实现全渠道销售' },
    { title: '分销与零售一体化', description: '支持多级分销与直营零售协同' },
    { title: '全渠道一盘货', description: '全局库存共享，智能调度' },
  ],
  'distribution': [
    { title: '供应链透明化', description: '采购全程在线，可追溯' },
    { title: '多组织协同', description: '集团多组织业务统一管理' },
    { title: '渠道管控', description: '防止窜货乱价，规范市场' },
    { title: '渠道结算管理', description: '多级分销分润、渠道对账自动化' },
  ],
  'ecommerce': [
    { title: '多平台统一管理', description: '一站式管理所有电商平台' },
    { title: '订单自动化', description: '减少人工操作，提升效率' },
    { title: '风险防控', description: '实时监控，智能预警' },
  ],
  'pos': [
    { title: '门店数字化', description: '新零售场景全覆盖' },
    { title: '目标驱动运营', description: '以目标为导向的销售管理' },
    { title: '全渠道联动', description: '线上线下库存互通' },
  ],
  'ai': [
    { title: '智能分货', description: 'AI驱动的最优分货策略' },
    { title: '人机协同', description: 'AI助理辅助决策' },
    { title: '仿真推演', description: '策略效果预演验证' },
  ],
  'ai-platform': [
    { title: 'AI应用快速构建', description: '基于SDD框架快速构建业务场景化AI应用' },
    { title: 'AI应用运维监控', description: '全生命周期监控AI应用运行状态' },
    { title: '企业知识管理', description: '构建企业知识图谱，实现知识沉淀与复用' },
    { title: 'AI决策验证', description: '仿真验证AI决策效果，降低上线风险' },
  ],
  'ai-agent': [
    { title: '商品运营场景', description: '分货铺货、智能补货、库存调拨、价格优化' },
    { title: '财务对账场景', description: '多渠道对账、差异分析、凭证生成、异常预警' },
  ],
};

export default function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const productImages: Record<string, string> = {
    'omc-oms': '/images/products/product-oms-hero.jpg',
    'distribution': '/images/products/product-oms-hero.jpg',
    'ecommerce': '/images/products/product-ecommerce-hero.jpg',
    'pos': '/images/products/product-pos-hero.jpg',
    'ai': '/images/products/product-ai-hero.jpg',
    'ai-platform': '/images/products/product-ai-hero.jpg',
    'ai-agent': '/images/products/product-ai-hero.jpg',
  };

  const modules = productModules[product.id] || [];
  const scenarios = productScenarios[product.id] || [];
  const overviewParagraphs = extractOverview(product.content);
  const isComingSoon = product.id === 'ai-platform' || product.id === 'ai-agent';

  return (
    <>
      {/* Hero区域 */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src={productImages[product.id] || '/images/products/product-oms-hero.jpg'}
            alt={product.title}
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroGlow}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">首页</Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <Link href="/products">产品</Link>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbCurrent}>{product.title}</span>
            </div>
            <h1 className={styles.heroTitle}>{product.title}</h1>
            <p className={styles.heroSubtitle}>{product.subtitle}</p>
            {product.tags && (
              <div className={styles.tags}>
                {product.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            )}
            {isComingSoon && (
              <div className={styles.comingSoonBadge}>
                <span>客户共创中，敬请期待</span>
              </div>
            )}
            <div className={styles.heroCta}>
              <Link href="/contact/demo" className={styles.primaryButton}>
                <span>预约演示</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/cases" className={styles.secondaryButton}>
                查看案例
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 数据指标区 */}
      {product.highlights && product.highlights.length > 0 && (
        <section className={styles.metrics}>
          <div className={styles.metricsBackground}>
            <div className={styles.metricsGlow}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.metricsGrid}>
              {product.highlights.map((item, index) => (
                <div key={index} className={styles.metricCard}>
                  <div className={styles.metricGlow}></div>
                  <span className={styles.metricValue}>{item.metric}</span>
                  <span className={styles.metricLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 产品概述区 */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.overviewTitle}>
                <span className={styles.titleGradient}>产品概述</span>
              </h2>
              <div className={styles.titleUnderline}></div>
              <div className={styles.overviewParagraphs}>
                {overviewParagraphs.map((para, idx) => (
                  <p key={idx} className={styles.overviewParagraph}>{para}</p>
                ))}
              </div>
              
              {scenarios.length > 0 && (
                <div className={styles.scenarios}>
                  <h3 className={styles.scenariosTitle}>适用场景</h3>
                  <div className={styles.scenariosGrid}>
                    {scenarios.map((scenario, idx) => (
                      <div key={idx} className={styles.scenarioItem}>
                        <div className={styles.scenarioIcon}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className={styles.scenarioContent}>
                          <span className={styles.scenarioName}>{scenario.title}</span>
                          <span className={styles.scenarioDesc}>{scenario.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.overviewVisual}>
              <div className={styles.visualCard}>
                <Image 
                  src={productImages[product.id] || '/images/products/product-oms-hero.jpg'}
                  alt={product.title}
                  fill
                  className={styles.visualImage}
                />
                <div className={styles.visualOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心模块展示 */}
      {modules.length > 0 && (
        <section className={styles.modules}>
          <div className={styles.container}>
            <div className={styles.modulesHeader}>
              <h2 className={styles.modulesTitle}>核心模块</h2>
              <p className={styles.modulesSubtitle}>全方位覆盖企业运营需求</p>
            </div>
            <div className={styles.modulesGrid}>
              {modules.map((module) => (
                <div key={module.id} className={styles.moduleCard}>
                  <div className={styles.moduleIcon}>
                    {iconComponents[module.icon] || iconComponents['package']}
                  </div>
                  <h3 className={styles.moduleTitle}>{module.title}</h3>
                  <p className={styles.moduleDescription}>{module.description}</p>
                  <div className={styles.featureList}>
                    {module.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className={`${styles.featureItem} ${feature.highlight ? styles.featureHighlight : ''}`}
                      >
                        <div className={styles.featureCheck}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className={styles.featureContent}>
                          <span className={styles.featureName}>{feature.name}</span>
                          <span className={styles.featureDesc}>{feature.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA区域 */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGlow}></div>
        </div>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            {isComingSoon ? '参与产品共创' : `开始使用 ${product.title}`}
          </h2>
          <p className={styles.ctaDescription}>
            {isComingSoon 
              ? '如果您对这个产品感兴趣，欢迎联系我们，参与产品共创' 
              : '联系我们的专家，了解如何为您的业务赋能'}
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact/demo" className={styles.ctaPrimary}>
              <span>预约演示</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/products" className={styles.ctaSecondary}>
              查看其他产品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function extractOverview(content: string): string[] {
  if (!content) return [];
  
  const lines = content.split('\n');
  const paragraphs: string[] = [];
  let inOverview = false;
  let currentParagraph = '';
  
  for (const line of lines) {
    if (line.startsWith('## 产品概述')) {
      inOverview = true;
      continue;
    }
    if (line.startsWith('## ') && !line.startsWith('## 产品概述')) {
      if (inOverview) break;
    }
    if (inOverview) {
      if (line.startsWith('|') || line.startsWith('#')) {
        continue;
      }
      if (line.trim() === '') {
        if (currentParagraph.trim()) {
          paragraphs.push(currentParagraph.trim());
          currentParagraph = '';
        }
      } else {
        currentParagraph += (currentParagraph ? ' ' : '') + line.trim();
      }
    }
  }
  
  if (currentParagraph.trim()) {
    paragraphs.push(currentParagraph.trim());
  }
  
  return paragraphs;
}
