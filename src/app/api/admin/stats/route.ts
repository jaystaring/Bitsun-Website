import { NextRequest, NextResponse } from 'next/server';
import { validateToken } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

const DEMOS_DIR = 'data/contact-submissions';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, message: '未登录' }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user) {
    return NextResponse.json({ success: false, message: '登录已过期' }, { status: 401 });
  }

  try {
    const indexPath = path.join(process.cwd(), DEMOS_DIR, 'index.json');
    let demos: any[] = [];

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      demos = JSON.parse(content);
    }

    const totalDemos = demos.length;
    const pendingDemos = demos.filter(d => d.status === 'pending' || !d.status).length;
    const contactedDemos = demos.filter(d => d.status === 'contacted').length;
    const convertedDemos = demos.filter(d => d.status === 'converted').length;

    const recentDemos = demos
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
      .map(d => ({
        name: d.name,
        company: d.company,
        createdAt: d.createdAt,
        status: d.status || 'pending',
      }));

    return NextResponse.json({
      success: true,
      totalDemos,
      pendingDemos,
      contactedDemos,
      convertedDemos,
      totalUsers: 1,
      recentDemos,
    });
  } catch (error) {
    console.error('获取统计数据失败:', error);
    return NextResponse.json({
      success: true,
      totalDemos: 0,
      pendingDemos: 0,
      contactedDemos: 0,
      convertedDemos: 0,
      totalUsers: 1,
      recentDemos: [],
    });
  }
}
