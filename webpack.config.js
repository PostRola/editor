const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const SITE_DIST = path.join(__dirname, './dist');

module.exports = {

  context: __dirname,

  mode: 'development',
  devtool: 'source-map',

  entry: {
    main: ['./src/style.ts', './src/index.ts']
  },

  output: {
    path: SITE_DIST,
    filename: '[name].[hash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      base: '/'
    })
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.mjs', '.jsx', '.js'],
    mainFields: ['browser', 'module', 'main'],
    alias: {}
  },

  devServer: {
    historyApiFallback: true,
    port: 8080,
    static: {
      directory: SITE_DIST,
    }
  }
};
