import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPageClient from './page-client';
import { JsonLd } from '@/components/seo/json-ld';
import { prisma } from '@/lib/prisma';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

type RouteParams = { params: Promise<{ id: string }> };

async function loadProduct(id: string) {
  try {
    return await prisma.product.findUnique({ where: { id } });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { id } = await params;
  const product = await loadProduct(id);
  if (!product) {
    return { title: 'Product Not Found', robots: { index: false, follow: false } };
  }

  // Extract clean base compound name (strip dosage parens)
  const baseName = product.name.replace(/\s*\(.*?\)\s*$/, '').trim();
  const title = `Buy ${baseName} ${product.dosage} Research Peptide — ${product.purity} Purity, EU Lab Tested`;
  const description = `Order ${baseName} ${product.dosage} research peptide online in Europe. ${product.purity} purity, independently HPLC + MS tested, lyophilized vial, €${product.price.toFixed(
    2,
  )}. Discreet tracked EU shipping within 24 h. COA available on request. For laboratory research use only.`;

  return {
    title,
    description,
    alternates: { canonical: `/shop/${product.id}` },
    openGraph: {
      title,
      description,
      url: `/shop/${product.id}`,
      type: 'website',
      images: [{ url: product.image, width: 600, height: 600, alt: `${product.name} ${product.dosage} research peptide vial — ${product.purity} purity · EuroPeptide Pro` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function Page({ params }: RouteParams) {
  const { id } = await params;
  const product = await loadProduct(id);
  if (!product) notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/shop/${product.id}`,
    name: product.name,
    description: product.description ?? `${product.name} research peptide, ${product.purity} purity.`,
    image: product.image,
    sku: product.id,
    category: product.category,
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/shop/${product.id}`,
      priceCurrency: 'EUR',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Purity', value: product.purity },
      { '@type': 'PropertyValue', name: 'Dosage', value: product.dosage },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE_URL}/shop/${product.id}` },
    ],
  };

  return (
    <>
      <JsonLd data={[productJsonLd, breadcrumbJsonLd]} />
      <ProductPageClient id={product.id} />
    </>
  );
}
