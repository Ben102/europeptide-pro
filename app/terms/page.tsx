import type { Metadata } from 'next';
import { SITE_NAME, ORG_EMAIL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `Terms and Conditions for ${SITE_NAME} — research-only use, ordering, shipping, returns, limitation of liability, and applicable law.`,
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Terms and Conditions</h1>
        <p className="text-sm text-slate-500">Last updated: 24 April 2026</p>

        <h2>1. Research-Only Use</h2>
        <p>
          All products sold by <strong>{SITE_NAME}</strong> are supplied strictly for laboratory research purposes. They are <strong>not</strong> intended, labeled, or approved for human consumption, diagnostic use, therapeutic use, or veterinary use. By placing an order, you confirm that you are a qualified researcher acting in that capacity and that the products will be used only within a compliant laboratory setting.
        </p>

        <h2>2. Ordering and Pricing</h2>
        <p>Prices are displayed in EUR and include applicable VAT unless stated otherwise. We reserve the right to correct pricing errors prior to shipment and to refuse or cancel an order at our sole discretion. Orders become binding only after we issue an order-confirmation email.</p>

        <h2>3. Shipping</h2>
        <p>We ship from Bucharest, Romania to all EU member states. Estimated delivery times, shipping costs, and carrier details are shown at checkout and in our <a href="/shipping">Shipping page</a>. Risk of loss transfers upon delivery to the carrier.</p>

        <h2>4. Returns</h2>
        <p>Because research peptides are temperature-sensitive and cannot be restocked once shipped, all sales are final except in the event of a confirmed product defect or shipping damage. Report any issue to <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a> within 7 days of delivery with photographic evidence.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content on this site — including text, images, SVG illustrations, product descriptions, and blog articles — is the property of {SITE_NAME} or its licensors and is protected under EU and international copyright law. You may not reproduce or republish this content without written permission.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, {SITE_NAME} is not liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the products or the site. Our total liability for any claim relating to a product is limited to the amount you paid for that product. We make no warranties regarding the results of any research conducted with our products.</p>

        <h2>7. User Conduct</h2>
        <p>You agree not to use this site or our products in violation of any applicable law, including laws governing research-grade compounds, import/export, and intellectual property. You agree not to interfere with the operation of the site or attempt to bypass security controls.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms are governed by the laws of Romania. Any disputes are subject to the exclusive jurisdiction of the courts of Bucharest, Romania, without prejudice to consumer protections mandatory under your country of residence.</p>

        <h2>9. Changes to These Terms</h2>
        <p>We may update these Terms periodically. The &quot;Last updated&quot; date above indicates the latest revision. Continued use of the site after an update constitutes acceptance of the revised Terms.</p>

        <h2>10. Contact</h2>
        <p>Questions: <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>.</p>
      </article>
    </div>
  );
}
