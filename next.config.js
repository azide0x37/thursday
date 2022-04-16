const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  [withPWA, {
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    distDir: 'build',
  }]
  // your other plugins here
])
