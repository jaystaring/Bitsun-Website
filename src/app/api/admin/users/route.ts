import { NextRequest, NextResponse } from 'next/server';
import { validateToken, getUsers, createUser, hashPassword } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, message: '未登录' }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user) {
    return NextResponse.json({ success: false, message: '登录已过期' }, { status: 401 });
  }

  if (user.role !== 'admin') {
    return NextResponse.json({ success: false, message: '无权限' }, { status: 403 });
  }

  const users = getUsers().map(u => ({
    id: u.id,
    username: u.username,
    name: u.name,
    role: u.role,
    status: u.status,
    createdAt: u.createdAt,
    lastLoginAt: u.lastLoginAt,
  }));

  return NextResponse.json({ success: true, users });
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, message: '未登录' }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user || user.role !== 'admin') {
    return NextResponse.json({ success: false, message: '无权限' }, { status: 403 });
  }

  try {
    const { username, password, name, role, status } = await request.json();

    if (!username || !password || !name) {
      return NextResponse.json({ success: false, message: '缺少必填字段' }, { status: 400 });
    }

    const newUser = createUser({
      username,
      password: hashPassword(password),
      name,
      role: role || 'user',
      status: status || 'active',
    });

    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        username: newUser.username,
        name: newUser.name,
        role: newUser.role,
        status: newUser.status,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error('创建用户失败:', error);
    return NextResponse.json({ success: false, message: '创建失败' }, { status: 500 });
  }
}
