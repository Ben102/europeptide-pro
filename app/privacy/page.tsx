import type { Metadata } from 'next';
import { SITE_NAME, ORG_EMAIL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} collects, uses, stores, and protects your personal data under GDPR. Your rights, our retention periods, and contact details for data requests.`,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 24 April 2026</p>

        <p>
          This Privacy Policy explains how <strong>{SITE_NAME}</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects personal data when you visit this website, place an order, or contact us. We act as data controller under the EU General Data Protection Regulation (GDPR).
        </p>

        <h2>1. Data We Collect</h2>
        <ul>
          <li><strong>Account &amp; order data</strong> — name, shipping address, email, phone (when you place an order).</li>
          <li><strong>Payment data</strong> — handled directly by our PCI-compliant payment processor; we never store full card numbers on our servers.</li>
          <li><strong>Support correspondence</strong> — any email or contact-form messages you send us.</li>
          <li><strong>Technical data</strong> — IP address, browser, device, approximate location, pages visited (via cookies and server logs).</li>
        </ul>

        <h2>2. Legal Basis for Processing</h2>
        <ul>
          <li><strong>Contract</strong> (Art. 6(1)(b) GDPR) — to fulfill your order and provide customer support.</li>
          <li><strong>Legal obligation</strong> (Art. 6(1)(c) GDPR) — tax, accounting, and consumer-law compliance.</li>
          <li><strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR) — fraud prevention, security, and improving the site.</li>
          <li><strong>Consent</strong> (Art. 6(1)(a) GDPR) — non-essential cookies and marketing communications.</li>
        </ul>

        <h2>3. How We Use Data</h2>
        <p>We use your data to process orders, ship products, provide customer support, meet tax and accounting obligations, prevent fraud, and improve the site. We do not sell your data to third parties.</p>

        <h2>4. Data Retention</h2>
        <ul>
          <li>Order records: 10 years (Romanian tax law).</li>
          <li>Support emails: up to 3 years after the last contact.</li>
          <li>Technical logs: up to 12 months.</li>
          <li>Marketing-consent data: until you withdraw consent.</li>
        </ul>

        <h2>5. Your GDPR Rights</h2>
        <p>You have the right to access, rectify, erase, restrict processing of, port, or object to the processing of your personal data. You also have the right to withdraw consent at any time and to lodge a complaint with your national data-protection authority (in Romania: ANSPDCP).</p>
        <p>To exercise any of these rights, email <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>. We respond within 30 days.</p>

        <h2>6. International Transfers</h2>
        <p>Our primary processors are located in the EU/EEA. Where data is transferred outside the EEA (e.g., to a CDN provider), we rely on Standard Contractual Clauses or equivalent safeguards.</p>

        <h2>7. Security</h2>
        <p>We use HTTPS across the entire site, encrypted storage for personal data, access controls, and regular security review. No system is perfectly secure; we notify affected users and authorities of any qualifying data breach within 72 hours as required by GDPR.</p>

        <h2>8. Cookies</h2>
        <p>See our dedicated <a href="/cookies">Cookie Policy</a>.</p>

        <h2>9. Contact</h2>
        <p>Data-protection inquiries: <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>.</p>
      </article>
    </div>
  );
}
