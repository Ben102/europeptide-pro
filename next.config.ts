import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['motion'],
  async redirects() {
    // Legacy/accidental /shop?category= links — route to the canonical
    // category landing page based on the query value. Unknown categories
    // fall through to /shop.
    const map: Array<[string, string]> = [
      ['muscle-growth', '/shop/category/muscle-growth'],
      ['Muscle Growth', '/shop/category/muscle-growth'],
      ['weight-loss', '/shop/category/weight-loss'],
      ['Weight Loss', '/shop/category/weight-loss'],
      ['healing-recovery', '/shop/category/healing-recovery'],
      ['Healing & Recovery', '/shop/category/healing-recovery'],
      ['anti-aging', '/shop/category/anti-aging'],
      ['Anti-Aging', '/shop/category/anti-aging'],
      ['cognitive-enhancement', '/shop/category/cognitive-enhancement'],
      ['Cognitive Enhancement', '/shop/category/cognitive-enhancement'],
      ['immune-support', '/shop/category/immune-support'],
      ['Immune Support', '/shop/category/immune-support'],
      ['reproductive-health', '/shop/category/reproductive-health'],
      ['Reproductive Health', '/shop/category/reproductive-health'],
      ['tanning', '/shop/category/tanning'],
      ['Tanning', '/shop/category/tanning'],
      ['accessories', '/shop/category/accessories'],
      ['Accessories', '/shop/category/accessories'],
    ];
    return map.map(([value, dest]) => ({
      source: '/shop',
      has: [{ type: 'query', key: 'category', value }],
      destination: dest,
      permanent: true,
    }));
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
