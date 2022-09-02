/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://promofaster.com.br, http://localhost:3000' },
        ]
      }
    ]
  }
}

module.exports = nextConfig
