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
import UserManage from '../views/UserManage.vue'
import PowerManage from '../views/PowerManage.vue'
import Detail from '../views/famousteacher/Detail.vue'
import FamouseteacherAudit from '../views/FamousTeacherAudit.vue'
import SubmitTeacher from '../views/famousteacher/Submit.vue'
import Detail1 from '../views/famousteacher/Detail1.vue'
import HA from '../views/123.vue'
Vue.use(VueRouter)

// 路由配置表
const routes = [{
	path:'/123',
	component:HA
},
	{
			path:'/detail1',
			component:Detail1
	},
	{
		path:'/submitteacher',
		component:SubmitTeacher
	},
	{
			path:'/famouseteacheraudit',
			component:FamouseteacherAudit
	},
	{
		path:'/detail',
		component:Detail,
		name:'文章内容'
	},
	{
		path:'/powermanage',
		component:PowerManage
	},
	{
		path:'/usermanage',
		component:UserManage
	},
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
