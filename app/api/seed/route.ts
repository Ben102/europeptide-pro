import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CATALOG, productImage } from '@/lib/products-catalog';

export async function GET() {
  try {
    let created = 0;
    let updated = 0;
    const seen = new Set<string>();

    for (const p of CATALOG) {
      if (seen.has(p.name)) continue;
      seen.add(p.name);

      const existing = await prisma.product.findFirst({ where: { name: p.name } });
      const data = { ...p, image: productImage(p.name) };

      if (existing) {
        await prisma.product.update({ where: { id: existing.id }, data });
        updated++;
      } else {
        await prisma.product.create({ data });
        created++;
      }
    }

    return NextResponse.json({
      message: 'Seeding successful',
      created,
      updated,
      total: seen.size,
    });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json({ error: 'Failed to seed database', detail: String(error) }, { status: 500 });
  }
}
