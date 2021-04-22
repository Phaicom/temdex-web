import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta: {
      layout: 'AppLayoutHome',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/index.vue'),
    meta: {
      layout: 'AppLayoutAbout',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
