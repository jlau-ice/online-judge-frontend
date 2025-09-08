import type { RouteRecordRaw } from 'vue-router'

export const menus: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/aaa',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    name: 'About',
    path: '/bbb',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    name: 'Contact',
    path: '/ccc',
    component: () => import('@/views/home/Home.vue'),
  },
]
