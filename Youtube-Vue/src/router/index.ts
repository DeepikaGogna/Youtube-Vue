import { createRouter, createWebHistory } from 'vue-router'
import AppBody from '../components/AppBody'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppBody
    },
    {
      path: '/watch',
      name: 'watch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/WatchPage')
    }
  ]
})

export default router
