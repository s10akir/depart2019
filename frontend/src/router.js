import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from './views/user/user-login.vue'
import UserHome from './views/user/user-home.vue'
import UserParent from './views/user/user-parent.vue'

import UserMyPage from './views/user/user-mypage.vue'
import UserBlog from './views/user/user-blog.vue'
import UserSearch from './views/user/user-search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: UserHome
    },
    {
      path: '/user-login',
      component: UserLogin
    },
    {path:'/main',component:UserParent,children:[
      {
        path:'',
        component:UserMyPage
      },
      {
        path:'blog',
        component:UserBlog
      },
      {
        path:'search',
        component:UserSearch
      },
    ]}

  ]
})
