import Vue from 'vue'
import VueRouter from 'vue-router'
//在 vuecli创建的项目中@表示src目录
import Login from '@/views/login'
import Register from '@/views/register'
import Findpwd from '@/views/findpwd'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/findpwd',
    name: 'findpwd',
    component: Findpwd
  }
]

const router = new VueRouter({
  routes
})

export default router
