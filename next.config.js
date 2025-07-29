/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    // Exclude decap-proxy directory from compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/decap-proxy/**']
    }
    return config
  }
}

module.exports = nextConfig 