module.exports = [
"[project]/src/components/blocks/ProductMatrix/ProductMatrix.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "animatedPath": "ProductMatrix-module__nU7F8W__animatedPath",
  "cardArrow": "ProductMatrix-module__nU7F8W__cardArrow",
  "cardContent": "ProductMatrix-module__nU7F8W__cardContent",
  "cardDesc": "ProductMatrix-module__nU7F8W__cardDesc",
  "cardHeader": "ProductMatrix-module__nU7F8W__cardHeader",
  "cardLink": "ProductMatrix-module__nU7F8W__cardLink",
  "cardName": "ProductMatrix-module__nU7F8W__cardName",
  "cardNameEn": "ProductMatrix-module__nU7F8W__cardNameEn",
  "cardStatus": "ProductMatrix-module__nU7F8W__cardStatus",
  "cardTag": "ProductMatrix-module__nU7F8W__cardTag",
  "comingSoon": "ProductMatrix-module__nU7F8W__comingSoon",
  "comingSoonBadge": "ProductMatrix-module__nU7F8W__comingSoonBadge",
  "connectionLine": "ProductMatrix-module__nU7F8W__connectionLine",
  "connections": "ProductMatrix-module__nU7F8W__connections",
  "container": "ProductMatrix-module__nU7F8W__container",
  "drawLine": "ProductMatrix-module__nU7F8W__drawLine",
  "fadeInUp": "ProductMatrix-module__nU7F8W__fadeInUp",
  "header": "ProductMatrix-module__nU7F8W__header",
  "matrix": "ProductMatrix-module__nU7F8W__matrix",
  "productCard": "ProductMatrix-module__nU7F8W__productCard",
  "productsGrid": "ProductMatrix-module__nU7F8W__productsGrid",
  "pulse": "ProductMatrix-module__nU7F8W__pulse",
  "section": "ProductMatrix-module__nU7F8W__section",
  "series": "ProductMatrix-module__nU7F8W__series",
  "seriesDesc": "ProductMatrix-module__nU7F8W__seriesDesc",
  "seriesHeader": "ProductMatrix-module__nU7F8W__seriesHeader",
  "seriesIcon": "ProductMatrix-module__nU7F8W__seriesIcon",
  "seriesInfo": "ProductMatrix-module__nU7F8W__seriesInfo",
  "seriesName": "ProductMatrix-module__nU7F8W__seriesName",
  "seriesNameEn": "ProductMatrix-module__nU7F8W__seriesNameEn",
  "statusDot": "ProductMatrix-module__nU7F8W__statusDot",
  "subtitle": "ProductMatrix-module__nU7F8W__subtitle",
  "title": "ProductMatrix-module__nU7F8W__title",
});
}),
"[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductMatrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/blocks/ProductMatrix/ProductMatrix.module.css [app-ssr] (css module)");
'use client';
;
;
;
const productMatrix = [
    {
        id: 'xinglan',
        name: '星澜系列',
        nameEn: 'Xinglan Series',
        description: '企业级全渠道业务运营平台',
        products: [
            {
                id: 'omc-oms',
                name: '全渠道业务中台',
                nameEn: 'OMC-OMS',
                href: '/products/omc-oms',
                description: '构建企业级商品资产中心，驱动多业态精细化运营',
                status: 'active'
            },
            {
                id: 'distribution',
                name: '分销管理系统',
                nameEn: 'Distribution',
                href: '/products/distribution',
                description: '连接品牌与渠道，构建高效分销网络',
                status: 'active'
            },
            {
                id: 'ecommerce',
                name: '电商管理系统',
                nameEn: 'E-commerce',
                href: '/products/ecommerce',
                description: '全平台电商运营一站式解决方案',
                status: 'active'
            },
            {
                id: 'pos',
                name: '门店管理系统',
                nameEn: 'POS',
                href: '/products/pos',
                description: '智慧门店运营，赋能零售终端',
                status: 'active'
            },
            {
                id: 'merchandise',
                name: '智能商品运营',
                nameEn: 'Merchandise',
                href: '/products/ai',
                description: 'AI驱动的商品全生命周期运营',
                status: 'active'
            }
        ]
    },
    {
        id: 'xingzhi',
        name: '星智系列',
        nameEn: 'Xingzhi Series',
        description: 'AI时代企业智能底座与场景能力',
        products: [
            {
                id: 'ai-platform',
                name: 'AI智能底座',
                nameEn: 'AI Platform',
                href: '/products/ai-platform',
                description: '企业级AI基础设施平台',
                status: 'coming-soon',
                tag: '敬请期待'
            },
            {
                id: 'ai-agent',
                name: '企业场景能力智能体',
                nameEn: 'AI Agent Suite',
                href: '/products/ai-agent',
                description: '面向企业复杂业务场景的AI Agent套件',
                status: 'coming-soon',
                tag: '敬请期待'
            }
        ]
    }
];
function ProductMatrix() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "产品矩阵"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "覆盖企业全链路数智化转型需求"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].matrix,
                    children: productMatrix.map((series, seriesIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].series,
                            style: {
                                animationDelay: `${seriesIndex * 0.1}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesHeader,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesIcon,
                                            children: series.id === 'xinglan' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesName,
                                                    children: series.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesNameEn,
                                                    children: series.nameEn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seriesDesc,
                                            children: series.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productsGrid,
                                    children: series.products.map((product, productIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                            product: product,
                                            index: productIndex
                                        }, product.id, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                series.id === 'xingzhi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comingSoonBadge,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "客户共创中，敬请期待"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, series.id, true, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connections,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].connectionLine,
                        viewBox: "0 0 800 100",
                        preserveAspectRatio: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "lineGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "0%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "rgba(0, 245, 255, 0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            stopColor: "rgba(0, 245, 255, 0.5)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "rgba(0, 245, 255, 0.1)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,50 Q200,20 400,50 T800,50",
                                stroke: "url(#lineGradient)",
                                strokeWidth: "2",
                                fill: "none",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].animatedPath
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
function ProductCard({ product, index }) {
    const isComingSoon = product.status === 'coming-soon';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productCard} ${isComingSoon ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comingSoon : ''}`,
        style: {
            animationDelay: `${index * 0.05}s`
        },
        children: isComingSoon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardNameEn,
                            children: product.nameEn
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this),
                        product.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTag,
                            children: product.tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 190,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardName,
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 192,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDesc,
                    children: product.description
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardStatus,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusDot
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "客户共创中"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 187,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: product.href,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardLink,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardNameEn,
                            children: product.nameEn
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 202,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardName,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDesc,
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardArrow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 10h12M12 6l4 4-4 4",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 209,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 207,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 201,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 200,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_blocks_ProductMatrix_9f950af0._.js.map