'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Truck, FlaskConical, ArrowLeft, CheckCircle2, FileText, Download, Beaker, Microscope, ThermometerSnowflake, PackageCheck } from 'lucide-react';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useCartStore } from '@/lib/store/cartStore';
import { ResearchDisclaimer } from '@/components/legal/research-disclaimer';

interface Product {
  id: string;
  name: string;
  dosage: string;
  price: number;
  image: string;
  category: string;
  purity: string;
  description: string | null;
}

export default function ProductPageClient({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<'desc' | 'coa' | 'faq'>('desc');
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: Product | null) => {
        setProduct(data);
        if (data) {
          fetch(`/api/products`)
            .then((r) => r.json())
            .then((all: Product[]) => {
              if (Array.isArray(all)) {
                setRelated(
                  all
                    .filter((p) => p.category === data.category && p.id !== data.id)
                    .slice(0, 4)
                );
              }
            })
            .catch(() => {});
        }
      })
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <span className="text-slate-400">Loading product...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500">Product not found.</p>
        <Link href="/shop"><Button variant="outline">Back to Shop</Button></Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      dosage: product.dosage,
    });
    toast.success(`${quantity}× ${product.name} added to cart`);
  };

  const handleDownloadCOA = () => {
    toast.success(`COA request for ${product.name} submitted — we will email the PDF.`);
  };

  const batchCode = `${product.name.replace(/[^A-Z0-9]/gi, '').substring(0, 4).toUpperCase()}-2604`;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb bar */}
      <div className="bg-slate-900 py-3">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Shop', href: '/shop' },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto bg-slate-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
              <Badge className="absolute top-6 left-6 bg-slate-900 text-white hover:bg-slate-800">{product.category}</Badge>
              <Badge variant="outline" className="absolute top-6 right-6 text-green-600 border-green-600 bg-green-50">In Stock</Badge>
              <Image
                src={product.image}
                alt={`${product.name} ${product.dosage} research peptide vial — ${product.purity} purity, ${product.category} category`}
                fill
                className="object-contain p-12"
                referrerPolicy="no-referrer"
                unoptimized
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{product.name}</h1>
                  <span className="text-3xl font-bold text-primary">€{product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span className="flex items-center">
                    <FlaskConical className="w-4 h-4 mr-1 text-slate-400" />
                    {product.dosage} Vial
                  </span>
                  <span className="flex items-center text-accent font-medium">
                    <ShieldCheck className="w-4 h-4 mr-1" />
                    {product.purity} Purity
                  </span>
                  <span className="flex items-center">
                    <Microscope className="w-4 h-4 mr-1 text-slate-400" />
                    Batch-tested (HPLC & MS)
                  </span>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <Beaker className="w-4 h-4 mr-2 text-primary" /> Lyophilized Powder
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <ThermometerSnowflake className="w-4 h-4 mr-2 text-primary" /> Store at &minus;20 °C
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <PackageCheck className="w-4 h-4 mr-2 text-primary" /> Discreet EU Shipping
                </div>
                <div className="flex items-center text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <FileText className="w-4 h-4 mr-2 text-primary" /> COA on Request
                </div>
              </div>

              <ResearchDisclaimer className="mb-6" />

              <div className="mt-auto space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-12 w-32">
                    <button className="px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors" onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>-</button>
                    <div className="flex-1 text-center font-medium text-slate-900">{quantity}</div>
                    <button className="px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors" onClick={() => setQuantity((q) => q + 1)}>+</button>
                  </div>
                  <Button className="flex-1 h-12 text-lg bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                    In Stock · Ships within 24 h
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Truck className="w-4 h-4 mr-2 text-primary" />
                    Tracked EU Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200 overflow-x-auto">
            {([
              ['desc', 'Description & Research'],
              ['coa', 'Certificate of Analysis'],
              ['faq', 'FAQ & Storage'],
            ] as const).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-6 md:px-8 py-4 font-medium whitespace-nowrap transition-colors ${
                  tab === k ? 'text-primary border-b-2 border-primary bg-slate-50 font-semibold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {tab === 'desc' && (
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Research Applications</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {product.name} is supplied strictly for <em>in-vitro</em> and laboratory research. It is not intended for diagnostic, therapeutic, or clinical use. Common research directions include binding affinity, receptor-pathway activation, stability in biological matrices, and mechanistic effects in cell-based assays.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Product Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">Form</span><span className="font-medium text-slate-900">Lyophilized powder</span></div>
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">Vial size</span><span className="font-medium text-slate-900">{product.dosage}</span></div>
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">Purity</span><span className="font-medium text-slate-900">{product.purity}</span></div>
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">Category</span><span className="font-medium text-slate-900">{product.category}</span></div>
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">QC method</span><span className="font-medium text-slate-900">HPLC / MS</span></div>
                    <div className="flex justify-between border-b border-slate-100 py-2"><span className="text-slate-500">Origin</span><span className="font-medium text-slate-900">European lab</span></div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Why European Researchers Choose Us</h3>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
                    <li>Independently third-party tested — HPLC &amp; mass spectrometry on every batch.</li>
                    <li>≥ 98% purity guarantee, with COA available on request.</li>
                    <li>Discreet, tracked shipping across the EU with cold-chain packaging.</li>
                    <li>Dedicated research support — response within 24 h.</li>
                  </ul>
                </section>
              </div>
            )}

            {tab === 'coa' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Certificate of Analysis</h3>
                <p className="text-slate-600">Every batch is tested by an independent European lab for identity, purity, and residual solvents. Request the latest COA below — we will email the signed PDF within 24 h.</p>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Latest COA — {product.name}</h4>
                    <p className="text-sm text-slate-500">Batch: {batchCode} · Tested: April 2026 · Purity: {product.purity}</p>
                  </div>
                  <Button variant="outline" className="flex items-center" onClick={handleDownloadCOA}>
                    <FileText className="w-4 h-4 mr-2" />
                    <Download className="w-3 h-3 mr-1" /> Request PDF
                  </Button>
                </div>
              </div>
            )}

            {tab === 'faq' && (
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Storage Guidelines</h3>
                  <ul className="list-disc pl-5 text-slate-600 space-y-1.5">
                    <li>Store lyophilized vials at &minus;20 °C — stable for 24+ months.</li>
                    <li>Keep away from direct sunlight, heat, and moisture.</li>
                    <li>Once reconstituted with bacteriostatic water, refrigerate at 2–8 °C and use within 4 weeks.</li>
                    <li>Do not freeze reconstituted solutions — repeated freeze/thaw degrades peptides.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    <details className="group border border-slate-200 rounded-lg p-4">
                      <summary className="font-medium text-slate-900 cursor-pointer">How do I reconstitute this peptide?</summary>
                      <p className="mt-2 text-sm text-slate-600">Use bacteriostatic water. Typical ratio: 1 ml per 5 mg vial. Swirl gently — do not shake. See our <Link href="/calculator" className="text-primary underline">Peptide Calculator</Link> for precise protocols.</p>
                    </details>
                    <details className="group border border-slate-200 rounded-lg p-4">
                      <summary className="font-medium text-slate-900 cursor-pointer">Is shipping discreet?</summary>
                      <p className="mt-2 text-sm text-slate-600">All orders ship in plain, unbranded packaging via tracked EU courier. We never disclose product contents on external labels.</p>
                    </details>
                    <details className="group border border-slate-200 rounded-lg p-4">
                      <summary className="font-medium text-slate-900 cursor-pointer">Do you offer bulk research discounts?</summary>
                      <p className="mt-2 text-sm text-slate-600">Yes — institutions and research groups can request volume pricing via the <Link href="/contact" className="text-primary underline">contact page</Link>.</p>
                    </details>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Related Research Compounds</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/shop/${r.id}`} className="group">
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40 bg-slate-50">
                      <Image src={r.image} alt={`${r.name} ${r.dosage} research peptide — ${r.purity} purity`} fill className="object-contain p-4" referrerPolicy="no-referrer" unoptimized />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{r.name}</p>
                      <p className="text-xs text-slate-500 mb-2">{r.dosage} · {r.purity}</p>
                      <p className="font-bold text-primary">€{r.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
