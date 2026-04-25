import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { productImage } from '@/lib/products-catalog';

const PAGE_SIZE = 24;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));
    const category = searchParams.get('category') ?? undefined;
    const search = searchParams.get('search') ?? undefined;
    const sort = searchParams.get('sort') ?? 'featured';

    const where = {
      ...(category ? { category } : {}),
      ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}),
    };

    const orderBy =
      sort === 'price-low' ? { price: 'asc' as const }
      : sort === 'price-high' ? { price: 'desc' as const }
      : sort === 'newest' ? { createdAt: 'desc' as const }
      : { name: 'asc' as const };

    const [total, products] = await Promise.all([
      prisma.product.count({ where }),
      prisma.product.findMany({
        where,
        orderBy,
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
    ]);

    return NextResponse.json({
      products,
      meta: { total, page, pageSize: PAGE_SIZE, totalPages: Math.ceil(total / PAGE_SIZE) },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const product = await prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        dosage: data.dosage,
        price: parseFloat(data.price),
        image: data.image || productImage(data.name),
        purity: data.purity,
        description: data.description,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
