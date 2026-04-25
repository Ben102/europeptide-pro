import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { JsonLd } from '@/components/seo/json-ld';
import { prisma } from '@/lib/prisma';
import { CATEGORIES, categoryBySlug } from '@/lib/categories';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const revalidate = 600;

type RouteParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const cat = categoryBySlug(slug);
  if (!cat) return { title: 'Category Not Found', robots: { index: false, follow: false } };

  return {
    title: cat.title,
    description: cat.description,
    keywords: cat.focusKeywords,
    alternates: { canonical: `/shop/category/${cat.slug}` },
    openGraph: {
      title: cat.title,
      description: cat.description,
      url: `/shop/category/${cat.slug}`,
      type: 'website',
      images: [{ url: cat.heroImage, alt: `${cat.name} research peptides category — ${SITE_NAME}` }],
    },
  };
}

export default async function CategoryPage({ params }: RouteParams) {
  const { slug } = await params;
  const cat = categoryBySlug(slug);
  if (!cat) notFound();

  let products: Awaited<ReturnType<typeof prisma.product.findMany>> = [];
  try {
    products = await prisma.product.findMany({ where: { category: cat.name }, orderBy: { price: 'asc' } });
  } catch (e) {
    console.error('category: failed to load products', e);
  }

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/shop/category/${cat.slug}`,
    url: `${SITE_URL}/shop/category/${cat.slug}`,
    name: cat.title,
    description: cat.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.slice(0, 20).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/shop/${p.id}`,
        name: p.name,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: cat.name, item: `${SITE_URL}/shop/category/${cat.slug}` },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />

      <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src={cat.heroImage} alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <Breadcrumb
            items={[{ label: 'Shop', href: '/shop' }, { label: cat.name }]}
            className="mb-4"
          />
          <Badge className="bg-accent text-white mb-4">Research Category</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{cat.name} Research Peptides</h1>
          <p className="text-lg text-slate-300 max-w-2xl">{cat.description}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4 text-slate-900">About This Category</h2>
              <div className="prose prose-sm prose-slate max-w-none space-y-3">
                {cat.intro.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-sm mb-2 text-slate-900">Other Categories</h3>
                <ul className="space-y-1">
                  {CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
                    <li key={c.slug}>
                      <Link href={`/shop/category/${c.slug}`} className="text-sm text-primary hover:text-accent transition-colors">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="mb-4 text-sm text-slate-500">{products.length} research peptides in this category</div>
            {products.length === 0 ? (
              <p className="text-slate-400">Catalog loading or empty. <Link href="/shop" className="text-primary underline">Browse all products</Link>.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((p) => (
                  <Link key={p.id} href={`/shop/${p.id}`}>
                    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 border-slate-200 group">
                      <div className="relative h-52 w-full bg-white p-6 flex items-center justify-center border-b border-slate-100">
                        <Badge className="absolute top-4 left-4 bg-slate-100 text-slate-600 border-0">{p.category}</Badge>
                        <Image
                          src={p.image}
                          alt={`${p.name} ${p.dosage} research peptide vial — ${p.purity} purity`}
                          fill
                          className="object-contain p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          unoptimized
                        />
                      </div>
                      <CardContent className="p-5 flex-1 flex flex-col bg-white">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{p.name}</h3>
                          <span className="font-bold text-primary">€{p.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm text-slate-500">{p.dosage} Vial</p>
                          <span className="text-xs font-medium text-accent flex items-center">
                            <ShieldCheck className="w-3 h-3 mr-1" /> {p.purity}
                          </span>
                        </div>
                        <Button className="mt-auto w-full bg-primary hover:bg-primary/90 group-hover:bg-accent transition-colors">View Details</Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
