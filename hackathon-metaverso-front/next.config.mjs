/** @type {import("next").NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',

    images: {
        unoptimized: true,
        remotePatterns: [{ protocol: 'https', hostname: '*' }],
    },

    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: false,
}

export default nextConfig
