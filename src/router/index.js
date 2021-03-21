import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue'


const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    name: 'Home',
    component: MemoriesPage
  },
  {
    path:'/memories/:id',
    component: () => import('../pages/MemoryDetail.vue')
  },
  {
    path:'/memories/add',
    component:() => import ('../pages/AddMemoryPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
