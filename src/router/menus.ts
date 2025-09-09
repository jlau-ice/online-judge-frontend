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
    name: 'Contact',
    path: '/contact',
    component: () => import('@/views/other/Other.vue'),
  },
]
