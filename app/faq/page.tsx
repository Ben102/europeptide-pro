import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 mb-12 text-center">
          Answers to common questions about our products, shipping, and testing.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-slate-900">Are your peptides tested?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Yes, every batch is independently tested by third-party European laboratories using HPLC and Mass Spectrometry. You can view and download the Certificate of Analysis (COA) for your specific batch in our COA Vault.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-slate-900">How do I store my peptides?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Lyophilized (freeze-dried) peptides should be stored in the freezer (-20°C) for long-term storage. Once reconstituted with bacteriostatic water, they must be kept refrigerated (2-8°C) and used within 3-4 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-slate-900">Where do you ship from?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                We ship all orders directly from our facilities in Bucharest, Romania. This ensures fast, customs-free delivery to all EU member states.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-slate-900">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                We accept major credit cards through our secure payment processor, SEPA bank transfers, and Cash on Delivery (Ramburs) for orders within Romania.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-slate-900">Are these products for human use?</AccordionTrigger>
              <AccordionContent className="text-slate-600 font-semibold text-red-600">
                No. All products sold on EuroPeptide Pro are strictly for laboratory research purposes only. They are not intended for human consumption, diagnostic, or therapeutic use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
