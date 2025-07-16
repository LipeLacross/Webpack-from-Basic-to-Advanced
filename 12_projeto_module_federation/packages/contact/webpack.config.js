const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9003/',
    clean: true
  },

  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 9003,
    historyApiFallback: true,
    hot: true
  },

  resolve: { extensions: ['.js', '.jsx', '.json'] },

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'Contact', filename: 'index.html', template: './public/index.html' }),

    new ModuleFederationPlugin({
      name: 'ContactApp',
      filename: 'remoteEntry.js',
      exposes: { './ContactPage': './src/Contact' },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false }
      }
    })
  ]
};
