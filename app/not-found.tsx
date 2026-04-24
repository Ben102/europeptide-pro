import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ShoppingBag, BookOpen, Search } from 'lucide-react';
import { CATEGORIES } from '@/lib/categories';

export const metadata: Metadata = {
  title: 'Page Not Found (404)',
  description: 'The page you were looking for could not be found. Browse our research peptide catalog, blog, or contact us for help.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[70vh] py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          The page you were looking for doesn&apos;t exist or has moved. Try one of the links below, or jump to the full research peptide catalog.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Link href="/">
            <Button variant="outline" className="bg-white"><Home className="w-4 h-4 mr-2" />Home</Button>
          </Link>
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90"><ShoppingBag className="w-4 h-4 mr-2" />Shop Peptides</Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="bg-white"><BookOpen className="w-4 h-4 mr-2" />Research Blog</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="bg-white"><Search className="w-4 h-4 mr-2" />Contact Us</Button>
          </Link>
        </div>

        <section className="bg-white rounded-2xl border border-slate-200 p-8 text-left">
          <h2 className="text-xl font-bold text-slate-900 mb-4 text-center">Browse by Research Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/shop/category/${c.slug}`}
                className="p-3 rounded-lg bg-slate-50 hover:bg-primary/10 border border-slate-100 hover:border-primary transition-colors text-sm font-medium text-slate-700 hover:text-primary"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
