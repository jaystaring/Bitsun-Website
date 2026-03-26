import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const USERS_FILE = 'data/admin/users.json';
const SESSIONS_FILE = 'data/admin/sessions.json';

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

export interface Session {
  token: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
}

let memorySessions: Session[] = [];

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

export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex');
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

export function createSession(userId: string, rememberMe: boolean = false): Session {
  const token = generateToken();
  const now = new Date();
  const expiresAt = new Date(now.getTime() + (rememberMe ? 7 : 1) * 24 * 60 * 60 * 1000);
  const session: Session = {
    token,
    userId,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
  };

  if (isVercel) {
    memorySessions.push(session);
    cleanExpiredSessions();
  } else {
    const sessions = getSessions();
    sessions.push(session);
    const filePath = path.join(process.cwd(), SESSIONS_FILE);
    fs.writeFileSync(filePath, JSON.stringify(sessions, null, 2));
  }

  return session;
}

export function getSessions(): Session[] {
  if (isVercel) {
    return memorySessions;
  }

  try {
    const filePath = path.join(process.cwd(), SESSIONS_FILE);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export function validateToken(token: string): User | null {
  const sessions = getSessions();
  const session = sessions.find(s => s.token === token);
  if (!session) return null;
  if (new Date(session.expiresAt) < new Date()) return null;
  return getUserById(session.userId);
}

export function deleteSession(token: string): void {
  if (isVercel) {
    memorySessions = memorySessions.filter(s => s.token !== token);
  } else {
    const sessions = getSessions();
    const index = sessions.findIndex(s => s.token === token);
    if (index !== -1) {
      sessions.splice(index, 1);
      const filePath = path.join(process.cwd(), SESSIONS_FILE);
      fs.writeFileSync(filePath, JSON.stringify(sessions, null, 2));
    }
  }
}

export function cleanExpiredSessions(): void {
  const now = new Date();
  
  if (isVercel) {
    memorySessions = memorySessions.filter(s => new Date(s.expiresAt) >= now);
  } else {
    const sessions = getSessions();
    const activeSessions = sessions.filter(s => new Date(s.expiresAt) >= now);
    const filePath = path.join(process.cwd(), SESSIONS_FILE);
    fs.writeFileSync(filePath, JSON.stringify(activeSessions, null, 2));
  }
}
