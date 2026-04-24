import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'EuroPeptide Pro is a Bucharest-based EU supplier of third-party tested research peptides. Learn about our mission, quality controls, and independent lab partners.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About EuroPeptide Pro',
    description: 'Europe’s premier research-peptide supplier — Bucharest-based, independently lab-tested, discreet EU shipping.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">About EuroPeptide Pro</h1>
        <p className="text-lg text-slate-600 mb-8">
          We are Europe&apos;s premier supplier of high-purity research peptides. Based in Bucharest, Romania, we serve the scientific community across the EU with uncompromising quality standards.
        </p>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-left">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">
            To provide researchers with the highest quality peptides, verified by independent third-party laboratories, ensuring reproducibility and accuracy in scientific studies.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality Commitment</h2>
          <p className="text-slate-600">
            Every batch of our peptides undergoes rigorous HPLC and Mass Spectrometry testing. We adhere to European Pharmacopoeia guidelines to ensure our products are free from endotoxins, heavy metals, and synthesis impurities.
          </p>
        </div>
      </div>
    </div>
  );
}
