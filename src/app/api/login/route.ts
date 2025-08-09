import { NextRequest, NextResponse } from 'next/server';
import { createSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (username === 'admin' && password === 'password') {
    const token = createSession();
    return NextResponse.json({ token });
  }
  return new NextResponse('Unauthorized', { status: 401 });
}
