import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../register/RegisterPage.vue'
import LoginPage from '../register/LoginPage.vue'
import WelcomePage from '../views/WelcomePage.vue'
import AboutMePage from '../views/AboutMePage.vue'
import ExperiencePage from '../views/ExperiencePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ServicePage from '../views/ServicePage.vue'
import SettingsPage from '../views/SettingsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      const isAuthenticated = localStorage.getItem('userLoggedIn') === 'true';
      
      if (isAuthenticated) {
        // If authenticated, proceed to the home page
        next();
      } else {
        // If not authenticated, redirect to the login page
        next('/login');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: AboutMePage
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperiencePage
  },
  {
    path: '/service',
    name: 'service',
    component: ServicePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
