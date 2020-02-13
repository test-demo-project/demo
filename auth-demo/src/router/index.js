import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import User from '../components/User.vue'
import login from '../components/login.vue'
import registration from '../components/registration.vue'
import pageNotFound from '../components/pageNotFound.vue'
// import About from '../views/About.vue'

/*eslint-disable*/
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/'
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    // meta: { requiresAuth: true }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: registration
  },
  {
    path: '/*',
    name: 'pagenotfound',
    component: pageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //   if(window.localStorage.getItem('email') !== null && to.path == '/login'){
  //     next('/user','/home')
  // }
  // if(window.localStorage.getItem('email') === null && to.path != '/login'){
  //     next('/login')
  // } 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('email')
    // console.log("here")
    if (token) {
      next()
    }
    else {
      // console.log("outer")
      next({ name: 'Login' })
    }
  }
  else {
    next()
  }
})
export default router
