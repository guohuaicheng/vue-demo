import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import leftBar from './leftBar'
import build from './build'
Vue.use(Vuex)
export default new Vuex.Store({
  //   strict: true, //使用严格模式
  modules: {
    build,
    user,
    leftBar
  }
})