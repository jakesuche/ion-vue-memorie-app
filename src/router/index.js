import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:()=>import('../pages/home.vue')
  },
  {
    path:'/login',
    component:()=>import('../pages/loginPage.vue')
  },
  {
    path:'/register',
    component:()=>import('../pages/RegisterPage.vue')
  },
  {
    path:'/dashboard',
    component:()=>import('../pages/dashBoard.vue')
  },
  {
    path:'/packages',
    component:()=>import('../pages/packages.vue')
  },
  {
    path:'/customer',
    component:()=>import('@/components/Modals/CreateCustomerModal.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
