'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Truck, FlaskConical, ArrowLeft, CheckCircle2, FileText, Download } from 'lucide-react';
import { use, useState } from 'react';
import { toast } from 'sonner';

const PRODUCTS = [
  { id: '1', name: 'BPC-157', dosage: '5mg', price: 34.99, image: 'https://picsum.photos/seed/bpc157/400/400', category: 'Healing & Recovery', purity: '99.4%', description: 'BPC-157 is a synthetic peptide sequence based on a protective compound found in the human stomach. Research suggests it may promote healing of various tissues including muscle, tendon, and gut.' },
  { id: '2', name: 'TB-500', dosage: '5mg', price: 39.99, image: 'https://picsum.photos/seed/tb500/400/400', category: 'Healing & Recovery', purity: '99.2%', description: 'TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4. It is researched for its potential role in tissue repair, cell migration, and anti-inflammatory properties.' },
  { id: '3', name: 'Semaglutide', dosage: '5mg', price: 89.99, image: 'https://picsum.photos/seed/sema/400/400', category: 'Weight Loss', purity: '99.8%', description: 'Semaglutide is a GLP-1 receptor agonist widely researched for its effects on glycemic control and appetite regulation.' },
  { id: '4', name: 'CJC-1295 DAC', dosage: '2mg', price: 29.99, image: 'https://picsum.photos/seed/cjc/400/400', category: 'Muscle Growth', purity: '99.1%', description: 'CJC-1295 DAC is a synthetic GHRH (Growth Hormone Releasing Hormone) analog that has been modified with Drug Affinity Complex (DAC) to extend its half-life.' },
  { id: '5', name: 'Ipamorelin', dosage: '5mg', price: 32.99, image: 'https://picsum.photos/seed/ipa/400/400', category: 'Muscle Growth', purity: '99.5%', description: 'Ipamorelin is a selective growth hormone secretagogue and ghrelin receptor agonist. It is studied for its ability to stimulate GH release without significantly affecting cortisol or prolactin levels.' },
  { id: '6', name: 'Tirzepatide', dosage: '10mg', price: 119.99, image: 'https://picsum.photos/seed/tirz/400/400', category: 'Weight Loss', purity: '99.7%', description: 'Tirzepatide is a novel dual GIP and GLP-1 receptor agonist. Research focuses on its synergistic effects on metabolic regulation.' },
  { id: '7', name: 'Epitalon', dosage: '10mg', price: 45.99, image: 'https://picsum.photos/seed/epi/400/400', category: 'Anti-Aging', purity: '99.3%', description: 'Epitalon is a synthetic peptide based on the natural pineal gland extract epithalamin. It is primarily researched for its potential anti-aging properties and effects on telomerase activity.' },
  { id: '8', name: 'Melanotan II', dosage: '10mg', price: 24.99, image: 'https://picsum.photos/seed/mt2/400/400', category: 'Tanning', purity: '99.6%', description: 'Melanotan II is a synthetic analog of alpha-melanocyte-stimulating hormone (α-MSH). It is investigated for its melanogenesis-stimulating properties.' },
  { id: '9', name: 'PT-141', dosage: '10mg', price: 35.99, image: 'https://picsum.photos/seed/pt141/400/400', category: 'Reproductive Health', purity: '99.2%', description: 'PT-141 (Bremelanotide) is a melanocortin receptor agonist researched for its potential effects on sexual dysfunction.' },
  { id: '10', name: 'MOTS-c', dosage: '10mg', price: 55.99, image: 'https://picsum.photos/seed/mots/400/400', category: 'Metabolic', purity: '99.1%', description: 'MOTS-c is a mitochondrial-derived peptide that regulates metabolic homeostasis. Research explores its role in insulin sensitivity and exercise mimetics.' },
  { id: '11', name: 'GHK-Cu', dosage: '50mg', price: 42.99, image: 'https://picsum.photos/seed/ghk/400/400', category: 'Healing & Recovery', purity: '99.4%', description: 'GHK-Cu is a naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine. It is widely studied for its tissue remodeling and wound healing properties.' },
  { id: '12', name: 'Bacteriostatic Water', dosage: '30ml', price: 9.99, image: 'https://picsum.photos/seed/bac/400/400', category: 'Accessories', purity: 'USP', description: 'Sterile, non-pyrogenic water containing 0.9% benzyl alcohol added as a bacteriostatic preservative. Essential for the reconstitution of lyophilized research peptides.' },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = PRODUCTS.find(p => p.id === resolvedParams.id) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  const handleDownloadCOA = () => {
    toast.success(`Downloading COA for ${product.name}...`);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/shop" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="relative h-96 md:h-auto bg-slate-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
              <Badge className="absolute top-6 left-6 bg-slate-900 text-white hover:bg-slate-800">{product.category}</Badge>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-contain p-12 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Product Details */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{product.name}</h1>
                  <span className="text-3xl font-bold text-primary">€{product.price}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <FlaskConical className="w-4 h-4 mr-1 text-slate-400" />
                    {product.dosage} Vial
                  </span>
                  <span className="flex items-center text-accent font-medium">
                    <ShieldCheck className="w-4 h-4 mr-1" />
                    {product.purity} Purity
                  </span>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg">
                  <p className="text-xs text-red-800 font-semibold m-0">
                    FOR RESEARCH PURPOSES ONLY. NOT FOR HUMAN CONSUMPTION.
                  </p>
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-12 w-32">
                    <button className="px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors" onClick={decrementQuantity}>-</button>
                    <div className="flex-1 text-center font-medium text-slate-900">{quantity}</div>
                    <button className="px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors" onClick={incrementQuantity}>+</button>
                  </div>
                  <Button className="flex-1 h-12 text-lg bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                    In Stock
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Truck className="w-4 h-4 mr-2 text-primary" />
                    Ships within 24h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200">
            <button className="px-8 py-4 font-semibold text-primary border-b-2 border-primary bg-slate-50">
              Description & Research
            </button>
            <button className="px-8 py-4 font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Certificate of Analysis
            </button>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Research Applications</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              This compound is provided strictly for in-vitro and laboratory research. It is not intended for diagnostic, therapeutic, or any other clinical use. Researchers investigating this peptide typically focus on its binding affinity, stability in various mediums, and its effects on cellular pathways in controlled environments.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Storage Guidelines</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>Store lyophilized powder at -20°C for long-term preservation.</li>
              <li>Keep away from direct sunlight and moisture.</li>
              <li>Once reconstituted, store at 2-8°C and use within 3-4 weeks.</li>
            </ul>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Latest COA Available</h4>
                <p className="text-sm text-slate-500">Batch: {product.name.substring(0,3).toUpperCase()}-2401 • Tested: Jan 2026</p>
              </div>
              <Button variant="outline" className="flex items-center" onClick={handleDownloadCOA}>
                <FileText className="w-4 h-4 mr-2" />
                <Download className="w-3 h-3 mr-1" /> PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
