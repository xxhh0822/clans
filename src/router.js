import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./assets/data/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 