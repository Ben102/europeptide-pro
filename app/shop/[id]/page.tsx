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

  const title = `${product.name} — Buy Research Peptide | ${SITE_NAME}`;
  const description = `${product.name} at ${product.purity} purity · ${product.dosage} vial · €${product.price.toFixed(
    2,
  )}. Third-party lab tested, discreet EU shipping within 24 h. For research use only.`;

  return {
    title,
    description,
    alternates: { canonical: `/shop/${product.id}` },
    openGraph: {
      title,
      description,
      url: `/shop/${product.id}`,
      type: 'website',
      images: [{ url: product.image, width: 600, height: 600, alt: `${product.name} research peptide vial` }],
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
