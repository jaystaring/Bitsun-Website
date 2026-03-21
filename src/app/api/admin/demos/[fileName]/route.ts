import { NextRequest, NextResponse } from 'next/server';
import { validateToken } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

const DEMOS_DIR = 'data/contact-submissions';

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ fileName: string }> }
) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ success: false, message: '未登录' }, { status: 401 });
  }

  const user = validateToken(token);

  if (!user) {
    return NextResponse.json({ success: false, message: '登录已过期' }, { status: 401 });
  }

  try {
    const { fileName } = await context.params;
    const { status } = await request.json();

    if (!['pending', 'contacted', 'converted'].includes(status)) {
      return NextResponse.json({ success: false, message: '无效的状态' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), DEMOS_DIR, fileName);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: false, message: '记录不存在' }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    data.status = status;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    const indexPath = path.join(process.cwd(), DEMOS_DIR, 'index.json');
    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, 'utf-8');
      const index = JSON.parse(indexContent);
      const idx = index.findIndex((d: any) => d.fileName === fileName);
      if (idx !== -1) {
        index[idx].status = status;
        fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('更新状态失败:', error);
    return NextResponse.json({ success: false, message: '更新失败' }, { status: 500 });
  }
}
