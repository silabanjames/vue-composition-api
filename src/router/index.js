import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostView from '../views/PostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/post',
      name: 'posts',
      component: PostView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView
    },
  ]
})

export default router
