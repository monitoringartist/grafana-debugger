// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Introduction',
        component: () => import('@/views/Main.vue'),
      },
      {
        path: '/grot',
        name: 'Grot',
        component: () => import('@/views/Grot.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'hash',
  routes,
})

export default router
