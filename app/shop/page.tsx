'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, SlidersHorizontal, ChevronDown, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

// Types
interface Product {
  id: string;
  name: string;
  dosage: string;
  price: number;
  image: string;
  category: string;
  purity: string;
}

const CATEGORIES = [
  'All Peptides',
  'Muscle Growth',
  'Weight Loss',
  'Healing & Recovery',
  'Anti-Aging',
  'Cognitive Enhancement',
  'Immune Support',
  'Tanning',
  'Accessories'
];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation
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

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Shop Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Research Peptides</h1>
          <p className="text-slate-300 max-w-2xl">
            Browse our complete catalog of 99%+ purity research peptides. All products are independently tested by European laboratories.
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
                <Button variant="ghost" size="sm" className="text-xs text-slate-500 h-auto p-0">Clear All</Button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Search peptides..." className="pl-9 bg-slate-50" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-slate-900">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((category, i) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4"
                        defaultChecked={i === 0}
                      />
                      <span className={`text-sm ${i === 0 ? 'font-medium text-primary' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-4 text-slate-900">Price Range</h3>
                <div className="flex items-center space-x-2">
                  <Input type="number" placeholder="Min" className="w-full bg-slate-50" />
                  <span className="text-slate-400">-</span>
                  <Input type="number" placeholder="Max" className="w-full bg-slate-50" />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-900">{products.length}</span> products</p>
              
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-full sm:w-[180px] bg-slate-50">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="best-selling">Best Selling</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest Arrivals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon" className="hidden sm:flex bg-slate-50">
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <span className="text-slate-400">Loading products...</span>
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-20">
                <p className="text-slate-400 mb-4">No products found.</p>
                <Button variant="outline" onClick={() => fetch('/api/seed').then(()=>window.location.reload())}>Seed Initial Products</Button>
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
                        alt={product.name} 
                        fill 
                        className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col bg-white">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">{product.name}</h3>
                        <span className="font-bold text-lg text-primary">€{product.price}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-slate-500">{product.dosage} Vial</p>
                        <span className="text-xs font-medium text-accent flex items-center">
                          <ShieldCheck className="w-3 h-3 mr-1" /> {product.purity} Purity
                        </span>
                      </div>
                      <div className="mt-auto pt-4">
                        <Button className="w-full bg-primary hover:bg-primary/90 group-hover:bg-accent transition-colors" onClick={(e) => handleAddToCart(e, product)}>Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default" className="bg-primary text-white">1</Button>
                <Button variant="outline" onClick={() => toast.info('Pagination feature coming soon!')}>2</Button>
                <Button variant="outline" onClick={() => toast.info('Pagination feature coming soon!')}>3</Button>
                <span className="text-slate-400 px-2">...</span>
                <Button variant="outline" onClick={() => toast.info('Pagination feature coming soon!')}>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
