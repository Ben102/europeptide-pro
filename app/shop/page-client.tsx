'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCartStore } from '@/lib/store/cartStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface Product {
  id: string;
  name: string;
  dosage: string;
  price: number;
  image: string;
  category: string;
  purity: string;
}

interface Meta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

const CATEGORY_OPTIONS = [
  'All Peptides',
  'Muscle Growth',
  'Weight Loss',
  'Healing & Recovery',
  'Anti-Aging',
  'Cognitive Enhancement',
  'Immune Support',
  'Tanning',
  'Accessories',
];

export default function ShopPage({ initialPage = 1 }: { initialPage?: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<Meta>({ total: 0, page: initialPage, pageSize: 24, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Peptides');
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(initialPage);

  const addItem = useCartStore((state) => state.addItem);

  const buildUrl = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newPage > 1) params.set('page', String(newPage));
      else params.delete('page');
      const qs = params.toString();
      return `${pathname}${qs ? `?${qs}` : ''}`;
    },
    [pathname, searchParams],
  );

  const fetchProducts = useCallback(
    async (pg: number) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set('page', String(pg));
        if (activeCategory !== 'All Peptides') params.set('category', activeCategory);
        if (search.trim()) params.set('search', search.trim());
        params.set('sort', sort);

        const res = await fetch(`/api/products?${params.toString()}`);
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        setProducts(data.products ?? []);
        setMeta(data.meta ?? { total: 0, page: pg, pageSize: 24, totalPages: 1 });
      } catch {
        toast.error('Failed to load products.');
      } finally {
        setLoading(false);
      }
    },
    [activeCategory, search, sort],
  );

  useEffect(() => {
    fetchProducts(page);
  }, [page, activeCategory, sort, fetchProducts]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchProducts(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  const goToPage = (pg: number) => {
    setPage(pg);
    router.push(buildUrl(pg), { scroll: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      dosage: product.dosage,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleClear = () => {
    setActiveCategory('All Peptides');
    setSearch('');
    setSort('featured');
    setPage(1);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Shop Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Shop', href: '/shop' }]} className="mb-4" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">Research Peptides — Complete EU Lab-Tested Catalog</h1>
          <p className="text-slate-300 max-w-2xl">
            Browse 100+ research peptides: GLP-1s, GH secretagogues, BPC-157, TB-500, and more. ≥99% purity, third-party EU lab-tested, discreet shipping across Europe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-primary" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm" className="text-xs text-slate-500 h-auto p-0" onClick={handleClear}>
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search peptides..."
                    className="pl-9 bg-slate-50"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-slate-900">Categories</h3>
                <div className="space-y-2">
                  {CATEGORY_OPTIONS.map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4"
                        checked={activeCategory === category}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span
                        className={`text-sm ${activeCategory === category ? 'font-medium text-primary' : 'text-slate-600 group-hover:text-slate-900'}`}
                      >
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Browse by category links */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Category Pages</p>
                <div className="space-y-1">
                  {CATEGORY_OPTIONS.filter((c) => c !== 'All Peptides').map((cat) => (
                    <Link
                      key={cat}
                      href={`/shop/category/${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                      className="block text-sm text-slate-500 hover:text-primary transition-colors py-0.5"
                    >
                      {cat} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                Showing{' '}
                <span className="font-medium text-slate-900">
                  {meta.total === 0 ? 0 : (meta.page - 1) * meta.pageSize + 1}–
                  {Math.min(meta.page * meta.pageSize, meta.total)}
                </span>{' '}
                of <span className="font-medium text-slate-900">{meta.total}</span> products
              </p>

              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                  <Select value={sort} onValueChange={(v) => { if (v) { setSort(v); setPage(1); } }}>
                    <SelectTrigger className="w-full sm:w-[180px] bg-slate-50">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon" className="hidden sm:flex bg-slate-50" disabled>
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 h-80 animate-pulse" />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-20">
                <p className="text-slate-400 mb-4">No products found.</p>
                {activeCategory !== 'All Peptides' || search ? (
                  <Button variant="outline" onClick={handleClear}>Clear Filters</Button>
                ) : (
                  <Button variant="outline" onClick={() => fetch('/api/seed').then(() => window.location.reload())}>
                    Seed Initial Products
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link href={`/shop/${product.id}`} key={product.id}>
                    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 border-slate-200 group">
                      <div className="relative h-64 w-full bg-white p-6 flex items-center justify-center border-b border-slate-100">
                        <Badge className="absolute top-4 left-4 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0">{product.category}</Badge>
                        <Badge variant="outline" className="absolute top-4 right-4 text-green-600 border-green-600 bg-green-50">In Stock</Badge>
                        <Image
                          src={product.image}
                          alt={`${product.name} ${product.dosage} research peptide vial — ${product.purity} purity`}
                          fill
                          className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <CardContent className="p-6 flex-1 flex flex-col bg-white">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{product.name}</h3>
                          <span className="font-bold text-lg text-primary">€{product.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm text-slate-500">{product.dosage} Vial</p>
                          <span className="text-xs font-medium text-accent flex items-center">
                            <ShieldCheck className="w-3 h-3 mr-1" /> {product.purity} Purity
                          </span>
                        </div>
                        <div className="mt-auto pt-4">
                          <Button
                            className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent transition-colors"
                            onClick={(e) => handleAddToCart(e, product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {meta.totalPages > 1 && (
              <nav aria-label="Product pagination" className="mt-12 flex justify-center">
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={meta.page <= 1}
                    onClick={() => goToPage(meta.page - 1)}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {Array.from({ length: meta.totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === meta.totalPages || Math.abs(p - meta.page) <= 1)
                    .reduce<(number | 'ellipsis')[]>((acc, p, idx, arr) => {
                      if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push('ellipsis');
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      item === 'ellipsis' ? (
                        <span key={`e${idx}`} className="px-2 text-slate-400">…</span>
                      ) : (
                        <Button
                          key={item}
                          variant={item === meta.page ? 'default' : 'outline'}
                          className={item === meta.page ? 'bg-primary text-white' : ''}
                          size="icon"
                          onClick={() => goToPage(item as number)}
                          aria-label={`Page ${item}`}
                          aria-current={item === meta.page ? 'page' : undefined}
                        >
                          {item}
                        </Button>
                      ),
                    )}

                  <Button
                    variant="outline"
                    size="icon"
                    disabled={meta.page >= meta.totalPages}
                    onClick={() => goToPage(meta.page + 1)}
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
