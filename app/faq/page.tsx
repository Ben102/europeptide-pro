import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'FAQ — Research Peptide Questions',
  description: 'Answers to common questions about peptide testing, storage, reconstitution, EU shipping, payment methods, and research-use compliance.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — EuroPeptide Pro',
    description: 'Testing, storage, shipping, payment, and research-use questions answered.',
    url: '/faq',
    type: 'website',
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  { q: 'Are your peptides tested?', a: 'Yes, every batch is independently tested by third-party European laboratories using HPLC and Mass Spectrometry. You can view and download the Certificate of Analysis (COA) for your specific batch in our COA Vault.' },
  { q: 'How do I store my peptides?', a: 'Lyophilized (freeze-dried) peptides should be stored in the freezer (-20°C) for long-term storage. Once reconstituted with bacteriostatic water, they must be kept refrigerated (2–8°C) and used within 3–4 weeks.' },
  { q: 'Where do you ship from?', a: 'We ship all orders directly from our facilities in Bucharest, Romania. This ensures fast, customs-free delivery to all EU member states.' },
  { q: 'What payment methods do you accept?', a: 'We accept major credit cards through our secure payment processor, SEPA bank transfers, and Cash on Delivery (Ramburs) for orders within Romania.' },
  { q: 'Are these products for human use?', a: 'No. All products sold on EuroPeptide Pro are strictly for laboratory research purposes only. They are not intended for human consumption, diagnostic, or therapeutic use.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <JsonLd data={faqJsonLd} />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 mb-12 text-center">
          Answers to common questions about our products, shipping, and testing.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <Accordion className="w-full">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-900">{q}</AccordionTrigger>
                <AccordionContent className={i === FAQS.length - 1 ? 'text-slate-600 font-semibold text-red-600' : 'text-slate-600'}>
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
