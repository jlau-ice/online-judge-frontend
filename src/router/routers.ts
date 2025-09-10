import type { RouteRecordRaw } from 'vue-router'
import { menus } from './menus'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'home',
    redirect: '/home',
    component: () => import('@/layouts/index.vue'),
    children: [...menus],
  },
  {
    name: 'noAccess',
    path: '/noAccess',
    component: () => import('@/views/result/PermissionDenied.vue'),
  },
  {
    name: 'notFound',
    path: '/:pathMatch(.*)*', // 这就是通配符路由
    component: () => import('@/views/result/404.vue'),
  },
]
