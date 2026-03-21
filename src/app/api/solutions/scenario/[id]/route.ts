import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const filePath = path.join(process.cwd(), 'content/i18n/zh-CN/pages/solutions/scenario', `${id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: '场景解决方案不存在' }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);

    return NextResponse.json(data);
  } catch (error) {
    console.error('读取场景解决方案数据失败:', error);
    return NextResponse.json({ error: '读取数据失败' }, { status: 500 });
  }
}
