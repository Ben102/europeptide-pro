'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const COAS = [
  { id: '1', product: 'BPC-157 5mg', batch: 'BPC-2401', date: 'Jan 15, 2026', purity: '99.4%', lab: 'MZ Biolabs (EU)' },
  { id: '2', product: 'TB-500 5mg', batch: 'TB-2402', date: 'Feb 02, 2026', purity: '99.2%', lab: 'Janoshik Analytics' },
  { id: '3', product: 'Semaglutide 5mg', batch: 'SEM-2401', date: 'Jan 28, 2026', purity: '99.8%', lab: 'MZ Biolabs (EU)' },
  { id: '4', product: 'CJC-1295 DAC 2mg', batch: 'CJC-2312', date: 'Dec 10, 2025', purity: '99.1%', lab: 'Janoshik Analytics' },
  { id: '5', product: 'Ipamorelin 5mg', batch: 'IPA-2403', date: 'Mar 05, 2026', purity: '99.5%', lab: 'MZ Biolabs (EU)' },
];

export default function CoaVaultPage() {
  const handleSearch = () => {
    toast.info('Search functionality will be available soon.');
  };

  const handleDownload = (batch: string) => {
    toast.success(`Downloading COA for batch ${batch}...`);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Certificate of Analysis Vault</h1>
          <p className="text-lg text-slate-300">
            We believe in total transparency. Verify the purity and identity of your research peptides by downloading the independent third-party lab reports for your specific batch.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Search Section */}
        <Card className="mb-12 border-slate-200 shadow-md">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Find Your Batch Report</h2>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  placeholder="Enter Batch Number (e.g., BPC-2401)" 
                  className="pl-10 h-14 text-lg bg-slate-50 border-slate-300 focus-visible:ring-primary"
                />
              </div>
              <Button className="h-14 px-8 text-lg bg-primary hover:bg-primary/90" onClick={handleSearch}>Search Vault</Button>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">
              Your batch number is printed on the vial label and on your packing slip.
            </p>
          </CardContent>
        </Card>

        {/* Our Testing Standards */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                HPLC Purity Testing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                High-Performance Liquid Chromatography ensures that the peptide content is free from synthesis impurities and degradation products, guaranteeing 99%+ purity.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                Mass Spectrometry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                MS testing confirms the exact molecular weight and amino acid sequence identity of the peptide, ensuring you receive exactly what you ordered.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                Ph. Eur. Compliance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Our testing protocols align with European Pharmacopoeia standards, including rigorous checks for endotoxins, bioburden, and heavy metals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports Table */}
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Lab Reports</h3>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 font-semibold text-slate-900">Product</th>
                  <th className="py-4 px-6 font-semibold text-slate-900">Batch Number</th>
                  <th className="py-4 px-6 font-semibold text-slate-900">Test Date</th>
                  <th className="py-4 px-6 font-semibold text-slate-900">Verified Purity</th>
                  <th className="py-4 px-6 font-semibold text-slate-900">Laboratory</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {COAS.map((coa, index) => (
                  <tr key={coa.id} className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${index === COAS.length - 1 ? 'border-0' : ''}`}>
                    <td className="py-4 px-6 font-medium text-slate-900">{coa.product}</td>
                    <td className="py-4 px-6">
                      <Badge variant="outline" className="font-mono bg-slate-100">{coa.batch}</Badge>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{coa.date}</td>
                    <td className="py-4 px-6">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-0">{coa.purity}</Badge>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{coa.lab}</td>
                    <td className="py-4 px-6 text-right">
                      <Button variant="outline" size="sm" className="flex items-center ml-auto" onClick={() => handleDownload(coa.batch)}>
                        <FileText className="w-4 h-4 mr-2" />
                        <Download className="w-3 h-3 mr-1" /> PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
