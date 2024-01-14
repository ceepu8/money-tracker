/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/i18n.js')
const million = require('million/compiler')

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lodash', 'react-icons'],
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom']
    return config
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      //
    ],
  },
}

module.exports = withNextIntl(million.next(nextConfig, { auto: true }))
