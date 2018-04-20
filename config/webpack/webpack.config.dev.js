import { resolve } from 'path'
import webpack from 'webpack'

const CONFIG_PATH = resolve(__dirname)
const BUILD_PATH = resolve(__dirname, '../..', 'build')
const CLIENT_PATH = resolve(__dirname, '../..', 'source/client/')
const ASSETS_PATH = `${CLIENT_PATH}/assets`
const STYLES_PATH = `${CLIENT_PATH}/styles`

console.log(BUILD_PATH)

export default {
  entry: [
    CLIENT_PATH
  ],

  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
    publicPath: '/'
  },

  devtool: 'source-map',

  devServer: {
    inline: true,
    contentBase: [BUILD_PATH, resolve(__dirname, '../..', 'source', 'client')],
    publicPath: '/',
    historyApiFallback: true,
    port: 9000,
    stats: 'errors-only',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        include: ASSETS_PATH,
        use: ['file-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              alias: {
                styles: STYLES_PATH
              },
              localIdentName: '[folder]-[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: `${CONFIG_PATH}/postcss.config.js`
              }
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      CLIENT_PATH
    ],
    extensions: ['.js', '.jsx', '.pcss'],
    alias: {
      assets: ASSETS_PATH
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
