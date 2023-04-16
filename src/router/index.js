import { createRouter, createWebHistory } from 'vue-router'
import Game7View from '../views/Game7View.vue'
import Game19View from '../views/Game19View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/board7',
      name: 'board7',
      component: Game7View
    },
    {
      path: '/',
      name: 'board19',
      component: Game19View
    }
  ]
})

export default router
