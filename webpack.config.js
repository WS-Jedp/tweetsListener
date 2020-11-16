const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/views/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public', 'pages'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  devServer: {
    port: 9000,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, 'src/views/src/styles'),
      "@images": path.resolve(__dirname, 'src/views/src/assets/images'),
      "@components": path.resolve(__dirname, 'src/views/src/components'),
      "@pages": path.resolve(__dirname, 'src/views/src/pages'),
      "@containers": path.resolve(__dirname, 'src/views/src/containers'),
      "@hooks": path.resolve(__dirname, 'src/views/src/hooks'),
      "@layouts": path.resolve(__dirname, 'src/views/src/layouts')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(css)$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader'
        }
      },
      {
        test: /.(svg|png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html',
    })
  ]
}