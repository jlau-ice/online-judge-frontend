import ACCESS_ENUM from '@/access/accessEnum'
import type { RouteRecordRaw } from 'vue-router'

export const menus: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/about/About.vue'),
  },
  {
    name: 'users',
    path: '/users',
    component: () => import('@/views/other/Other.vue'),
    meta: { requiresAuth: [ACCESS_ENUM.ADMIN] },
  },
  
]
