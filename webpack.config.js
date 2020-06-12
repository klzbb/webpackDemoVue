/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2020-06-10 17:42:56
 * @LastEditors: konglingzhan
 * @LastEditTime: 2020-06-12 15:42:26
 */ 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pxtorem = require('postcss-pxtorem');
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
      },
      {
        test:/\.(scss|css)$/,
        use:[
          'vue-style-loader',
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader', //放在这'style-loader','css-loader'后面，sass-loader前面
            options: {
              ident: 'postcss', //当引入外部的依赖包作为组件配置项时需要定义一个唯一的标识符，推荐这样写
              plugins:[
                pxtorem({
                  rootValue: 37.5, //表示根元素html的fontSize值,也可以是100,获取任意其他值
                  propList: ['width','height','lineHeight'], //设置px转换成rem的属性值，*表示所有属性的px转换为rem
                })
              ]
            }
          },
          'sass-loader',
          
        ]
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
  },
  resolve:{ // 别名设置，方便引入包文件
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  }
};