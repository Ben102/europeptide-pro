import type { Metadata } from 'next';
import ShopPageClient from './page-client';
import { JsonLd } from '@/components/seo/json-ld';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Shop Research Peptides',
  description:
    'Browse our full catalog of 100+ research peptides — GLP-1s, GH secretagogues, BPC-157, TB-500, and more. ≥98% purity, third-party tested, discreet EU shipping.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop Research Peptides — EuroPeptide Pro',
    description: '100+ research peptides · ≥98% purity · EU lab-tested · discreet shipping.',
    url: '/shop',
    type: 'website',
  },
};

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

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, collectionJsonLd]} />
      <ShopPageClient />
    </>
  );
}
