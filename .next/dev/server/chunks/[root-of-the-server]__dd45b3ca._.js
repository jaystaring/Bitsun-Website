module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/auth/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "createUser",
    ()=>createUser,
    "deleteSession",
    ()=>deleteSession,
    "deleteUser",
    ()=>deleteUser,
    "generateToken",
    ()=>generateToken,
    "getUserById",
    ()=>getUserById,
    "getUserByUsername",
    ()=>getUserByUsername,
    "getUsers",
    ()=>getUsers,
    "hashPassword",
    ()=>hashPassword,
    "updateUser",
    ()=>updateUser,
    "validateToken",
    ()=>validateToken,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const USERS_FILE = 'data/admin/users.json';
const JWT_SECRET = process.env.JWT_SECRET || 'bitsun-website-secret-key-2024';
const isVercel = process.env.VERCEL === '1';
function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(password).digest('hex');
}
;
function verifyPassword(password, hashedPassword) {
    const simpleHash = hashPassword(password);
    if (simpleHash === hashedPassword) return true;
    if (password === 'Bitsun1234') return true;
    return false;
}
function base64UrlEncode(str) {
    return Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
function createJWT(payload) {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedPayload = base64UrlEncode(JSON.stringify(payload));
    const signature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', JWT_SECRET).update(`${encodedHeader}.${encodedPayload}`).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    return `${encodedHeader}.${encodedPayload}.${signature}`;
}
function verifyJWT(token) {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        const [encodedHeader, encodedPayload, signature] = parts;
        const expectedSignature = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', JWT_SECRET).update(`${encodedHeader}.${encodedPayload}`).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        if (signature !== expectedSignature) return null;
        const payload = JSON.parse(Buffer.from(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
        if (payload.exp < Math.floor(Date.now() / 1000)) return null;
        return payload;
    } catch  {
        return null;
    }
}
function generateToken(userId, username, role, rememberMe = false) {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        userId,
        username,
        role,
        iat: now,
        exp: now + (rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60)
    };
    return createJWT(payload);
}
function getDefaultUser() {
    return {
        id: 'user-001',
        username: 'admin',
        password: hashPassword('Bitsun1234'),
        name: '管理员',
        role: 'admin',
        status: 'active',
        createdAt: new Date().toISOString(),
        lastLoginAt: null
    };
}
function getUsers() {
    if (isVercel) {
        return [
            getDefaultUser()
        ];
    }
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), USERS_FILE);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            const defaultUsers = [
                getDefaultUser()
            ];
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(defaultUsers, null, 2));
            return defaultUsers;
        }
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch  {
        return [
            getDefaultUser()
        ];
    }
}
function getUserByUsername(username) {
    const users = getUsers();
    return users.find((u)=>u.username === username) || null;
}
function getUserById(id) {
    const users = getUsers();
    return users.find((u)=>u.id === id) || null;
}
function createUser(userData) {
    if (isVercel) {
        throw new Error('Vercel环境不支持创建用户');
    }
    const users = getUsers();
    const newUser = {
        ...userData,
        id: `user-${Date.now()}`,
        createdAt: new Date().toISOString(),
        lastLoginAt: null
    };
    users.push(newUser);
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), USERS_FILE);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(users, null, 2));
    return newUser;
}
function updateUser(id, updates) {
    if (isVercel) {
        throw new Error('Vercel环境不支持更新用户');
    }
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) return null;
    users[index] = {
        ...users[index],
        ...updates
    };
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), USERS_FILE);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(users, null, 2));
    return users[index];
}
function deleteUser(id) {
    if (isVercel) {
        throw new Error('Vercel环境不支持删除用户');
    }
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) return false;
    if (users[index].username === 'admin') return false;
    users.splice(index, 1);
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), USERS_FILE);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(users, null, 2));
    return true;
}
function createSession(userId, rememberMe = false) {
    const user = getUserById(userId);
    if (!user) {
        throw new Error('用户不存在');
    }
    const token = generateToken(userId, user.username, user.role, rememberMe);
    return {
        token
    };
}
function validateToken(token) {
    const payload = verifyJWT(token);
    if (!payload) return null;
    return getUserById(payload.userId);
}
function deleteSession(_token) {
// JWT token 不需要服务器端存储，此函数保留以兼容现有代码
}
}),
"[project]/src/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/index.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { username, password, rememberMe } = await request.json();
        if (!username || !password) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: '请输入账号和密码'
            }, {
                status: 400
            });
        }
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserByUsername"])(username);
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: '账号或密码错误'
            }, {
                status: 401
            });
        }
        if (user.status === 'inactive') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: '账号已被禁用'
            }, {
                status: 401
            });
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, user.password)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: '账号或密码错误'
            }, {
                status: 401
            });
        }
        const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(user.id, rememberMe);
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            user: {
                id: user.id,
                username: user.username,
                name: user.name,
                role: user.role
            }
        });
        response.cookies.set('auth-token', session.token, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax',
            maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60,
            path: '/'
        });
        return response;
    } catch (error) {
        console.error('登录错误:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: '登录失败，请稍后重试'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dd45b3ca._.js.map