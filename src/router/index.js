import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/components/user/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/user',
      component: User
    },
    {
      path: '*',
      redirect: '/user'
    }
  ]
})
export default router