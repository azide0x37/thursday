const withBundleAnalyzer = require('@next/bundle-analyzer')()
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  [withBundleAnalyzer, {
    enabled: process.env.ANALYZE === 'false',
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    distDir: 'build',
  }],
  [withPWA, {
    pwa: {
      dest: 'public',
      runtimeCaching,
    }
  }]
  // your other plugins here
])
