/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2020-06-10 17:43:18
 * @LastEditors: konglingzhan
 * @LastEditTime: 2020-06-11 18:24:17
 */ 

import Vue from 'vue';
import App from './App.vue';

// import '@/styles/reset.css'; // global reset css
import 'lib-flexible'; // 根据设备宽度尺寸设置html元素字体大小：如375 * 812 => html font-size 37.5

new Vue({
  render: h => h(App)
}).$mount("#app")