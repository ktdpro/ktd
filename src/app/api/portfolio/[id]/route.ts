import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { promises as fs } from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json');

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
}

function getToken(req: NextRequest): string | null {
  const auth = req.headers.get('authorization');
  return auth?.split(' ')[1] ?? null;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = getToken(req);
  if (!verifySession(token)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const json = await fs.readFile(dataFile, 'utf-8');
  const items: PortfolioItem[] = JSON.parse(json);
  const index = items.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return new NextResponse('Not Found', { status: 404 });
  }
  items.splice(index, 1);
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2));
  return NextResponse.json({ success: true });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = getToken(req);
  if (!verifySession(token)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const { title, description } = await req.json();
  const json = await fs.readFile(dataFile, 'utf-8');
  const items: PortfolioItem[] = JSON.parse(json);
  const index = items.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return new NextResponse('Not Found', { status: 404 });
  }
  items[index] = { ...items[index], title, description };
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2));
  return NextResponse.json(items[index]);
}
