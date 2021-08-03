import Vue from 'vue'
import Vuex from 'vuex'
import Xheader from './modules/Xheader'
import lang from './modules/lang'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    Xheader,
    lang
  }
})
export default store
