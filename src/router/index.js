import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import ('../views/login.vue');
const Home = () => import ('../views/home.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
   },
   {
     path:'/login',
     name: 'Login',
     component:Login
   },
   { 
     path: '/home', 
     name: 'Home',
     component: Home 
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由导航守卫
// router.beforeEach((to, from, next) => {
//   if(to.path === '/login') return next();
  
//   const userToken = window.sessionStorage.getItem('token');
//   if(!token) return next('/login');
//   next();
// })
export default router
