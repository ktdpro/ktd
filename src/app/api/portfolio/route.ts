import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

const dataFile = path.join(process.cwd(), 'data', 'portfolio.json');

function getToken(req: NextRequest): string | null {
  const auth = req.headers.get('authorization');
  return auth?.split(' ')[1] ?? null;
}

export async function GET(req: NextRequest) {
  const token = getToken(req);
  if (!verifySession(token)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const json = await fs.readFile(dataFile, 'utf-8');
  const items = JSON.parse(json);
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const token = getToken(req);
  if (!verifySession(token)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const { title, description } = await req.json();
  const json = await fs.readFile(dataFile, 'utf-8');
  const items = JSON.parse(json);
  const newItem = { id: randomUUID(), title, description };
  items.push(newItem);
  await fs.writeFile(dataFile, JSON.stringify(items, null, 2));
  return NextResponse.json(newItem, { status: 201 });
}
