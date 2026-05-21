/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rinetcenter.ca',
          },
        ],
        destination: 'https://www.rinetcenter.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rinet.center',
          },
        ],
        destination: 'https://www.rinetcenter.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
