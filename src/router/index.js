import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterPage from '../register/RegisterPage.vue'
import LoginPage from '../register/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import MusicPage from '../views/MusicPage.vue'
import MoviesPage from '../views/MoviesPage.vue'
import GamesPage from '../views/GamesPage.vue'
import BooksPage from '../views/BooksPage.vue'
import SettingsPage from '../views/SettingsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/music',
    name: 'music',
    component: MusicPage
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesPage
  },
  {
    path: '/books',
    name: 'books',
    component: BooksPage
  },
  {
    path: '/games',
    name: 'games',
    component: GamesPage
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
