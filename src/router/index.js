import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../components/LoginPage.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  }
]

const router = new VueRouter({
  routes
})

export default router
