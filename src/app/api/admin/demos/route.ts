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
    const demosDir = path.join(process.cwd(), DEMOS_DIR);
    const demos: any[] = [];

    if (fs.existsSync(demosDir)) {
      const files = fs.readdirSync(demosDir).filter(f => f.startsWith('contact-') && f.endsWith('.json'));
      
      for (const file of files) {
        const filePath = path.join(demosDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);
        demos.push({
          fileName: file,
          ...data,
        });
      }

      demos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return NextResponse.json({ success: true, demos });
  } catch (error) {
    console.error('获取预约演示数据失败:', error);
    return NextResponse.json({ success: false, message: '获取失败' }, { status: 500 });
  }
}
