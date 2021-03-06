import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/user_login'
  },
  {
    path: '/user_login',
    name: 'UserLogin',
    component: () => import('@/pages/user/login.vue') // 注意这里要带上 文件后缀.vue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
