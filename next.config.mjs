/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
  sassOptions: {
    includePaths: [
      path.resolve(new URL('.', import.meta.url).pathname, 'styles'),
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
