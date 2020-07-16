const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const PRODUCTION = argv.mode ? argv.mode === 'production' : process.env.NODE_ENV === 'production';

  return {
    entry: './src/index.tsx',
    mode: PRODUCTION ? 'production' : 'development',

    output: {
      filename: 'main.js',
      path: __dirname + '/dist',
    },
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      watchContentBase: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.js$/,
          loader: 'source-map-loader',
          enforce: 'pre',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
            '@teamsupercell/typings-for-css-modules-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|gif|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            },
            'img-loader',
          ],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: PRODUCTION ? '[name].[hash].css' : '[name].css',
        chunkFilename: PRODUCTION ? '[id].[hash].css' : '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
    },
  };
};
