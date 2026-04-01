'use client';

import Link from 'next/link';
import { toast } from 'sonner';

export function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Successfully subscribed to the newsletter!');
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">EuroPeptide<span className="text-accent">Pro</span></h3>
          <p className="text-sm mb-4">
            Premium European Research Peptides. 99%+ Purity, 3rd Party Tested, EU-based shipping.
          </p>
          <div className="text-xs text-slate-500">
            <p>SC EuroPeptide Research SRL</p>
            <p>CUI: RO12345678</p>
            <p>Bucharest, Romania</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-accent transition-colors">All Peptides</Link></li>
            <li><Link href="/shop?category=muscle" className="hover:text-accent transition-colors">Muscle Growth</Link></li>
            <li><Link href="/shop?category=weight-loss" className="hover:text-accent transition-colors">Weight Loss</Link></li>
            <li><Link href="/shop?category=healing" className="hover:text-accent transition-colors">Healing & Recovery</Link></li>
            <li><Link href="/shop?category=anti-aging" className="hover:text-accent transition-colors">Anti-Aging</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quality & Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/coa" className="hover:text-accent transition-colors">COA Vault</Link></li>
            <li><Link href="/calculator" className="hover:text-accent transition-colors">Peptide Calculator</Link></li>
            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-accent transition-colors">Shipping & Delivery</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Get 10% off your first order and stay updated on new research.</p>
          <form className="flex" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              required
              placeholder="Your email address" 
              className="bg-slate-800 text-white px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button type="submit" className="bg-accent text-white px-4 py-2 rounded-r-md font-medium hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
        <p className="mb-2 font-semibold text-red-400">DISCLAIMER: FOR RESEARCH PURPOSES ONLY.</p>
        <p className="text-slate-500 max-w-4xl mx-auto">
          The products offered on this website are intended for laboratory research use only. They are not intended for human consumption, diagnostic, therapeutic, or any other medical use. By purchasing from this site, you agree to our Terms and Conditions and acknowledge that you are a qualified researcher.
        </p>
        <p className="mt-4 text-slate-600">
          &copy; {new Date().getFullYear()} EuroPeptide Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
