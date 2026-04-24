import type { Metadata } from 'next';
import HomeClient from './page-client';

export const metadata: Metadata = {
  title: 'EuroPeptide Pro — Premium European Research Peptides',
  description:
    'Shop 100+ premium research peptides at ≥98% purity. Independently lab-tested, discreet tracked EU shipping within 24 hours, COA available on every batch.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'EuroPeptide Pro — Premium European Research Peptides',
    description:
      '100+ research peptides · ≥98% purity · third-party lab tested · discreet EU shipping within 24 h.',
    url: '/',
    type: 'website',
  },
};

export default function Page() {
  return <HomeClient />;
}
