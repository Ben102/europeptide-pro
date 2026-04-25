import type { Metadata } from 'next';
import ShopPageClient from './page-client';
import { JsonLd } from '@/components/seo/json-ld';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

type SearchParams = Promise<{ page?: string }>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const { page } = await searchParams;
  const pageNum = Math.max(1, parseInt(page ?? '1', 10));
  const isPaginated = pageNum > 1;

  return {
    title: isPaginated ? `Shop Research Peptides — Page ${pageNum}` : 'Shop Research Peptides',
    description:
      'Browse our full catalog of 100+ research peptides — GLP-1s, GH secretagogues, BPC-157, TB-500, and more. ≥99% purity, third-party tested, discreet EU shipping.',
    robots: isPaginated ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: isPaginated ? `/shop?page=${pageNum}` : '/shop',
      ...(pageNum > 1 ? { prev: pageNum === 2 ? '/shop' : `/shop?page=${pageNum - 1}` } : {}),
    },
    openGraph: {
      title: 'Shop Research Peptides — EuroPeptide Pro',
      description: '100+ research peptides · ≥99% purity · EU lab-tested · discreet shipping.',
      url: '/shop',
      type: 'website',
    },
  };
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop` },
  ],
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `Research Peptide Catalog — ${SITE_NAME}`,
  url: `${SITE_URL}/shop`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
};

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { page } = await searchParams;
  const pageNum = Math.max(1, parseInt(page ?? '1', 10));

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, collectionJsonLd]} />
      <ShopPageClient initialPage={pageNum} />
    </>
  );
}
