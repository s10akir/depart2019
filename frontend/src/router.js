import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from './views/user/login.vue'
import UserHome from './views/user/home.vue'
import UserParent from './views/user/parent.vue'

import UserMyPage from './views/user/mypage.vue'
import UserBlog from './views/user/blog.vue'
//import UserSearch from './views/user/user-search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: UserHome
    },
    {
      path: '/user/login',
      component: UserLogin
    },
    {path:'/user/main',component:UserParent,children:[
      {
        path:'/',
        component:UserBlog
      },
      /*
      {
        path:'search',
        component:UserSearch
      },
      */
    {
      path: 'mypage',
      component: UserMyPage
    },
    ]}

  ]
})
