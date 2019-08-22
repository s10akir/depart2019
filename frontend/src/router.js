import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from './views/user-login.vue'
import UserHome from './views/user-home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserHome
    },
    {
      path: '/user-login.vue/',
      name: 'login',
      component: UserLogin

    }
  ]
})
