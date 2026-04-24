export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://europeptide-pro.vercel.app');

export const SITE_NAME = 'EuroPeptide Pro';
export const SITE_TAGLINE = 'Premium European Research Peptides';
export const SITE_DESCRIPTION =
  'Shop 100+ premium research peptides at ≥98% purity. Independently third-party tested in European labs, discreet tracked EU shipping within 24 hours, COA available on every batch.';
export const SITE_LOCALE = 'en_EU';
export const ORG_EMAIL = 'support@europeptide-pro.com';
