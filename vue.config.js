module.exports = {
  devServer: {
      proxy: {
          '^/api': {
              target: 'https://vaulted-ribbon-ringer.glitch.me',
              changeOrigin: true,
              logLevel: 'debug',
              pathRewrite: { '^/api': '/' }
          },
      }
  }
}