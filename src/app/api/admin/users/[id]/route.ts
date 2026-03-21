import { NextRequest, NextResponse } from 'next/server';
import { validateToken, updateUser, deleteUser, getUserById } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user || user.role !== 'admin') {
    return NextResponse.json({ success: false, message: '无权限' }, { status: 403 });
  }

  const { id } = await context.params;
  const targetUser = getUserById(id);

  if (!targetUser) {
    return NextResponse.json({ success: false, message: '用户不存在' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: targetUser.id,
      username: targetUser.username,
      name: targetUser.name,
      role: targetUser.role,
      status: targetUser.status,
      createdAt: targetUser.createdAt,
      lastLoginAt: targetUser.lastLoginAt,
    },
  });
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user || user.role !== 'admin') {
    return NextResponse.json({ success: false, message: '无权限' }, { status: 403 });
  }

  try {
    const { id } = await context.params;
    const updates = await request.json();

    if (updates.password) {
      const crypto = await import('crypto');
      updates.password = crypto.createHash('sha256').update(updates.password).digest('hex');
    }

    const updatedUser = updateUser(id, updates);

    if (!updatedUser) {
      return NextResponse.json({ success: false, message: '用户不存在' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        name: updatedUser.name,
        role: updatedUser.role,
        status: updatedUser.status,
      },
    });
  } catch (error) {
    console.error('更新用户失败:', error);
    return NextResponse.json({ success: false, message: '更新失败' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user || user.role !== 'admin') {
    return NextResponse.json({ success: false, message: '无权限' }, { status: 403 });
  }

  const { id } = await context.params;
  const success = deleteUser(id);

  if (!success) {
    return NextResponse.json({ success: false, message: '无法删除该用户' }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
