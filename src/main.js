// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/common_x.css';
import './assets/css/font.css';
import '../static/swiper-bundle.min.css';
import i18n from './i18n/i18n'
Vue.config.productionTip = false;

import 'element-ui/lib/theme-chalk/index.css';
import { Message } from 'element-ui';
Vue.config.productionTip = false
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
