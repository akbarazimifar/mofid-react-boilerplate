const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@constants': path.join(path.resolve(__dirname, './src/constants')),
      '@hooks': path.join(path.resolve(__dirname, './src/hooks')),
      '@layouts': path.join(path.resolve(__dirname, './src/layouts')),
      '@pages': path.join(path.resolve(__dirname, './src/pages')),
      '@utils': path.join(path.resolve(__dirname, './src/utils')),
    },
  },
};
