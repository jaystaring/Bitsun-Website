import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  company: string;
  position?: string;
  phone: string;
  email: string;
  solutions: string[];
  message?: string;
  source: string;
  createdAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    const submissionsDir = path.join(process.cwd(), 'data', 'contact-submissions');
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `contact-${timestamp}.json`;
    const filePath = path.join(submissionsDir, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    const indexPath = path.join(submissionsDir, 'index.json');
    let index: Array<{ fileName: string; name: string; company: string; email: string; createdAt: string }> = [];
    
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf-8');
      index = JSON.parse(content);
    }
    
    index.push({
      fileName,
      name: data.name,
      company: data.company,
      email: data.email,
      createdAt: data.createdAt,
    });
    
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
    
    return NextResponse.json({ success: true, message: '提交成功', fileName });
  } catch (error) {
    console.error('保存联系表单数据失败:', error);
    return NextResponse.json({ success: false, message: '提交失败' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const submissionsDir = path.join(process.cwd(), 'data', 'contact-submissions');
    const indexPath = path.join(submissionsDir, 'index.json');
    
    if (!fs.existsSync(indexPath)) {
      return NextResponse.json([]);
    }
    
    const content = fs.readFileSync(indexPath, 'utf-8');
    const index = JSON.parse(content);
    
    return NextResponse.json(index);
  } catch (error) {
    console.error('读取联系表单数据失败:', error);
    return NextResponse.json([], { status: 500 });
  }
}
