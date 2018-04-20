module.exports = function (env = 'dev') {
  return require(`./config/webpack/webpack.config.${env}.js`)
}
