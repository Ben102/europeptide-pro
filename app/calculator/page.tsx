import type { Metadata } from 'next';
import CalculatorClient from './page-client';

export const metadata: Metadata = {
  title: 'Peptide Reconstitution Calculator',
  description:
    'Free peptide reconstitution calculator. Enter vial size, target dose, and bacteriostatic-water volume to get precise unit conversions for your research protocol.',
  alternates: { canonical: '/calculator' },
  openGraph: { title: 'Peptide Reconstitution Calculator — EuroPeptide Pro', description: 'Precise reconstitution calculations for research peptides.', url: '/calculator', type: 'website' },
};

export default function Page() {
  return <CalculatorClient />;
}
