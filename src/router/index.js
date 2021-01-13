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
<<<<<<< HEAD
import PowerManage from '../views/PowerManage.vue'
import Detail from '../views/famousteacher/Detail.vue'
import FamouseteacherAudit from '../views/FamousTeacherAudit.vue'
import SubmitTeacher from '../views/famousteacher/Submit.vue'
import Detail1 from '../views/famousteacher/Detail1.vue'
import HA from '../views/123.vue'
<<<<<<< HEAD
import hsa from '../views/Broadcast.vue'
import ri from '../views/13.vue'
import hdsq from '../views/huodongshenqing.vue'
import hd from '../views/huodong.vue'
import hdsh from '../views/huodongshenhe.vue'
import hdgl from '../views/huodongguanli.vue'
import hdxx from '../views/huodongxinxi.vue'
=======
>>>>>>> parent of c72b53a... 改动
Vue.use(VueRouter)

// 路由配置表
const routes = [
	{
<<<<<<< HEAD
		path:'/hdxx',
		component:hdxx,
		name:'我加入的活动'
	},
	{
		path:'/hdgl',
		component:hdgl,
		name:'我管理的活动'
	},
	{
		path:'/hdsh',
		component:hdsh,
		name:'普通用户'

	},
	{
		path:'/hd',
		component:hd,
		name:'志愿活动'
	},
	{
		path:'/hdsq',
		component:hdsq,
		name:'申请活动'
	},
	{
		path:'/13',
		component:ri,
		name:'普通用户'
	},
	
	{
		path:'/12',
		component:hsa,
		name:'红领巾广播'
	},
	{
=======
Vue.use(VueRouter)

// 路由配置表
const routes = [{
>>>>>>> parent of 28027cf... 123
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
=======
>>>>>>> parent of c72b53a... 改动
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
