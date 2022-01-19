const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // NOTE 通过环境变量获取 remote 模块的地址
        marketing: `marketing@https://jackchoumine.github.io/react-marketing/remoteEntry.js`,
        auth: `auth@https://jackchoumine.github.io/react-auth/remoteEntry.js`,
        dashboard: `dashboard@https://jackchoumine.github.io/vue3-dashboard/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
