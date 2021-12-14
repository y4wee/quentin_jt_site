import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      enterClass:'animate__animated animate__fadeIn',
      leaveClass:'animate__animated animate__slideOutLeft'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      enterClass:'animate__animated animate__slideInLeft',
      leaveClass:'animate__animated animate__fadeOutRight'
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
    meta: {
      enterClass:'animate__animated',
      leaveClass:'animate__animated'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      enterClass:'animate__animated',
      leaveClass:'animate__animated'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
