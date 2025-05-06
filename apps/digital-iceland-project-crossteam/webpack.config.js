// eslint-disable-next-line @typescript-eslint/no-var-requires
const nrwlConfig = require('./../../libs/shared/webpack/nrwl-config')
const { composePlugins, withNx } = require('@nx/webpack')
const { withReact } = require('@nx/react')

const isDev = process.env.NODE_ENV === 'development'

module.exports = composePlugins(withNx(), withReact(), nrwlConfig, (config) => {
  // App specific config
  config.stats.chunks = false
  config.stats.modules = false

  if (isDev) {
    config.devtool = 'eval-cheap-module-source-map'
  }

  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    // "zlib_bindings": false,
    process: require.resolve("process/browser"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
    util: require.resolve("util"),
    buffer: require.resolve("buffer"),
    asset: require.resolve("assert"),
  };

  return {
    ...config,
    node: {
      global: true,
    },

  }
})
