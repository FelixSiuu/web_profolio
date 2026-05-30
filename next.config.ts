import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true // 顯示完整的網址，而不僅僅是路徑
    }
  }
}

export default nextConfig
