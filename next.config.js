const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withTypescript(withCSS({
  webpack: function (config, {dev}) {
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config
  }
}
));
