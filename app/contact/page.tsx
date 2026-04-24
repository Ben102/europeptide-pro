import type { Metadata } from 'next';
import ContactClient from './page-client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with EuroPeptide Pro. Research-support queries, bulk institutional pricing, COA requests, and order assistance — response within 24 hours.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact EuroPeptide Pro', description: 'Research-support, bulk pricing, and COA requests — response within 24 h.', url: '/contact', type: 'website' },
};

export default function Page() {
  return <ContactClient />;
}
