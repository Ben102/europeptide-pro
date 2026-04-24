'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Truck, FlaskConical, Award, ArrowRight, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useCartStore } from '@/lib/store/cartStore';
import { CATEGORIES as CATEGORY_META } from '@/lib/categories';

export type HomeProduct = {
  id: string;
  name: string;
  dosage: string;
  price: number;
  image: string;
  category: string;
  purity: string;
};

// Single source of truth via lib/categories.ts — each card links to the
// dedicated /shop/category/<slug> landing page (not a filter query string).
const FEATURED_CATEGORIES = (['muscle-growth', 'weight-loss', 'healing-recovery', 'anti-aging'] as const)
  .map((slug) => {
    const meta = CATEGORY_META.find((c) => c.slug === slug)!;
    return { name: meta.name, slug: meta.slug, image: meta.heroImage };
  });

export default function Home({ bestSellers }: { bestSellers: HomeProduct[] }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (product: HomeProduct) => {
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      dosage: product.dosage,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero.svg"
            alt="EuroPeptide Pro European research peptide laboratory — molecular chain pattern"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-white hover:bg-accent/90 mb-6 text-sm px-3 py-1">
              European Pharmacopoeia Compliant
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              99%+ Purity Research Peptides
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Elevate your research with premium, third-party tested peptides.
              Shipped securely from within the EU with full COA transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/shop" className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 text-lg bg-accent hover:bg-accent/90 text-white">
                Shop Peptides
              </Link>
              <Link href="/coa" className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 text-lg border border-white text-white hover:bg-white/10">
                View COA Vault
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust bar */}
      <section className="bg-slate-100 border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <FlaskConical className="w-8 h-8 text-primary" />
              <span className="font-semibold text-sm">3rd Party Tested</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-semibold text-sm">99%+ Purity</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Truck className="w-8 h-8 text-primary" />
              <span className="font-semibold text-sm">Fast EU Shipping</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="font-semibold text-sm">Secure Payments</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">Shop by Category</h2>
              <p className="text-slate-500">Find the specific research peptides for your protocol.</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center text-primary font-medium hover:text-accent transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((category) => (
              <Link key={category.slug} href={`/shop/category/${category.slug}`} className="group">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={`${category.name} research peptides category — EuroPeptide Pro`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Best sellers */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Best Selling Peptides</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our most popular research compounds, rigorously tested and verified for purity.</p>
          </div>

          {bestSellers.length === 0 ? (
            <p className="text-center text-slate-400">Catalog loading. <Link href="/shop" className="text-primary underline">Browse the full shop →</Link></p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <Card key={product.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  <Link href={`/shop/${product.id}`} className="relative h-64 w-full bg-white p-6 flex items-center justify-center">
                    <Badge className="absolute top-4 left-4 bg-slate-900 z-10">{product.category}</Badge>
                    <Badge variant="outline" className="absolute top-4 right-4 text-green-600 border-green-600 bg-green-50 z-10">In Stock</Badge>
                    <Image
                      src={product.image}
                      alt={`${product.name} ${product.dosage} research peptide vial — ${product.purity} purity`}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                  </Link>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link href={`/shop/${product.id}`}>
                          <h3 className="font-bold text-lg text-slate-900 hover:text-primary transition-colors">{product.name}</h3>
                        </Link>
                        <p className="text-sm text-slate-500">{product.dosage} Vial · {product.purity}</p>
                      </div>
                      <span className="font-bold text-lg text-primary">€{product.price.toFixed(2)}</span>
                    </div>
                    <div className="mt-auto pt-4">
                      <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. Why choose us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">The EuroPeptide Pro Difference</h2>
              <p className="text-lg text-slate-600 mb-8">
                We set the standard for peptide quality in Europe. Our commitment to transparency, rigorous testing, and customer service makes us the trusted choice for researchers across the continent.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900">Independent Lab Testing</h3>
                    <p className="mt-2 text-slate-600">Every batch undergoes HPLC and MS testing by independent European laboratories to verify identity and purity.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900">Full COA Transparency</h3>
                    <p className="mt-2 text-slate-600">We don&apos;t just claim purity; we prove it. Access our COA Vault to download the exact lab report for your specific batch.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Truck className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-900">EU-Based Operations</h3>
                    <p className="mt-2 text-slate-600">No customs delays or hidden import fees. We ship directly from our EU facilities with discreet, temperature-controlled packaging.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lab-portrait.svg"
                alt="EuroPeptide Pro European laboratory — HPLC and mass spectrometry testing of research peptide vials"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg font-medium mb-4">&quot;The purity of their BPC-157 is unmatched. The provided COAs give our lab the confidence we need for our in-vitro studies. Fast shipping to Germany is a huge plus.&quot;</p>
                  <p className="font-bold">— Dr. H. Weber, Munich Research Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
