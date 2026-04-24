import type { Metadata } from 'next';
import { SITE_NAME, ORG_EMAIL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Which cookies ${SITE_NAME} uses, what each one does, how long it lives, and how to withdraw or change your consent.`,
  alternates: { canonical: '/cookies' },
  robots: { index: true, follow: true },
};

const COOKIES = [
  { name: 'ep_consent', type: 'Essential', purpose: 'Stores your cookie-consent choice so the banner is not shown on every page.', duration: '6 months' },
  { name: 'ep_cart', type: 'Essential', purpose: 'Persists the contents of your cart between page loads.', duration: 'Session / 30 days' },
  { name: 'next-auth.session', type: 'Essential (when logged in)', purpose: 'Maintains your authenticated session if you have an account.', duration: '30 days' },
  { name: 'Vercel Analytics', type: 'Analytics (if enabled)', purpose: 'Anonymous aggregated page-view statistics (no personal data stored).', duration: '24 h rolling' },
];

export default function CookiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Cookie Policy</h1>
        <p className="text-sm text-slate-500">Last updated: 24 April 2026</p>

        <p>
          This page explains how <strong>{SITE_NAME}</strong> uses cookies and similar technologies on this website. It complements our <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>1. What Cookies Are</h2>
        <p>Cookies are small text files stored by your browser when you visit a website. They allow the site to remember actions and preferences — such as the contents of your cart or your cookie-consent choice — over a period of time.</p>

        <h2>2. Categories We Use</h2>
        <ul>
          <li><strong>Essential cookies</strong> — strictly necessary for the site to function (cart, consent, session). These do not require consent under GDPR/ePrivacy.</li>
          <li><strong>Analytics cookies</strong> — help us understand aggregate site usage. Enabled only if you opt in.</li>
          <li><strong>Marketing cookies</strong> — we do not currently use marketing or advertising cookies.</li>
        </ul>

        <h2>3. Cookies in Use</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr>
            </thead>
            <tbody>
              {COOKIES.map((c) => (
                <tr key={c.name}>
                  <td><code>{c.name}</code></td>
                  <td>{c.type}</td>
                  <td>{c.purpose}</td>
                  <td>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>4. Managing Your Consent</h2>
        <p>You can accept or reject non-essential cookies via the banner shown on your first visit. To change your choice later, clear the <code>ep_consent</code> cookie in your browser settings — the banner will reappear.</p>
        <p>You can also block or delete cookies via your browser&apos;s privacy settings. Note that disabling essential cookies may break core site functionality such as the cart.</p>

        <h2>5. Contact</h2>
        <p>Questions about this Cookie Policy: <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>.</p>
      </article>
    </div>
  );
}
