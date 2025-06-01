const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: isProd ? '/portfolio/' : '',
};
