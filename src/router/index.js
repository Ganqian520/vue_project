import Vue from 'vue'
import VueRouter from 'vue-router'
//在 vuecli创建的项目中@表示src目录
import Login from '@/views/login'
import Register from '@/views/register'
import Findpwd from '@/views/findpwd'
import Index from '../views/index/Index.vue'
import Topbar from '../components/Topbar.vue'
import Footer from '../components/Footbar.vue'
import Famouseteacher from '../views/FamousTeacher.vue'
import Famousedocor from '../views/FamousDocor.vue'
import Admin from '../views/Admin.vue'
Vue.use(VueRouter)

// 路由配置表
const routes = [
	{
		path:'/admin',
		component:Admin
	},
	{
		path:'/famousedocor',
		component:Famousedocor,
		name:'名医馆'
	},
	{
		path:'/famousteacher',
		component: Famouseteacher,
		name:'名师堂'
	},
  {
	path: '',
	redirect: '/index'
  },
  {
	path: '/index',
	name: 'index',
	component: Index
  },
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
