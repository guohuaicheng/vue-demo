import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import routes from './router/index'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'

import components from './components/index'

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(name, components[key]);
})

// Vue.use(Vuex);
Vue.use(VueRouter);
// Vue.use(ElementUI);
Vue.use(VueMaterial)
Vue.use(VueResource)

var router = new VueRouter({
  mode: "history",
  routes,
  base: "/"
})

// new Vue({ router, store }).$mount("#app");
new Vue({
  template: "<router-view/>",
  el: "#app",
  router,
  store
})