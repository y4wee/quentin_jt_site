import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Work from '../views/Work.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      import("../views/Home.vue")
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => {
      import("../views/About.vue")
    },
  },
  {
    path: '/work',
    name: 'Work',
    component: () => {
      import("../views/Work.vue")
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => {
      import("../views/Contact.vue")
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
