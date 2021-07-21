import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loggedInGuard = (to, from, next) => {
  if(localStorage.getItem("loggedIn")) {
    next()
  } else {
    next("/")
  }
}

const notLoggedInGuard = (to, from, next) => {
  if(localStorage.getItem("loggedIn")) {
    next("/dashboard")
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      beforeEnter: notLoggedInGuard
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: loggedInGuard,
      component: () => import('./views/Dashboard.vue'),
      children: [
        { path: '', component: () => import('./views/Dashboard/Home.vue') }
      ]
    }
  ]
})
