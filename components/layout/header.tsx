'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from 'sonner';
import { useCartStore } from '@/lib/store/cartStore';

export function Header() {
  const cartItemsTotal = useCartStore((state) => state.getTotalItems());
  
  const handleFeatureNotAvailable = (feature: string) => {
    toast.info(`${feature} feature is coming soon!`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Top Bar - Trust Signals */}
      <div className="bg-primary text-primary-foreground py-1.5 text-xs font-medium">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +40 31 229 5555</span>
            <span className="hidden sm:flex items-center"><Mail className="w-3 h-3 mr-1" /> support@europeptide-pro.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block">✓ 99%+ Purity</span>
            <span className="hidden sm:inline-block">✓ EU Shipping</span>
            <div className="flex items-center space-x-2">
              <select className="bg-transparent border-none outline-none text-xs cursor-pointer">
                <option value="EUR" className="text-black">EUR (€)</option>
                <option value="RON" className="text-black">RON (lei)</option>
                <option value="GBP" className="text-black">GBP (£)</option>
              </select>
              <span className="opacity-50">|</span>
              <select className="bg-transparent border-none outline-none text-xs cursor-pointer">
                <option value="EN" className="text-black">EN</option>
                <option value="RO" className="text-black">RO</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            } />
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/shop" className="text-lg font-semibold">Shop Peptides</Link>
                <Link href="/coa" className="text-lg font-medium">COA / Quality</Link>
                <Link href="/calculator" className="text-lg font-medium">Peptide Calculator</Link>
                <Link href="/about" className="text-lg font-medium">About Us</Link>
                <Link href="/blog" className="text-lg font-medium">Blog</Link>
                <Link href="/faq" className="text-lg font-medium">FAQ</Link>
                <Link href="/contact" className="text-lg font-medium">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-primary">EuroPeptide<span className="text-accent">Pro</span></span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/shop" className="text-primary font-bold hover:text-accent transition-colors">Shop Peptides</Link>
          <Link href="/coa" className="hover:text-accent transition-colors">COA / Quality</Link>
          <Link href="/calculator" className="hover:text-accent transition-colors">Calculator</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={() => handleFeatureNotAvailable('Search')}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleFeatureNotAvailable('Account')}>
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsTotal > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 flex items-center justify-center rounded-full bg-accent text-[10px] text-white font-bold">
                  {cartItemsTotal}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
