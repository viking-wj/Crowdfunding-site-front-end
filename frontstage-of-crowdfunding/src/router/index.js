import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/login',
    // 设置路由的名称，命名路由。
    name: 'login',
    component: () => import('@/views/home/components/login')
  },
  {
    path: '/',
    // 设置路由的名称，命名路由。
    name: 'index',
    component: () => import('@/views/home/home')
  },
  {
    path: '/user',
    // 设置路由的名称，命名路由。
    name: 'user',
    redirect:"/user/index",
    component: () => import('@/views/user'),
    children:[
      {
        path: '/user/index',
        // 设置路由的名称，命名路由。
        name: 'user_index',
        component: () => import('@/views/user/components/user_index'),
      },{
        path: '/user/dynamic',
        // 设置路由的名称，命名路由。
        name: 'user_dynamic',
        component: () => import('@/views/user/components/dynamic'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
