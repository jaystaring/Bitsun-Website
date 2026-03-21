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

    return NextResponse.json({ success: true, demos });
  } catch (error) {
    console.error('获取预约演示数据失败:', error);
    return NextResponse.json({ success: false, message: '获取失败' }, { status: 500 });
  }
}
