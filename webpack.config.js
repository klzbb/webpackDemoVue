/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2020-06-10 17:42:56
 * @LastEditors: konglingzhan
 * @LastEditTime: 2020-06-11 16:07:11
 */ 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
console.log(process.env)
module.exports = {
  mode:'development', // 编译模式 production development none
  entry: './src/main.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      { // .vue文件编译loader
        test: /\.vue$/,
        loader:'vue-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename: 'index.html',
      minify:{
        collapseWhitespace: true,//移除空格
        removeAttributeQuotes:false//移除属性的双引号
      }
    })
  ],
  devServer:{
    contentBase:'./dist' // webpack-dev-server 启动目录
  }
};