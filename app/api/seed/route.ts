import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const PRODUCTS = [
  { name: 'BPC-157', dosage: '5mg', price: 34.99, image: 'https://picsum.photos/seed/bpc157/400/400', category: 'Healing & Recovery', purity: '99.4%', description: 'Known for accelerated healing.' },
  { name: 'TB-500', dosage: '5mg', price: 39.99, image: 'https://picsum.photos/seed/tb500/400/400', category: 'Healing & Recovery', purity: '99.2%', description: 'Supports injury recovery.' },
  { name: 'Semaglutide', dosage: '5mg', price: 89.99, image: 'https://picsum.photos/seed/sema/400/400', category: 'Weight Loss', purity: '99.8%', description: 'Effective metabolic regulator.' },
  { name: 'CJC-1295 DAC', dosage: '2mg', price: 29.99, image: 'https://picsum.photos/seed/cjc/400/400', category: 'Muscle Growth', purity: '99.1%', description: 'Long-lasting secretagogue.' },
  { name: 'Ipamorelin', dosage: '5mg', price: 32.99, image: 'https://picsum.photos/seed/ipa/400/400', category: 'Muscle Growth', purity: '99.5%', description: 'Gentle growth hormone stimulator.' },
  { name: 'Tirzepatide', dosage: '10mg', price: 119.99, image: 'https://picsum.photos/seed/tirz/400/400', category: 'Weight Loss', purity: '99.7%', description: 'Dual agonist for comprehensive weight management.' },
  { name: 'Epitalon', dosage: '10mg', price: 45.99, image: 'https://picsum.photos/seed/epi/400/400', category: 'Anti-Aging', purity: '99.3%', description: 'Telomerase activator for cellular rejuvenation.' },
];

export async function GET() {
  try {
    for (const product of PRODUCTS) {
      const existing = await prisma.product.findFirst({ where: { name: product.name } });
      if (!existing) {
        await prisma.product.create({ data: product });
      }
    }
    return NextResponse.json({ message: 'Seeding successful' });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
