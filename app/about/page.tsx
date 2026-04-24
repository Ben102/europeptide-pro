import type { Metadata } from 'next';
import { FlaskConical, ShieldCheck, Microscope, Globe, Award, BookOpen } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { SITE_URL, SITE_NAME } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us — Our Team, Labs, and Quality Standards',
  description:
    'EuroPeptide Pro is a Bucharest-based EU supplier of independently third-party tested research peptides. Meet our scientific team, lab partners, and ISO-aligned quality framework.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About EuroPeptide Pro',
    description: 'Europe’s premier research-peptide supplier — Bucharest-based, independently lab-tested, discreet EU shipping.',
    url: '/about',
    type: 'website',
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about`,
  url: `${SITE_URL}/about`,
  name: `About ${SITE_NAME}`,
  mainEntity: { '@id': `${SITE_URL}/#organization` },
};

const TEAM = [
  {
    name: 'Dr. Andrei Ionescu, PhD',
    role: 'Head of Scientific Content & QA',
    bio: 'PhD in Medicinal Chemistry, University of Bucharest. 12+ years across peptide synthesis and analytical QA. Oversees batch COA review, scientific editorial, and customer research support.',
  },
  {
    name: 'Ana-Maria Popescu, MSc',
    role: 'Analytical Chemistry Lead',
    bio: 'MSc in Analytical Chemistry. Runs HPLC and mass-spectrometry coordination with our independent testing laboratory. Responsible for method validation and batch traceability.',
  },
  {
    name: 'Radu Marinescu',
    role: 'Operations & Compliance',
    bio: 'Oversees EU-wide logistics, discreet cold-chain shipping, regulatory compliance, and customer-facing support for institutional and individual researchers.',
  },
];

const LAB_PARTNERS = [
  { name: 'ICCF Bucharest Research Institute', scope: 'Independent HPLC & MS peptide identity and purity verification.' },
  { name: 'University of Bucharest — Faculty of Chemistry', scope: 'Method validation, residual-solvent analysis, stability testing.' },
  { name: 'Certified EU cold-chain logistics partner', scope: 'Temperature-monitored delivery across all EU member states.' },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={aboutPageJsonLd} />

      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About EuroPeptide Pro</h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            EuroPeptide Pro is a Bucharest-based EU supplier of research-grade peptides. We exist to solve a simple but persistent problem in the research-peptide market: inconsistent purity and opaque sourcing. Every batch we sell is independently tested, fully documented, and traceable from synthesis to delivery.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl py-16 space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-600 mb-4">
            To provide European researchers with uncompromisingly high-purity peptides, verified by independent third-party laboratories, and supported by transparent documentation that enables reproducibility.
          </p>
          <p className="text-lg text-slate-600">
            We believe research-peptide quality should never depend on supplier marketing claims. It should depend on data — HPLC chromatograms, mass-spectrometry identity confirmations, residual-solvent profiles — that any researcher can independently verify.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Quality Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <FlaskConical className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Independent 3rd-Party Testing</h3>
              <p className="text-sm text-slate-600">Every batch verified by external EU laboratories — never in-house self-declaration.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Microscope className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">HPLC + MS Dual Verification</h3>
              <p className="text-sm text-slate-600">HPLC confirms purity; mass spectrometry confirms peptide identity matches the declared sequence.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Award className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">European Pharmacopoeia Alignment</h3>
              <p className="text-sm text-slate-600">Residual-solvent and heavy-metal profiles aligned with Ph. Eur. research-grade specifications.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Traceability &amp; COA on Request</h3>
              <p className="text-sm text-slate-600">Every vial traceable to a specific batch and COA, available via the <a href="/coa" className="text-primary underline">COA Vault</a>.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">EU-Only Shipping</h3>
              <p className="text-sm text-slate-600">Tracked, discreet shipping from Bucharest to all 27 EU member states — no customs delays.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Research-Only Sales</h3>
              <p className="text-sm text-slate-600">All products are strictly for laboratory research use and are not intended for human or veterinary use.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Scientific Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((person) => (
              <div key={person.name} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold mb-4" aria-hidden="true">
                  {person.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="font-bold text-slate-900">{person.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{person.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Lab &amp; Logistics Partners</h2>
          <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4">
            {LAB_PARTNERS.map((p) => (
              <div key={p.name} className="flex gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600">{p.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact &amp; Company Information</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-slate-500">Trading name</dt>
              <dd className="font-medium text-slate-900">EuroPeptide Pro</dd>
            </div>
            <div>
              <dt className="text-slate-500">Operations base</dt>
              <dd className="font-medium text-slate-900">Bucharest, Romania (EU)</dd>
            </div>
            <div>
              <dt className="text-slate-500">Support email</dt>
              <dd className="font-medium text-slate-900"><a href="mailto:support@europeptide-pro.com" className="text-primary hover:underline">support@europeptide-pro.com</a></dd>
            </div>
            <div>
              <dt className="text-slate-500">Research support</dt>
              <dd className="font-medium text-slate-900">Response within 24 h</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
