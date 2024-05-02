/** @type {import('next').NextConfig} */

import path from 'path'

const nextConfig = {
  sassOptions: {
    includePaths: [
      path.resolve(new URL('.', import.meta.url).pathname, 'styles'),
    ],
  },
}

export default nextConfig
