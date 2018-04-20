import { resolve } from 'path'
import webpack from 'webpack'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const BUILD_PATH = resolve(__dirname, 'deploy')
const CLIENT_PATH = resolve(__dirname, 'source/client/')
const ASSETS_PATH = `${CLIENT_PATH}/assets`
const CONFIG_PATH = resolve(__dirname, 'config.js')

export default {
  entry: [
    './source/client'
  ],

  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
    publicPath: '/'
  },

  devtool: '',

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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          'postcss-loader',
          'url-loader'
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      CLIENT_PATH
    ],
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      config$: CONFIG_PATH,
      assets: ASSETS_PATH
    }
  },

  plugins: [
    // new LodashPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      test: /.jsx?($|\?)/i,
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })

    // new BundleAnalyzerPlugin(),

  ]
}
