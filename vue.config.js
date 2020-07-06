const HtmlWebpackPlugin = require('html-webpack-plugin'),
      thisLink = (arr) => {
        let link = ''
        arr.forEach(v => {
            link += '<link rel="'
                + v.rel +
                '" href="'
                + v.href +
                '" '
                + (v.type !== undefined ? 'type="' + v.type + '"' : '')
                + (v.sizes !== undefined ? 'sizes="' + v.sizes + '"' : '') +
                '>'
        })
        return link
      }

module.exports = {
  publicPath: (process.env.NODE_DEV == 'development') ? '/' : './',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: config => {
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        // 标题
        val.options.title = 'OBot'

        val.options.meta = {
          viewport: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no'
        }

        val.options.link = thisLink([
          { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
          { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
        ])
      }
    })
  }
}
