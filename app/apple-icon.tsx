import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #0b1220 100%)',
          color: '#22d3ee',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 88,
          fontWeight: 800,
          letterSpacing: '-2px',
        }}
      >
        EP
      </div>
    ),
    { ...size },
  );
}
