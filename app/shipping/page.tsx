import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, ShieldCheck, Globe, Clock, AlertTriangle } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Truck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Shipping & Delivery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fast, secure, and discreet shipping across the European Union.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-900 text-white rounded-t-xl">
              <CardTitle className="flex items-center text-xl">
                <Globe className="w-5 h-5 mr-2" />
                EU-Wide Shipping
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-4">
                We ship to all 27 member states of the European Union directly from our distribution center in Bucharest, Romania. Because we ship from within the EU, there are <strong>no customs checks, no import duties, and no delays</strong> for our EU customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Standard EU Delivery</h4>
                  <p className="text-sm text-slate-600">3-5 Business Days</p>
                  <p className="text-sm font-semibold text-primary mt-1">€9.99 (Free over €150)</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">Express EU Delivery</h4>
                  <p className="text-sm text-slate-600">1-2 Business Days (DHL Express)</p>
                  <p className="text-sm font-semibold text-primary mt-1">€24.99</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-900 text-white rounded-t-xl">
              <CardTitle className="flex items-center text-xl">
                <Clock className="w-5 h-5 mr-2" />
                Order Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>Orders placed before <strong>14:00 EET (Mon-Fri)</strong> are processed and shipped the same day.</li>
                <li>Orders placed after 14:00 EET or on weekends/holidays will be processed the next business day.</li>
                <li>You will receive a tracking number via email as soon as your order is dispatched.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="bg-slate-900 text-white rounded-t-xl">
              <CardTitle className="flex items-center text-xl">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Packaging & Discretion
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-4">
                We understand the importance of discretion and product integrity.
              </p>
              <ul className="space-y-3 text-slate-600 list-disc pl-5">
                <li>All orders are shipped in plain, unmarked packaging. There is no indication of the contents on the outside of the package.</li>
                <li>Lyophilized peptides are stable at room temperature for several weeks, but we use insulated packaging during extreme weather conditions to ensure product integrity.</li>
                <li>The return address will simply state our corporate entity name, &quot;SC EuroPeptide Research SRL&quot;, without mentioning peptides.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important Notice Regarding Returns</h3>
              <p className="text-sm text-amber-800">
                Due to the sensitive nature of research compounds and our strict quality control protocols, <strong>we cannot accept returns or exchanges</strong> on any peptide products once they have left our facility. This policy ensures that every customer receives 100% pure, untampered products directly from our controlled environment. If there is an issue with your order (e.g., missing items, damaged vials), please contact our support team within 48 hours of delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
