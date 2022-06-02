/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
    loader: 'imgix',
    path: '/'
  },
}

module.exports = nextConfig
