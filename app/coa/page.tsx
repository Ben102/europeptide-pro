import type { Metadata } from 'next';
import CoaClient from './page-client';

export const metadata: Metadata = {
  title: 'Certificate of Analysis (COA) Vault',
  description:
    'Browse and download independent third-party Certificates of Analysis for every batch. HPLC and Mass Spectrometry verification by European laboratories.',
  alternates: { canonical: '/coa' },
  openGraph: { title: 'COA Vault — EuroPeptide Pro', description: 'Third-party Certificates of Analysis for every batch.', url: '/coa', type: 'website' },
};

export default function Page() {
  return <CoaClient />;
}
