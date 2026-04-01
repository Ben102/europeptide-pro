import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
