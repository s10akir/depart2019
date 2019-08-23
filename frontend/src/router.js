import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from './views/user/login.vue'
import UserHome from './views/user/home.vue'
import UserParent from './views/user/parent.vue'

import UserMyPage from './views/user/user-mypage.vue'
import UserBlog from './views/user/user-blog.vue'
import UserSearch from './views/user/user-search.vue'
import CorpLogin from './views/corp/corp-login.vue'
import CorpPost from './views/corp/corp-post.vue'
import CorpMypage from './views/corp/corp-mypage.vue'
import CorpHome from './views/corp/corp-home.vue'

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
      {
<<<<<<< HEAD
        path:'/mypage',
        compoent:UserMyPage
      }
=======
        path:'search',
        component:UserSearch
      },
     {
      path: '/corp-login',
      component: CorpLogin
     },
      {
      path: '/corp-post',
      component: CorpPost
     },
     {
      path: '/corp-mypage',
      component: CorpMypage
     },
          {
      path: '/corp-home',
      component: CorpHome
     }
>>>>>>> f83598934de89db3649305ba1637e9d76f680a07
    ]}
  ]
})
