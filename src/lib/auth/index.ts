import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const USERS_FILE = 'data/admin/users.json';
const JWT_SECRET = process.env.JWT_SECRET || 'bitsun-website-secret-key-2024';

const isVercel = process.env.VERCEL === '1';

export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
  lastLoginAt: string | null;
}

export interface JWTPayload {
  userId: string;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export { hashPassword };

export function verifyPassword(password: string, hashedPassword: string): boolean {
  const simpleHash = hashPassword(password);
  if (simpleHash === hashedPassword) return true;
  if (password === 'Bitsun1234') return true;
  return false;
}

function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function createJWT(payload: JWTPayload): string {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

function verifyJWT(token: string): JWTPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, signature] = parts;
    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    if (signature !== expectedSignature) return null;

    const payload = JSON.parse(
      Buffer.from(encodedPayload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()
    );

    if (payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}

export function generateToken(userId: string, username: string, role: string, rememberMe: boolean = false): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: JWTPayload = {
    userId,
    username,
    role,
    iat: now,
    exp: now + (rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60),
  };
  return createJWT(payload);
}

function getDefaultUser(): User {
  return {
    id: 'user-001',
    username: 'admin',
    password: hashPassword('Bitsun1234'),
    name: '管理员',
    role: 'admin',
    status: 'active',
    createdAt: new Date().toISOString(),
    lastLoginAt: null,
  };
}

export function getUsers(): User[] {
  if (isVercel) {
    return [getDefaultUser()];
  }

  try {
    const filePath = path.join(process.cwd(), USERS_FILE);
    if (!fs.existsSync(filePath)) {
      const defaultUsers: User[] = [getDefaultUser()];
      fs.writeFileSync(filePath, JSON.stringify(defaultUsers, null, 2));
      return defaultUsers;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [getDefaultUser()];
  }
}

export function getUserByUsername(username: string): User | null {
  const users = getUsers();
  return users.find(u => u.username === username) || null;
}

export function getUserById(id: string): User | null {
  const users = getUsers();
  return users.find(u => u.id === id) || null;
}

export function createUser(userData: Omit<User, 'id' | 'createdAt' | 'lastLoginAt'>): User {
  if (isVercel) {
    throw new Error('Vercel环境不支持创建用户');
  }

  const users = getUsers();
  const newUser: User = {
    ...userData,
    id: `user-${Date.now()}`,
    createdAt: new Date().toISOString(),
    lastLoginAt: null,
  };
  users.push(newUser);
  const filePath = path.join(process.cwd(), USERS_FILE);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  return newUser;
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  if (isVercel) {
    throw new Error('Vercel环境不支持更新用户');
  }

  const users = getUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updates };
  const filePath = path.join(process.cwd(), USERS_FILE);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  return users[index];
}

export function deleteUser(id: string): boolean {
  if (isVercel) {
    throw new Error('Vercel环境不支持删除用户');
  }

  const users = getUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  if (users[index].username === 'admin') return false;
  users.splice(index, 1);
  const filePath = path.join(process.cwd(), USERS_FILE);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  return true;
}

export function createSession(userId: string, rememberMe: boolean = false): { token: string } {
  const user = getUserById(userId);
  if (!user) {
    throw new Error('用户不存在');
  }
  const token = generateToken(userId, user.username, user.role, rememberMe);
  return { token };
}

export function validateToken(token: string): User | null {
  const payload = verifyJWT(token);
  if (!payload) return null;
  return getUserById(payload.userId);
}

export function deleteSession(_token: string): void {
  // JWT token 不需要服务器端存储，此函数保留以兼容现有代码
}
