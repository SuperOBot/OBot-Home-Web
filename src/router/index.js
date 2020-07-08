import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/index/home')
  },
  {
    path: '/about',
    component: () => import('@/views/index/about')
  },
  {
    path: '*',
    component: () => import('@/views/ErrorPages/notFound')
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

export default router
