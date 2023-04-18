import { createRouter, createWebHistory } from 'vue-router'
import Game19View from '../views/Game19View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board19',
      component: Game19View
    }
  ]
})

export default router
