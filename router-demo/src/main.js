import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './router/index.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
