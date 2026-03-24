(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/blocks/ProductMatrix/ProductMatrix.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductMatrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/blocks/ProductMatrix/ProductMatrix.module.css [app-client] (css module)");
'use client';
;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "0a620db4c382fd9039c4034726c83042f259a73d153c6f3718dd148eab41ca0a") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a620db4c382fd9039c4034726c83042f259a73d153c6f3718dd148eab41ca0a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "产品矩阵"
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 96,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                    children: "覆盖企业全链路数智化转型需求"
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 96,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].matrix,
            children: productMatrix.map(_ProductMatrixProductMatrixMap)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connections,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connectionLine,
                            viewBox: "0 0 800 100",
                            preserveAspectRatio: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "lineGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(0, 245, 255, 0.1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                lineNumber: 110,
                                                columnNumber: 286
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "rgba(0, 245, 255, 0.5)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                lineNumber: 110,
                                                columnNumber: 341
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(0, 245, 255, 0.1)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                                lineNumber: 110,
                                                columnNumber: 397
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                        lineNumber: 110,
                                        columnNumber: 218
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 110,
                                    columnNumber: 212
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,50 Q200,20 400,50 T800,50",
                                    stroke: "url(#lineGradient)",
                                    strokeWidth: "2",
                                    fill: "none",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animatedPath
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                    lineNumber: 110,
                                    columnNumber: 478
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 110,
                            columnNumber: 124
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 110,
                        columnNumber: 88
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 110,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = ProductMatrix;
function _ProductMatrixProductMatrixMap(series, seriesIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].series,
        style: {
            animationDelay: `${seriesIndex * 0.1}s`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesIcon,
                        children: series.id === "xinglan" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 120,
                                columnNumber: 182
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 120,
                            columnNumber: 105
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 120,
                                columnNumber: 755
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 120,
                            columnNumber: 678
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 120,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesName,
                                children: series.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 120,
                                columnNumber: 1202
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesNameEn,
                                children: series.nameEn
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 120,
                                columnNumber: 1254
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 120,
                        columnNumber: 1167
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seriesDesc,
                        children: series.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 120,
                        columnNumber: 1320
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 120,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productsGrid,
                children: series.products.map(_ProductMatrixProductMatrixMapSeriesProductsMap)
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 120,
                columnNumber: 1383
            }, this),
            series.id === "xingzhi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comingSoonBadge,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "客户共创中，敬请期待"
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 120,
                    columnNumber: 1564
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 120,
                columnNumber: 1524
            }, this)
        ]
    }, series.id, true, {
        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
        lineNumber: 118,
        columnNumber: 10
    }, this);
}
function _ProductMatrixProductMatrixMapSeriesProductsMap(product, productIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
        product: product,
        index: productIndex
    }, product.id, false, {
        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
function ProductCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "0a620db4c382fd9039c4034726c83042f259a73d153c6f3718dd148eab41ca0a") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a620db4c382fd9039c4034726c83042f259a73d153c6f3718dd148eab41ca0a";
    }
    const { product, index } = t0;
    const isComingSoon = product.status === "coming-soon";
    const t1 = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard} ${isComingSoon ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comingSoon : ""}`;
    const t2 = `${index * 0.05}s`;
    let t3;
    if ($[1] !== t2) {
        t3 = {
            animationDelay: t2
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== isComingSoon || $[4] !== product.description || $[5] !== product.href || $[6] !== product.name || $[7] !== product.nameEn || $[8] !== product.tag) {
        t4 = isComingSoon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardNameEn,
                            children: product.nameEn
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 96
                        }, this),
                        product.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTag,
                            children: product.tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 152,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardName,
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 152,
                    columnNumber: 231
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                    children: product.description
                }, void 0, false, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 152,
                    columnNumber: 282
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardStatus,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusDot
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 373
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "客户共创中"
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 410
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                    lineNumber: 152,
                    columnNumber: 338
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 152,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: product.href,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardLink,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardNameEn,
                            children: product.nameEn
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 568
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 152,
                        columnNumber: 533
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardName,
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 152,
                        columnNumber: 633
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDesc,
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 152,
                        columnNumber: 684
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blocks$2f$ProductMatrix$2f$ProductMatrix$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardArrow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 10h12M12 6l4 4-4 4",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                                lineNumber: 152,
                                columnNumber: 834
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                            lineNumber: 152,
                            columnNumber: 774
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                        lineNumber: 152,
                        columnNumber: 740
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
                lineNumber: 152,
                columnNumber: 497
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 152,
            columnNumber: 443
        }, this);
        $[3] = isComingSoon;
        $[4] = product.description;
        $[5] = product.href;
        $[6] = product.name;
        $[7] = product.nameEn;
        $[8] = product.tag;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1 || $[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            style: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/blocks/ProductMatrix/ProductMatrix.tsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_c1 = ProductCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductMatrix");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_blocks_ProductMatrix_d6a3e0d9._.js.map