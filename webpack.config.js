const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'app/index.tpl.html',
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development'),
          'BASENAME': JSON.stringify('/')
        })
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
      // It suppress error shown in console, so it has to be set to false.
      quiet: false,
      // It suppress everything except error, so it has to be set to false as well
      // to see success build.
      noInfo: false,
      stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    },
    // eslint: {
    //     configFile: '.eslintrc',
    //     failOnWarning: false,
    //     failOnError: false
    // },
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    'react',
                    'stage-0'
                  ],
                  plugins: [
                    'react-hot-loader/babel'
                  ]
                }
              }
            },
            {
                test: /\.json?$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file-loader' }
        ]
    }
};
