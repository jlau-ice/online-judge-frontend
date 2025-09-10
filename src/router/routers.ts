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
]
