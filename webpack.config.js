/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2020-06-10 17:42:56
 * @LastEditors: konglingzhan
 * @LastEditTime: 2020-06-10 18:12:32
 */ 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js']}),
    new HtmlWebpackPlugin({
      title:'my html'
    })
  ],
  devServer:{
    contentBase:'./dist'
  }
};