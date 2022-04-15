const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
})

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withPWA]
  // your other plugins here
])