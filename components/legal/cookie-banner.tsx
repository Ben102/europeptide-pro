'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'ep_consent';

type Consent = 'accepted' | 'rejected';

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
      // localStorage may be unavailable in some contexts; fail open (banner shows).
    }
  }, []);

  function decide(choice: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setConsent(choice);
  }

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-white border border-slate-200 shadow-xl rounded-xl p-5"
    >
      <h2 className="text-base font-bold text-slate-900 mb-2">We use cookies</h2>
      <p className="text-sm text-slate-600 mb-4">
        Essential cookies keep the site working (cart, session). Optional analytics cookies are only enabled if you accept. Read our{' '}
        <Link href="/cookies" className="text-primary underline">Cookie Policy</Link> and{' '}
        <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
      </p>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1" onClick={() => decide('rejected')}>
          Reject optional
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={() => decide('accepted')}>
          Accept all
        </Button>
      </div>
    </div>
  );
}
