const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin  = require('stylelint-webpack-plugin');

module.exports = (env, version) => {
  
  console.info('= = = = = = = = = = = = = = = = = = = = = = = = = =');
  console.log('GLOBAL: ' + env);
  console.info('= = = = = = = = = = = = = = = = = = = = = = = = = =');

  let url, bucket;

  if (env === 'dev') {
    url = '/dist/';
  } else {
    bucket = env === 'production' ? 'cdn.' : 'cdn.test.';
    url = 'https://' + bucket + 'betha.cloud/base/g4/design/' + version + '/';
  }


  return {
    mode: 'production',
    entry: {
      'bth-design': './src/bth-design.js'
    },
    output: {
      path: __dirname + '/../dist',
      filename: '[name].js',
      libraryTarget: 'var',
      library: 'bthDesign'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/',
                publicPath: url + 'assets/images/'
              }
            }
          ]
        },
        {
          test: /\.(eot|woff2?|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/',
                publicPath: url + 'assets/fonts/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css'
      }),
      new OptimizeCssAssetsPlugin({
         assetNameRegExp: /.css$/,
         cssProcessor: require('cssnano'),
         cssProcessorOptions: {
            discardComments: {removeAll: true }
         },
         canPrint: true
      })
      // ,
      // new StyleLintPlugin({
      //   configFile: 'stylelint.config.js',
      //   failtOnError: true
      // })
    ],
    externals: {
      $: 'jQuery',
      angular: 'angular',
      jquery: 'jQuery',
      lodash: '_',
      moment: 'moment',
      Stickyfill: 'Stickyfill'
    },
    devtool: '#source-map'
  }
};
