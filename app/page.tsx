import type { Metadata } from 'next';
import HomeClient, { type HomeProduct } from './page-client';
import { prisma } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'EuroPeptide Pro — Premium European Research Peptides',
  description:
    'Shop 100+ premium research peptides at ≥98% purity. Independently lab-tested, discreet tracked EU shipping within 24 hours, COA available on every batch.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'EuroPeptide Pro — Premium European Research Peptides',
    description:
      '100+ research peptides · ≥98% purity · third-party lab tested · discreet EU shipping within 24 h.',
    url: '/',
    type: 'website',
  },
};

export const revalidate = 300; // refresh best-sellers every 5 minutes

async function loadBestSellers(): Promise<HomeProduct[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: { in: ['BPC-157 (5mg)', 'TB-500 (5mg)', 'Semaglutide (5mg)', 'CJC-1295 DAC (2mg)'] },
      },
      select: { id: true, name: true, dosage: true, price: true, image: true, category: true, purity: true },
      take: 4,
    });
    // Fallback: if DB not seeded yet, return top 4 by newest
    if (products.length === 0) {
      return await prisma.product.findMany({
        select: { id: true, name: true, dosage: true, price: true, image: true, category: true, purity: true },
        orderBy: { createdAt: 'desc' },
        take: 4,
      });
    }
    return products;
  } catch (e) {
    console.error('home: failed to load best sellers', e);
    return [];
  }
}

export default async function Page() {
  const bestSellers = await loadBestSellers();
  return <HomeClient bestSellers={bestSellers} />;
}
