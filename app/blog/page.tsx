import type { Metadata } from 'next';
import BlogClient from './page-client';

export const metadata: Metadata = {
  title: 'Research Peptide Blog',
  description:
    'Deep-dive guides and comparisons on research peptides — BPC-157 vs TB-500, GLP-1 families, GH secretagogues, reconstitution protocols, and storage best-practices.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Research Peptide Blog — EuroPeptide Pro', description: 'Guides, comparisons, and protocols for research peptides.', url: '/blog', type: 'website' },
};

export default function Page() {
  return <BlogClient />;
}
