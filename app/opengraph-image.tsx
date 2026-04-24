import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site-config';

export const runtime = 'edge';
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1220 0%, #0f172a 100%)',
          color: '#ffffff',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top row: brand + pill */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 800,
              }}
            >
              EP
            </div>
            <span style={{ fontSize: '32px', fontWeight: 700 }}>{SITE_NAME}</span>
          </div>
          <div
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(56,189,248,0.4)',
              color: '#7dd3fc',
              fontSize: '20px',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            ≥ 99% Purity · EU Lab Tested
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1 style={{ fontSize: '76px', fontWeight: 800, lineHeight: 1.05, margin: 0, maxWidth: '900px' }}>
            Premium European Research Peptides
          </h1>
          <p style={{ fontSize: '30px', color: '#cbd5e1', margin: 0, maxWidth: '900px', lineHeight: 1.3 }}>
            100+ research peptides · third-party HPLC &amp; MS tested · discreet tracked EU shipping within 24 h.
          </p>
        </div>

        {/* Bottom: trust badges */}
        <div style={{ display: 'flex', gap: '40px', fontSize: '22px', color: '#94a3b8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ COA on every batch</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Discreet EU shipping</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>✓ Research-grade only</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
