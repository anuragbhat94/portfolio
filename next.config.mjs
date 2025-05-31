/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1) Produce a fully static export
  output: 'export',

  // 2) Serve every page under `/portfolio`
  basePath: '/portfolio',

  // 3) Prefix all asset URLs with `/portfolio/`
  assetPrefix: '/portfolio/'
};

export default nextConfig;

