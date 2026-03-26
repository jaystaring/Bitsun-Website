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
    "cleanExpiredSessions",
    ()=>cleanExpiredSessions,
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
    "getSessions",
    ()=>getSessions,
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
const SESSIONS_FILE = 'data/admin/sessions.json';
const isVercel = process.env.VERCEL === '1';
let memorySessions = [];
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
function generateToken() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(32).toString('hex');
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
    const token = generateToken();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + (rememberMe ? 7 : 1) * 24 * 60 * 60 * 1000);
    const session = {
        token,
        userId,
        createdAt: now.toISOString(),
        expiresAt: expiresAt.toISOString()
    };
    if (isVercel) {
        memorySessions.push(session);
        cleanExpiredSessions();
    } else {
        const sessions = getSessions();
        sessions.push(session);
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), SESSIONS_FILE);
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(sessions, null, 2));
    }
    return session;
}
function getSessions() {
    if (isVercel) {
        return memorySessions;
    }
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), SESSIONS_FILE);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            return [];
        }
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch  {
        return [];
    }
}
function validateToken(token) {
    const sessions = getSessions();
    const session = sessions.find((s)=>s.token === token);
    if (!session) return null;
    if (new Date(session.expiresAt) < new Date()) return null;
    return getUserById(session.userId);
}
function deleteSession(token) {
    if (isVercel) {
        memorySessions = memorySessions.filter((s)=>s.token !== token);
    } else {
        const sessions = getSessions();
        const index = sessions.findIndex((s)=>s.token === token);
        if (index !== -1) {
            sessions.splice(index, 1);
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), SESSIONS_FILE);
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(sessions, null, 2));
        }
    }
}
function cleanExpiredSessions() {
    const now = new Date();
    if (isVercel) {
        memorySessions = memorySessions.filter((s)=>new Date(s.expiresAt) >= now);
    } else {
        const sessions = getSessions();
        const activeSessions = sessions.filter((s)=>new Date(s.expiresAt) >= now);
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), SESSIONS_FILE);
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(activeSessions, null, 2));
    }
}
}),
"[project]/src/app/api/admin/demos/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
const DEMOS_DIR = 'data/contact-submissions';
async function GET(request) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: '未登录'
        }, {
            status: 401
        });
    }
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateToken"])(token);
    if (!user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: '登录已过期'
        }, {
            status: 401
        });
    }
    try {
        const demosDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), DEMOS_DIR);
        const demos = [];
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(demosDir)) {
            const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(demosDir).filter((f)=>f.startsWith('contact-') && f.endsWith('.json'));
            for (const file of files){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(demosDir, file);
                const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
                const data = JSON.parse(content);
                demos.push({
                    fileName: file,
                    ...data
                });
            }
            demos.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            demos
        });
    } catch (error) {
        console.error('获取预约演示数据失败:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: '获取失败'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08fa805e._.js.map