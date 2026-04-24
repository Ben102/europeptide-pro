import type { Metadata } from 'next';
import CartClient from './page-client';

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'Review research peptides in your cart before checkout.',
  alternates: { canonical: '/cart' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CartClient />;
}
